import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActivePage } from "../../slice/ui";

import physic9 from "../../assets/books/Fizika 9-sinf.pdf";
import physic10 from "../../assets/books/Fizika 10-sinf.pdf";
import physic11 from "../../assets/books/Fizika 11-sinf.pdf";
import physicImage9 from "../../assets/book-images/fizika-9.png";
import physicImage10 from "../../assets/book-images/fizika-10.png";
import physicImage11 from "../../assets/book-images/fizika-11.png";

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
            <a href={physic9} download="Fizika 9-sinf">
              <img src={physicImage9} alt="" className="w-100" />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <a href={physic10} download="Fizika 9-sinf">
              <img src={physicImage10} alt="" className="w-100" />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <a href={physic10} download="Fizika 9-sinf">
              <img src={physicImage11} alt="" className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
