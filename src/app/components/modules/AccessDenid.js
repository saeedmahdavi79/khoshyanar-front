const { Result } = require("antd");
const { default: ButtonAfra } = require("./Buttons");
const { default: CardStat } = require("./Card");

const AccessDenied = () => {
  return (
    <>
      <div className="w-full flex flex-col h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <div className=" relative text-black text-2xl py-6 font-bold">
            تنظیمات سامانه
            <span className="class-heading-4"></span>
            <span className="class-heading-5"></span>
            <span className="class-heading-6"></span>
          </div>
          <span className="w-[200px]">
            <a href="/dashboard/ticket">
              <ButtonAfra type={"green"} text={"پشتیبانی"} />
            </a>
          </span>
        </div> */}
        <div className="w-full flex gap-3 h-full">
          <CardStat
            type={"10"}
            title={"عدم دسترسی"}
            des={"شما دسترسی کافی برای این بخش را ندارید"}
            data={
              <>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-full flex flex-col gap-3">
                    <Result
                      status="error"
                      title="عدم دسترسی"
                      subTitle="شما دسترسی کافی برای این بخش ندارید ، لطفا با پشتیبان یا راهبر سیستم تماس بگیرید"
                      extra={[
                        <div className="flex gap-2 w-full justify-center items-center">
                          <div className="w-[200px] ">
                            <ButtonAfra
                              onClick={() => location.replace("/dashboard")}
                              text={"بازکشت به پیشخوان"}
                              type={"red"}
                            />
                          </div>
                        </div>,
                      ]}
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default AccessDenied;
