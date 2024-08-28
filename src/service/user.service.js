import { showToast } from "../slice/ui";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
} from "../slice/user.slice";
import axios from "./api";

const token = localStorage.getItem("jwt");
const UserService = {
  async getUser(dispatch) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserSuccess(data));
      return data;
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
        dispatch(
          showToast({
            status: "success",
            alert: "Profil muaffaqiyatli qoshildi",
          })
        );
      }
      if (data.msg) {
        dispatch(getUserFailure(data));
      }
    } catch (error) {
      dispatch(getUserFailure());
      dispatch(
        showToast({
          status: "error",
          alert: "Serverda xatolik yuz berdi",
        })
      );
      console.log(error);
    }
  },
  async loginUser(dispatch, user, navigate) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.post("/login", user);
      if (data.token) {
        dispatch(getUserSuccess(data.user));
        localStorage.setItem("jwt", data.token);
        navigate("/home");
        dispatch(
          showToast({
            status: "success",
            alert: "Profilg muaffaqiyatli kirildi",
          })
        );
      } else {
        dispatch(getUserFailure(data));
      }
    } catch (error) {
      dispatch(getUserFailure(error));
      console.log(error);
    }
  },
  async test(dispatch, val) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.post("/test", val, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserSuccess(data.user));
    } catch (error) {
      console.log(error);
      dispatch(getUserFailure());
    }
  },
  async setting(dispatch, option, navigate) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.post("/setting", option, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserSuccess(data.user));
      if (data) {
        navigate("/home");
        dispatch(
          showToast({
            status: "success",
            alert: "Profil malumotlari ozgartirildi",
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(getUserFailure());
      dispatch(
        showToast({
          status: "error",
          alert: "Profil ozgartirilmadi",
        })
      );
    }
  },
};

export default UserService;
