import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActivePage } from "../../slice/ui";
import physic9 from "../../assets/book-images/fizika-9.png";
import physic10 from "../../assets/book-images/fizika-10.png";
import physic11 from "../../assets/book-images/fizika-11.png";

const Resource = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActivePage("Resurslar"));
  }, []);

  return (
    <div className="md:p-3 lg:py-[30px] py-[40px] px-[10px] ">
      <h4 className="font-nunito page-label">Resurslar</h4>
      <p className="font-nunito page-path">Resurslar/</p>
      <div className="bg-white mt-3 rounded-[5px] shadow-[0px_0px_30px_0px_#0000001a] p-2">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <img src={physic9} alt="" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <img src={physic10} alt="" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <img src={physic11} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
