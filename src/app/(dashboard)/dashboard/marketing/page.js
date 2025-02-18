"use client";
import { useEffect, useState } from "react";
import CardStat from "@/app/components/modules/Card";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

import ButtonAfra from "@/app/components/modules/Buttons";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import InputCom from "@/app/components/modules/Inputs";
import { Tag, notification } from "antd";
import TableAfra from "@/app/components/modules/TableAfra";

const MarketingPage = () => {
  const [showFirstPage, setShowFirstPage] = useState(0);
  const [activButton, setActivButton] = useState(0);
  const [customerData, setCustomerData] = useState([]);
  const [smsData, setSmsData] = useState([]);

  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [showLoadMessage, setShowLoadMessage] = useState(false);

  const menu = [
    { title: "پیامک به مشتریان" },
    { title: "پیام در واتساپ (بزودی...)" },
    { title: "پیام در تلگرام (بزودی...)" },
    { title: "پیام در ایتا (بزودی...)" },
    { title: "پیام در روبیکا (بزودی...)" },
    { title: "پیام در بله (بزودی...)" },
  ];
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "پیام ارسال نشد",
      description: "ارسال پیامک نا موفق بود ، لطفا دوباره تلاش کنید",
    });
  };
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ارسال پیامک موفق بود",
      description: "پیامک ها برای مشتریان با موفقیت ارسال شد",
    });
  };

  const handleButton = (button) => {
    if (button == 0) {
      setActivButton(button);
      setShowFirstPage(button); // به‌روزرسانی showFirstPage
    } else {
    }
  };

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-customers"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setCustomerData([]) : setCustomerData(data.data.dataGet);
      });

    fetch(baseUrl("/sms/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setSmsData([]) : setSmsData(data.data.dataGet);
      });
  }, []);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedUsers(customerData);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const getSelectedUserData = () => {
    return selectedUsers.map((user) => ({
      id: user._id,
      name: user.name,
      phone: user.phone,
    }));
  };

  const sendSMSFinal = () => {
    setShowLoadMessage(true);

    const getCookies = getCookie("WuZiK");

    const dataArray = selectedUsers.map((i) => i.phone);

    fetch(baseUrl("/sms/create"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numbers: dataArray,
        title: messageTitle,
        message: messageContent,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          setShowLoadMessage(false);
          openNotificationWithIcon("success");
        } else {
          openNotificationWithIcon2("error");
          setShowLoadMessage(false);
        }
      });
  };

  return (
    <>
      <div className="w-full flex flex-col h-full px-3 gap-4 py-1">
        {/* <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl py-6 font-bold">
            دستیار هوشمند افراپرداز
          </span>
        </div> */}
        <div className="w-full flex gap-3 h-full">
          <div className="bg-white flex flex-col rounded-lg w-1/5 shadow-sm h-[calc(100%-5rem)] p-5 ">
            <ButtonAfra
              type={"green"}
              onClick={() => location.replace("/dashboard")}
              text={"بازگشت به پیشخوان"}
            />
            <span className="text-[14px] mt-5">بخش های داخلی</span>
            <div className="w-full flex flex-col gap-3 mt-5">
              {menu.map((data, index) => (
                <span
                  key={index}
                  className={`${
                    activButton === index
                      ? "sub-menu-active"
                      : "sub-menu-deactive"
                  } w-full cursor-pointer p-2 flex justify-between items-center rounded-lg`}
                  onClick={() => handleButton(index)}
                >
                  {data.title}
                  <LuChevronLeft />
                </span>
              ))}
            </div>
          </div>
          <div className="w-4/5">
            {showFirstPage === 0 && (
              <CardStat
                type={"10"}
                title={"ارسال پیامک به مشتریان"}
                des={
                  "از این بخش می توانید به مشتریان خود پیامک مناسبتی یا دلخواه ارسال کنید."
                }
                data={
                  <>
                    <div className="w-full h-full">
                      <div
                        role="tablist"
                        className="tabs w-full relative grid-cols-5 tabs-bordered"
                      >
                        <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="لیست پیام های ارسالی"
                          defaultChecked
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <div className="w-full">
                            <TableAfra
                              type={"green"}
                              columns={[
                                {
                                  title: "ردیف",
                                  dataIndex: "code",
                                  key: "code",
                                  sorter: true,
                                },
                                {
                                  title: "عنوان پیام",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },
                                {
                                  title: "متن پیام",
                                  dataIndex: "content",
                                  key: "content",
                                  sorter: true,
                                },
                                {
                                  title: "تاریخ ارسال",
                                  dataIndex: "nati",
                                  key: "nati",
                                  sorter: true,
                                },
                                {
                                  title: "ارسال کننده",
                                  dataIndex: "modirname",
                                  key: "modirname",
                                  sorter: true,
                                },
                                {
                                  title: "وضعیت",
                                  dataIndex: "status",
                                  key: "status",
                                  sorter: true,
                                },
                              ]}
                              // data={customerData.map((leads, i) => ({
                              //   key: leads._id,
                              //   name: leads.name,
                              //   code: i + 1,
                              //   modirname: !leads.conName ? "-" : leads.conName,
                              //   financialCode: leads.financialCode,
                              //   birthDate: leads.birthDate,
                              //   state: leads.state,
                              //   city: leads.city,
                              //   adder: leads.adminUserName,
                              //   nati: leads.nationalCode,

                              //   opr: (
                              //     <>
                              //       <div className="w-full flex  justify-center items-center gap-3">
                              //         <Tag
                              //           className=" cursor-pointer"
                              //           onClick={() => showDataCustomer(leads)}
                              //           color="blue"
                              //         >
                              //           مشاهده
                              //         </Tag>
                              //         {getAccess == "1" ? (
                              //           <>
                              //             <Tag
                              //               className=" cursor-pointer"
                              //               onClick={() =>
                              //                 transferCustomer(leads)
                              //               }
                              //               color="purple"
                              //             >
                              //               انتقال مشتری
                              //             </Tag>
                              //             <Tag
                              //               className=" cursor-pointer"
                              //               onClick={() =>
                              //                 showEditCustomer(leads)
                              //               }
                              //               color="green"
                              //             >
                              //               ویرایش
                              //             </Tag>
                              //             <Tag
                              //               className=" cursor-pointer"
                              //               // onClick={() => showDeleteModal(leads)}
                              //               color="red"
                              //             >
                              //               حذف
                              //             </Tag>
                              //           </>
                              //         ) : (
                              //           <></>
                              //         )}
                              //       </div>
                              //     </>
                              //   ),
                              // }))}

                              data={smsData.map((i, k) => ({
                                code: k + 1,
                                name: i.title,
                                content: i.message,
                                nati: i.createDate,
                                modirname: i.adminUserName,
                                status: "ارسال شده",
                              }))}
                            />
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="ارسال پیام جدید"
                        />
                        <div role="tabpanel" className="tab-content px-3 py-6">
                          <div className="w-full h-[67vh] flex gap-3 items-center p-1 justify-between">
                            <div className="w-3/4 h-full">
                              <div className="w-full h-full flex flex-col gap-1 px-3">
                                {/* <span className="text-[18px] text-black font-bold">
                                  نوشتن پیام
                                </span>
                                <span className="text-sm text-zinc-500 ">
                                  متن پیام خود را در این بخش بنویسید
                                </span> */}

                                <Tag color="red">
                                  *نکته مهم : پنل پیامک افراپرداز به دلیل حجم
                                  بالای پیامک ها ممکن است ، ارسال پیامک بین 1
                                  الی 2 ساعت به طول بیانجامد.
                                </Tag>
                                <Tag color="red">
                                  *نکته مهم : عنوان پیام در متن پیامک دیده نمی
                                  شود و محتوای خود را در متن پیامک بنویسید.
                                </Tag>
                                <Tag color="red">
                                  *نکته مهم : افراپرداز هیچ گونه مسئولیتی در
                                  ارسال پیامک های نامناسب ندارد، در صورت مشاهده
                                  پنل به صورت کلی مسدود خواهد شد.
                                </Tag>
                                <InputCom
                                  onChenge={(e) =>
                                    setMessageTitle(e.target.value)
                                  }
                                  type={"req"}
                                  placeholder={"عنوان پیام"}
                                />
                                <InputCom
                                  onChenge={(e) =>
                                    setMessageContent(e.target.value)
                                  }
                                  type={"textarea"}
                                  row={21}
                                  col={10}
                                  placeholder={"متن پیام"}
                                />
                                 <div className="mt-3 w-1/3 ">
                                  <ButtonAfra
                                    type={"green"}
                                    text={"ثبت نهایی و ارسال"}
                                    onClick={sendSMSFinal}
                                    showLoad={showLoadMessage}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-1/4 h-full mt-6 overflow-auto section-layout border border-zinc-200 rounded-lg">
                              <div className="w-full h-full relative">
                                <h2 className="text-[16px] px-4  h-[55px] flex  justify-between items-center text-zinc-800 border-b border-b-zinc-300">
                                  <span>انتخاب مشتریان</span>
                                  <label className="flex justify-center items-center gap-3">
                                    <span className="text-sm">انتخاب همه</span>
                                    <input
                                      type="checkbox"
                                      className="w-4 h-4 checkbox checkbox-sm text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      onChange={handleSelectAll}
                                    />
                                  </label>
                                </h2>

                                <ul className=" absolute bottom-[4.5rem] top-14 w-full">
                                  {customerData.filter((l)=>l.phone).map((user) => (
                                    // <li key={user._id}>
                                    //   <label className="w-full border-b border-b-zinc-300 h-[45px] flex justify-between items-center">
                                    //     <span className="text-[16px] h-[45px] flex  justify-between items-center text-zinc-800 ">
                                    //       {user.name}
                                    //     </span>

                                    //     <input
                                    //       type="checkbox"
                                    //       checked={selectedUsers.includes(user)}
                                    //       onChange={() =>
                                    //         handleSelectUser(user)
                                    //       }
                                    //     />
                                    //   </label>
                                    // </li>

                                    <li
                                      key={user._id}
                                      class="w-full bg-zinc-100 shadow-sm px-2 border-b border-b-zinc-200"
                                    >
                                      <div class="flex items-center ps-3">
                                        <label
                                          for="vue-checkbox"
                                          class="w-full py-3 text-sm font-medium text-zinc-800 "
                                        >
                                          {user.name}
                                        </label>
                                        <input
                                          id="vue-checkbox"
                                          type="checkbox"
                                          checked={selectedUsers.includes(user)}
                                          onChange={() =>
                                            handleSelectUser(user)
                                          }
                                          value=""
                                          class="w-4 h-4 checkbox checkbox-sm text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="ارسال پیام آماده"
                        />
                        <div
                          role="tabpanel"
                          className="tab-content px-3 py-3"
                        ></div>
                      </div>
                    </div>
                  </>
                }
              />
            )}
            {/* {showFirstPage === 1 && (
              <CardStat
                type={"10"}
                title={"ارسال پیام در پیامرسان داخلی"}
                des={
                  "از این بخش می توانید به مشتریان خود در پیامرسان های داخلی پیام ارسال کنید."
                }
                data={<></>}
              />
            )}
            {showFirstPage === 2 && (
              <CardStat
                type={"10"}
                title={"ارسال پیام در پیامرسان خارجی"}
                des={
                  "از این بخش می توانید به مشتریان خود در پیامرسان های خارجی پیام ارسال کنید."
                }
                data={<></>}
              />
            )} */}
          </div>
        </div>
      </div>
      {contextHolder}
    </>
  );
};
export default MarketingPage;
