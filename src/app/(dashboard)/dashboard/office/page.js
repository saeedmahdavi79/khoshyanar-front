"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import { Modal, Table, Tag, Tree, notification } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import baseUrl from "@/utils/baseUrl";
import { axiosReq } from "@/utils/axios";
import upUrl from "@/utils/upUrl";
import TableAfra from "@/app/components/modules/TableAfra";
import ChartOrg from "@/app/components/modules/OrgChart";
import OrganizationChartData from "@/app/components/modules/OrgChart";

const pageOffice = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
  });

  const { DirectoryTree } = Tree;

  const [getCookieAccess, setGetAccess] = useState("");

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

  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [showLetterContent, setShowLetterContent] = useState(false);
  const [showChartOrg, setShowChartOrg] = useState(false);

  const [handleActive, setHandleActive] = useState("sub-menu-active");
  const [handleActive2, setHandleActive2] = useState("sub-menu-deactive");
  const [handleActive3, setHandleActive3] = useState("sub-menu-deactive");
  const [handleActive4, setHandleActive4] = useState("sub-menu-deactive");

  const [factorStatus, setfactorStatus] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const handleShowName = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setShowLetterContent(false);
    setShowChartOrg(false);

    setHandleActive("sub-menu-active");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
  };

  const handleShowPersonel = () => {
    setShowName(false);
    setPersonel(true);
    setLeave(false);
    setShowLetterContent(false);
    setShowChartOrg(false);

    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-active");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
  };

  const handleShowLeave = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(true);
    setShowLetterContent(false);
    setShowChartOrg(false);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
    setHandleActive4("sub-menu-deactive");
  };

  const handleShowOrgChart = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowLetterContent(false);
    setShowChartOrg(true);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-active");
  };

  const dataSource = [];

  const columns = [
    {
      title: "موضوع",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "شخص ایجادکننده",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "زونکن (دپارتمان)",
      dataIndex: "zonkan",
      key: "zonkan",
    },
    {
      title: "شماره نامه",
      dataIndex: "letterNum",
      key: "letterNum",
    },
    {
      title: "وضعیت",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "تاریخ ایجاد",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const columns_personel = [
    {
      title: "نام و نام خانوادگی",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "جنسیت",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "تاریخ تولد",
      dataIndex: "birth",
      key: "birth",
    },
    {
      title: "کد امضا",
      dataIndex: "sign",
      key: "sign",
    },

    {
      title: "دسترسی",
      dataIndex: "access",
      key: "access",
    },

    {
      title: "تلفن",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "نام کاربری",
      dataIndex: "userName",
      key: "userName",
    },

    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const columns_roles = [
    {
      title: "نام گروه کاری",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "توضیحات",
      dataIndex: "des",
      key: "des",
    },

    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const columns_zonkan = [
    {
      title: "نام دپارتمان",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "توضیحات دپارتمان",
      dataIndex: "des",
      key: "des",
    },

    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
    },
  ];

  //roles

  const [dataRole, setDataRole] = useState({
    roleName: "",
    access: "",
    des: "",
  });
  const [showLoadRole, setShowLoadRole] = useState(false);

  const changeHandlerRoles = (e) => {
    setDataRole({ ...dataRole, [e.target.name]: e.target.value });
  };

  const sendDataToServerRole = async () => {
    setShowLoadRole(true);
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/roles/create"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataRole),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 202) {
      setShowLoadRole(false);
      roleRefresh();
      Toast.fire({
        icon: "success",
        title: "با موفقیت ثبت شد",
      });
    }
  };

  const [dataRoleApp, setDataRoleApp] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");

    fetch(baseUrl("/auth/get-user-data"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (!data.user) {
          location.replace("/auth/login");
        } else {
          setGetAccess(data.customer ? "10" : data.user.access);
        }
      });

    fetch(baseUrl("/roles/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataRoleApp([]) : setDataRoleApp(data.data.dataGet)
      );
  }, []);

  //personel

  const [dataPersonel, setDataPersonel] = useState({
    sex: "",
    name: "",
    lastName: "",
    userName: "",
    password: "",
    phone: "",
    birth: "",
    email: "",
    type: "",
    role: "",
    access: "",
  });
  const [showLoadPersonel, setShowLoadPersonel] = useState(false);

  const [loadPersonel, setLoadPersonel] = useState(false);
  const [openPersonel, setOpenPersonel] = useState(false);

  const changeHandlerPersonel = (e) => {
    setDataPersonel({ ...dataPersonel, [e.target.name]: e.target.value });
  };

  const changeHandlerPersonelSelect = (e) => {
    setDataPersonel({ ...dataPersonel, type: e.value });
  };
  const changeHandlerPersonelSelect2 = (e) => {
    setDataPersonel({ ...dataPersonel, sex: e.value });
  };
  const changeHandlerPersonelSelect3 = (e) => {
    setDataPersonel({ ...dataPersonel, role: e.value });
  };
  const changeHandlerPersonelSelect4 = (e) => {
    setDataPersonel({ ...dataPersonel, access: e.value });
  };

  const changeHandlerPersonelDate = (e) => {
    const dateVal = e.$jy + "-" + e.$jM + "-" + e.$jD;

    setDataPersonel({ ...dataPersonel, birth: dateVal });
  };

  const sendDataToServerPersonel = async () => {
    setShowLoadPersonel(true);
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/create-personel"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataPersonel),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 202) {
      setShowLoadPersonel(false);
      personelRefresh();
      Toast.fire({
        icon: "success",
        title: "با موفقیت ثبت شد",
      });
    }
    if (getResponse.status == 500) {
      setShowLoadPersonel(false);

      Toast.fire({
        icon: "error",
        title: "نام کاربری از قبل موجود است",
      });
    }
  };

  const [dataPersonelApp, setDataPersonelApp] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-personel"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setDataPersonelApp([])
          : setDataPersonelApp(data.data.dataGet);
      });
  }, []);

  const deletePerson = async (_id) => {
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/remove-personel"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ _id }),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 200) {
      Toast.fire({
        icon: "success",
        title: "با موفقیت حذف شد",
      });
      personelRefresh();
    } else {
      Toast.fire({
        icon: "error",
        title: "مشکلی پیش آمد",
      });
    }
  };
  const [dataPersonelUpdate, setDataPersonelUpdate] = useState({
    sex: "",
    name: "",
    lastName: "",
    userName: "",
    password: "",
    phone: "",
    birth: "",
    email: "",
    type: "",
    _id: "",
    access: "",
    password: "",
    signStatus: "",
    signCode: "",
  });

  const changeHandlerUpdatePersonel = (e) => {
    setDataPersonelUpdate({ ...dataPersonelUpdate, access: e.value });
  };
  const changeHandlerPersonelUpdate = (e) => {
    setDataPersonelUpdate({
      ...dataPersonelUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandlerPersonelDateUpdate = (e) => {
    const dateVal = e.$jy + "-" + e.$jM + "-" + e.$jD;

    setDataPersonelUpdate({ ...dataPersonelUpdate, birth: dateVal });
  };
  const openNotificationWithUpdate = (type) => {
    api[type]({
      message: "بروزرسانی موفق",
      description: "بروزرسانی داده موفق بود",
    });
  };

  const openNotificationWithUpdate2 = (type) => {
    api[type]({
      message: "بروزرسانی ناموفق",
      description: "بروزرسانی داده ناموفق بود",
    });
  };

  const updatePersonel = async () => {
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/edit-personel"), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataPersonelUpdate),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 200) {
      openNotificationWithUpdate("success");
    } else {
      openNotificationWithUpdate2("error");
    }
  };

  const showPersonDetail = (data) => {
    setLoadPersonel(true);
    setOpenPersonel(true);

    setDataPersonelUpdate({
      ...dataPersonelUpdate,

      sex: data.sex,
      name: data.name,
      lastName: data.lastName,
      userName: data.userName,
      phone: data.phone,
      birth: data.birth,
      signStatus: data.signStatus,
      signCode: data.signCode,
      email: data.email,
      type: data.type,
      _id: data._id,
    });

    setTimeout(() => setLoadPersonel(false), 2000);
  };

  //zonkan

  const [dataZonkan, setDataZonkan] = useState({
    zonkanName: "",
    des: "",
  });
  const [showLoadZonkan, setShowLoadZonkan] = useState(false);

  const changeHandlerZonkan = (e) => {
    setDataZonkan({ ...dataZonkan, [e.target.name]: e.target.value });
  };

  const removeZonkan = async (_id) => {
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/remove-zonkan"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ _id }),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 200) {
      Toast.fire({
        icon: "success",
        title: "با موفقیت حذف شد",
      });
      zonkanRefresh();
    } else {
      Toast.fire({
        icon: "error",
        title: "مشکلی پیش آمد",
      });
    }
  };

  const sendDataToServerZonkan = async () => {
    setShowLoadZonkan(true);
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/create-zonkan"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataZonkan),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 202) {
      setShowLoadZonkan(false);
      zonkanRefresh();
      Toast.fire({
        icon: "success",
        title: "با موفقیت ثبت شد",
      });
    }
  };

  const [dataZonkanApp, setDataZonkanApp] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-zonkan"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataZonkanApp([])
          : setDataZonkanApp(data.data.mergedData)
      );
  }, []);

  //letters

  const editorRef = useRef(null);

  const [signCode, setSignCode] = useState("");
  const [letterId, setLetterId] = useState("");
  const [showLoadLetterDetail, setShowLoadLetterDetail] = useState(false);

  const [dataLetter, setDataLetter] = useState({
    subject: "",
    zonkan: "",
    recivers: "",
    isSignNeed: "",
    doc: "",
    content: `<div id="letterDivId" style="direction:rtl;text-align:justify;width: 100%; padding:50px; padding-top:41px  !important; color: #000 !important;  line-height:33px; !important; font-size: 18px;" border="0">
    <table style="width: 100% !important; ">
        <tbody>
            <tr>
                <td style="width:80% !important;"><br></td>
                <td style="width:20% !important;text-align: center; height: 49px  !important;">${new Date().toLocaleDateString("fa-ir")}</td>
            </tr>
            <tr>
                <td style="width:80% !important;"><br></td>
                <td style="width:20% !important;text-align: center;height: 30px !important;"><br></td>
            </tr>
            <tr>
                <td style="width:80% !important;"><br></td>
                <td style="width:20% !important;text-align: center;">ندارد</td>
            </tr>
        </tbody>
    </table>
    <p style="text-align: center; width: 100%; " "=""><br></p>
    <p style=" text-align: center; !important;">بسمه تعالی</p>
    <p><br></p>
    <p style="text-align: justify; !important;">متن نامه را در این قسمت بنویسید...</p>
    <br>
    </div>`,
  });
  const [showLoadLetter, setShowLoadLetter] = useState(false);
  const [dataLetterContent, setDataLetterContent] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isSignNeed, setIsSignNeed] = useState("");

  const changeHandlerLetter = (e) => {
    setDataLetter({ ...dataLetter, [e.target.name]: e.target.value });
  };
  const changeHandlerLetterZonkan = (e) => {
    setDataLetter({ ...dataLetter, zonkan: e.value });
  };

  const changeHandlerLetterRecivers = (e) => {
    const valuesArray = e.map((obj) => obj.value);
    //console.log(valuesArray);
    setDataLetter({ ...dataLetter, recivers: valuesArray });
  };

  const changeHandlerLetterContent = (e) => {
    setDataLetter({ ...dataLetter, content: e.toString() });
  };

  const showLetter = (e) => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowLetterContent(true);
    setDataLetterContent(e.content);
    setfactorStatus(e.status);
    setLetterId(e._id);
    setDownloadLink(e.doc);
    setIsSignNeed(e.isSignNeed);
  };
  const showLetterPage = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setShowLetterContent(false);
  };

  const removeLetter = async (_id) => {
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/remove-letter"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ _id }),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 200) {
      Toast.fire({
        icon: "success",
        title: "با موفقیت حذف شد",
      });
      location.reload();
    } else {
      Toast.fire({
        icon: "error",
        title: "مشکلی پیش آمد",
      });
    }
  };

  const sendDataToServerLetter = async () => {
    setShowLoadLetter(true);
    const token = getCookie("WuZiK");

    const sendData = await fetch(baseUrl("/office/create-letter"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataLetter),
    });
    const getResponse = await sendData.json();

    if (getResponse.status == 202) {
      setShowLoadLetter(false);
      location.reload();
      Toast.fire({
        icon: "success",
        title: "با موفقیت ثبت شد",
      });
    }
  };

  const postHandler2 = async (e) => {
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
        setDataLetter({ ...dataLetter, doc: upUrl(res.data.imageUrl) });
        Toast.fire({
          icon: "success",
          title: "با موفقیت آپلود شد",
        });
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

  const [dataLetterApp, setDataLetterApp] = useState([]);

  const [dataLetterAppMe, setDataLetterAppMe] = useState([]);

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-letters"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setDataLetterApp([])
          : setDataLetterApp(data.data.mergedData);
      });

    fetch(baseUrl("/office/get-letters-me"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setDataLetterAppMe([])
          : setDataLetterAppMe(data.data.mergedData);
      });
  }, []);

  const changeHandlerConfirm = (e) => {
    setDataLetter({ ...dataLetter, isSignNeed: e.value });
  };

  function printDiv(divClass) {
    var printContents = document.getElementById(divClass).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  const openNotificationWithIconSign = (type) => {
    api[type]({
      message: "احراز موفق",
      description: "مدیر جهت امضای فاکتور تایید شد",
    });
  };

  const openNotificationWithSign2 = (type) => {
    api[type]({
      message: "احراز نا موفق",
      description: "عدم احراز مدیر جهت تایید فاکتور",
    });
  };

  const openNotificationWithIconSignConf = (type) => {
    api[type]({
      message: "تایید نامه موفق",
      description: "نامه توسط مدیر با موفقیت تایید شد",
    });
  };

  const openNotificationWithSignConf2 = (type) => {
    api[type]({
      message: "تایید نا موفق",
      description: "مشکلی در تایید نامه توسط مدیر پیش آمد",
    });
  };

  const openNotificationWithIconLeave = (type) => {
    api[type]({
      message: "ثبت مرخصی موفق",
      description: "مرخصی با موفقیت ثبت شد",
    });
  };

  const openNotificationWithIconLeave2 = (type) => {
    api[type]({
      message: "ثبت مرخصی ناموفق",
      description: "ثبت مرخصی نا موفق بود",
    });
  };

  const confirmLetter = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoadLetterDetail(true);
    fetch(baseUrl("/auth/sign-check"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signCode: signCode,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIconSign("success");
          setShowLoadLetterDetail(false);

          fetch(baseUrl("/office/conf-letter"), {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${getCookies}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: letterId,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status == 202) {
                openNotificationWithIconSignConf("success");
                setShowLoadLetterDetail(false);
                location.reload();
              } else {
                openNotificationWithSignConf2("error");
              }
            });
        } else {
          setShowLoadLetterDetail(false);
          openNotificationWithSign2("error");
        }
      });
  };

  //leave

  const [reasonLeave, setReasonleave] = useState("");
  const [timeLeave, setTimeleave] = useState("");
  const [typeLeave, setTypeleave] = useState("");
  const [dataLeaves, setDataLeaves] = useState([]);
  const [showLoadLeave, setShowLoadLeave] = useState(false);
  const [showLoadLeaveSign, setShowLoadLeaveSign] = useState(false);

  const [loadLeave, setLoadLeave] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);
  const [dataLeaveLoad, setDataLeaveLoad] = useState({});
  const [dataLeaveLoadId, setDataLeaveLoadId] = useState("");
  const [dataLeaveSign, setDataLeaveSign] = useState("");

  const showLeaveDetail = (data) => {
    setLoadLeave(true);
    setOpenLeave(true);

    setTimeout(() => setLoadLeave(false), 2000);
    setDataLeaveLoadId(data._id);
    setDataLeaveLoad(data);
  };

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-leaves"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataLeaves([]) : setDataLeaves(data.data.dataGet);
      });
  }, []);

  const claendarLeaveHandler = (e) => {
    let fullDate = e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD;
    setTimeleave(fullDate);
  };

  const typeLeaveHandler = (e) => {
    setTypeleave(e.label);
  };
  const addLeave = () => {
    setShowLoadLeave(true);
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/office/create-leave"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        des: reasonLeave,
        length: timeLeave,
        type: typeLeave,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIconLeave("success");
          leaveRefresh();
          setShowLoadLeave(false);
        } else {
          openNotificationWithIconLeave2("error");
          setShowLoadLeave(false);
        }
      });
  };

  const confirmLeave = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoadLeaveSign(true);
    fetch(baseUrl("/auth/sign-check"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signCode: dataLeaveSign,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIconSign("success");
          setShowLoadLeaveSign(false);

          fetch(baseUrl("/office/conf-leave"), {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${getCookies}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: dataLeaveLoadId,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status == 202) {
                openNotificationWithIconSignConf("success");
                setShowLoadLeaveSign(false);
                leaveRefresh();
              } else {
                openNotificationWithSignConf2("error");
              }
            });
        } else {
          setShowLoadLeaveSign(false);
          openNotificationWithSign2("error");
        }
      });
  };

  //dataRefresh

  const zonkanRefresh = () => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-zonkan"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataZonkanApp([])
          : setDataZonkanApp(data.data.mergedData)
      );
  };
  const personelRefresh = () => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-personel"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataPersonelApp([])
          : setDataPersonelApp(data.data.dataGet)
      );
  };
  const roleRefresh = () => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/roles/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataRoleApp([]) : setDataRoleApp(data.data.dataGet)
      );
  };

  const leaveRefresh = () => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-leaves"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataLeaves([]) : setDataLeaves(data.data.dataGet);
      });
  };

  //chart

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [parent, setParent] = useState("");
  const [slug, setSlug] = useState("");

  const dataHandlerValed = (e) => {
    setParent(e.value);
  };

  const dataHandlerUsers = (e) => {
    setUserName(e.label);
    setUserId(e.value);
  };

  const handleSave = async () => {
    const token = getCookie("WuZiK");
    const getData = await fetch(baseUrl("/auth/create-chart"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        parent,
        slug,
        userId,
        userName,
      }),
    });

    const getRes = await getData.json();
  };

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-chart"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataChart([]) : setDataChart(data.data.dataGet);
      });
  }, []);

  //office

  const openNotificationWithUpdateSign = (type) => {
    api[type]({
      message: "افزودن حق امضا موفق",
      description: "افزودن حق امضا موفق بود",
    });
  };

  const openNotificationWithUpdateSign2 = (type) => {
    api[type]({
      message: "افزودن حق ناموفق",
      description: "افزودن حق امضا ناموفق بود",
    });
  };

  const openNotificationWithUpdateSign12 = (type) => {
    api[type]({
      message: "حذف حق امضا موفق",
      description: "حذف حق امضا موفق بود",
    });
  };

  const openNotificationWithUpdateSign22 = (type) => {
    api[type]({
      message: "حذف حق ناموفق",
      description: "حذف حق امضا ناموفق بود",
    });
  };

  const addSignStatus = (data) => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/create-sign"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signStatus: "1",
        _id: data._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithUpdateSign("success");
          personelRefresh();
        } else {
          openNotificationWithUpdateSign2("error");
        }
        // console.log(data);
      });
  };
  const removeSignStatus = (data) => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/create-sign"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signStatus: "0",
        _id: data._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithUpdateSign12("success");
          personelRefresh();
        } else {
          openNotificationWithUpdateSign22("error");
        }
        // console.log(data);
      });
  };

  const [chartTitle, setChartTitle] = useState("");
  const [chartActor, setChartActor] = useState("");
  const [chartParent, setChartParent] = useState(undefined);
  const [chartSlug, setChartSlug] = useState("");

  const [dataPersonelAppChart, setDataPersonelAppChart] = useState([]);
  const [dataChart, setDataChart] = useState([]);
  const [showLoad3, setShowLoad3] = useState(false);

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ثبت موفق بود",
      description: "ثبت داده با موفقیت انجام شد",
    });
  };

  const openNotificationWithDelete = (type) => {
    api[type]({
      message: "حذف موفق بود",
      description: "حذف داده با موفقیت انجام شد",
    });
  };

  const changeUserHandler = (e) => {
    setChartTitle(e.label);
    setChartSlug(e.value);
  };

  const changeInpHandler = (e) => {
    setChartActor(e.target.value);
  };

  const onSelectUser = (keys, info) => {
    setChartParent(info.node.key);
  };

  const addChart = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoad3(true);
    try {
      try {
        const postDatas = await fetch(baseUrl("/office/create-chart"), {
          method: "POST",
          headers: {
            authorization: `Bearer ${getCookiess}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: chartTitle,
            actor: chartActor,
            parent: chartParent,
            slug: chartSlug,
          }),
        });

        const getResponses = await postDatas.json();

        if (getResponses.status == 200) {
          setShowLoad3(false);
          openNotificationWithIcon("success");
          dataRefresh();
        } else {
          setShowLoad3(false);
          openNotificationWithIcon("error");
        }
      } catch (error) {
        setShowLoad3(false);
        openNotificationWithIcon("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataRefresh = () => {
    const token = getCookie("WuZiK");

    fetch(baseUrl("/office/get-chart"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataChart([]) : setDataChart(data.data.dataGet);
      });
  };

  useEffect(() => {
    const token = getCookie("WuZiK");
    fetch(baseUrl("/office/get-personel-chat"), {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data
          ? setDataPersonelAppChart([])
          : setDataPersonelAppChart(data.data.dataGet)
      );
  }, []);

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            اداری و پرسنل
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
              <span
                onClick={handleShowName}
                className={`w-full cursor-pointer p-2 ${handleActive} flex justify-between items-center rounded-lg`}
              >
                نامه ها و مکاتبات
                <LuChevronLeft />
              </span>
              {getCookieAccess == "1" || getCookieAccess == "2" ? (
                <span
                  onClick={handleShowPersonel}
                  className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
                >
                  کارکنان
                  <LuChevronLeft />
                </span>
              ) : (
                <></>
              )}

              <span
                onClick={handleShowLeave}
                className={`w-full cursor-pointer p-2 ${handleActive3} flex justify-between items-center rounded-lg`}
              >
                مرخصی ها
                <LuChevronLeft />
              </span>
              {getCookieAccess == "1" ? (
                <span
                  onClick={handleShowOrgChart}
                  className={`w-full cursor-pointer p-2 ${handleActive4} flex justify-between items-center rounded-lg`}
                >
                  چارت سازمانی
                  <LuChevronLeft />
                </span>
              ) : getCookieAccess == "2" ? (
                <span
                  onClick={handleShowOrgChart}
                  className={`w-full cursor-pointer p-2 ${handleActive4} flex justify-between items-center rounded-lg`}
                >
                  چارت سازمانی
                  <LuChevronLeft />
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"نامه ها و مکاتبات"}
                des={"مکاتبات و نامه های خود را در این بخش ببینید"}
                data={
                  <div>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      {getCookieAccess == "1" ? (
                        <>
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="لیست کل مکاتبات"
                            defaultChecked
                          />
                          <div
                            role="tabpanel"
                            className="tab-content px-3 py-3"
                          >
                            <TableAfra
                              type={"green"}
                              data={dataLetterApp.map((data) => ({
                                name: !data.subject ? "-" : data.subject,

                                creator: !data.adminUserName
                                  ? "-"
                                  : data.adminUserName,
                                zonkan: !data.zonkan ? "-" : data.zonkan,
                                letterNum: !data.number ? "-" : data.number,
                                status:
                                  data.status == "false"
                                    ? "تایید نشده"
                                    : "تایید مدیریت",
                                date: !data.createDate ? "-" : data.createDate,

                                createDate: !data.createDate
                                  ? "-"
                                  : data.createDate,
                                operation: (
                                  <>
                                    <div className="w-full flex  justify-center items-center gap-3">
                                      <Tag
                                        className=" cursor-pointer"
                                        onClick={() => showLetter(data)}
                                        color="blue"
                                      >
                                        مشاهده / تائید
                                      </Tag>
                                      {getCookieAccess == "1" ? (
                                        <Tag
                                          className=" cursor-pointer"
                                          onClick={() => removeLetter(data._id)}
                                          color="red"
                                        >
                                          حذف
                                        </Tag>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </>
                                ),
                              }))}
                              columns={columns}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="مکاتبات من"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataLetterAppMe.map((data) => ({
                            name: !data.subject ? "-" : data.subject,

                            creator: !data.adminUserName
                              ? "-"
                              : data.adminUserName,
                            zonkan: !data.zonkan ? "-" : data.zonkan,
                            letterNum: !data.number ? "-" : data.number,
                            status:
                              data.status == "false"
                                ? "تایید نشده"
                                : "تایید مدیریت",
                            date: !data.createDate ? "-" : data.createDate,

                            createDate: !data.createDate
                              ? "-"
                              : data.createDate,
                            operation: (
                              <>
                                <div className="w-full flex  justify-center items-center gap-3">
                                  <Tag
                                    className=" cursor-pointer"
                                    onClick={() => showLetter(data)}
                                    color="blue"
                                  >
                                    مشاهده / تائید
                                  </Tag>
                                  <Tag
                                    className=" cursor-pointer"
                                    onClick={() => removeLetter(data._id)}
                                    color="red"
                                  >
                                    حذف
                                  </Tag>
                                </div>
                              </>
                            ),
                          }))}
                          columns={columns}
                        />
                      </div>

                      {getCookieAccess == "1" ? (
                        <>
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="دپارتمان یا زونکن"
                          />
                          <div
                            role="tabpanel"
                            className="tab-content px-3 py-3"
                          >
                            <div className="w-full grid grid-cols-5 gap-3 items-end">
                              <InputCom
                                onChenge={changeHandlerZonkan}
                                name={"zonkanName"}
                                type={"req"}
                                placeholder={"نام دپارتمان"}
                              />
                              <InputCom
                                onChenge={changeHandlerZonkan}
                                name={"des"}
                                type={"req"}
                                placeholder={"توضیحات دپارتمان"}
                              />
                              <ButtonAfra
                                showLoad={showLoadZonkan}
                                onClick={sendDataToServerZonkan}
                                text={"ثبت"}
                                type={"green"}
                              />
                            </div>
                            <div className="w-full mt-3">
                              <TableAfra
                                type={"green"}
                                data={dataZonkanApp.map((data) => ({
                                  name: !data.zonkanName
                                    ? "-"
                                    : data.zonkanName,

                                  des: !data.des ? "-" : data.des,

                                  operation: (
                                    <>
                                      <div className="w-full flex  justify-center items-center gap-3">
                                        <Tag
                                          className=" cursor-pointer"
                                          onClick={() => removeZonkan(data._id)}
                                          color="red"
                                        >
                                          حذف
                                        </Tag>
                                      </div>
                                    </>
                                  ),
                                }))}
                                columns={columns_zonkan}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن مکاتبه"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <InputCom
                            onChenge={changeHandlerLetter}
                            name={"subject"}
                            placeholder={"موضوع نامه"}
                            type={"req"}
                          />
                          <SelectCombo
                            placeholder={"دپارتمان نامه"}
                            options={dataZonkanApp.map((data) => ({
                              value: data.zonkanName,
                              label: data.zonkanName,
                            }))}
                            onChange={changeHandlerLetterZonkan}
                          />
                          <SelectCombo
                            placeholder={"گیرندگان"}
                            type={"multi"}
                            onChange={changeHandlerLetterRecivers}
                            options={dataPersonelApp.map((data) => ({
                              value: data._id,
                              label: data.name + " " + data.lastName,
                            }))}
                          />

                          <InputCom
                            onChenge={postHandler2}
                            type={"upload-2"}
                            placeholder={"انتخاب پیوست"}
                          />
                          <div>
                            <Tag color="blue">
                              *نکته : در صورت وجود مشکل در تایپ متن خود را در
                              ورد نوشته و در اینجا الصاق کنید
                            </Tag>
                            <Tag color="blue">
                              *نکته : شماره نامه به صورت اتوماتیک ایجاد میشود،
                              درصورتی که به شماره نامه اختصاصی نیاز دارید آن را
                              درون کادر زیر تاریخ وارد کنید
                            </Tag>
                            <span className="w-full mt-1">
                              <SelectCombo
                                placeholder={"آیا نیاز به تائید دارد؟"}
                                onChange={changeHandlerConfirm}
                                options={[
                                  {
                                    label: "بله",
                                    value: "1",
                                  },
                                  {
                                    label: "خیر",
                                    value: "0",
                                  },
                                ]}
                              />
                            </span>
                          </div>
                          <div></div>
                          <div></div>
                          <ButtonAfra
                            type={"green"}
                            onClick={sendDataToServerLetter}
                            showLoad={showLoadLetter}
                            text={"ثبت مکاتبه"}
                          />
                        </div>
                        <div className="w-full mt-3">
                          <div className="h-[300px] ">
                            <JoditEditor
                              onChange={changeHandlerLetterContent}
                              value={dataLetter.content}
                              className="classletter"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"کارکنان و پرسنل"}
                des={"کارکنان و پرسنل خود را در این بخش ببینید"}
                data={
                  <div>
                    <div className="w-full">
                      <Tag color="red">
                        *نکته : رمز عبور پیشفرض تمامی پرسنل 123456 می باشد
                      </Tag>
                    </div>
                    <div
                      role="tablist"
                      className="tabs mt-3 w-full grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست کل کارکنان"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataPersonelApp.map((data) => ({
                            name: !data.name
                              ? "-"
                              : data.name + " " + data.lastName,

                            sex: !data.sex ? "-" : data.sex,
                            birth: !data.birth
                              ? "-"
                              : data.birth == ""
                                ? "-"
                                : data.birth,

                            phone: !data.phone ? "-" : data.phone,
                            sign: data.signStatus == "1" ? data.signCode : "-",
                            userName: !data.userName ? "-" : data.userName,
                            role: !data.role ? "-" : data.role,
                            access: !data.access
                              ? "-"
                              : data.access == "6"
                                ? "کاربر معمولی"
                                : data.access == "1"
                                  ? "مدیریت"
                                  : data.access == "2"
                                    ? "اداری و پرسنل"
                                    : data.access == "3"
                                      ? "مالی و فروش"
                                      : data.access == "4"
                                        ? "بخش تولید"
                                        : data.access == "5"
                                          ? "بخش وظایف"
                                          : "",
                            createDate: !data.createDate
                              ? "-"
                              : data.createDate,
                            operation: (
                              <>
                                <div className="w-full flex  justify-center items-center gap-3">
                                  {getCookieAccess == "1" ? (
                                    <>
                                      {data.signStatus == "1" ? (
                                        <Tag
                                          onClick={() => removeSignStatus(data)}
                                          className="cursor-pointer"
                                          color="orange"
                                        >
                                          حذف حق امضا
                                        </Tag>
                                      ) : (
                                        <Tag
                                          onClick={() => addSignStatus(data)}
                                          className="cursor-pointer"
                                          color="green"
                                        >
                                          افزودن حق امضا
                                        </Tag>
                                      )}

                                      <Tag
                                        onClick={() => showPersonDetail(data)}
                                        className="cursor-pointer"
                                        color="blue"
                                      >
                                        ویرایش / مشاهده
                                      </Tag>
                                      <Tag
                                        className=" cursor-pointer"
                                        onClick={() => deletePerson(data._id)}
                                        color="red"
                                      >
                                        حذف
                                      </Tag>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </>
                            ),
                          }))}
                          columns={columns_personel}
                        />
                      </div>

                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن کارکنان"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-5 gap-3 mt-3 items-end">
                          <InputCom
                            type={"req"}
                            name={"name"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"نام"}
                          />
                          <InputCom
                            type={"req"}
                            name={"lastName"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"نام خانوادگی"}
                          />
                          <InputCom
                            type={"date"}
                            name={"lastName"}
                            onChenge={changeHandlerPersonelDate}
                            placeholder={"تاریخ تولد"}
                          />
                          <InputCom
                            type={"req"}
                            name={"userName"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"نام کاربری"}
                          />
                          <InputCom
                            type={"req"}
                            name={"password"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"رمزعبور"}
                          />

                          <SelectCombo
                            defaultValue={dataPersonel.access}
                            onChange={changeHandlerPersonelSelect4}
                            placeholder={"دسترسی"}
                            options={[
                              {
                                value: "1",
                                label: "مدیرعامل",
                              },
                              {
                                value: "1",
                                label: "بازرگانی",
                              },
                              {
                                value: "3",
                                label: "مسئول فروش",
                              },
                              {
                                value: "3",
                                label: "حسابدار فروش",
                              },
                              {
                                value: "3",
                                label: "کارشناس فروش",
                              },
                              {
                                value: "3",
                                label: "مدیر فروش",
                              },
                              {
                                value: "3",
                                label: "مدیر مالی",
                              },
                              {
                                value: "3",
                                label: "حسابدار",
                              },
                              {
                                value: "2",
                                label: "اداری",
                              },
                              {
                                value: "2",
                                label: "پرسنل",
                              },
                              {
                                value: "2",
                                label: "منابع انسانی",
                              },
                              {
                                value: "4",
                                label: "مسئول کنترل کیفی",
                              },
                              {
                                value: "4",
                                label: "مدیر تولید",
                              },
                              {
                                value: "4",
                                label: "کارمند تولید",
                              },
                              {
                                value: "4",
                                label: "انبار",
                              },

                              {
                                value: "6",
                                label: "دسترسی محدود کارمندان",
                              },
                            ]}
                          />

                          {/* <SelectCombo
                            defaultValue={dataPersonel.role}
                            onChange={changeHandlerPersonelSelect3}
                            placeholder={"گروه کاری"}
                            options={dataRoleApp.map((data) => ({
                              value: data.roleName,
                              label: data.roleName,
                            }))}
                          /> */}
                          <SelectCombo
                            onChange={changeHandlerPersonelSelect2}
                            placeholder={"جنسیت"}
                            options={[
                              {
                                value: "مرد",
                                label: "مرد",
                              },
                              {
                                value: "زن",
                                label: "زن",
                              },
                            ]}
                          />
                          <SelectCombo
                            onChange={changeHandlerPersonelSelect}
                            placeholder={"نوع قرارداد"}
                            options={[
                              {
                                value: "پیمانی",
                                label: "پیمانی",
                              },
                              {
                                value: "قانون کار",
                                label: "قانون کار",
                              },
                            ]}
                          />

                          <InputCom
                            type={"req"}
                            name={"email"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"ایمیل"}
                          />
                          <InputCom
                            type={"req"}
                            name={"phone"}
                            onChenge={changeHandlerPersonel}
                            placeholder={"تلفن"}
                          />
                          <ButtonAfra
                            showLoad={showLoadPersonel}
                            type={"green"}
                            onClick={sendDataToServerPersonel}
                            text={"ثبت"}
                          />
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>

                      {/* <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="مدیریت گروه های کاری"
                      />
                      */}
                    </div>
                  </div>
                }
              />
            ) : (
              ""
            )}
            {showLeave ? (
              <CardStat
                type={"10"}
                title={"مرخصی ها"}
                des={"مرخصی ها و درخواست های خود را در این بخش ببینید"}
                data={
                  <>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      {getCookieAccess == "1" || getCookieAccess == "2" ? (
                        <>
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="لیست مرخصی ها"
                            defaultChecked
                          />
                          <div
                            role="tabpanel"
                            className="tab-content px-3 py-3"
                          >
                            <TableAfra
                              type={"green"}
                              data={dataLeaves.map((newPRD) => ({
                                key: newPRD._id,
                                name: newPRD.requesterName,
                                res: newPRD.des,
                                type: newPRD.type,
                                time: newPRD.length,
                                stat:
                                  newPRD.status == "false"
                                    ? "تائید نشده"
                                    : "تائید شده",
                                opr: (
                                  <>
                                    <Tag
                                      className=" cursor-pointer"
                                      onClick={() => showLeaveDetail(newPRD)}
                                      color="blue"
                                    >
                                      مشاهده / تائید یا رد
                                    </Tag>
                                  </>
                                ),
                              }))}
                              columns={[
                                {
                                  title: "نام درخواست کننده",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },

                                {
                                  title: "علت مرخصی",
                                  dataIndex: "res",
                                  key: "res",
                                  sorter: true,
                                },
                                {
                                  title: "نوع مرخصی",
                                  dataIndex: "type",
                                  key: "type",
                                  sorter: true,
                                },
                                {
                                  title: "مدت مرخصی",
                                  dataIndex: "time",
                                  key: "time",
                                  sorter: true,
                                },
                                {
                                  title: "وضعیت مرخصی",
                                  dataIndex: "stat",
                                  key: "stat",
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
                        </>
                      ) : (
                        <></>
                      )}

                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن مرخصی"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <InputCom
                            onChenge={(e) => setReasonleave(e.target.value)}
                            type={"req"}
                            placeholder={"دلیل مرخصی"}
                          />
                          <InputCom
                            onChenge={claendarLeaveHandler}
                            type={"date"}
                            placeholder={"مدت مرخصی"}
                          />
                          <SelectCombo
                            placeholder={"نوع مرخصی"}
                            options={[
                              {
                                value: "1",
                                label: "استعلاجی",
                              },
                              {
                                value: "2",
                                label: "استحقاقی",
                              },
                              {
                                value: "3",
                                label: "ساعتی",
                              },
                              {
                                value: "4",
                                label: "زایمان",
                              },
                              {
                                value: "5",
                                label: "ازدواج یا فوت",
                              },
                              {
                                value: "6",
                                label: "بدون حقوق",
                              },
                            ]}
                            onChange={typeLeaveHandler}
                          />
                          <div className="w-full flex gap-3">
                            <ButtonAfra
                              showLoad={showLoadLeave}
                              onClick={addLeave}
                              type={"green"}
                              text={"ثبت مرخصی"}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}

            {getCookieAccess == "1" ? (
              showChartOrg ? (
                <CardStat
                  type={"10"}
                  title={"چارت سازمانی"}
                  des={"چارت سازمانی خود را در این بخش مشاهده کنید"}
                  data={
                    <>
                      <div className="w-full" dir="rtl">
                        <div
                          role="tablist"
                          className="tabs w-full grid-cols-7 tabs-bordered"
                        >
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="مشاهده چارت"
                            defaultChecked
                          />
                          <div
                            role="tabpanel"
                            dir="ltr"
                            className="tab-content px-3 py-3"
                          >
                            {dataChart.length == 0 ? (
                              <>
                                <div className="w-full h-full flex justify-center items-center">
                                  موردی وجود ندارد
                                </div>
                              </>
                            ) : (
                              <OrganizationChartData data={dataChart} />
                            )}
                          </div>
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="ایجاد چارت"
                          />
                          <div
                            role="tabpanel"
                            className="tab-content px-3 py-3"
                          >
                            <div className="w-full grid grid-cols-1 gap-3">
                              <Tag color="red" className="p-1">
                                *نکته : برای افزودن زیر مجموعه به یک شخص ، شخص
                                مورد نظر را از نمودار درختی پائین انتخاب کنید.
                              </Tag>

                              <div className="w-full grid grid-cols-4 gap-3 items-end">
                                <SelectCombo
                                  onChange={changeUserHandler}
                                  placeholder={"انتخاب پرسنل"}
                                  options={dataPersonelAppChart.map((k) => ({
                                    label: k.name + " " + k.lastName,
                                    value: k._id,
                                  }))}
                                />
                                <InputCom
                                  onChenge={changeInpHandler}
                                  type={"req"}
                                  placeholder={"سمت"}
                                />
                                <ButtonAfra
                                  showLoad={showLoad3}
                                  onClick={addChart}
                                  type={"green"}
                                  text={"ثبت در چارت"}
                                />
                                <ButtonAfra
                                  type={"blue-dark"}
                                  text={"انصراف"}
                                />
                              </div>
                              <div className="w-full">
                                {dataChart.length == 0 ? (
                                  <>
                                    <div className="w-full h-full mt-3 lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 overflow-auto section-layout justify-center items-center ">
                                      موردی وجود ندارد
                                    </div>
                                  </>
                                ) : (
                                  <div className="mt-3 lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 h-full overflow-auto section-layout">
                                    <DirectoryTree
                                      multiple
                                      defaultExpandAll
                                      onSelect={onSelectUser}
                                      treeData={dataChart.map((data) => ({
                                        title: data.title,
                                        key: data._id,
                                        children: data.children.map((data) => ({
                                          title: data.title,
                                          key: data._id,
                                          children: data.children,
                                        })),
                                      }))}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                />
              ) : (
                ""
              )
            ) : getCookieAccess == "2" ? (
              showChartOrg ? (
                <CardStat
                  type={"10"}
                  title={"چارت سازمانی"}
                  des={"چارت سازمانی خود را در این بخش مشاهده کنید"}
                  data={
                    <>
                      <div className="w-full" dir="rtl">
                        <div
                          role="tablist"
                          className="tabs w-full grid-cols-7 tabs-bordered"
                        >
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="مشاهده چارت"
                            defaultChecked
                          />
                          <div
                            role="tabpanel"
                            dir="ltr"
                            className="tab-content px-3 py-3"
                          >
                            {dataChart.length == 0 ? (
                              <>
                                <div className="w-full h-full flex justify-center items-center">
                                  موردی وجود ندارد
                                </div>
                              </>
                            ) : (
                              <OrganizationChartData data={dataChart} />
                            )}
                          </div>
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="ایجاد چارت"
                          />
                          <div
                            role="tabpanel"
                            className="tab-content px-3 py-3"
                          >
                            <div className="w-full grid grid-cols-1 gap-3">
                              <Tag color="red" className="p-1">
                                *نکته : برای افزودن زیر مجموعه به یک شخص ، شخص
                                مورد نظر را از نمودار درختی پائین انتخاب کنید.
                              </Tag>

                              <div className="w-full grid grid-cols-4 gap-3 items-end">
                                <SelectCombo
                                  onChange={changeUserHandler}
                                  placeholder={"انتخاب پرسنل"}
                                  options={dataPersonelAppChart.map((k) => ({
                                    label: k.name + " " + k.lastName,
                                    value: k._id,
                                  }))}
                                />
                                <InputCom
                                  onChenge={changeInpHandler}
                                  type={"req"}
                                  placeholder={"سمت"}
                                />
                                <ButtonAfra
                                  showLoad={showLoad3}
                                  onClick={addChart}
                                  type={"green"}
                                  text={"ثبت در چارت"}
                                />
                                <ButtonAfra
                                  type={"blue-dark"}
                                  text={"انصراف"}
                                />
                              </div>
                              <div className="w-full">
                                {dataChart.length == 0 ? (
                                  <>
                                    <div className="w-full h-full mt-3 lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 overflow-auto section-layout justify-center items-center ">
                                      موردی وجود ندارد
                                    </div>
                                  </>
                                ) : (
                                  <div className="mt-3 lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 h-full overflow-auto section-layout">
                                    <DirectoryTree
                                      multiple
                                      defaultExpandAll
                                      onSelect={onSelectUser}
                                      treeData={dataChart.map((data) => ({
                                        title: data.title,
                                        key: data._id,
                                        children: data.children.map((data) => ({
                                          title: data.title,
                                          key: data._id,
                                          children: data.children,
                                        })),
                                      }))}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                />
              ) : (
                ""
              )
            ) : (
              ""
            )}

            {/* {showChartOrg ? (
              <CardStat
                type={"10"}
                title={"چارت سازمانی"}
                des={"چارت سازمانی خود را در این بخش مشاهده کنید"}
              data={<>
              
              <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست کل چارت ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra type={"green"} data={[]} columns={[
    {
      title: "نام چارت",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "تاریخ ایجاد",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "عملیات",
      dataIndex: "opr",
      key: "opr",
    },
    ]}/>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن چارت"
                        
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        
                        <div className="w-full grid grid-cols-4 items-end gap-3">

<InputCom type={'req'}  placeholder={"عنوان چارت"} onChenge={(e) => setTitle(e.target.value)}/>
<InputCom type={'req'}  placeholder={"عنوان لاتین چارت"} onChenge={(e) => setSlug(e.target.value)}/>

<SelectCombo onChange={dataHandlerValed} options={dataPersonelApp.map((data) => ({
                              value: data._id,
                              label: data.name + " " + data.lastName,
                            }))} placeholder={"انتخاب والد"}/>
                            <SelectCombo onChange={dataHandlerUsers} options={dataPersonelApp.map((data) => ({
                              value: data._id,
                              label: data.name + " " + data.lastName,
                            }))} placeholder={"انتخاب زیر مجموعه"}/>
<ButtonAfra onClick={handleSave} type={"green"} text={"ثبت چارت"}/>
                        </div>


                      <div>
  
      <div className="mt-3">

      </div>
    </div>

                      </div>
                      </div>
              
              
              </>}
              />
            ) : (
              ""
            )} */}

            {showLetterContent ? (
              <CardStat
                type={"10"}
                title={"محتوای مکاتبه"}
                des={"محتوای مکاتبه را در این بخش ببینید"}
                buttons={
                  <>
                    <div className="w-full items-end flex gap-3 ">
                      {isSignNeed == "1" ? (
                        <div className="w-[150px]">
                          <ButtonAfra type={"blue"} text={"بدون نیاز تائید"} />
                        </div>
                      ) : getCookieAccess == "1" ? (
                        <div
                          className={`w-[500px] ${factorStatus == "true" ? "invisible" : ""} flex gap-3 items-end`}
                        >
                          <InputCom
                            onChenge={(e) => setSignCode(e.target.value)}
                            type={"req"}
                            placeholder={"کد امضای مدیر جهت تایید مکاتبه"}
                          />
                          <ButtonAfra
                            onClick={confirmLetter}
                            type={"blue"}
                            showLoad={showLoadLetterDetail}
                            text={"استعلام و احراز مدیر"}
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="flex items-end gap-3 w-[450px]">
                        <ButtonAfra
                          text={"پرینت"}
                          onClick={() => printDiv("print-letter")}
                          type={"green"}
                        />
                        <a
                          href={downloadLink}
                          target="_blank"
                          className="w-full"
                        >
                          <ButtonAfra text={"دانلود پیوست"} type={"blue"} />
                        </a>

                        <ButtonAfra
                          text={"بازگشت"}
                          onClick={showLetterPage}
                          type={"blue-dark"}
                        />
                      </div>
                    </div>
                  </>
                }
                data={
                  <>
                    <div className="w-full" id="print-letter">
                      <JoditEditor
                        value={dataLetterContent}
                        className="classletter"
                        config={{
                          toolbarAdaptive: false,
                          readonly: true,
                          disablePlugins:
                            "add-new-line,print,about,ai-assistant,backspace,bold,class-span,clean-html,clipboard,color,copyformat,delete-command,drag-and-drop,dtd,drag-and-drop-element,enter,file,focus,font,format-block,fullsize,hotkeys,hr,iframe,image,image-processor,image-properties,indent,inline-popup,key-arrow-outside,line-height,limit,link,media,mobile,ordered-list,paste,paste-from-word,paste-storage,placeholder,powered-by-jodit,preview,redo-undo,resize-cells,resize-handler,resizer,search,select-cells,select,source,size,spellcheck,speech-recognize,stat,sticky,symbols,tab,table,table-keyboard-navigation,video,xpath,wrap-nodes,justify",
                        }}
                      />
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Modal Show Detail Anbar */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>نمایش مرخصی</p>
            {dataLeaveLoad.status == "false" ? (
              <Tag color="red">تائید نشده</Tag>
            ) : (
              <Tag color="green">تائید شده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5 items-end">
            {dataLeaveLoad.status == "false" ? (
              <>
                {getCookieAccess == "1" ? (
                  <>
                    <InputCom
                      onChenge={(e) => setDataLeaveSign(e.target.value)}
                      type={"req"}
                      placeholder={"رمز مدیر"}
                    />
                    <ButtonAfra
                      onClick={confirmLeave}
                      showLoad={showLoadLeaveSign}
                      type={"green"}
                      text={"تائید"}
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}

            <ButtonAfra
              onClick={() => setOpenLeave(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadLeave}
        open={openLeave}
        onCancel={() => setOpenLeave(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات مرخصی</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات مرخصی مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3 grid grid-cols-2 gap-3">
              <InputCom
                type={"dis"}
                value={
                  "نام درخواست کننده :" + " " + dataLeaveLoad.requesterName
                }
              />

              <InputCom
                type={"dis"}
                value={"مدت مرخصی :" + " " + dataLeaveLoad.length}
              />
            </div>
            <div className="w-full mt-3 flex flex-col gap-3">
              <InputCom
                type={"dis"}
                value={"نوع مرخصی :" + " " + dataLeaveLoad.type}
              />
              <InputCom
                row={5}
                col={5}
                type={"textareaDis"}
                value={"علت مرخصی :" + " " + dataLeaveLoad.des}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Detail Personel */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>نمایش اطلاعات پرسنل</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5 items-end">
            <ButtonAfra
              onClick={updatePersonel}
              type={"green"}
              text={"ثبت ویرایش"}
            />

            <ButtonAfra
              onClick={() => setOpenPersonel(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadPersonel}
        open={openPersonel}
        onCancel={() => setOpenPersonel(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات پرسنل</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات پرسنل مورد نظر خود را مشاهده کنید
            </div>
            <div className="w-full">
              <Tag color="red">
                هنگام ویرایش دقتی کنید نقش و رمز عبور خالی نماند.
              </Tag>
            </div>

            <div className="w-full mt-3 grid grid-cols-2 gap-3 items-end">
              <InputCom
                type={"req"}
                name={"name"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={"نام :" + " " + dataPersonelUpdate.name}
              />
              <InputCom
                type={"req"}
                name={"lastName"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={
                  "نام خانوادگی :" + " " + dataPersonelUpdate.lastName
                }
              />

              <InputCom
                type={"date"}
                name={"birth"}
                onChenge={changeHandlerPersonelDateUpdate}
                placeholder={"تاریخ تولد :" + " " + dataPersonelUpdate.birth}
              />
              <InputCom
                type={"req"}
                name={"userName"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={"نام کاربری :" + " " + dataPersonelUpdate.userName}
              />

              <InputCom
                type={"req"}
                name={"phone"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={"تلفن :" + " " + dataPersonelUpdate.phone}
              />
              <InputCom
                type={"req"}
                name={"email"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={
                  "ایمیل :" +
                  " " +
                  (!dataPersonelUpdate.email
                    ? "-"
                    : dataPersonelUpdate.email == ""
                      ? "-"
                      : dataPersonelUpdate.email)
                }
              />
              <InputCom
                type={"req"}
                name={"password"}
                onChenge={changeHandlerPersonelUpdate}
                placeholder={"رمز عبور"}
              />

              <SelectCombo
                placeholder={
                  "نقش :" +
                  " " +
                  (dataPersonelUpdate.access == "6"
                    ? "کاربر معمولی"
                    : dataPersonelUpdate.access == "1"
                      ? "مدیریت"
                      : dataPersonelUpdate.access == "2"
                        ? "اداری و پرسنل"
                        : dataPersonelUpdate.access == "3"
                          ? "مالی و فروش"
                          : dataPersonelUpdate.access == "4"
                            ? "بخش تولید"
                            : dataPersonelUpdate.access == "5"
                              ? "بخش وظایف"
                              : "")
                }
                onChange={changeHandlerUpdatePersonel}
                options={[
                  {
                    value: "1",
                    label: "مدیرعامل",
                  },
                  {
                    value: "1",
                    label: "بازرگانی",
                  },
                  {
                    value: "3",
                    label: "مسئول فروش",
                  },
                  {
                    value: "3",
                    label: "حسابدار فروش",
                  },
                  {
                    value: "3",
                    label: "کارشناس فروش",
                  },
                  {
                    value: "3",
                    label: "مدیر فروش",
                  },
                  {
                    value: "3",
                    label: "مدیر مالی",
                  },
                  {
                    value: "3",
                    label: "حسابدار",
                  },
                  {
                    value: "2",
                    label: "اداری",
                  },
                  {
                    value: "2",
                    label: "پرسنل",
                  },
                  {
                    value: "2",
                    label: "منابع انسانی",
                  },
                  {
                    value: "4",
                    label: "مسئول کنترل کیفی",
                  },
                  {
                    value: "4",
                    label: "مدیر تولید",
                  },
                  {
                    value: "4",
                    label: "کارمند تولید",
                  },
                  {
                    value: "4",
                    label: "انبار",
                  },

                  {
                    value: "6",
                    label: "دسترسی محدود کارمندان",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>

      {contextHolder}
    </>
  );
};

export default pageOffice;
