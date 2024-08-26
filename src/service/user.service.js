import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
} from "../slice/user.slice";
import axios from "./api";

const UserService = {
  async getUser(dispatch, navigate) {
    dispatch(getUserStart());
    const token = await localStorage.getItem("jwt");
    try {
      const { data } = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserSuccess(data));
      if (data._id) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      dispatch(getUserFailure());
    }
  },
  async postUser(dispatch, user, navigate) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.post("/create-user", user);
      dispatch(getUserSuccess(data.user));
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        navigate("/home");
      }
    } catch (error) {
      dispatch(getUserFailure());
      console.log(error);
    }
  },
  async loginUser(dispatch, user, navigate) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.post("/login", user);
      dispatch(getUserSuccess(data.user));
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        navigate("/home");
      }
    } catch (error) {
      dispatch(getUserFailure());
      console.log(error);
    }
  },
};

export default UserService;
