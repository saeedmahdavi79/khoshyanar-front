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

import ButtonAfra from "@/app/components/modules/Buttons";
import baseUrl from "@/utils/baseUrl";
import { getCookie } from "cookies-next";
import TableAfra from "@/app/components/modules/TableAfra";
import { Modal, Table, Tag, Tree, notification } from "antd";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import separate from "@/utils/3Ragham";

import { LineChart, PieChart } from "@mui/x-charts";

const produtionPage = () => {
  const [getCookieAccess, setGetAccess] = useState("");

  const [showName, setShowName] = useState(true);
  const [showPersonel, setPersonel] = useState(false);
  const [showLeave, setLeave] = useState(false);
  const [showFormalision, setShowFormalision] = useState(false);
  const [showPishbini, setShowPishbini] = useState(false);
  const [showAmar, setShowAmar] = useState(false);
  const [showBroker, setShowBroker] = useState(false);

  const [handleActive, setHandleActive] = useState("sub-menu-active");
  const [handleActive2, setHandleActive2] = useState("sub-menu-deactive");
  const [handleActive3, setHandleActive3] = useState("sub-menu-deactive");
  const [handleActive4, setHandleActive4] = useState("sub-menu-deactive");
  const [handleActive5, setHandleActive5] = useState("sub-menu-deactive");
  const [handleActive6, setHandleActive6] = useState("sub-menu-deactive");
  const [handleActive7, setHandleActive7] = useState("sub-menu-deactive");
  const [dataOrderDetailBuyer, setDataOrderDetailBuyer] = useState({});

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/auth/get-user-data"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (!data.user) {
          location.replace("/auth/login");
        } else {
          setGetAccess(data.customer ? "10" : data.user.access);

          if (data.user.access == "8") {
            setShowName(false);
            setPersonel(false);
            setLeave(false);
            setShowFormalision(false);
            setShowPishbini(false);
            setShowAmar(false);
            setShowBroker(true);
            setHandleActive("sub-menu-deactive");
            setHandleActive2("sub-menu-deactive");
            setHandleActive3("sub-menu-deactive");
            setHandleActive4("sub-menu-deactive");
            setHandleActive5("sub-menu-deactive");
            setHandleActive6("sub-menu-deactive");
            setHandleActive7("sub-menu-active");
          }
          if(data.user.access == "3"){
            setShowName(false);
            setPersonel(true);
            setLeave(false);
            setShowFormalision(false);
            setShowPishbini(false);
            setShowAmar(false);
            setShowBroker(false);
            setHandleActive("sub-menu-deactive");
            setHandleActive2("sub-menu-active");
            setHandleActive3("sub-menu-deactive");
            setHandleActive4("sub-menu-deactive");
            setHandleActive5("sub-menu-deactive");
            setHandleActive6("sub-menu-deactive");
            setHandleActive7("sub-menu-deactive");
          }
        }
      });

    fetch(baseUrl("/product/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDatePrd([]) : setDatePrd(data.data.dataGet);
      });
  }, []);

  const handleShowName = () => {
    setShowName(true);
    setPersonel(false);
    setLeave(false);
    setShowFormalision(false);
    setShowPishbini(false);
    setShowAmar(false);
    setShowBroker(false);
    setHandleActive("sub-menu-active");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
    setHandleActive7("sub-menu-deactive");
  };

  const handleShowPersonel = () => {
    setShowName(false);
    setPersonel(true);
    setLeave(false);
    setShowFormalision(false);
    setShowPishbini(false);
    setShowAmar(false);
    setShowBroker(false);
    setHandleActive7("sub-menu-deactive");
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-active");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };

  const handleShowLeave = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(true);
    setShowFormalision(false);
    setShowPishbini(false);
    setShowAmar(false);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-active");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };
  const handleShowFormolasion = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowFormalision(true);
    setShowPishbini(false);
    setShowAmar(false);
    setShowBroker(false);
    setHandleActive7("sub-menu-deactive");
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-active");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
  };
  const handleShowPishbini = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowFormalision(false);
    setShowPishbini(true);
    setShowAmar(false);
    setShowBroker(false);
    setHandleActive7("sub-menu-deactive");
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-active");
    setHandleActive6("sub-menu-deactive");
  };
  const handleShowAmar = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowFormalision(false);
    setShowPishbini(false);
    setShowAmar(true);
    setShowBroker(false);
    setHandleActive7("sub-menu-deactive");

    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-active");
  };

  const handleShowBroker = () => {
    setShowName(false);
    setPersonel(false);
    setLeave(false);
    setShowFormalision(false);
    setShowPishbini(false);
    setShowAmar(false);
    setShowBroker(true);
    setHandleActive("sub-menu-deactive");
    setHandleActive2("sub-menu-deactive");
    setHandleActive3("sub-menu-deactive");
    setHandleActive4("sub-menu-deactive");
    setHandleActive5("sub-menu-deactive");
    setHandleActive6("sub-menu-deactive");
    setHandleActive7("sub-menu-active");
  };

  const [datePrd, setDatePrd] = useState([]);

  //const getCookieAccess = getCookie("UiS");

  //Category

  const { DirectoryTree } = Tree;

  const [data, setData] = useState([]);
  const [data3, setData3] = useState([]);
  const [showLoad, setShowLoad] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataResid, setDataResid] = useState([]);
  const [dataHavale, setDataHavale] = useState([]);
  const [dataFactor, setDataFactor] = useState({});
  const [dataFormula, setDataFormula] = useState([]);
  const [dataToolid, setDataToolid] = useState([]);
  const [dataBroker, setDataBroker] = useState([]);

  const [data2, setData2] = useState({
    title: "",
    code: "",
    machineCount: "",
    productCatId: "",
    productCatName: "",
    erpCount: "",
    vahed: "",
    status: "",
    firstCount: "",
    entryCount: "",
    exportCount: "",
    sourceId: "",
    sourceName: "",
    des: "",
    slug: "",
    price: "",
    parent: undefined,
  });

  const [data2Edit, setData2Edit] = useState({
    _id: "",
    title: "",
    code: "",
    machineCount: "",
    productCatId: "",
    productCatName: "",
    erpCount: "",
    vahed: "",
    status: "",
    sourceId: "",
    sourceName: "",
    des: "",
    price: "",
    parent: undefined,
  });

  const [data2Delete, setData2Delete] = useState({
    _id: "",
  });

  const [parent, setParent] = useState(
    "دسته بندی کالا را از روبرو انتخاب کنید"
  );
  const [motherProduct, setProductMother] = useState(
    "دسته بندی کالا را از روبرو انتخاب کنید"
  );

  //get All Data
  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/category/get-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

    fetch(baseUrl("/product/get-product-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData3([]) : setData3(data.data.dataGet)
      );

    fetch(baseUrl("/source/get-by-token"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataSource([]) : setDataSource(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-resid-anbar"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataResid([]) : setDataResid(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-havale-anbar"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataHavale([]) : setDataHavale(data.data.dataGet)
      );

    fetch(baseUrl("/auth/get-setting"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataFactor([]) : setDataFactor(data.data.dataGet)
      );

    fetch(baseUrl("/formula/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataFormula([]) : setDataFormula(data.data.dataGet);
      });

    fetch(baseUrl("/formula/get-toolid"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataToolid([]) : setDataToolid(data.data.dataGet);
      });

    fetch(baseUrl("/contact/get-buy-broker"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataBroker([]) : setDataBroker(data.data.dataGet);
      });
  }, []);

  //Prdouct

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [loadingDelete, setLoadingDelete] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [showLoadPrd, setShowLoadPrd] = useState(false);
  const [showLoad5, setShowLoad5] = useState(false);

  const showCatEditModal = (data) => {
    setData2Edit({
      _id: data._id,
      title: data.title,
      code: data.code,
      machineCount: data.machineCount,
      productCatId: data.productCatId,
      productCatName: data.productCatName,
      erpCount: data.erpCount,
      vahed: data.vahed,
      status: data.status,
      sourceId: data.sourceId,
      sourceName: data.sourceName,
      des: data.des,
      price: data.price,
      parent: undefined,
    });

    setOpen(true);
    setLoading(true);

    setTimeout(() => setLoading(false), 2000);
  };

  const showDeleteModal = (data) => {
    setData2Delete({
      _id: data._id,
    });
    setOpenDelete(true);
    setLoadingDelete(true);

    setTimeout(() => setLoadingDelete(false), 2000);
  };

  const deletePrd = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoad5(true);
    fetch(baseUrl("/product/remove"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2Delete),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithDelete("success");
          setShowLoad5(false);
          setOpenDelete(false);
          dataRefresh();
        } else {
          openNotificationWithDelete("error");
          setShowLoad5(false);
        }
      });
  };

  const onSelect = (keys, info) => {
    setParent(info.node.title);
    setData2({
      ...data2,
      productCatId: info.node.key,
      productCatName: info.node.title,
    });
  };

  const [typeUser, setTypeUser] = useState("1");

  //edit

  const changeHandlerEdit = (e) => {
    setData2Edit({ ...data2Edit, [e.target.name]: e.target.value });
  };

  const changeHandler3Edit = (e) => {
    setData2Edit({ ...data2Edit, erpCount: e.label });
  };

  const changeHandlerVahedEdit = (e) => {
    setData2Edit({ ...data2Edit, vahed: e.label });
  };

  const changeHandlerSourceEdit = (e) => {
    setData2Edit({ ...data2Edit, sourceName: e.label, sourceId: e.value });
  };

  const changeHandlerStatusEdit = (e) => {
    setData2Edit({ ...data2Edit, status: e.label });
  };

  const sendDataToServerEdit = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoadPrd(true);
    try {
      if (!data2Edit.title && !data2Edit.des && !data2Edit.parent) {
        setShowLoadPrd(false);
        openNotificationWithIcon2("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/product/edit"), {
            method: "PUT",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data2Edit),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 200) {
            setShowLoadPrd(false);
            openNotificationWithIcon("success");
            dataRefresh();
          } else {
            setShowLoadPrd(false);
            openNotificationWithIcon2("error");
          }
        } catch (error) {
          setShowLoadPrd(false);
          openNotificationWithIcon2("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add
  const changeHandler = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const changeHandler3 = (e) => {
    setData2({ ...data2, erpCount: e.label });
  };

  const changeHandlerVahed = (e) => {
    setData2({ ...data2, vahed: e.label });
  };

  const changeHandlerSource = (e) => {
    setData2({ ...data2, sourceName: e.label, sourceId: e.value });
  };

  const changeHandlerStatus = (e) => {
    setData2({ ...data2, status: e.label });
  };

  const [api, contextHolder] = notification.useNotification();

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

  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "ثبت ناموفق بود",
      description: "ثبت داده با مشکل مواجه شد",
    });
  };

  const openNotificationWithDelete2 = (type) => {
    api[type]({
      message: "حذف ناموفق بود",
      description: "حذف داده با مشکل مواجه شد",
    });
  };

  const openNotificationWithDec = (type) => {
    api[type]({
      message: "ثبت ناموفق بود",
      description: "مقدار خروجی از موجودی کمتر است",
    });
  };

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
      message: "تایید فاکتور موفق",
      description: "فاکتور توسط مدیر با موفقیت تایید شد",
    });
  };

  const openNotificationWithSignConf2 = (type) => {
    api[type]({
      message: "تایید نا موفق",
      description: "مشکلی در تایید فاکتور توسط مدیر پیش آمد",
    });
  };

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoad(true);
    try {
      if (!data2.title && !data2.des && !data2.parent) {
        setShowLoad(false);
        openNotificationWithIcon2("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/product/create"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data2),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 200) {
            setShowLoad(false);
            openNotificationWithIcon("success");
            dataRefresh();
          } else {
            setShowLoad(false);
            openNotificationWithIcon2("error");
          }
        } catch (error) {
          setShowLoad(false);
          openNotificationWithIcon2("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //category

  const [dataCat, setDataCat] = useState({
    title: "",
    des: "",
    icon: "",
    slug: "",
    parent: false,
  });
  const [parentCatId, setParentCatId] = useState({
    _id: "",
  });
  const [showLoad3, setShowLoad3] = useState(false);
  const [showLoad4, setShowLoad4] = useState(false);

  const [disCheck, setDisCheck] = useState("check");

  const [parentCat, setParentCat] = useState(
    "دسته بندی مادر را از روبرو انتخاب کنید"
  );

  const [parentCatShow, setParentCatShow] = useState("");

  const [showDetail, setShowDetail] = useState(false);

  const changeHandlerCat = (e) => {
    setDataCat({ ...dataCat, [e.target.name]: e.target.value });
  };

  const changeHandlerCategory = (e) => {
    if (e.target.checked) {
      if (dataCat.parent) {
        setShowLoad(false);
        openNotificationWithIcon("error");
      } else {
        setDataCat({ ...dataCat, parent: undefined });
      }
    }
  };

  const onSelectCat = (keys, info) => {
    setParentCat(info.node.title);
    setDataCat({ ...dataCat, parent: info.node.key });
    setDisCheck("discheck");
  };

  const onSelectCatShow = (keys, info) => {
    setShowDetail(true);
    setParentCatId({ ...parentCatId, _id: info.node.key });
    setParentCatShow(info.node.title);
  };

  const sendDataToServerCat = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoad3(true);
    try {
      if (dataCat.title == "" && dataCat.des == "" && dataCat.parent == "") {
        setShowLoad3(false);
        openNotificationWithIcon("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/category/create"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataCat),
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCat = async (id) => {
    const getCookies = await getCookie("WuZiK");
    setShowLoad4(true);
    fetch(baseUrl("/category/delete"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithDelete("success");
          setShowLoad4(false);
          dataRefresh();
        } else {
          openNotificationWithDelete2("error");
          setShowLoad4(false);
        }
      });
  };

  //Anbar

  const [dataAnbar, setDataAnbar] = useState({
    sourceName: "",
    sourceDes: "",

    vahed: "",
    dama: "",
    type: "",
    expireDate: "",
  });

  const [showLoadAnbar, setShowLoadAnbar] = useState(false);

  const sendDataToServerAnbar = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoadAnbar(true);
    try {
      if (
        !dataAnbar.sourceName &&
        !dataAnbar.sourceDes &&
        !dataAnbar.vahed &&
        !dataAnbar.dama &&
        !dataAnbar.type
      ) {
        setShowLoadAnbar(false);
        openNotificationWithIcon("error");
      } else {
        try {
          const postDatas = await fetch(baseUrl("/source/create"), {
            method: "POST",
            headers: {
              authorization: `Bearer ${getCookiess}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAnbar),
          });

          const getResponses = await postDatas.json();

          if (getResponses.status == 202) {
            setShowLoadAnbar(false);
            openNotificationWithIcon("success");
            dataRefresh();
          } else {
            setShowLoadAnbar(false);
            openNotificationWithIcon2("error");
          }
        } catch (error) {
          setShowLoadAnbar(false);
          openNotificationWithIcon2("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandlerAnbar = (e) => {
    setDataAnbar({ ...dataAnbar, [e.target.name]: e.target.value });
  };

  const changeHandlerTypeAnbar = (e) => {
    setDataAnbar({ ...dataAnbar, type: e.label });
  };

  const changeHandlerVahedAnbar = (e) => {
    setDataAnbar({ ...dataAnbar, vahed: e.label });
  };

  const changeCalAnbar = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setDataAnbar({
      ...dataAnbar,
      expireDate: fullDate.toString(),
      // expiresIn: new Date(
      //   jalali_to_gregorian(e.$jy, e.$jM + 1, e.$jD)
      // ).getTime(),
    });
  };

  const [openAnbar, setOpenAnbar] = useState(false);
  const [loadingAnbar, setLoadingAnbar] = useState(false);
  const [dataAnbarMojoodi, setDataAnbarMojoodi] = useState([]);
  const [anbarName, setAnbarName] = useState("");

  const showDetailAnbar = (data) => {
    setOpenAnbar(true);
    setLoadingAnbar(true);
    setAnbarName(data.sourceName);
    setTimeout(() => setLoadingAnbar(false), 2000);

    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/product/get-prd-by-src"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sourceId: data.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setDataAnbarMojoodi([])
          : setDataAnbarMojoodi(data.data.dataGet);
      });
  };

  const [openAnbarAdd, setOpenAnbarAdd] = useState(false);
  const [loadingAnbarAdd, setLoadingAnbarAdd] = useState(false);
  const [loadIncarse, setLoadIncrase] = useState(false);

  const [kalaName, setKalaName] = useState("");
  const [dataAddMojodi, setDataAddMojodi] = useState({
    _id: "",
    newVal: "",
  });
  const showAddAnbar = (data) => {
    setOpenAnbarAdd(true);
    setLoadingAnbarAdd(true);
    setKalaName(data.title);
    setTimeout(() => setLoadingAnbarAdd(false), 2000);
    setDataAddMojodi({ ...dataAddMojodi, _id: data._id });
  };

  const changeIncraseMojodi = (e) => {
    setDataAddMojodi({ ...dataAddMojodi, newVal: e.target.value });
  };

  const addMojodi = () => {
    setLoadIncrase(true);
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/product/incrase"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAddMojodi),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          setLoadIncrase(false);
          openNotificationWithIcon("success");
          location.reload();
        } else {
          setLoadIncrase(false);
          openNotificationWithIcon2("error");
        }
      });
  };

  const [openAnbarDec, setOpenAnbarDec] = useState(false);
  const [loadingAnbarDec, setLoadingAnbarDec] = useState(false);
  const [loadDecrase, setLoadDecrase] = useState(false);
  const [mainCount, setMainCount] = useState("");

  const showDecAnbar = (data) => {
    setOpenAnbarDec(true);
    setLoadingAnbarDec(true);
    setKalaName(data.title);
    setTimeout(() => setLoadingAnbarDec(false), 2000);
    setDataAddMojodi({ ...dataAddMojodi, _id: data._id });
    setMainCount(
      !data.mainCount
        ? 0
        : data.mainCount == "NaN"
          ? 0
          : data.mainCount == ""
            ? 0
            : data.mainCount
    );
  };

  const changeDecraseMojodi = (e) => {
    setDataAddMojodi({ ...dataAddMojodi, newVal: e.target.value });
  };

  const decMojodi = () => {
    if (parseInt(mainCount) < parseInt(dataAddMojodi.newVal)) {
      openNotificationWithDec("error");
    } else {
      setLoadDecrase(true);
      const getCookies = getCookie("WuZiK");
      fetch(baseUrl("/product/decrase"), {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${getCookies}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAddMojodi),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 202) {
            setLoadDecrase(false);
            openNotificationWithIcon("success");
            location.reload();
          } else {
            setLoadDecrase(false);
            openNotificationWithIcon2("error");
          }
        });
    }
  };

  const [openModalAnbarShow, setOpenModalAnbarShow] = useState(false);
  const [loadingAnbarShow, setLoadingAnbarShow] = useState(false);
  const [dataAnbarShow, setDataAnbarShow] = useState({
    title: "",
    des: "",
    dama: "",
    type: "",
    vahed: "",
  });

  const showModalDetailAnbar = (data) => {
    setOpenModalAnbarShow(true);
    setLoadingAnbarShow(true);

    setTimeout(() => setLoadingAnbarShow(false), 2000);
    setDataAnbarShow({
      ...dataAnbarShow,
      title: data.sourceName,
      dama: data.dama,
      des: data.sourceDes,
      type: data.type,
      vahed: data.vahed,
      expire: data.expireDate,
    });
  };

  const [dataDeleteAnbar, setDataDeleteAnbar] = useState({
    _id: "",
  });

  const [openDeleteAnbar, setOpenDeleteAnbar] = useState(false);
  const [openDeleteAnbarLoad, setOpenDeleteAnbarLoad] = useState(false);

  const showDeleteAnbar = (data) => {
    setDataDeleteAnbar({
      _id: data._id,
    });
    setOpenDeleteAnbar(true);
    setOpenDeleteAnbarLoad(true);

    setTimeout(() => setOpenDeleteAnbarLoad(false), 2000);
  };

  const deleteSource = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoad5(true);
    fetch(baseUrl("/source/remove"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDeleteAnbar),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithDelete("success");
          setShowLoad5(false);
          setOpenDelete(false);
          dataRefresh();
        } else {
          openNotificationWithDelete("error");
          setShowLoad5(false);
        }
      });
  };

  //residAnbar

  const [dataDesPrd, setDataDesPrd] = useState("توضیحات کالا");
  const [dataVahedPrd, setDataVahedPrd] = useState("واحد کالا");

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");

  const [count, setCount] = useState("");
  const [unit, setUnit] = useState("");
  const [mojoodi, setMojoodi] = useState("");
  const [pricePrd, setPricePrd] = useState("");
  const [prdCode, setPrdCode] = useState("");
  const [residKolId, setResidId] = useState("");

  const [reciver, setReciver] = useState("");
  const [code, setCode] = useState("");
  const [locationData, setLocation] = useState("");
  const [anbarIdResid, setAnbarIdResid] = useState("");
  const [anbarNameResid, setAnbarNameResid] = useState("");
  const [residDate, setResidDate] = useState("");
  const [showLoadRecive, setShowLoadRecive] = useState(false);
  const [reciverDetail, setReciverDetail] = useState("");
  const [reciveDate, setReciveDate] = useState("");
  const [anbarDetailResid, setAnbarDetailResid] = useState("");
  const [factorStatus, setfactorStatus] = useState("");

  const [tableData, setTableData] = useState([]);
  const [tableDataServer, setTableDataServer] = useState([]);

  const changeKalaHandler = (e) => {
    setSelectedProductId(e.value);
    setSelectedProduct(e.label);
    setDataDesPrd(e.data.des);
    setDataVahedPrd(e.data.vahed);
    setUnit(e.data.vahed);
    setPrdCode(e.data.code);

    setPricePrd(!e.data.price ? 0 : e.data.price);
    setMojoodi(
      !e.data.mainCount ? 0 : e.data.mainCount == "NaN" ? 0 : e.data.mainCount
    );
  };

  const changeSoruceResid = (e) => {
    setAnbarNameResid(e.label);
    setAnbarIdResid(e.value);
  };

  const changeCalResid = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setResidDate(fullDate);
  };

  const [countKar, setCountKar] = useState("");
  const [nameKar, setNameKar] = useState("");
  const [priceKar, setPriceKAr] = useState("");
  const [desKar, setDesKAr] = useState("");

  const [tableDataKar, setTableDataKar] = useState([]);
  const [tableDataServerKar, setTableDataServerKar] = useState([]);

  const addProductToTableKar = () => {
    const newProduct = {
      name: nameKar,
      count: countKar,
      price: priceKar,
      operation: (
        <Tag
          color="red"
          className="cursor-pointer"
          onClick={() => removeProductFromTableKar(selectedProduct._id)}
        >
          حذف
        </Tag>
      ),
    };

    const PrdServer = {
      title: nameKar,
      products: tableDataKar,
      des: desKar,
    };

    setTableDataServerKar([...tableDataServerKar, PrdServer]);

    setTableDataKar([...tableDataKar, newProduct]);
  };

  const sendPrdToServerKar = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/add-buy-broker"), {
      method: "POST",
      body: JSON.stringify({
        title: nameKar,
        products: tableDataKar,
        des: desKar,
      }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon("success");
          dataRefresh();
        } else {
          openNotificationWithIcon2("error");
        }
      });
  };

  const addProductToTable = () => {
    const newProduct = {
      name: selectedProduct,
      count: count,
      vahed: unit,
      mojoodi: mojoodi,
      operation: (
        <Tag
          color="red"
          className="cursor-pointer"
          onClick={() => removeProductFromTable(selectedProduct._id)}
        >
          حذف
        </Tag>
      ),
    };

    const PrdServer = {
      _id: selectedProductId,
      newVal: count,
      name: selectedProduct,
      vahed: unit,
      price: pricePrd,
      code: prdCode,
    };

    setTableDataServer([...tableDataServer, PrdServer]);

    setTableData([...tableData, newProduct]);
  };

  const removeProductFromTableKar = (id) => {
    const updatedData = tableData.filter((item) => item.name !== id);
    setTableDataKar(updatedData);
    setTableDataServerKar(updatedData);
  };

  const removeProductFromTable = (id) => {
    const updatedData = tableData.filter((item) => item.name !== id);
    setTableData(updatedData);
    setTableDataServer(updatedData);
  };

  const addPrdIncrase = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoadRecive(true);
    fetch(baseUrl("/product/incrase-batch"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: tableDataServer,
        reciver,
        date: residDate,
        location: locationData,
        source: anbarIdResid,
        sourceName: anbarNameResid,
        code,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon("success");
          setShowLoadRecive(false);
          dataRefresh();
        } else {
          setShowLoadRecive(false);
          openNotificationWithIcon2("error");
        }
      });
  };

  const [openShowResid, setOpenShowResid] = useState(false);
  const [loadingShowResid, setLoadingShowResid] = useState(false);
  const [dataShowFactorResidDetail, setDataShowFactorResidDetail] = useState(
    []
  );

  const showResidFactor = (data) => {
    setOpenShowResid(true);
    setLoadingShowResid(true);
    setDataShowFactorResidDetail(data.products);
    setTimeout(() => setLoadingShowResid(false), 2000);
    setReciverDetail(data.reciver);
    setReciveDate(data.date);
    setfactorStatus(data.status);
    setAnbarDetailResid(data.sourceName);

    setResidId(data._id);
  };

  function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  const [signCode, setSignCode] = useState("");
  const [loadEstelam, setLoadEstelam] = useState("");

  const confirmFactor = () => {
    const getCookies = getCookie("WuZiK");
    setLoadEstelam(true);
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
          setLoadEstelam(false);

          fetch(baseUrl("/product/admin-resid-confirm"), {
            method: "POST",
            headers: {
              Authorization: `Bearer ${getCookies}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: residKolId,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status == 202) {
                openNotificationWithIconSignConf("success");
                setOpenShowResid(false);
                dataRefresh();
              } else {
                openNotificationWithSignConf2("error");
              }
            });
        } else {
          setLoadEstelam(false);
          openNotificationWithSign2("error");
        }
      });
  };

  //havaleAnbar

  const [dataDesPrdHavale, setDataDesPrdHavale] = useState("توضیحات کالا");
  const [dataVahedPrdHavale, setDataVahedPrdHavale] = useState("واحد کالا");

  const [selectedProductHavale, setSelectedProductHavale] = useState("");
  const [selectedProductIdHavale, setSelectedProductIdHavale] = useState("");

  const [countHavale, setCountHavale] = useState("");
  const [unitHavale, setUnitHavale] = useState("");
  const [mojoodiHavale, setMojoodiHavale] = useState("");
  const [pricePrdHavale, setPricePrdHavale] = useState("");
  const [prdCodeHavale, setPrdCodeHavale] = useState("");
  const [exitReason, setExitReason] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [carNumber, setCarNumber] = useState("");

  const [reciverHavale, setReciverHavale] = useState("");
  const [codeHavale, setCodeHavale] = useState("");
  const [locationDataHavale, setLocationHavale] = useState("");
  const [anbarIdHavale, setAnbarIdHavale] = useState("");
  const [anbarNameHavale, setAnbarNameHavale] = useState("");
  const [HavaleDate, setHavaleDate] = useState("");
  const [reciverDetailHavale, setReciverDetailHavale] = useState("");
  const [reciveDateHavale, setReciveDateHavale] = useState("");
  const [anbarDetailHavale, setAnbarDetailResidHavale] = useState("");
  const [factorStatusHavale, setfactorStatusHavale] = useState("");
  const [showLoadHavale, setShowLoadHavale] = useState(false);

  const [openShowHavale, setOpenShowHavale] = useState(false);
  const [loadingshowHavale, setLoadingShowHavale] = useState(false);
  const [dataShowFactorHavaleDetail, setDataShowFactorHavaleDetail] = useState(
    []
  );
  const [havaleId, setHavaleId] = useState(false);

  const [tableDataHavale, setTableDataHavale] = useState([]);
  const [tableDataServerHavale, setTableDataServerHavale] = useState([]);

  const addProductToTableHavale = () => {
    const newProduct = {
      name: selectedProductHavale,
      count: countHavale,
      vahed: unitHavale,
      mojoodi: mojoodiHavale,
      operation: (
        <Tag
          color="red"
          className="cursor-pointer"
          onClick={() => removeProductFromTableHavale(selectedProduct._id)}
        >
          حذف
        </Tag>
      ),
    };

    const PrdServer = {
      _id: selectedProductIdHavale,
      newVal: countHavale,
      name: selectedProductHavale,
      vahed: unitHavale,
      price: pricePrdHavale,
      code: prdCodeHavale,
    };

    setTableDataServerHavale([...tableDataServerHavale, PrdServer]);

    setTableDataHavale([...tableDataHavale, newProduct]);
  };

  const removeProductFromTableHavale = (id) => {
    const updatedData = tableDataHavale.filter((item) => item.name !== id);
    setTableDataHavale(updatedData);
    setTableDataServerHavale(updatedData);
  };

  const changeKalaHandlerHavle = (e) => {
    setSelectedProductIdHavale(e.value);
    setSelectedProductHavale(e.label);
    setDataDesPrdHavale(e.data.des);
    setDataVahedPrdHavale(e.data.vahed);
    setUnitHavale(e.data.vahed);
    setPrdCodeHavale(e.data.code);
    setPricePrdHavale(!e.data.price ? 0 : e.data.price);
    setMojoodiHavale(
      !e.data.mainCount ? 0 : e.data.mainCount == "NaN" ? 0 : e.data.mainCount
    );
  };

  const changeSoruceHavale = (e) => {
    setAnbarNameHavale(e.label);
    setAnbarIdHavale(e.value);
  };

  const changeCalHavale = async (e) => {
    let fullDate = await (e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD);
    setHavaleDate(fullDate);
  };

  const addPrdDecrase = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoadHavale(true);
    fetch(baseUrl("/product/decrase-batch"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: tableDataServerHavale,
        reciver: reciverHavale,
        date: HavaleDate,
        location: locationDataHavale,
        source: anbarIdHavale,
        sourceName: anbarNameHavale,
        code: codeHavale,
        carNumber: carNumber,
        client: contactPerson,
        exitRes: exitReason,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon("success");
          setShowLoadHavale(false);
          dataRefresh();
        } else {
          setShowLoadHavale(false);
          openNotificationWithIcon2("error");
        }
      });
  };

  const showHavaleFactor = (data) => {
    setOpenShowHavale(true);
    setLoadingShowHavale(true);
    setDataShowFactorHavaleDetail(data.products);
    setTimeout(() => setLoadingShowHavale(false), 2000);
    setReciverDetailHavale(data.reciver);
    setReciveDateHavale(data.date);
    setfactorStatusHavale(data.statusOpAdminAnbardar);
    setDataOrderDetailBuyer(data);
    setAnbarDetailResidHavale(data.sourceName);

    setHavaleId(data._id);
  };

  const confirmFactorDarxast = () => {
    const getCookies = getCookie("WuZiK");
    setLoadEstelam(true);
    fetch(baseUrl("/auth/sign-check"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signCode: signCode2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIconSign("success");
          setLoadEstelam(false);

          fetch(baseUrl("/contact/confirm-order-broker"), {
            method: "POST",
            headers: {
              Authorization: `Bearer ${getCookies}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: idStatus,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status == 202) {
                openNotificationWithIconSignConf("success");
                setOpenShowResid(false);
                dataRefresh();
              } else {
                openNotificationWithSignConf2("error");
              }
            });
        } else {
          setLoadEstelam(false);
          openNotificationWithSign2("error");
        }
      });
  };

  const confirmFactorHavale = () => {
    const getCookies = getCookie("WuZiK");
    setLoadEstelam(true);
    // fetch(baseUrl("/auth/sign-check"), {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${getCookies}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     signCode: signCode,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status == 200) {
    //       openNotificationWithIconSign("success");
    //       setLoadEstelam(false);

    //       fetch(baseUrl("/product/admin-havale-confirm"), {
    //         method: "POST",
    //         headers: {
    //           Authorization: `Bearer ${getCookies}`,
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           _id: havaleId,
    //         }),
    //       })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           if (data.status == 202) {
    //             openNotificationWithIconSignConf("success");
    //             setOpenShowResid(false);
    //             dataRefresh();
    //           } else {
    //             openNotificationWithSignConf2("error");
    //           }
    //         });
    //     } else {
    //       setLoadEstelam(false);
    //       openNotificationWithSign2("error");
    //     }
    //   });



    //   setLoadEstelam(true);
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
            if (data.thatsOp == false) {
              openNotificationWithIconSign("success");
              setLoadEstelam(false);
  
              fetch(baseUrl("/product/admin-havale-confirm"), {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${getCookies}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  _id: havaleId,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.status == 202) {
                    openNotificationWithIconSignConf("success");
                    // setDataShowFactorHavaleDetail(false);
                    dataRefresh();
                  } else {
                    openNotificationWithSignConf2("error");
                  }
                });
            } else {
              if (data.thatsOpSarparast == true) {
                openNotificationWithIconSign("success");
                setLoadEstelam(false);
  
                fetch(baseUrl("/product/sarparast-confirm"), {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${getCookies}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    _id: havaleId,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status == 202) {
                      openNotificationWithIconSignConf("success");
                     
                      dataRefresh();
                    } else {
                      openNotificationWithSignConf2("error");
                    }
                  });
              }
              if (data.thatsOpModir == true) {
                openNotificationWithIconSign("success");
                setLoadEstelam(false);
  
                fetch(baseUrl("/product/manage-confirm"), {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${getCookies}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    _id: havaleId,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status == 202) {
                      openNotificationWithIconSignConf("success");
                     
                      dataRefresh();
                    } else {
                      openNotificationWithSignConf2("error");
                    }
                  });
              }
              if(data.thatsAnbar == true){
                openNotificationWithIconSign("success");
                setLoadEstelam(false);
  
                fetch(baseUrl("/product/anbar-confirm"), {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${getCookies}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    _id: havaleId,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status == 202) {
                      openNotificationWithIconSignConf("success");
                      
                      dataRefresh();
                    } else {
                      openNotificationWithSignConf2("error");
                    }
                  });
              }
            }
          } else {
            setLoadEstelam(false);
            openNotificationWithSign2("error");
          }
        });




  };

  const dataRefresh = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/product/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDatePrd([]) : setDatePrd(data.data.dataGet);
      });

    fetch(baseUrl("/category/get-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

    fetch(baseUrl("/source/get-by-token"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataSource([]) : setDataSource(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-resid-anbar"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataResid([]) : setDataResid(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-resid-anbar"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataResid([]) : setDataResid(data.data.dataGet)
      );

    fetch(baseUrl("/formula/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataFormula([]) : setDataFormula(data.data.dataGet);
      });

    fetch(baseUrl("/formula/get-toolid"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataToolid([]) : setDataToolid(data.data.dataGet);
      });
    fetch(baseUrl("/contact/get-buy-broker"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDataBroker([]) : setDataBroker(data.data.dataGet);
      });
  };

  //formula

  const [tableFrm, setTableDataFrm] = useState([]);
  const [tableServerFrm, setTableDataServerFrm] = useState([]);

  const [selectedProductFrm, setSelectedProductFrm] = useState("");
  const [countFrm, setCountFrm] = useState("");
  const [vahedFrm, setVahedFrm] = useState("");
  const [mojoodiFrm, setMojoodiFrm] = useState("");
  const [titleFrm, setTitleFrm] = useState("");
  const [showLoadFrm, setShowLoadFrm] = useState(false);
  const [openFrmDetail, setOpenFrmDetail] = useState(false);
  const [loadFrmDetail, setLoadFrmDetail] = useState(false);
  const [detailFrmTitle, setDetailFrmTitle] = useState("");
  const [detailFrmData, setDetailFrmData] = useState([]);

  const addProductToTableFrm = () => {
    const newProduct = {
      name: selectedProductFrm.title,
      count: countFrm,
      vahed: vahedFrm,
      mojoodi: mojoodiFrm,
      operation: (
        <Tag
          color="red"
          className="cursor-pointer"
          onClick={() => removeProductFromTableFrm(selectedProductFrm._id)}
        >
          حذف
        </Tag>
      ),
    };

    const PrdServer = {
      title: titleFrm,
      childs: tableFrm,
    };

    setTableDataServerFrm([...tableServerFrm, PrdServer]);

    setTableDataFrm([...tableFrm, newProduct]);
  };

  const changePrdFrmHandler = (e) => {
    setVahedFrm(e.data.vahed);
    setSelectedProductFrm(e.data);
    setMojoodiFrm(
      !e.data.mainCount ? 0 : e.data.mainCount == "NaN" ? 0 : e.data.mainCount
    );
  };

  const removeProductFromTableFrm = (id) => {
    const updatedData = tableDataHavale.filter((item) => item.name !== id);
    setTableDataFrm(updatedData);
    setTableDataServerFrm(updatedData);
  };

  const sendFrmToServer = () => {
    const getCookies = getCookie("WuZiK");
    setShowLoadFrm(true);
    fetch(baseUrl("/formula/create"), {
      method: "POST",
      body: JSON.stringify({
        title: titleFrm,
        childs: tableFrm,
      }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setShowLoadFrm(false);
          openNotificationWithIcon("success");
          dataRefresh();
        } else {
          setShowLoadFrm(false);
          openNotificationWithIcon2("error");
        }
      });
  };

  const showDetailFrm = (data) => {
    setOpenFrmDetail(true);
    setLoadFrmDetail(true);
    setDetailFrmTitle(data.title);
    setDetailFrmData(data.childs);
    setTimeout(() => setLoadFrmDetail(false), 2000);
  };
  const deleteFrm = (id) => {
    const getCookies = getCookie("WuZiK");
    setShowLoad5(true);
    fetch(baseUrl("/formula/remove"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithDelete("success");
          setShowLoad5(false);
          setOpenDelete(false);
          dataRefresh();
        } else {
          openNotificationWithDelete("error");
          setShowLoad5(false);
        }
      });
  };

  const [dataBrokerShow, setDataBrokerShow] = useState(false);
  const [dataBrokerShowLoad, setDataBrokerShowLoad] = useState(false);
  const [dataBrokerShowObj, setDataBrokerShowLoadObj] = useState({
    products: [],
  });
  const [signCode2, setSignCode2] = useState("");
  const [idStatus, setIdStatus] = useState("");

  const showModalKharid = (data) => {
    setDataBrokerShow(true);
    setDataBrokerShowLoad(true);

    setDataBrokerShowLoadObj(data);
    setIdStatus(data._id);
    setTimeout(() => setDataBrokerShowLoad(false), 2000);
  };

  //toolid

  const [dataToolidShow, setDataToolidShow] = useState([]);
  const [inputCount, setInputCount] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputMonthLabel, setInputMonthLabel] = useState("");
  const [showCountFrm, setShowCountFrm] = useState("");

  const [inputFrm, setInputFrm] = useState("");
  const [inputFrmId, setInputFrmId] = useState("");
  const [showToolidReport, setShowToolidReportd] = useState(false);
  const [showLoadToolid, setShowLoadToolid] = useState(false);
  const [openToolidDetail, setOpenToolidDetail] = useState(false);
  const [loadingToolid, setloadingToolid] = useState(false);
  const [dataToolidShowDetail, setdataToolidShowDetail] = useState({});
  const [dataToolidShowDetail2, setdataToolidShowDetail2] = useState([]);

  const showModalToolid = (data) => {
    setOpenToolidDetail(true);
    setloadingToolid(true);
    setTimeout(() => setloadingToolid(false), 2000);
    setShowCountFrm(data.count);
    setdataToolidShowDetail(data);
    setdataToolidShowDetail2(data.child);
  };

  const changeMonthHandler = (e) => {
    setInputMonth(e.value);
    setInputMonthLabel(e.label);
  };

  const changeFrmHandler = (e) => {
    setInputFrmId(e.value);
    setInputFrm(e.label);
    setDataToolidShow(e.data.childs);
  };

  const addDataToToolid = () => {
    setShowToolidReportd(true);
  };

  const toolidNahaei = () => {
    setShowLoadToolid(true);

    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/formula/create-toolid"), {
      method: "POST",
      body: JSON.stringify({
        count: inputCount,
        child: dataToolidShow,
        month: inputMonth,
        monthLabel: inputMonthLabel,
        formulaId: inputFrmId,
        formulaLabel: inputFrm,
      }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          setShowLoadToolid(false);
          openNotificationWithIcon("success");
          dataRefresh();
        } else {
          setShowLoadToolid(false);
          openNotificationWithIcon2("error");
        }
      });
  };

  //report

  const [uData, setUdata] = useState([]);
  const [pData, setPdata] = useState([]);
  const [sData, setSdata] = useState([]);
  const [dataChart, setDataChart] = useState([]);
  const [dataYear, setDataYear] = useState([]);
  const [dataTable1, setDataTable1] = useState([]);
  const [dataTable2, setDataTable2] = useState([]);
  const [dataTable3, setDataTable3] = useState([]);
  const [countCat, setCountCat] = useState();
  const [countProduct, setCountProduct] = useState();
  const [countSource, setCountSource] = useState();

  const [tData, setTdata] = useState([]);
  const [tPieData, setTPiedata] = useState();

  const [fData, setFdata] = useState([]);
  const [fPieData, setFPiedata] = useState();

  const xLabels = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/product/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setCountProduct([]) : setCountProduct(data.data)
      );

    fetch(baseUrl("/category/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));

    fetch(baseUrl("/product/get-source-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setCountSource("") : setCountSource(data.data)
      );

    fetch(baseUrl("/product/get-cat-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setUdata([])
          : setUdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/product/get-product-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setPdata([])
          : setPdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/product/get-source-in-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setSdata([])
          : setSdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/formula/get-in-month-pish"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setTdata([])
          : setTdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });

    fetch(baseUrl("/formula/get-pish-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setTPiedata("") : setTPiedata(data.data)));

    fetch(baseUrl("/formula/get-formula-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setFPiedata("") : setFPiedata(data.data)));

    fetch(baseUrl("/formula/get-formula-count-month"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setFdata([])
          : setFdata([
              data.data.farvardin,
              data.data.ordibehesht,
              data.data.khordad,
              data.data.tir,
              data.data.mordad,
              data.data.shahrivar,
              data.data.mehr,
              data.data.aban,
              data.data.azar,
              data.data.dey,
              data.data.bahman,
              data.data.esfand,
            ]);
      });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            تولید و برنامه ریزی
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
              {getCookieAccess == "8" ? (
                ""
              ) :getCookieAccess == "3" ?"" : (
                <span
                  onClick={handleShowName}
                  className={`w-full cursor-pointer p-2 ${handleActive} flex justify-between items-center rounded-lg`}
                >
                  کالاها
                  <LuChevronLeft />
                </span>
              )}

              {getCookieAccess == "8" ? (
                ""
              ) : (
                <span
                  onClick={handleShowPersonel}
                  className={`w-full cursor-pointer p-2 ${handleActive2} flex justify-between items-center rounded-lg`}
                >
                  انبارداری
                  <LuChevronLeft />
                </span>
              )}

              {getCookieAccess == "8" ? (
                ""
              ) :getCookieAccess == "3" ?"" : (
                <span
                  onClick={handleShowFormolasion}
                  className={`w-full cursor-pointer p-2 ${handleActive4} flex justify-between items-center rounded-lg`}
                >
                  فرمولاسیون
                  <LuChevronLeft />
                </span>
              )}
              {getCookieAccess == "8" ? (
                ""
              ) :getCookieAccess == "3" ?"" : (
                <span
                  onClick={handleShowPishbini}
                  className={`w-full cursor-pointer p-2 ${handleActive5} flex justify-between items-center rounded-lg`}
                >
                  برنامه ریزی تولید
                  <LuChevronLeft />
                </span>
              )}

              <span
                onClick={handleShowBroker}
                className={`w-full cursor-pointer p-2 ${handleActive7} flex justify-between items-center rounded-lg`}
              >
                درخواست خرید کارپرداز
                <LuChevronLeft />
              </span>
              {getCookieAccess == "8" ? (
                ""
              ) :getCookieAccess == "3" ?"" : (
                <span
                  onClick={handleShowAmar}
                  className={`w-full cursor-pointer p-2 ${handleActive6} flex justify-between items-center rounded-lg`}
                >
                  گزارشات و آمارها
                  <LuChevronLeft />
                </span>
              )}
            </div>
          </div>
          <div className="w-4/5">
            {showName ? (
              <CardStat
                type={"10"}
                title={"کالا ها"}
                des={"کالا های خود را در این بخش ببینید"}
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
                        aria-label="لیست کل کالا ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={datePrd.map((leads) => ({
                            key: leads._id,
                            name: leads.title,
                            code: leads.code,
                            company: leads.productCatName,
                            source: leads.sourceName,
                            status: leads.price,
                            level: leads.vahed,
                            main: leads.mainCount,
                            main: leads.mainCount,
                            first: leads.firstCount,
                            visitor: leads.machineCount,
                            operation: (
                              <>
                                <div className="w-full flex  justify-center items-center gap-3">
                                  <Tag
                                    className=" cursor-pointer"
                                    onClick={() => showCatEditModal(leads)}
                                    color="blue"
                                  >
                                    ویرایش
                                  </Tag>
                                  <Tag
                                    className=" cursor-pointer"
                                    onClick={() => showDeleteModal(leads)}
                                    color="red"
                                  >
                                    حذف
                                  </Tag>
                                </div>
                              </>
                            ),
                          }))}
                          columns={[
                            {
                              title: "نام کالا",
                              dataIndex: "name",
                              key: "name",
                              sorter: true,
                            },
                            {
                              title: "کد کالا",
                              dataIndex: "code",
                              key: "code",
                              sorter: true,
                            },
                            {
                              title: "دسته بندی",
                              dataIndex: "company",
                              key: "company",
                              sorter: true,
                            },
                            {
                              title: "انبار کالا",
                              dataIndex: "source",
                              key: "source",
                              sorter: true,
                            },

                            {
                              title: "قیمت کالا",
                              dataIndex: "status",
                              key: "status",
                              sorter: true,
                            },
                            {
                              title: "واحد شمارش",
                              dataIndex: "level",
                              key: "level",
                              sorter: true,
                            },
                            {
                              title: "ماشین آلات",
                              dataIndex: "visitor",
                              key: "visitor",
                              sorter: true,
                            },
                            {
                              title: "عملیات",
                              dataIndex: "operation",
                              key: "operation",
                            },
                          ]}
                        />
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن کالا "
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full flex gap-3">
                          <div className="w-2/3  grid grid-cols-2 items-end gap-3">
                            <InputCom
                              onChenge={changeHandler}
                              name={"title"}
                              type={"req"}
                              placeholder={"نام کالا را وارد کنید"}
                            />
                            <InputCom
                              onChenge={changeHandler}
                              name={"code"}
                              type={"req"}
                              placeholder={"کد اختصاصی کالا را وارد کنید"}
                            />
                            <InputCom
                              onChenge={changeHandler}
                              name={"price"}
                              type={"req"}
                              placeholder={"قیمت کالا را وارد کنید"}
                            />
                            <SelectCombo
                              defaultValue={typeUser}
                              options={dataSource.map((data) => ({
                                value: data._id,
                                label: data.sourceName,
                              }))}
                              name="erpCount"
                              onChange={changeHandlerSource}
                              placeholder={"انبار مورد استفاده را انتخاب کنید"}
                            />

                            <InputCom
                              onChenge={changeHandler}
                              name={"des"}
                              type={"req"}
                              placeholder={"توضیحات کالا را وارد کنید"}
                            />

                            <InputCom
                              onChenge={changeHandler}
                              name={"machineCount"}
                              type={"req"}
                              placeholder={
                                "تعداد ماشین آلات مورد استفاده را وارد کنید"
                              }
                            />

                            <InputCom
                              onChenge={changeHandler}
                              name={"productCatId"}
                              type={"dis"}
                              bgcolor={"bg-zinc-100"}
                              value={parent}
                              placeholder={
                                "دسته بندی کالا را از روبرو انتخاب کنید"
                              }
                            />

                            <SelectCombo
                              defaultValue={typeUser}
                              options={[
                                {
                                  value: "1",
                                  label: "0-5",
                                },
                                {
                                  value: "2",
                                  label: "5-10",
                                },
                                {
                                  value: "3",
                                  label: "10-20",
                                },
                                {
                                  value: "4",
                                  label: "20-50",
                                },
                                {
                                  value: "5",
                                  label: "50-100",
                                },
                                {
                                  value: "6",
                                  label: "100 به بالا",
                                },
                              ]}
                              name="erpCount"
                              onChange={changeHandler3}
                              placeholder={
                                "منابع انسانی مورد استفاده را انتخاب کنید"
                              }
                            />

                            <SelectCombo
                              defaultValue={typeUser}
                              options={[
                                {
                                  value: "1",
                                  label: "کیلو",
                                },
                                {
                                  value: "3",
                                  label: "گرم",
                                },
                                {
                                  value: "4",
                                  label: "تن",
                                },
                                {
                                  value: "5",
                                  label: "عدد",
                                },
                                {
                                  value: "6",
                                  label: "متراژ",
                                },
                              ]}
                              name="vahed"
                              onChange={changeHandlerVahed}
                              placeholder={"واحد کالا را انتخاب کنید"}
                            />

                            <SelectCombo
                              defaultValue={typeUser}
                              options={[
                                {
                                  value: "1",
                                  label: "فعال",
                                },
                                {
                                  value: "3",
                                  label: "غیرفعال",
                                },
                              ]}
                              name="vahed"
                              onChange={changeHandlerStatus}
                              placeholder={"وضعیت کالا را انتخاب کنید"}
                            />

                            <div className="w-full flex gap-3">
                              <ButtonAfra
                                showLoad={showLoad}
                                type={"green"}
                                text={"ثبت"}
                                onClick={sendDataToServer}
                              />
                              <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                            </div>
                          </div>

                          <div className="flex w-1/3 flex-col gap-3">
                            <div className="lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 h-full overflow-auto section-layout">
                              <span className="font-bold text-[14px] text-black ">
                                دسته بندی ها به صورت درختی
                              </span>
                              <DirectoryTree
                                multiple
                                defaultExpandAll
                                onSelect={onSelect}
                                treeData={data.map((data) => ({
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
                          </div>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن دسته بندی کالا"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full flex gap-3">
                          <div className="w-2/3 grid grid-cols-2 gap-3 items-end">
                            <InputCom
                              onChenge={changeHandlerCat}
                              name={"title"}
                              type={"req"}
                              placeholder={"نام دسته بندی را وارد کنید"}
                            />
                            <InputCom
                              onChenge={changeHandlerCat}
                              name={"des"}
                              type={"req"}
                              placeholder={"توضیحات دسته بندی را وارد کنید"}
                            />
                            <InputCom
                              onChenge={changeHandlerCat}
                              name={"slug"}
                              type={"req"}
                              placeholder={"عنوان لاتین را وارد کنید"}
                            />
                            <InputCom
                              onChenge={changeHandlerCat}
                              name={"parent"}
                              type={"dis"}
                              value={parentCat}
                              placeholder={
                                "دسته بندی مادر را از روبرو انتخاب کنید"
                              }
                            />
                            <InputCom
                              onChenge={changeHandlerCategory}
                              name={"parent"}
                              type={disCheck}
                            />
                            <div className="w-full flex gap-3">
                              <ButtonAfra
                                showLoad={showLoad3}
                                type={"green"}
                                text={"ثبت"}
                                onClick={sendDataToServerCat}
                              />
                              <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                            </div>
                          </div>
                          <div className="flex w-1/3 flex-col gap-3">
                            <div className="lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 h-full overflow-auto section-layout">
                              <span className="font-bold text-[14px] text-black ">
                                دسته بندی ها به صورت درختی
                              </span>
                              <DirectoryTree
                                multiple
                                defaultExpandAll
                                onSelect={onSelectCat}
                                treeData={data.map((data) => ({
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
                          </div>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست دسته بندی کالا"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full mt-3">
                          <Tag color="purple">
                            * نکته : دسته بندی ها به صورت درختی و تو در تو می
                            باشد جهت حذف روی دسته مورد نظر کلیک کنید
                          </Tag>
                        </div>
                        <div className="mt-3 lg:w-full sm:w-full flex flex-col gap-4 rounded-lg p-3 bg-white border border-zinc-300 h-full overflow-auto section-layout">
                          <DirectoryTree
                            multiple
                            defaultExpandAll
                            onSelect={onSelectCatShow}
                            treeData={data.map((data) => ({
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

                        {showDetail ? (
                          <div className="mt-3 w-full">
                            <div className="w-full grid grid-cols-5 items-end gap-3">
                              <div className="w-full">
                                <InputCom type={"dis"} value={parentCatShow} />
                              </div>
                              <div className="w-full flex gap-3">
                                <ButtonAfra
                                  type={"red"}
                                  showLoad={showLoad4}
                                  onClick={() => deleteCat(parentCatId._id)}
                                  text={"حذف"}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
            {showPersonel ? (
              <CardStat
                type={"10"}
                title={"انبارداری"}
                des={"کالا انبار خود را در این بخش ببینید"}
                data={
                  <>
                    <div
                      role="tablist"
                      className="tabs w-full grid-cols-7 tabs-bordered"
                    >
                     
                      {getCookieAccess == "3" ?"" : 
                      <>
                       <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست کل انبار ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                          <TableAfra
                            type={"green"}
                            data={dataSource.map((visitor) => ({
                              key: visitor._id,
                              name: !visitor.sourceName
                                ? "-"
                                : visitor.sourceName,
                              type: !visitor.id ? "-" : visitor.id,
                              vahed: !visitor.vahed ? "-" : visitor.vahed,
                              dama: !visitor.dama ? "-" : visitor.dama,
                              des: !visitor.sourceDes ? "-" : visitor.sourceDes,
                              exp: !visitor.expireDate
                                ? "ندارد"
                                : visitor.expireDate,
                              operation: (
                                <>
                                  <div className="flex justify-center gap-3 items-center">
                                    <Tag
                                      className=" cursor-pointer"
                                      onClick={() => showModalDetailAnbar(visitor)}
                                      color="blue"
                                    >
                                      مشاهده اطلاعات
                                    </Tag>

                                    <Tag
                                      className=" cursor-pointer"
                                      onClick={() => showDetailAnbar(visitor)}
                                      color="green"
                                    >
                                      مشاهده موجودی
                                    </Tag>
                                    <Tag
                                      className=" cursor-pointer"
                                      onClick={() => showDeleteAnbar(visitor)}
                                      color="red"
                                    >
                                      حذف انبار
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
                                title: "توضیحات",
                                dataIndex: "des",
                                key: "des",
                                sorter: true,
                              },
                              {
                                title: "کد",
                                dataIndex: "type",
                                key: "type",
                                sorter: true,
                              },
                              {
                                title: "واحد",
                                dataIndex: "vahed",
                                key: "vahed",
                                sorter: true,
                              },
                              {
                                title: "دما",
                                dataIndex: "dama",
                                key: "dama",
                                sorter: true,
                              },

                              {
                                title: "تاریخ انقضا",
                                dataIndex: "exp",
                                key: "exp",
                                sorter: true,
                              },
                              {
                                title: "عملیات",
                                dataIndex: "operation",
                                key: "operation",
                                sorter: true,
                              },
                            ]} />
                        </div><input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="افزودن انبار" /><div role="tabpanel" className="tab-content px-3 py-3">
                            <div className="w-full">
                              <Tag color="blue">
                                *نکته : در صورتی که انبار مورد نظر دارای تاریخ انقضا
                                نیست خالی بماند
                              </Tag>
                            </div>
                            <div className="w-full grid grid-cols-4 gap-3 items-end">
                              <InputCom
                                onChenge={changeHandlerAnbar}
                                name={"sourceName"}
                                type={"req"}
                                placeholder={"نام انبار را وارد کنید"} />

                              <InputCom
                                onChenge={changeCalAnbar}
                                name={"expireDate"}
                                type={"date"}
                                placeholder={"تاریخ انقضا انبار را وارد کنید"} />

                              <InputCom
                                onChenge={changeHandlerAnbar}
                                name={"sourceDes"}
                                type={"req"}
                                placeholder={"توضیحات انبار را وارد کنید"} />
                              <SelectCombo
                                defaultValue={typeUser}
                                options={[
                                  {
                                    value: "1",
                                    label: "کیلو",
                                  },
                                  {
                                    value: "3",
                                    label: "گرم",
                                  },
                                  {
                                    value: "4",
                                    label: "تن",
                                  },
                                  {
                                    value: "5",
                                    label: "عدد",
                                  },
                                ]}
                                name="vahed"
                                onChange={changeHandlerVahedAnbar}
                                placeholder={"واحد شمارش را انتخاب کنید"} />
                              <SelectCombo
                                defaultValue={typeUser}
                                options={[
                                  {
                                    value: "1",
                                    label: "انبار لوازم فاسد نشدنی",
                                  },
                                  {
                                    value: "3",
                                    label: "انبار لوازم فاسد شدنی",
                                  },
                                ]}
                                name="type"
                                onChange={changeHandlerTypeAnbar}
                                placeholder={"نوع انبار را انتخاب کنید"} />
                              <InputCom
                                onChenge={changeHandlerAnbar}
                                name={"dama"}
                                type={"req"}
                                placeholder={"دمای مورد نظر انبار را وارد کنید"} />
                              <div className="flex gap-3 w-full">
                                <ButtonAfra
                                  showLoad={showLoadAnbar}
                                  onClick={sendDataToServerAnbar}
                                  text={"ثبت"}
                                  type={"green"} />
                                <ButtonAfra
                                  onClick={() => location.reload()}
                                  text={"انصراف"}
                                  type={"blue-dark"} />
                              </div>
                            </div>
                          </div><input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="رسید به انبار" /><div role="tabpanel" className="tab-content px-3 py-3">
                            <div className="w-full grid grid-cols-4 gap-3 items-end">
                              <SelectCombo
                                placeholder={"کالا را انتخاب کنید"}
                                options={datePrd.map((data) => ({
                                  value: data._id,
                                  label: data.title,
                                  data: data,
                                }))}
                                onChange={changeKalaHandler} />

                              <InputCom
                                onChenge={(e) => setCount(e.target.value)}
                                type={"req"}
                                placeholder={"تعداد را وارد کنید"} />
                              <InputCom type={"dis"} placeholder={dataVahedPrd} />

                              <div className="w-full flex gap-3 ">
                                <ButtonAfra
                                  type={"green"}
                                  text={"ثبت"}
                                  onClick={addProductToTable} />
                                <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                              </div>
                            </div>
                            <div className="w-full flex flex-col gap-3 ">
                              <InputCom
                                col={5}
                                row={5}
                                type={"textareaDis"}
                                placeholder={dataDesPrd} />
                            </div>

                            <div className="mt-3 w-full">
                              <div className="font-black text-black text-[18px]">
                                اطلاعات رسید انبار
                              </div>
                              <div className="font-normal mt-2 text-zinc-500 text-[11px]">
                                اطلاعات مندرج در فاکتور خرید یا همان رسید به انبار
                                که از این فرم وارد می شود
                              </div>
                            </div>

                            <div className="w-full mt-3 grid grid-cols-5 items-end gap-3">
                              <InputCom
                                onChenge={(e) => setReciver(e.target.value)}
                                type={"req"}
                                placeholder={"تحویل گیرنده را وارد کنید"} />
                              <InputCom
                                onChenge={(e) => setCode(e.target.value)}
                                type={"req"}
                                placeholder={"شماره برگه را وارد کنید"} />
                              <InputCom
                                onChenge={changeCalResid}
                                type={"date"}
                                placeholder={"تاریخ را انتخاب کنید"} />
                              <InputCom
                                onChenge={(e) => setLocation(e.target.value)}
                                type={"req"}
                                placeholder={"محل خرید را وارد کنید"} />
                              <SelectCombo
                                placeholder={"انبار را انتخاب کنید"}
                                options={dataSource.map((data) => ({
                                  value: data._id,
                                  label: data.sourceName,
                                }))}
                                onChange={changeSoruceResid} />
                            </div>

                            <div className="w-full mt-3">
                              <TableAfra
                                data={tableData}
                                type={"green"}
                                columns={[
                                  {
                                    title: "نام کالا",
                                    dataIndex: "name",
                                    key: "name",
                                  },
                                  {
                                    title: "تعداد کالا",
                                    dataIndex: "count",
                                    key: "count",
                                  },
                                  {
                                    title: "واحد کالا",
                                    dataIndex: "vahed",
                                    key: "vahed",
                                  },
                                  {
                                    title: "موجودی کالا",
                                    dataIndex: "mojoodi",
                                    key: "mojoodi",
                                  },
                                  {
                                    title: "عملیات",
                                    dataIndex: "operation",
                                    key: "operation",
                                  },
                                ]} />
                            </div>

                            <div className="w-full mt-3 flex justify-center">
                              <div className="w-[350px] flex justify-center gap-3 ">
                                <ButtonAfra
                                  type={"green"}
                                  showLoad={showLoadRecive}
                                  text={"ثبت نهایی فاکتور"}
                                  onClick={addPrdIncrase} />
                                <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                              </div>
                            </div>
                          </div>
                          </>}
                     
                          <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="لیست حواله های انبار" /><div role="tabpanel" className="tab-content px-3 py-3">
                            <TableAfra
                              type={"green"}
                              data={dataHavale.map((visitor) => ({
                                key: visitor._id,
                                name: visitor.code,
                                code: visitor.adminName,
                                status: visitor.statusOpAdminAnbardar == "false"
                                  ? "تایید نشده"
                                  : "تایید انبار",
                                count: visitor.date,

                                opr: (
                                  <>
                                    <div className="w-full flex gap-3 justify-center">
                                      <Tag
                                        onClick={() => showHavaleFactor(visitor)}
                                        color="green"
                                        className="text-[14px] cursor-pointer"
                                      >
                                        مشاهده / چاپ
                                      </Tag>
                                    </div>
                                  </>
                                ),
                              }))}
                              columns={[
                                {
                                  title: "کد رسید",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },

                                {
                                  title: "صادر کننده",
                                  dataIndex: "code",
                                  key: "code",
                                  sorter: true,
                                },
                                {
                                  title: "وضعیت",
                                  dataIndex: "status",
                                  key: "status",
                                  sorter: true,
                                },
                                {
                                  title: "تاریخ",
                                  dataIndex: "count",
                                  key: "count",
                                  sorter: true,
                                },

                                {
                                  title: "عملیات",
                                  dataIndex: "opr",
                                  key: "opr",
                                  sorter: true,
                                },
                              ]} />
                          </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="حواله از انبار"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <SelectCombo
                            placeholder={"کالا را انتخاب کنید"}
                            options={datePrd.map((data) => ({
                              value: data._id,
                              label: data.title,
                              data: data,
                            }))}
                            onChange={changeKalaHandlerHavle}
                          />

                          <InputCom
                            onChenge={(e) => setCountHavale(e.target.value)}
                            type={"req"}
                            placeholder={"تعداد را وارد کنید"}
                          />
                          <InputCom
                            type={"dis"}
                            placeholder={dataVahedPrdHavale}
                          />

                          <div className="w-full flex gap-3 ">
                            <ButtonAfra
                              type={"green"}
                              text={"ثبت"}
                              onClick={addProductToTableHavale}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-3 ">
                          <InputCom
                            col={5}
                            row={5}
                            type={"textareaDis"}
                            placeholder={dataDesPrdHavale}
                          />
                        </div>

                        <div className="mt-3 w-full">
                          <div className="font-black text-black text-[18px]">
                            اطلاعات حواله از انبار
                          </div>
                          <div className="font-normal mt-2 text-zinc-500 text-[11px]">
                            اطلاعات مندرج در فاکتور خروج یا همان حواله از انبار
                            که از این فرم وارد می شود
                          </div>
                        </div>

                        <div className="w-full mt-3 grid grid-cols-4 items-end gap-3">
                          <InputCom
                            onChenge={(e) => setReciverHavale(e.target.value)}
                            type={"req"}
                            placeholder={"تحویل گیرنده را وارد کنید"}
                          />
                          <InputCom
                            onChenge={(e) => setCodeHavale(e.target.value)}
                            type={"req"}
                            placeholder={"شماره برگه را وارد کنید"}
                          />
                          <InputCom
                            onChenge={(e) => setExitReason(e.target.value)}
                            type={"req"}
                            placeholder={"علت خروج را وارد کنید"}
                          />
                          <InputCom
                            onChenge={(e) => setContactPerson(e.target.value)}
                            type={"req"}
                            placeholder={"طرف حساب را وارد کنید"}
                          />

                          <InputCom
                            onChenge={(e) => setCarNumber(e.target.value)}
                            type={"req"}
                            placeholder={"شماره خودرو را وارد کنید"}
                          />
                          <InputCom
                            onChenge={changeCalHavale}
                            type={"date"}
                            placeholder={"تاریخ را انتخاب کنید"}
                          />
                          <InputCom
                            onChenge={(e) => setLocationHavale(e.target.value)}
                            type={"req"}
                            placeholder={"محل فروش را وارد کنید"}
                          />
                          <SelectCombo
                            placeholder={"انبار را انتخاب کنید"}
                            options={dataSource.map((data) => ({
                              value: data._id,
                              label: data.sourceName,
                            }))}
                            onChange={changeSoruceHavale}
                          />
                        </div>

                        <div className="w-full mt-3">
                          <TableAfra
                            data={tableDataHavale}
                            type={"green"}
                            columns={[
                              {
                                title: "نام کالا",
                                dataIndex: "name",
                                key: "name",
                              },
                              {
                                title: "تعداد کالا",
                                dataIndex: "count",
                                key: "count",
                              },
                              {
                                title: "واحد کالا",
                                dataIndex: "vahed",
                                key: "vahed",
                              },
                              {
                                title: "موجودی کالا",
                                dataIndex: "mojoodi",
                                key: "mojoodi",
                              },
                              {
                                title: "عملیات",
                                dataIndex: "operation",
                                key: "operation",
                              },
                            ]}
                          />
                        </div>

                        <div className="w-full mt-3 flex justify-center">
                          <div className="w-[350px] flex justify-center gap-3 ">
                            <ButtonAfra
                              type={"green"}
                              showLoad={showLoadHavale}
                              text={"ثبت نهایی فاکتور"}
                              onClick={addPrdDecrase}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                      </div>
                      {getCookieAccess == "3" ?"" :
                      <>
                      
                          <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="لیست رسید های انبار" /><div role="tabpanel" className="tab-content px-3 py-3">
                            <TableAfra
                              type={"green"}
                              data={dataResid.map((visitor) => ({
                                key: visitor._id,
                                name: visitor.code,
                                code: visitor.adminName,
                                status: visitor.status == "false"
                                  ? "تایید نشده"
                                  : "تایید مدیر",
                                count: visitor.date,

                                opr: (
                                  <>
                                    <div className="w-full flex gap-3 justify-center">
                                      <Tag
                                        onClick={() => showResidFactor(visitor)}
                                        color="green"
                                        className="text-[14px] cursor-pointer"
                                      >
                                        مشاهده / چاپ
                                      </Tag>
                                    </div>
                                  </>
                                ),
                              }))}
                              columns={[
                                {
                                  title: "کد رسید",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },

                                {
                                  title: "صادر کننده",
                                  dataIndex: "code",
                                  key: "code",
                                  sorter: true,
                                },
                                {
                                  title: "وضعیت",
                                  dataIndex: "status",
                                  key: "status",
                                  sorter: true,
                                },
                                {
                                  title: "تاریخ",
                                  dataIndex: "count",
                                  key: "count",
                                  sorter: true,
                                },

                                {
                                  title: "عملیات",
                                  dataIndex: "opr",
                                  key: "opr",
                                  sorter: true,
                                },
                              ]} />
                          </div></>}
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
            {showLeave ? (
              <CardStat
                type={"10"}
                title={"مشاهده و افزودن کالا "}
                des={"می توانید کالا های اد شده را در این بخش ببینید"}
              />
            ) : (
              ""
            )}

            {/* Formula Section */}

            {showFormalision ? (
              <CardStat
                type={"10"}
                title={"فرمولاسیون"}
                des={"  فرمولاسیون های خود را در این بخش ببینید"}
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
                        aria-label="لیست فرمولاسیون ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataFormula.map((leads) => ({
                            key: leads._id,
                            name: leads.title,
                            code: leads.createDate,
                            operation: (
                              <>
                                <Tag
                                  className=" cursor-pointer"
                                  onClick={() => showDetailFrm(leads)}
                                  color="blue"
                                >
                                  مشاهده اطلاعات
                                </Tag>
                                <Tag
                                  className=" cursor-pointer"
                                  onClick={() => deleteFrm(leads._id)}
                                  color="red"
                                >
                                  حذف
                                </Tag>
                              </>
                            ),
                          }))}
                          columns={[
                            {
                              title: "نام فرمولاسیون",
                              dataIndex: "name",
                              key: "name",
                              sorter: true,
                            },
                            {
                              title: "تاریخ ایجاد",
                              dataIndex: "code",
                              key: "code",
                              sorter: true,
                            },

                            {
                              title: "عملیات",
                              dataIndex: "operation",
                              key: "operation",
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
                        aria-label="افزودن فرمولاسیون"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full mt-3 grid grid-cols-4 items-end gap-3">
                          <InputCom
                            onChenge={(e) => setTitleFrm(e.target.value)}
                            type={"req"}
                            placeholder={"نام فرمول"}
                          />
                          <SelectCombo
                            onChange={changePrdFrmHandler}
                            placeholder={"کالا را انتخاب کنید"}
                            options={datePrd.map((data) => ({
                              value: data._id,
                              label: data.title,
                              data: data,
                            }))}
                          />
                          <InputCom
                            onChenge={(e) => setCountFrm(e.target.value)}
                            type={"req"}
                            placeholder={"مقدار در فرمول"}
                          />
                          <div className="w-full flex gap-3">
                            <ButtonAfra
                              type={"green"}
                              onClick={addProductToTableFrm}
                              text={"افزودن به فرمول"}
                            />
                            <ButtonAfra
                              onClick={() => location.reload()}
                              type={"blue-dark"}
                              text={"انصراف"}
                            />
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <TableAfra
                            data={tableFrm}
                            type={"green"}
                            columns={[
                              {
                                title: "نام کالا",
                                dataIndex: "name",
                                key: "name",
                                sorter: true,
                              },
                              {
                                title: "تعداد در فرمول",
                                dataIndex: "count",
                                key: "count",
                                sorter: true,
                              },
                              {
                                title: "موجودی انبار",
                                dataIndex: "mojoodi",
                                key: "mojoodi",
                                sorter: true,
                              },
                              {
                                title: "واحد کالا",
                                dataIndex: "vahed",
                                key: "vahed",
                                sorter: true,
                              },
                              {
                                title: "عملیات",
                                dataIndex: "operation",
                                key: "operation",
                                sorter: true,
                              },
                            ]}
                          />
                        </div>

                        <div className="w-full mt-3 flex justify-center">
                          <div className="w-[300px] flex justify-center gap-3">
                            <ButtonAfra
                              type={"green"}
                              showLoad={showLoadFrm}
                              onClick={sendFrmToServer}
                              text={"ثبت نهایی"}
                            />
                            <ButtonAfra
                              type={"blue-dark"}
                              onClick={() => location.reload()}
                              text={"انصراف"}
                            />
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

            {/* Pishbini Section */}
            {showPishbini ? (
              <CardStat
                type={"10"}
                title={"برنامه ریزی تولید"}
                des={"  برنامه ریزی های خود را در این بخش ببینید"}
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
                        aria-label="لیست برنامه ریزی ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataToolid.map((leads) => ({
                            key: leads._id,
                            name: leads.title,
                            count: leads.count,
                            month: leads.monthLabel,
                            year: leads.yearFinancial,
                            code: leads.createDate,
                            operation: (
                              <>
                                <Tag
                                  className=" cursor-pointer"
                                  onClick={() => showModalToolid(leads)}
                                  color="blue"
                                >
                                  مشاهده
                                </Tag>
                                <Tag
                                  className=" cursor-pointer"
                                  onClick={() => deleteFrm(leads._id)}
                                  color="red"
                                >
                                  حذف
                                </Tag>
                              </>
                            ),
                          }))}
                          columns={[
                            {
                              title: "فرمول",
                              dataIndex: "name",
                              key: "name",
                              sorter: true,
                            },
                            {
                              title: "تعداد در برنامه",
                              dataIndex: "count",
                              key: "count",
                              sorter: true,
                            },
                            {
                              title: "ماه تولید",
                              dataIndex: "month",
                              key: "month",
                              sorter: true,
                            },
                            {
                              title: "سال مالی",
                              dataIndex: "year",
                              key: "year",
                              sorter: true,
                            },
                            {
                              title: "عملیات",
                              dataIndex: "operation",
                              key: "operation",
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
                        aria-label="شروع برنامه ریزی"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <SelectCombo
                            options={[
                              {
                                value: "1",
                                label: "فروردین",
                              },
                              {
                                value: "2",
                                label: "اردیبهشت",
                              },
                              {
                                value: "3",
                                label: "خرداد",
                              },
                              {
                                value: "4",
                                label: "تیر",
                              },
                              {
                                value: "5",
                                label: "مرداد",
                              },
                              {
                                value: "6",
                                label: "شهریور",
                              },
                              {
                                value: "7",
                                label: "مهر",
                              },
                              {
                                value: "8",
                                label: "آبان",
                              },
                              {
                                value: "9",
                                label: "آذر",
                              },
                              {
                                value: "10",
                                label: "دی",
                              },
                              {
                                value: "11",
                                label: "بهمن",
                              },
                              {
                                value: "12",
                                label: "اسفند",
                              },
                            ]}
                            placeholder={"انتخاب ماه"}
                            onChange={changeMonthHandler}
                          />
                          <SelectCombo
                            options={dataFormula.map((i) => ({
                              value: i._id,
                              label: i.title,
                              data: i,
                            }))}
                            placeholder={"انتخاب فرمول"}
                            onChange={changeFrmHandler}
                          />
                          <InputCom
                            type={"req"}
                            onChenge={(e) => setInputCount(e.target.value)}
                            placeholder={"مقدار مورد تولید"}
                          />
                          <div className="w-full flex gap-3">
                            <ButtonAfra
                              onClick={addDataToToolid}
                              type={"green"}
                              text={"نمایش نتیجه"}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                        <div className="mt-3 w-full">
                          {showToolidReport ? (
                            <TableAfra
                              type={"green"}
                              data={dataToolidShow.map((newPRD) => ({
                                key: newPRD.key,
                                name: newPRD.name,
                                toolid: inputCount,
                                count: newPRD.count,
                                storage: newPRD.mojoodi,
                                kasri:
                                  parseInt(newPRD.mojoodi) >
                                  parseInt(inputCount)
                                    ? "خیر"
                                    : "بله",
                              }))}
                              columns={[
                                {
                                  title: "نام کالا",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },

                                {
                                  title: "تعداد در فرمول",
                                  dataIndex: "count",
                                  key: "count",
                                  sorter: true,
                                },
                                {
                                  title: "تعداد در برنامه",
                                  dataIndex: "toolid",
                                  key: "toolid",
                                  sorter: true,
                                },
                                {
                                  title: "موجودی کالا",
                                  dataIndex: "storage",
                                  key: "storage",
                                  sorter: true,
                                },
                                {
                                  title: "کسری دارد؟",
                                  dataIndex: "kasri",
                                  key: "kasri",
                                  sorter: true,
                                },
                              ]}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        {showToolidReport ? (
                          <div className="w-full mt-3 flex justify-center">
                            <div className="w-[150px]">
                              <ButtonAfra
                                onClick={toolidNahaei}
                                type={"green"}
                                showLoad={showLoadToolid}
                                text={"ثبت نهایی"}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}

            {/* Amar */}

            {showAmar ? (
              <CardStat
                type={"10"}
                title={"آمار و گزارشات"}
                des={"  آمار و گزارشات خود را در این بخش ببینید"}
                data={
                  <>
                    <div className="w-full">
                      <div className="grid w-full grid-cols-1 justify-center items-center gap-3">
                        <LineChart
                          className=" mx-auto"
                          width={900}
                          height={450}
                          series={[
                            {
                              data: pData,
                              label: "محصولات",
                              yAxisKey: "leftAxisId",
                            },
                            {
                              data: uData,
                              label: "دسته بندی ها",
                              yAxisKey: "leftAxisId",
                            },
                            {
                              data: sData,
                              label: "انبار ها",
                              yAxisKey: "leftAxisId",
                            },
                            {
                              data: tData,
                              label: "پیش بینی تولید",
                              yAxisKey: "leftAxisId",
                            },
                            {
                              data: fData,
                              label: "فرمولاسیون",
                              yAxisKey: "leftAxisId",
                            },
                          ]}
                          xAxis={[{ scaleType: "point", data: xLabels }]}
                          yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
                          rightAxis="rightAxisId"
                        />
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}

            {showBroker ? (
              <CardStat
                type={"10"}
                title={"لیست خرید کارپرداز"}
                des={"لیست خرید کارپرداز خود را در این بخش ببینید"}
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
                        aria-label="لیست کل خرید ها"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <TableAfra
                          type={"green"}
                          data={dataBroker.map((visitor) => ({
                            key: visitor._id,
                            name: !visitor.title ? "-" : visitor.title,
                            des: !visitor.code ? "-" : visitor.code,
                            type: !visitor.adminName ? "-" : visitor.adminName,
                            status: !visitor.status ? "-" : "تائید شده",
                            operation: (
                              <>
                                <Tag
                                  onClick={() => showModalKharid(visitor)}
                                  color="green"
                                >
                                  مشاهده
                                </Tag>
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
                              title: "کد",
                              dataIndex: "des",
                              key: "des",
                              sorter: true,
                            },
                            {
                              title: "ایجاد کننده",
                              dataIndex: "type",
                              key: "type",
                              sorter: true,
                            },
                            {
                              title: "وضعیت",
                              dataIndex: "status",
                              key: "status",
                              sorter: true,
                            },

                            {
                              title: "عملیات",
                              dataIndex: "operation",
                              key: "operation",
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
                        aria-label="افزودن خرید"
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-4 gap-3 items-end">
                          <InputCom
                            onChenge={(e) => setNameKar(e.target.value)}
                            type={"req"}
                            placeholder={"نام را وارد کنید"}
                          />

                          <InputCom
                            onChenge={(e) => setCountKar(e.target.value)}
                            type={"req"}
                            placeholder={"تعداد را وارد کنید"}
                          />
                          <InputCom
                            type={"req"}
                            onChenge={(e) => setPriceKAr(e.target.value)}
                            placeholder={"قیمت را وارد کنید"}
                          />

                          <div className="w-full flex gap-3 ">
                            <ButtonAfra
                              type={"green"}
                              text={"ثبت"}
                              onClick={addProductToTableKar}
                            />
                            <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-3 ">
                          <InputCom
                            col={5}
                            row={5}
                            type={"textarea"}
                            onChenge={(e) => setDesKAr(e.target.value)}
                            placeholder={"توضیحات درخواست خرید"}
                          />
                        </div>
                        <div className="w-full mt-3">
                          <TableAfra
                            data={tableDataKar}
                            type={"green"}
                            columns={[
                              {
                                title: "نام",
                                dataIndex: "name",
                                key: "name",
                              },
                              {
                                title: "تعداد",
                                dataIndex: "count",
                                key: "count",
                              },

                              {
                                title: "قیمت",
                                dataIndex: "price",
                                key: "price",
                              },
                              {
                                title: "عملیات",
                                dataIndex: "operation",
                                key: "operation",
                              },
                            ]}
                          />
                        </div>

                        <div className="w-full mt-3 flex justify-center">
                          <div className="w-[350px] flex justify-center gap-3 ">
                            <ButtonAfra
                              type={"green"}
                              showLoad={showLoadRecive}
                              text={"ثبت نهایی درخواست"}
                              onClick={sendPrdToServerKar}
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
          </div>
        </div>
      </div>

      {/* Modal Edit PrD */}
      <Modal
        title={
          <div className="w-[90%] flex justify-between ">
            <p>ویرایش کالا</p>
            <p>{data2Edit.title}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={sendDataToServerEdit}
              type={"green"}
              showLoad={showLoadPrd}
              text={"ثبت"}
            />
            <ButtonAfra
              onClick={() => setOpen(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">ویرایش اطلاعات کالا</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات کالای مورد نظر خود را ویرایش کنید
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full items-end">
            <div className="w-full gap-3 grid grid-cols-2 items-end">
              <InputCom
                onChenge={changeHandlerEdit}
                name={"title"}
                type={"req"}
                value={data2Edit.title}
                placeholder={"نام کالا را وارد کنید"}
              />
              <InputCom
                onChenge={changeHandlerEdit}
                name={"code"}
                type={"req"}
                value={data2Edit.code}
                placeholder={"کد اختصاصی کالا را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandlerEdit}
                name={"des"}
                type={"req"}
                value={data2Edit.des}
                placeholder={"توضیحات کالا را وارد کنید"}
              />

              <InputCom
                onChenge={changeHandlerEdit}
                name={"machineCount"}
                type={"req"}
                value={data2Edit.machineCount}
                placeholder={"تعداد ماشین آلات مورد استفاده را وارد کنید"}
              />
            </div>

            <InputCom
              onChenge={changeHandlerEdit}
              name={"price"}
              type={"req"}
              value={data2Edit.price}
              placeholder={"قیمت را وارد کنید"}
            />

            <SelectCombo
              defaultValue={data2Edit.sourceName}
              options={dataSource.map((data) => ({
                value: data._id,
                label: data.sourceName,
              }))}
              name="erpCount"
              onChange={changeHandlerSourceEdit}
              placeholder={"انبار مورد استفاده را انتخاب کنید"}
            />

            <SelectCombo
              defaultValue={data2Edit.erpCount}
              options={[
                {
                  value: "1",
                  label: "0-5",
                },
                {
                  value: "2",
                  label: "5-10",
                },
                {
                  value: "3",
                  label: "10-20",
                },
                {
                  value: "4",
                  label: "20-50",
                },
                {
                  value: "5",
                  label: "50-100",
                },
                {
                  value: "6",
                  label: "100 به بالا",
                },
              ]}
              name="erpCount"
              onChange={changeHandler3Edit}
              placeholder={"منابع انسانی مورد استفاده را انتخاب کنید"}
            />

            <SelectCombo
              defaultValue={data2Edit.vahed}
              options={[
                {
                  value: "1",
                  label: "کیلو",
                },
                {
                  value: "3",
                  label: "گرم",
                },
                {
                  value: "4",
                  label: "تن",
                },
                {
                  value: "5",
                  label: "عدد",
                },
                {
                  value: "6",
                  label: "متراژ",
                },
              ]}
              name="vahed"
              onChange={changeHandlerVahedEdit}
              placeholder={"واحد کالا را انتخاب کنید"}
            />

            <SelectCombo
              defaultValue={data2Edit.status}
              options={[
                {
                  value: "1",
                  label: "فعال",
                },
                {
                  value: "3",
                  label: "غیرفعال",
                },
              ]}
              name="vahed"
              onChange={changeHandlerStatusEdit}
              placeholder={"وضعیت کالا را انتخاب کنید"}
            />
          </div>
        </div>
      </Modal>

      {/* Modal Delete */}

      <Modal
        title={
          <div className="w-[90%] flex justify-between ">
            <p>حذف داده</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={deletePrd}
              type={"red"}
              showLoad={showLoad5}
              text={"حذف"}
            />
            <ButtonAfra
              onClick={() => setOpenDelete(false)}
              type={"blue-dark"}
              text={"انصراف"}
            />
          </div>
        }
        loading={loadingDelete}
        open={openDelete}
        onCancel={() => setOpenDelete(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">حذف داده</div>
            <div className="text-[12px] font-normal text-zinc-500">
              آیا از حذف این داده مطمئن هستید؟
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Mojodi */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>موجودی انبار : </p>
            <p>{anbarName}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-3">
            <ButtonAfra
              onClick={() => setOpenAnbar(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingAnbar}
        open={openAnbar}
        onCancel={() => setOpenAnbar(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">موجودی های کالا در انبار</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید موجودی انبار مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3">
              <TableAfra
                type={"green"}
                data={dataAnbarMojoodi.map((visitor) => ({
                  key: visitor._id,
                  name: visitor.title,
                  code: visitor.code,
                  count: !visitor.mainCount
                    ? 0
                    : visitor.mainCount == "NaN"
                      ? 0
                      : visitor.mainCount,
                  price: !visitor.price ? 0 : visitor.price,
                  vahed: !visitor.vahed ? 0 : visitor.vahed,

                  opr: (
                    <>
                      <div className="w-full flex gap-3 justify-center">
                        <Tag
                          onClick={() => showAddAnbar(visitor)}
                          color="green"
                          className="text-[14px] cursor-pointer"
                        >
                          ثبت ورود کالا
                        </Tag>
                        <Tag
                          onClick={() => showDecAnbar(visitor)}
                          color="red"
                          className="text-[14px] cursor-pointer"
                        >
                          ثبت خروج کالا
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
                    title: "کد",
                    dataIndex: "code",
                    key: "code",
                    sorter: true,
                  },
                  {
                    title: "موجودی",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                  },

                  {
                    title: "قیمت",
                    dataIndex: "price",
                    key: "price",
                    sorter: true,
                  },
                  {
                    title: "واحد",
                    dataIndex: "vahed",
                    key: "vahed",
                    sorter: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal add Mojodi */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>افزایش موجودی کالا : </p>
            <p>{kalaName}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={addMojodi}
              type={"green"}
              showLoad={loadIncarse}
              text={"ثبت"}
            />
            <ButtonAfra
              onClick={() => setOpenAnbarAdd(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingAnbarAdd}
        open={openAnbarAdd}
        onCancel={() => setOpenAnbarAdd(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">ثبت ورود کالا</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید موجودی کالای مورد نظر خود را افزایش دهید
            </div>

            <div className="w-full mt-3">
              <InputCom
                onChenge={changeIncraseMojodi}
                type={"req"}
                placeholder={"تعداد ورودی را وارد کنید"}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal dec Mojodi */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>کاهش موجودی کالا : </p>
            <p>{kalaName}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={decMojodi}
              type={"green"}
              showLoad={loadDecrase}
              text={"ثبت"}
            />
            <ButtonAfra
              onClick={() => setOpenAnbarDec(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingAnbarDec}
        open={openAnbarDec}
        onCancel={() => setOpenAnbarDec(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">ثبت خروج کالا</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید موجودی کالای مورد نظر خود را کاهش دهید
            </div>

            <div className="w-full mt-3">
              <InputCom
                onChenge={changeDecraseMojodi}
                type={"req"}
                placeholder={"تعداد خروجی را وارد کنید"}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Detail Anbar */}
      <Modal
        title={
          <div className="w-[90%] flex gap-3">
            <p>اطلاعات انبار : </p>
            <p>{dataAnbarShow.title}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={() => setOpenModalAnbarShow(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingAnbarShow}
        open={openModalAnbarShow}
        onCancel={() => setOpenModalAnbarShow(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات انبار</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات انبار مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3 grid grid-cols-2 gap-3">
              <InputCom
                type={"dis"}
                value={"نام :" + " " + dataAnbarShow.title}
              />
              <InputCom
                type={"dis"}
                value={"دما :" + " " + dataAnbarShow.dama}
              />

              <InputCom
                type={"dis"}
                value={"نوع :" + " " + dataAnbarShow.type}
              />
              <InputCom
                type={"dis"}
                value={"واحد :" + " " + dataAnbarShow.vahed}
              />
            </div>
            <div className="w-full mt-3 flex flex-col gap-3">
              <InputCom
                type={"dis"}
                value={
                  "تاریخ انقضا :" +
                  " " +
                  (!dataAnbarShow.expire ? "ندارد" : dataAnbarShow.expire)
                }
              />
              <InputCom
                row={5}
                col={5}
                type={"textareaDis"}
                value={"توضیحات :" + " " + dataAnbarShow.des}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Delete Anbar */}

      <Modal
        title={
          <div className="w-[90%] flex justify-between ">
            <p>حذف داده</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3">
            <ButtonAfra
              onClick={deleteSource}
              type={"red"}
              showLoad={showLoad5}
              text={"حذف"}
            />
            <ButtonAfra
              onClick={() => setOpenDeleteAnbar(false)}
              type={"blue-dark"}
              text={"انصراف"}
            />
          </div>
        }
        loading={openDeleteAnbarLoad}
        open={openDeleteAnbar}
        onCancel={() => setOpenDeleteAnbar(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div>
              <Tag color="red">
                *نکته : تمامی کالا به همراه انبار حذف خواهد شد لطفا دقت فرمایید
              </Tag>
            </div>

            <div className="text-lg mt-3 font-bold">حذف داده</div>

            <div className="text-[12px] font-normal text-zinc-500">
              آیا از حذف این داده مطمئن هستید؟
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Resid Factor */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>نمایش فاکتور</p>

            {factorStatus == "true" ? (
              <Tag color="green">فاکتور تائید شده</Tag>
            ) : (
              <Tag color="red">فاکتور تائید نشده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex justify-center gap-3 items-end mt-3">
            {getCookieAccess == "1" ? (
              <div
                className={`w-2/3 ${factorStatus == "true" ? "hidden" : ""} flex gap-3 items-end`}
              >
                <InputCom
                  onChenge={(e) => setSignCode(e.target.value)}
                  type={"req"}
                  placeholder={"کد امضای مدیر جهت تایید فاکتور"}
                />
                <ButtonAfra
                  onClick={confirmFactor}
                  type={"blue"}
                  showLoad={loadEstelam}
                  text={"استعلام و احراز مدیر"}
                />
              </div>
            ) : (
              ""
            )}

            <div className="w-1/3 flex gap-3 items-end">
              <ButtonAfra
                onClick={() => printDiv("print-order")}
                type={"green"}
                text={"چاپ فاکتور"}
              />
              <ButtonAfra
                onClick={() => setOpenShowResid(false)}
                type={"blue-dark"}
                text={"بستن"}
              />
            </div>
          </div>
        }
        loading={loadingShowResid}
        open={openShowResid}
        onCancel={() => setOpenShowResid(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">فاکتور رسید انبار</div>
            <div className="text-[12px] font-normal text-zinc-500">
              می توانید فاکتور رسید انبار را با جزئیات و کالا ها ببینید.
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <Tag color="red">
                *نکته : این فاکتور بدون تایید مدیر فاقد اعتبار و اهمیت می باشد
              </Tag>
              <Tag color="red">
                *نکته : برای ویرایش اطلاعات شرکت یا ثبت آن از تنظیمات اقدام کنید
              </Tag>
              <Tag color="blue">
                *نکته : کد امضای مدیر توسط سیستم برای مدیر ایجاد شده است، از بخش
                تنظیمات قابل مشاهده است
              </Tag>
            </div>

            <div className="w-full mt-3">
              <div
                id="print-order"
                className="w-full print:border print:border-zinc-300 border flex flex-col border-zinc-300 h-fit "
              >
                <div className="w-full h-[60px] px-3 flex justify-center items-center">
                  <h2 className="text-lg w-[99%] flex justify-center items-center font-bold">
                    فاکتور رسید به انبار
                  </h2>
                  <span className="w-[1%] flex justify-end">
                    {new Date().toLocaleDateString("fa-ir")}
                  </span>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات خریدار</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3">
                    <span>نام فروشنده : {dataFactor.sellerName}</span>
                    <span>شناسه ملی : {dataFactor.nationalCode} </span>
                    <span>نشانی : {dataFactor.address}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>شماره اقتصادی : {dataFactor.bussinessNumber}</span>
                    <span> کد پستی : {dataFactor.postalCode}</span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>شماره ثبت : {dataFactor.sabtNmuber}</span>
                    <span> فکس : {dataFactor.fax}</span>
                    <span>تلفن : {dataFactor.phone}</span>
                  </div>
                </div>

                <div className=" border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات کالا</span>
                </div>
                <div className=" border-zinc-300 w-full flex h-fit">
                  <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    ردیف
                  </div>
                  <div className="w-40 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    کد کالا
                  </div>
                  <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    شرح کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    مقدار کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    مبلغ واحد
                  </div>
                  <div className="w-1/4 border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                    مبلغ کل
                  </div>
                </div>

                {dataShowFactorResidDetail.map((data, index) => (
                  <div className=" border-zinc-300 w-full flex h-fit">
                    <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {index + 1}
                    </div>
                    <div className="w-40 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.code}
                    </div>
                    <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.name}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.newVal}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {separate(!data.price ? 0 : data.price)}
                    </div>
                    <div className="w-1/4 border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                      {separate(
                        parseInt(!data.price ? 0 : data.price) *
                          parseInt(data.newVal)
                      ) + "ریال"}
                    </div>
                  </div>
                ))}
                <div className="  border-zinc-300 w-full flex h-fit">
                  <div className="w-2/3 border-l border-zinc-300 flex flex-col justify-center p-3">
                    <div className="w-full font-black text-[14px]">
                      کالاهای فوق در تاریخ{" "}
                      <span dir="ltr">{reciveDate.replaceAll("-", "/")}</span>{" "}
                      توسط{" "}
                      <span className="mr-1 ml-1">{reciverDetail + " "}</span>
                      تحویل انبار {anbarDetailResid} شده است.
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <div className="flex">
                      <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                        جمع کل
                      </div>
                      <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                        {separate(
                          dataShowFactorResidDetail.reduce(
                            (accumulator, transaction) => {
                              return (
                                accumulator +
                                parseInt(
                                  !transaction.price ? 0 : transaction.price
                                ) *
                                  parseInt(transaction.newVal)
                              );
                            },
                            0
                          )
                        ) + "ریال"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Havale Factor */}
      <Modal
        className="modal-big-data-2"
        title={
          <div className="w-[90%] flex gap-3">
            <p>نمایش فاکتور</p>

            {factorStatusHavale == "true" ? (
              <Tag color="green">فاکتور تائید شده</Tag>
            ) : (
              <Tag color="red">فاکتور تائید نشده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex justify-center gap-3 items-end mt-3">
            {getCookieAccess == "1" || getCookieAccess == "3" || getCookieAccess == "4" ? (
              <div
                className={`w-2/3 ${factorStatusHavale == "true" ? "hidden" : ""} flex gap-3 items-end`}
              >
                <InputCom
                  onChenge={(e) => setSignCode(e.target.value)}
                  type={"req"}
                  placeholder={"کد امضای مدیر جهت تایید فاکتور"}
                />
                <ButtonAfra
                  onClick={confirmFactorHavale}
                  type={"blue"}
                  showLoad={loadEstelam}
                  text={"استعلام و احراز مدیر"}
                />
              </div>
            ) : (
              ""
            )}

            <div className="w-1/3 flex gap-3 items-end">
              <ButtonAfra
                onClick={() => printDiv("print-order")}
                type={"green"}
                text={"چاپ فاکتور"}
              />
              <ButtonAfra
                onClick={() => setOpenShowHavale(false)}
                type={"blue-dark"}
                text={"بستن"}
              />
            </div>
          </div>
        }
        loading={loadingshowHavale}
        open={openShowHavale}
        onCancel={() => setOpenShowHavale(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">فاکتور حواله از انبار</div>
            <div className="text-[12px] font-normal text-zinc-500">
              می توانید فاکتور حواله از انبار را با جزئیات و کالا ها ببینید.
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <Tag color="red">
                *نکته : این فاکتور بدون تایید مدیر فاقد اعتبار و اهمیت می باشد
              </Tag>
              <Tag color="red">
                *نکته : برای ویرایش اطلاعات شرکت یا ثبت آن از تنظیمات اقدام کنید
              </Tag>
              <Tag color="blue">
                *نکته : کد امضای مدیر توسط سیستم برای مدیر ایجاد شده است، از بخش
                تنظیمات قابل مشاهده است
              </Tag>
            </div>

            <div className="w-full mt-3">
              <div
                id="print-order"
                className="w-full print:border print:border-zinc-300 border flex flex-col border-zinc-300 h-fit "
              >
                <div className="w-full h-[60px] px-3 flex justify-center items-center">
                  <h2 className="text-lg w-[99%] flex justify-center items-center font-bold">
                    فاکتور حواله از انبار
                  </h2>
                  <span className="w-[1%] flex justify-end">
                    {new Date().toLocaleDateString("fa-ir")}
                  </span>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات فروشنده</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3">
                    <span>نام فروشنده : {dataFactor.sellerName}</span>
                    <span>شناسه ملی : {dataFactor.nationalCode} </span>
                    <span>نشانی : {dataFactor.address}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>شماره اقتصادی : {dataFactor.bussinessNumber}</span>
                    <span> کد پستی : {dataFactor.postalCode}</span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>شماره ثبت : {dataFactor.sabtNmuber}</span>
                    <span> فکس : {dataFactor.fax}</span>
                    <span>تلفن : {dataFactor.phone}</span>
                  </div>
                </div>

                <div className=" border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات کالا</span>
                </div>
                <div className=" border-zinc-300 w-full flex h-fit">
                  <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    ردیف
                  </div>
                  <div className="w-40 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    کد کالا
                  </div>
                  <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    شرح کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    مقدار کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                   -
                  </div>
                  <div className="w-1/4 border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                    -
                  </div>
                </div>

                {dataShowFactorHavaleDetail.map((data, index) => (
                  <div className=" border-zinc-300 w-full flex h-fit">
                    <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {index + 1}
                    </div>
                    <div className="w-40 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.code}
                    </div>
                    <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.name}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.newVal}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {/* {separate(!data.price ? 0 : data.price)} */}
                      -
                    </div>
                    <div className="w-1/4 border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                      -
                      {/* {separate(
                        parseInt(!data.price ? 0 : data.price) *
                          parseInt(data.newVal)
                      ) + "ریال"} */}
                    </div>
                  </div>
                ))}
                <div className="  border-zinc-300 w-full flex h-fit">
                  <div className="w-2/3 border-l border-zinc-300 flex flex-col justify-center p-3">
                    <div className="w-full font-black text-[14px]">
                      کالاهای فوق در تاریخ{" "}
                      <span dir="ltr">
                        {reciveDateHavale.replaceAll("-", "/")}
                      </span>{" "}
                      توسط{" "}
                      <span className="mr-1 ml-1">
                        {reciverDetailHavale + " "}
                      </span>
                      از انبار {anbarDetailHavale} خارج شده است.
                    </div>
                    <div className="w-full grid grid-cols-4 gap-3 mt-2">
                    <div className="flex justify-center items-center h-[200px]">
                        <div className="border-l w-full h-full flex flex-col gap-3 ">
                          <span>امضا سرپرست</span>
                          {dataOrderDetailBuyer.statusOp == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyer.statusOpUserSignImage ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96 h-32"
                                  src={
                                    !dataOrderDetailBuyer.statusOpUserSignImage
                                      ? "#"
                                      : dataOrderDetailBuyer.statusOpUserSignImage
                                  }
                                />
                              )}
                            </span>
                          ) : (
                            "تائید نشده"
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-[200px]">
                        <div className="border-l w-full h-full flex flex-col gap-3 ">
                          <span>امضا مدیر مالی</span>

                          {dataOrderDetailBuyer.statusOpAdmin == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyer.statusOpUserAdminSignImage ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96  h-32"
                                  src={
                                    !dataOrderDetailBuyer.statusOpUserAdminSignImage
                                      ? "#"
                                      : dataOrderDetailBuyer.statusOpUserAdminSignImage
                                  }
                                />
                              )}
                            </span>
                          ) : (
                            "تائید نشده"
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-[200px]">
                        <div className="border-l w-full h-full flex flex-col gap-3 ">
                          <span>امضا انبار دار</span>

                          {dataOrderDetailBuyer.statusOpAdminAnbardar == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyer.statusOpUserAdminSignImageAnbardar ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96  h-32"
                                  src={
                                    !dataOrderDetailBuyer.statusOpUserAdminSignImageAnbardar
                                      ? "#"
                                      : dataOrderDetailBuyer.statusOpUserAdminSignImageAnbardar
                                  }
                                />
                              )}
                            </span>
                          ) : (
                            "تائید نشده"
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-[200px]">
                        <div className=" w-full h-full flex flex-col gap-3 ">
                          <span>امضا مدیرعامل</span>

                          {dataOrderDetailBuyer.status == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyer.statusSignImage == "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96 h-32"
                                  src={
                                    !dataOrderDetailBuyer.statusSignImage
                                      ? "#"
                                      : dataOrderDetailBuyer.statusSignImage
                                  }
                                />
                              )}
                            </span>
                          ) : (
                            "تائید نشده"
                          )}
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className="w-1/3 flex flex-col">
                   {/* " <div className="flex">
                      <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                        جمع کل
                      </div>
                      <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                        {separate(
                          dataShowFactorHavaleDetail.reduce(
                            (accumulator, transaction) => {
                              return (
                                accumulator +
                                parseInt(
                                  !transaction.price ? 0 : transaction.price
                                ) *
                                  parseInt(transaction.newVal)
                              );
                            },
                            0
                          )
                        ) + "ریال"}
                      </div>
                    </div>" */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Detail Anbar */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>اطلاعات فرمول : </p>
            <p>{detailFrmTitle}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={() => setOpenFrmDetail(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadFrmDetail}
        open={openFrmDetail}
        onCancel={() => setOpenFrmDetail(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات فرمولاسیون</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات فرمول مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3 ">
              <TableAfra
                type={"green"}
                data={detailFrmData.map((i, ind) => ({
                  key: ind,
                  name: i.name,
                  count: i.count,
                  vahed: i.vahed,
                  mojoodi: i.mojoodi,
                }))}
                columns={[
                  {
                    title: "نام کالا",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                  },
                  {
                    title: "مقدار در فرمول",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                  },
                  {
                    title: "واحد کالا",
                    dataIndex: "vahed",
                    key: "vahed",
                    sorter: true,
                  },
                  {
                    title: "موجودی انبار",
                    dataIndex: "mojoodi",
                    key: "mojoodi",
                    sorter: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Detail Toolid */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>اطلاعات تولید : </p>
            <p>{dataToolidShowDetail.title}</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={() => setOpenToolidDetail(false)}
              type={"green"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingToolid}
        open={openToolidDetail}
        onCancel={() => setOpenToolidDetail(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات تولید</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات تولید مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3 ">
              <TableAfra
                type={"green"}
                data={dataToolidShowDetail2.map((newPRD, ind) => ({
                  key: ind,
                  name: newPRD.name,
                  toolid: newPRD.count,
                  count: showCountFrm,
                  storage: newPRD.mojoodi,
                  kasri:
                    parseInt(newPRD.mojoodi) > parseInt(newPRD.count)
                      ? "خیر"
                      : "بله",
                }))}
                columns={[
                  {
                    title: "نام کالا",
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                  },

                  {
                    title: "تعداد در فرمول",
                    dataIndex: "count",
                    key: "count",
                    sorter: true,
                  },
                  {
                    title: "تعداد در برنامه",
                    dataIndex: "toolid",
                    key: "toolid",
                    sorter: true,
                  },
                  {
                    title: "موجودی کالا",
                    dataIndex: "storage",
                    key: "storage",
                    sorter: true,
                  },
                  {
                    title: "کسری دارد؟",
                    dataIndex: "kasri",
                    key: "kasri",
                    sorter: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show Havale Factor */}
      <Modal
        className="modal-big-data-2"
        title={
          <div className="w-[90%] flex gap-3">
            <p>نمایش درخواست</p>

            {dataBrokerShowObj.statusOpAdminAnbardar == "true" ? (
              <Tag color="green">فاکتور تائید شده</Tag>
            ) : (
              <Tag color="red">فاکتور تائید نشده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex justify-center gap-3 items-end mt-3">
            {getCookieAccess == "1" ? (
              <div
                className={`w-2/3 ${dataBrokerShowObj.status == "true" ? "hidden" : ""} flex gap-3 items-end`}
              >
                <InputCom
                  onChenge={(e) => setSignCode2(e.target.value)}
                  type={"req"}
                  placeholder={"کد امضای اپراتور یا مدیر جهت تایید فاکتور"}
                />
                <ButtonAfra
                  onClick={confirmFactorDarxast}
                  type={"blue"}
                  showLoad={loadEstelam}
                  text={"استعلام و احراز اپراتور یا مدیر"}
                />
              </div>
            ) : (
              ""
            )}

            <div className="w-1/3 flex gap-3 items-end">
              <ButtonAfra
                onClick={() => printDiv("print-order")}
                type={"green"}
                text={"چاپ فاکتور"}
              />
              <ButtonAfra
                onClick={() => setDataBrokerShow(false)}
                type={"blue-dark"}
                text={"بستن"}
              />
            </div>
          </div>
        }
        loading={dataBrokerShowLoad}
        open={dataBrokerShow}
        onCancel={() => setDataBrokerShow(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">درخواست خرید کالا</div>
            <div className="text-[12px] font-normal text-zinc-500">
              می توانید درخواست خرید را با جزئیات و کالا ها ببینید.
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <Tag color="red">
                *نکته : این فاکتور بدون تایید مدیر فاقد اعتبار و اهمیت می باشد
              </Tag>
              <Tag color="blue">
                *نکته : کد امضای مدیر توسط سیستم برای مدیر ایجاد شده است، از بخش
                تنظیمات قابل مشاهده است
              </Tag>
            </div>

            <div className="w-full mt-3">
              <div
                id="print-order"
                className="w-full print:border print:border-zinc-300 border flex flex-col border-zinc-300 h-fit "
              >
                <div className="w-full h-[60px] px-3 flex justify-center items-center">
                  <h2 className="text-lg w-[99%] flex justify-center items-center font-bold">
                    درخواست خرید
                  </h2>
                  <span className="w-[1%] flex justify-end">
                    {new Date().toLocaleDateString("fa-ir")}
                  </span>
                </div>

                <div className=" border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات کالا</span>
                </div>
                <div className=" border-zinc-300 w-full flex h-fit">
                  <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    ردیف
                  </div>
                  <div className="w-1/6 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]"></div>
                  <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    شرح کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    مقدار کالا
                  </div>
                  <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                    قیمت کالا
                  </div>
                </div>

                {dataBrokerShowObj.products.map((data, index) => (
                  <div className=" border-zinc-300 w-full flex h-fit">
                    <div className="w-14 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {index + 1}
                    </div>
                    <div className="w-1/6 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]"></div>
                    <div className="w-2/3 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.name}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {data.count}
                    </div>
                    <div className="w-24 border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                      {separate(data.price) + " " + "ریال"}
                    </div>
                  </div>
                ))}
                <div className="  border-zinc-300 w-full flex h-fit">
                  <div className="w-2/3 border-l border-zinc-300 flex flex-col justify-center p-3">
                    <div className="w-full grid grid-cols-3 gap-3">
                      <div className="flex justify-center items-center h-[200px]">
                        <div className=" w-full h-full flex flex-col gap-3 ">
                          <span>امضا مدیرعامل</span>

                          {dataBrokerShowObj.status == "true" ? (
                            <span className="mx-auto">
                              {dataBrokerShowObj.statusSignImage == "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96 h-32"
                                  src={
                                    !dataBrokerShowObj.statusSignImage
                                      ? "#"
                                      : dataBrokerShowObj.statusSignImage
                                  }
                                />
                              )}
                            </span>
                          ) : (
                            "تائید نشده"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <div className="flex">
                      <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                        جمع کل
                      </div>
                      <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                        {separate(
                          dataBrokerShowObj.products.reduce(
                            (accumulator, transaction) => {
                              return (
                                accumulator +
                                parseInt(
                                  !transaction.price ? 0 : transaction.price
                                ) *
                                  parseInt(transaction.count)
                              );
                            },
                            0
                          )
                        ) + "ریال"}
                      </div>
                    </div>
                    <div className="mt-2 p-3">
                      توضیحات : {dataBrokerShowObj.des}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {contextHolder}
    </>
  );
};

export default produtionPage;
