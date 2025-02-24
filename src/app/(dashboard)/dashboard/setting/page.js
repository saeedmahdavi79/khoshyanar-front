"use client";
import { useEffect, useState } from "react";
import CardStat from "@/app/components/modules/Card";
import Link from "next/link";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi2";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";
import Swal from "sweetalert2";
import { axiosReq } from "@/utils/axios";

import ButtonAfra from "@/app/components/modules/Buttons";
import InputCom from "@/app/components/modules/Inputs";
import { Camera02Icon } from "hugeicons-react";
import { Modal, Tag, notification } from "antd";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import TableAfra from "@/app/components/modules/TableAfra";
import upUrl from "@/utils/upUrl";

const SettingPage = () => {
  const router = useRouter();

  const [showFirstPage, setShowFirstPage] = useState(0);
  const [activButton, setActivButton] = useState(0);
  const [showLoad, setShowLoad] = useState(false);
  const [dataFactor, setDataFactor] = useState({});
  const [dataNotif, setDataNotif] = useState([]);

  const [nameElan, setNameElan] = useState("");
  const [contentElan, setContentElan] = useState("");
  const [loadNotif, setLoadNotif] = useState(false);

  const menu = [
    { title: "اطلاعات محرمانه" },
    { title: "اعلانات و اطلاع رسانی" },
    { title: "همگام سازی با تکروسیستم" },
  ];

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleButton = (button) => {
    if (button == 3 || button == 4) {
    } else {
      setActivButton(button);
      setShowFirstPage(button);
    }
    // به‌روزرسانی showFirstPage
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ثبت موفق",
      description: "ثبت با موفقیت انجام شد",
    });
  };

  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "ثبت ناموفق",
      description: "ثبت داده در سیستم ناموفق بود",
    });
  };

  const openNotificationWithIconDel = (type) => {
    api[type]({
      message: "حذف موفق",
      description: "حذف با موفقیت انجام شد",
    });
  };

  const openNotificationWithIcon2Del = (type) => {
    api[type]({
      message: "حذف ناموفق",
      description: "حذف داده در سیستم ناموفق بود",
    });
  };

  const openSyncData = (type) => {
    api[type]({
      message: "همگام سازی موفق",
      description: "همگام سازی با سرور تکرو سیستم موفق بود",
    });
  };
  const openSyncDatadel = (type) => {
    api[type]({
      message: "همگام سازی ناموفق",
      description: "همگام سازی با سرور تکرو سیستم ناموفق بود",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setShowDeleteBtn(true);
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setSelectedImage("");
    setShowDeleteBtn(false);
  };

  const [dataSign, setDataSign] = useState("");

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/auth/get-user-sign"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSign(data.data.dataGet.signCode);
      });

    fetch(baseUrl("/auth/get-setting"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSetting({
          sellerName: data.data.dataGet.sellerName,
          bussinessNumber: data.data.dataGet.bussinessNumber,
          sabtNmuber: data.data.dataGet.sabtNmuber,
          nationalCode: data.data.dataGet.nationalCode,
          postalCode: data.data.dataGet.postalCode,
          fax: data.data.dataGet.fax,
          address: data.data.dataGet.address,
          phone: data.data.dataGet.phone,
          logoImage: data.data.dataGet.logoImage,
        });
      });

    fetch(baseUrl("/auth/get-notif"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataNotif([]) : setDataNotif(data.data.dataGet);
      });
  }, []);

  const [dataSetting, setDataSetting] = useState({
    sellerName: "",
    bussinessNumber: "",
    sabtNmuber: "",
    nationalCode: "",
    postalCode: "",
    fax: "",
    address: "",
    phone: "",
    logoImage: "",
  });

  const changeDataSettingHandler = (e) => {
    setDataSetting({
      ...dataSetting,
      [e.target.name]: e.target.value,
    });
  };

  const updateData = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoad(true);
    fetch(baseUrl("/auth/setting-update"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSetting),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIcon("success");
          setShowLoad(false);
        } else {
          openNotificationWithIcon2("error");
          setShowLoad(false);
        }
      });
  };

  const addNotif = () => {
    const getCookies = getCookie("WuZiK");
    setLoadNotif(true);
    fetch(baseUrl("/auth/create-notif"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameElan,
        contentElan,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIcon("success");
          setLoadNotif(false);
          dataRefresh();
        } else {
          openNotificationWithIcon2("error");
          setLoadNotif(false);
        }
      });
  };

  const removeNotif = (_id) => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/auth/remove-notif"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIconDel("success");

          dataRefresh();
        } else {
          openNotificationWithIcon2Del("error");
          setLoadNotif(false);
        }
      });
  };

  const dataRefresh = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/auth/get-notif"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataNotif([]) : setDataNotif(data.data.dataGet);
      });
  };

  //sync

  const [syncLoad, setSyncLoad] = useState(false);
  const [syncCustomerLoad, setSyncCustomerLoad] = useState(false);

  const syncTakro = () => {
    const token = getCookie("WuZiK");
    const tokenTakro = getCookie("TakSess");
    setSyncLoad(true);

    fetch(baseUrl("/sync/get-personels"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenTakro: tokenTakro,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openSyncData("success");
          setSyncLoad(false);
        } else {
          openSyncDatadel("error");
          setSyncLoad(false);
        }
      });
  };

  const syncCustomerTakro = () => {
    const token = getCookie("WuZiK");
    const tokenTakro = getCookie("TakSess");
    setSyncCustomerLoad(true);

    fetch(baseUrl("/sync/get-customers"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenTakro: tokenTakro,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openSyncData("success");
          setSyncCustomerLoad(false);
        } else {
          openSyncDatadel("error");
          setSyncCustomerLoad(false);
        }
      });
  };

  const syncProductsTakro = () => {
    const token = getCookie("WuZiK");
    const tokenTakro = getCookie("TakSess");
    setSyncCustomerLoad(true);

    fetch(baseUrl("/sync/get-products"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenTakro: tokenTakro,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openSyncData("success");
          setSyncCustomerLoad(false);
        } else {
          openSyncDatadel("error");
          setSyncCustomerLoad(false);
        }
      });
  };

  const syncStoreTakro = () => {
    const token = getCookie("WuZiK");
    const tokenTakro = getCookie("TakSess");
    setSyncCustomerLoad(true);

    fetch(baseUrl("/sync/get-stores"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenTakro: tokenTakro,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openSyncData("success");
          setSyncCustomerLoad(false);
        } else {
          openSyncDatadel("error");
          setSyncCustomerLoad(false);
        }
      });
  };

  const [showLoadUploadSignImage, setShowLoadSignImage] = useState(false);
  const [showLoadUploadSignImageId, setShowLoadSignImageId] = useState("");

  const [showLoadUploadSignImageLoad, setShowLoadSignImageLoad] =
    useState(false);

  const showUploadModal = () => {
    setShowLoadSignImage(true);
    setShowLoadSignImageLoad(true);

    setTimeout(() => setShowLoadSignImageLoad(false), 2000);
  };

  const [uploadedImageS, setUploadedImage] = useState(false);

  const postHandlerAddSign = async (e) => {
    try {
      const token = getCookie("WuZiK");

      const res = await axiosReq({
        method: "post",
        url: "/imageUpload/image",
        data: { image: e.target.files[0] },
        withCredentials: true,

        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      });

      if (res.data.status == 200) {
        const token = getCookie("WuZiK");
        setUploadedImage(upUrl(res.data.imageUrl));

        const sendData = await fetch(baseUrl("/auth/create-sign-image"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            signImage: upUrl(res.data.imageUrl),
          }),
        });
        const getResponse = await sendData.json();

        if (getResponse.status == 202) {
          Toast.fire({
            icon: "success",
            title: "با موفقیت آپلود شد",
          });

          Toast.fire({
            icon: "success",
            title: "با موفقیت ثبت شد",
          });
        }
      } else {
        Toast.fire({
          icon: "error",
          title: "آپلود ناموفق",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            تنظیمات سیستم
          </span>
          <span className="w-[200px]">
            <a href="/dashboard/ticket">
              <ButtonAfra type={"green"} text={"پشتیبانی"} />
            </a>
          </span>
        </div> */}
        <div className="w-full flex gap-3 h-full">
          <div className="bg-white flex flex-col rounded-lg w-1/5 h-[calc(100%-5rem)] p-5 border border-zinc-200">
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
                title={"اطلاعات محرمانه"}
                des={
                  "بعضی از این اطلاعات محرمانه هستند در نگه داری آن کوشا باشید"
                }
                data={
                  <>
                    <div className="w-full mt-3 gap-5 grid grid-cols-1">
                      <div className="w-full grid grid-cols-2 gap-3 items-end">
                        <InputCom
                          type={"dis"}
                          placeholder={"رمز محرمانه مدیر : " + dataSign}
                        />
                        <InputCom
                          name={"sellerName"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.sellerName}
                          placeholder={"نام شرکت یا شخص"}
                        />
                        <InputCom
                          name={"bussinessNumber"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.bussinessNumber}
                          placeholder={"کد اقتصادی"}
                        />
                        <InputCom
                          name={"sabtNmuber"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.sabtNmuber}
                          placeholder={"شماره ثبت"}
                        />
                        <InputCom
                          name={"nationalCode"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.nationalCode}
                          placeholder={"شناسه ملی یا کد ملی"}
                        />
                        <InputCom
                          name={"postalCode"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.postalCode}
                          placeholder={"کد پستی"}
                        />
                        <InputCom
                          name={"fax"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.fax}
                          placeholder={"فکس"}
                        />
                        <InputCom
                          name={"address"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.address}
                          placeholder={"آدرس"}
                        />
                        <InputCom
                          name={"phone"}
                          onChenge={changeDataSettingHandler}
                          type={"req"}
                          value={dataSetting.phone}
                          placeholder={"شماره تلفن"}
                        />

                        <ButtonAfra
                          type={"green"}
                          text={"آپلود امضا فیزیکی"}
                          onClick={showUploadModal}
                        />

                        <div className="w-full flex gap-3 ">
                          <ButtonAfra
                            onClick={updateData}
                            text={"ثبت اطلاعات"}
                            type={"green"}
                            showLoad={showLoad}
                          />
                          <ButtonAfra
                            onClick={() => location.reload()}
                            text={"انصراف"}
                            type={"blue-dark"}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="w-full flex flex-col gap-3">
                          <Tag color="red" className="p-1">
                            *نکته : از دادن اطلاعات محرمانه به دیگران جداً
                            خودداری کنید.
                          </Tag>
                          <Tag color="red" className="p-1">
                            *نکته : افراپرداز هیچگونه مسئولیتی در قبال از دست
                            رفتن اطلاعات شخصی شما ندارد.
                          </Tag>
                          <Tag color="blue" className="p-1">
                            *نکته : این اطلاعات برای استفاده در بخش های مختلف
                            سیستم اعم از فاکتور و نامه نگاری ها و غیره استفاده
                            می شود.
                          </Tag>
                        </div>
                        {/* <div className="xl:w-full mt-3 lg:w-full md:w-full sm:w-full flex flex-col items-center gap-4">
                          <div className="relative w-full min-h-40 rounded-[10px] border-2 border-dashed border-[#ff6e40] flex items-center justify-center overflow-hidden">
                            {selectedImage ? (
                              <img
                                src={selectedImage}
                                alt="Profile"
                                className="w-full max-w-[250px] max-h-[250px] h-full "
                              />
                            ) : (
                              <Camera02Icon
                                size={"4rem"}
                                className="text-gray-400 text-4xl"
                              />
                            )}
                          </div>
                          <label
                            htmlFor="upload"
                            className="cursor-pointer flex justify-center items-center w-full py-2 px-4 bg-[#ff6e40] text-white rounded-lg hover:bg-[#fb8230] transition-all"
                          >
                            انتخاب عکس لوگو
                          </label>
                          {showDeleteBtn ? (
                            <div className="w-full flex gap-3">
                              <ButtonAfra
                                type={"blue"}
                                onClick={deleteImage}
                                text={"آپلود"}
                              />
                              <ButtonAfra
                                type={"blue-dark"}
                                onClick={deleteImage}
                                text={"حذف"}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <input
                            id="upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </div> */}
                      </div>
                    </div>
                  </>
                }
              />
            )}
            {showFirstPage === 1 && (
              <CardStat
                type={"10"}
                title={"مدیریت اعلانات و اطلاع رسانی"}
                des={"اعلان و اطلاع رسانی های خود را در این بخش ببینید"}
                data={
                  <>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست اعلانات"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataNotif.map((visitor) => ({
                            key: visitor._id,
                            name: visitor.nameElan,
                            code: visitor.adminUserName,
                            count:
                              visitor.status == "false"
                                ? "تائید نشده"
                                : "تائید شده",

                            exit: visitor.createDate,

                            opr: (
                              <>
                                <div className="w-full flex gap-3 justify-center">
                                  <Tag
                                    onClick={() => removeNotif(visitor._id)}
                                    color="red"
                                    className="text-[14px] cursor-pointer"
                                  >
                                    حذف اعلان
                                  </Tag>
                                </div>
                              </>
                            ),
                          }))}
                          columns={[
                            {
                              title: "نام",
                              dataIndex: "name",
                              key: "name",
                              sorter: true,
                            },

                            {
                              title: "ایجاد کننده",
                              dataIndex: "code",
                              key: "code",
                              sorter: true,
                            },
                            // {
                            //   title: "وضعیت",
                            //   dataIndex: "count",
                            //   key: "count",
                            //   sorter: true,
                            // },
                            {
                              title: "تاریخ ایجاد",
                              dataIndex: "exit",
                              key: "exit",
                              sorter: true,
                            },
                            {
                              title: "عملیات",
                              dataIndex: "opr",
                              key: "opr",
                              sorter: true,
                            },
                          ]}
                        />
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن اعلان"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full flex flex-col gap-3 ">
                          <InputCom
                            onChenge={(e) => setNameElan(e.target.value)}
                            type={"req"}
                            placeholder={"عنوان اعلان"}
                          />
                          <InputCom
                            onChenge={(e) => setContentElan(e.target.value)}
                            type={"textarea"}
                            row={10}
                            col={10}
                            placeholder={"متن اعلان"}
                          />
                          <div className="w-[300px] flex gap-3 ">
                            <ButtonAfra
                              onClick={addNotif}
                              showLoad={loadNotif}
                              type={"green"}
                              text={"ثبت اعلان"}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            )}
            {showFirstPage === 2 && (
              <CardStat
                type={"10"}
                title={"همگام سازی با تکروسیستم"}
                des={"جهت همگام سازی با سرور تکروسیستم از این بخش استفاده کنید"}
                data={
                  <>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="همگام سازی"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <ButtonAfra
                            // onClick={syncTakro}
                            showLoad={syncLoad}
                            type={"green"}
                            text={"شروع همگام سازی پرسنل"}
                          />
                          <ButtonAfra
                             onClick={syncCustomerTakro}
                            showLoad={syncCustomerLoad}
                            type={"green"}
                            text={"شروع همگام سازی مشتریان"}
                          />
                          <ButtonAfra
                            onClick={syncProductsTakro}
                            showLoad={syncCustomerLoad}
                            type={"green"}
                            text={"شروع همگام سازی کالا ها"}
                          />
                          <ButtonAfra
                            onClick={syncStoreTakro}
                            showLoad={syncCustomerLoad}
                            type={"green"}
                            text={"شروع همگام سازی انبار ها"}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Modal Show Detail Anbar */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>آپلود امضا فیزیکی</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5 items-end">
            <ButtonAfra
              onClick={() => setShowLoadSignImage(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={showLoadUploadSignImageLoad}
        open={showLoadUploadSignImage}
        onCancel={() => setShowLoadSignImage(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">آپلود امضا فیزیکی کاربر</div>
            <div className="text-[12px] font-normal text-zinc-500">
              شما میتوانید از این بخش امضا فیزیکی خود را در سامانه آپلود کنید
            </div>

            <div className="w-full h-[250px] bg-zinc-500 rounded-lg overflow-hidden">
              <img
                className="w-full h-full"
                src={!uploadedImageS ? "/image/plc.png" : uploadedImageS}
              />
            </div>

            <InputCom
              onChenge={postHandlerAddSign}
              type={"upload-2"}
              placeholder={"انتخاب امضا"}
            />
          </div>
        </div>
      </Modal>

      {contextHolder}
    </>
  );
};
export default SettingPage;
