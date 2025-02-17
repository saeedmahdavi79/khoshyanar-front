const { default: ButtonAfra } = require("./Buttons");

const PishbiniCard = ({ month, year, des, season, clickOne, clickTwo }) => {
  return (
    <>
      {season == "bahar" ? (
        <div className="w-full flex px-5 py-3  flex-col  justify-between  text-gray-600 border-2 rounded-xl h-[300px] ">
          <div className="w-full  flex justify-between items-center">
            <span>ماه :</span>
            <span className="font-bold">{month}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>سال مالی :</span>
            <span className="font-bold">{year}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span> توضیحات :</span>
            <span className="truncate w-12">{des}</span>
          </div>
          <div className="w-full flex flex-col gap-3 justify-between items-center">
            <ButtonAfra
              text={"مشاهده جزئیات"}
              onClick={clickOne}
              type={"white-green-2"}
            />
            <ButtonAfra
              text={"شروع برنامه ریزی"}
              onClick={clickTwo}
              type={"green"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {season == "tabestan" ? (
        <div className="w-full flex px-5 py-3  flex-col  justify-between  text-gray-600 border-2 rounded-xl h-[300px] ">
          <div className="w-full flex justify-between items-center">
            <span>ماه :</span>
            <span className="font-bold">{month}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>سال مالی :</span>
            <span className="font-bold">{year}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span> توضیحات :</span>
            <span className="truncate w-12">{des}</span>
          </div>
          <div className="w-full flex flex-col gap-3 justify-between items-center">
            <ButtonAfra
              text={"مشاهده جزئیات"}
              onClick={clickOne}
              type={"white-green-2"}
            />
            <ButtonAfra
              text={"شروع برنامه ریزی"}
              onClick={clickTwo}
              type={"green"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {season == "paeez" ? (
        <div className="w-full flex px-5 py-3  flex-col  justify-between  text-gray-600 border-2 rounded-xl h-[300px] ">
          <div className="w-full flex justify-between items-center">
            <span>ماه :</span>
            <span className="font-bold">{month}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>سال مالی :</span>
            <span className="font-bold">{year}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span> توضیحات :</span>
            <span className="truncate w-12">{des}</span>
          </div>
          <div className="w-full flex flex-col gap-3 justify-between items-center">
            <ButtonAfra
              text={"مشاهده جزئیات"}
              onClick={clickOne}
              type={"white-green-2"}
            />
            <ButtonAfra
              text={"شروع برنامه ریزی"}
              onClick={clickTwo}
              type={"green"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {season == "zemestan" ? (
        <div className="w-full flex px-5 py-3  flex-col  justify-between  text-gray-600 border-2 rounded-xl h-[300px] ">
          <div className="w-full flex justify-between items-center">
            <span>ماه :</span>
            <span className="font-bold">{month}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>سال مالی :</span>
            <span className="font-bold">{year}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span> توضیحات :</span>
            <span className="truncate w-12 ">{des}</span>
          </div>
          <div className="w-full flex flex-col gap-3 justify-between items-center">
            <ButtonAfra
              text={"مشاهده جزئیات"}
              onClick={clickOne}
              type={"white-green-2"}
            />
            <ButtonAfra
              text={"شروع برنامه ریزی"}
              onClick={clickTwo}
              type={"green"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PishbiniCard;
