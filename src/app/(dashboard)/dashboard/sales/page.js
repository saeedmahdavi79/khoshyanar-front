"use client";
import { Modal, notification, Tabs, Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { useRouter } from "next/navigation";
import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import TableAfra from "@/app/components/modules/TableAfra";
import { green } from "@mui/material/colors";
import InputCom from "@/app/components/modules/Inputs";
import SelectCombo from "@/app/components/modules/SelectCombo";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";
import baseUrl from "@/utils/baseUrl";
import separate from "@/utils/3Ragham";
import { PlusSquareOutlined } from "@ant-design/icons";
import {
  Call02Icon,
  ContractsIcon,
  TelegramIcon,
  UserAccountIcon,
  WhatsappIcon,
} from "hugeicons-react";
import ConvertEnNumberToPersian from "@/utils/numberConv";

const sales = () => {
  const Map = dynamic(() => import("@/app/components/modules/Map"), {
    ssr: false,
  });
  const MapDetail = dynamic(
    () => import("@/app/components/modules/MapDetail"),
    {
      ssr: false,
    }
  );

  const baseUrlState = "https://iran-locations-api.ir/api/v1/fa/states";
  //const getCookieAccess = getCookie("UiS");
  //const getCookieAccess = getCookie("CusI");

  const [api, contextHolder] = notification.useNotification();
  const [getCookieAccess, setGetAccess] = useState("");

  useEffect(() => {
    try {
      fetch(baseUrl("/sync/get-states"), {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setStatesData(data.getStatesData);
          setStatesDataHg(data.getStatesData);
        });
    } catch (error) {
      console.log(error);
    }

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
          setGetAccess(data.user.access);
          if (data.user.access == "7") {
            setShowFirstPage(2);
          }
        }
      });
  }, []);

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "ثبت انجام نشد",
      description: "ثبت داده ها انجام نشد لطفا تمامی موارد را پر کنید",
    });
  };
  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "ثبت با موفقیت انجام شد",
      description: "اطلاعات وارد شده با موفقیت ثبت شد",
    });
  };

  const openNotificationWithIconDel = (type) => {
    api[type]({
      message: "حذف انجام نشد",
      description: "حذف داده ها انجام نشد لطفا تمامی موارد را پر کنید",
    });
  };
  const openNotificationWithIconDel2 = (type) => {
    api[type]({
      message: "حذف با موفقیت انجام شد",
      description: "حذف با موفقیت ثبت شد",
    });
  };

  const [showFirstPage, setShowFirstPage] = useState(0);
  const [activButton, setActivButton] = useState(
    getCookieAccess == "7" ? 2 : 0
  );
  const [statesData, setStatesData] = useState([]);
  const [cityDataShow, setCityDataShow] = useState([]);

  const menu = [
    { title: "مشتریان" },
    { title: "سرنخ ها" },
    { title: " سفارشات" },
    { title: "حواله های فروش" },
    { title: " معاملات" },
    { title: "دفترچه مخاطبین" },
  ];

  const filteredMenu = getCookieAccess == "7" ? menu.slice(2, 3, 4) : menu;

  const handleButton = (button) => {
    setActivButton(button);
    setShowFirstPage(button);
  };

  const [inputs, setInputs] = useState({
    facturyName: "",
    factoryType: "",
  });

  const changeHandlerFacturyName = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const changeHandlerFactoryType = (e) => {
    setInputs({ ...inputs, factoryType: e.label });
  };

  const setAlert = () => {
    if (!inputs.facturyName || !inputs.factoryType) {
      openNotificationWithIcon("error");
    } else {
      openNotificationWithIcon2("success");
    }
  };

  const options1 = [
    { value: "1", label: "سهامی عام" },
    { value: "2", label: "سهامی خاص" },
    { value: "3", label: "دولتی" },
    { value: "4", label: "خصوصی" },
    { value: "5", label: "تعاونی" },
    { value: "6", label: "تولیدی" },
    { value: "7", label: "نمایندگی" },
    { value: "8", label: "خدماتی" },
    { value: "9", label: "صنعتی" },
    { value: "10", label: "بازرگانی" },
    { value: "11", label: "آموزشی" },
    { value: "12", label: "تجاری" },
    { value: "13", label: "ساختمانی" },
    { value: "14", label: "درب" },
    { value: "15", label: "سایر" },
  ];

  //customers

  let arrayMap = [51.4055941, 35.70019216];
  const [mapData, setMapData] = useState([51.4055941, 35.70019216]);
  const [loadCustomer, setLoadCustomer] = useState(false);

  const [name, setName] = useState("");
  const [perName, setPerName] = useState("");
  const [financialCode, setFinancialCode] = useState("");
  const [conName, setConName] = useState("");
  const [conDes, setConDes] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [workType, setWorkType] = useState("");
  const [countOfPersonel, setCountOfPersonel] = useState("");
  const [ownerShip, setOwnerShip] = useState("");
  const [connection, setConnection] = useState("");
  const [relationType, setRelationType] = useState("");
  const [phone, setPhone] = useState("");

  const [lon, setLon] = useState(51.4055941);
  const [lat, setLat] = useState(35.70019216);

  const handleLocationChange = (newLngLat) => {
    setLon(newLngLat[1]);
    setLat(newLngLat[0]);
  };

  const changeDataDateHandler = (e) => {
    let fullDate = e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD;

    setBirthDate(fullDate);
  };

  const setCityData = (e) => {
    setState(e.value);

    fetch(baseUrl("/sync/get-city"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: e.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCityDataShow(data.getCityData[0].cities);
      });
  };

  const changeDataCityHandler = (e) => {
    setCity(e.value);
  };

  const changeDataPerHandler = (e) => {
    setPerName(e.value);
  };

  const changeDataConHandler = (e) => {
    setConName(e.value);
  };

  const changeDataWorkHandler = (e) => {
    setWorkType(e.value);
  };

  const changeDataRelHandler = (e) => {
    setRelationType(e.value);
  };

  const changeDataOwnerHandler = (e) => {
    setOwnerShip(e.value);
  };

  const openNotificationWithIconSabt = (type) => {
    api[type]({
      message: "ثبت موفق",
      description: "ثبت با موفقیت انجام شد",
    });
  };

  const openNotificationWithIconSabt2 = (type) => {
    api[type]({
      message: "ثبت ناموفق",
      description: "ثبت داده در سیستم ناموفق بود",
    });
  };

  const addCustomer = () => {
    const getCookies = getCookie("WuZiK");
    const tokenTak = getCookie("TakSess");

    setLoadCustomer(true);

    fetch(baseUrl("/contact/create-customer"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        perName,
        financialCode,
        conName,
        conDes,
        birthDate,
        nationalCode,
        state,
        city,
        address,
        postalCode,
        workType,
        relationType,
        countOfPersonel,
        ownerShip,
        connection,
        type: "1",
        lon,
        lat,
        phone,
        tokenTak,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIconSabt("success");
          setLoadCustomer(false);
          dataRefresh();
        } else {
          openNotificationWithIconSabt2("error");
          setLoadCustomer(false);
        }
      });
  };

  const [customerData, setCustomerData] = useState([]);

  const spellContacts = (spell) => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-customers"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data
          ? setCustomerData([])
          : setCustomerData(
              data.data.dataGet.filter((k) => k.name.startsWith(spell))
            );
      });
  };

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-havale-sell"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? seHavaleSell([]) : seHavaleSell(data.data.dataGet);
      });

    fetch(baseUrl("/contact/get-customers"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setCustomerData([]) : setCustomerData(data.data.dataGet);
      });
  }, []);

  const [openCustomerDetail, setOpenCustomerDetail] = useState(false);
  const [openCustomerDetailLoad, setOpenCustomerDetailLoad] = useState(false);
  const [customerShowData, setCustomerShowData] = useState({});
  const [customerMande, setCustomerMande] = useState("");
  const [customerGardesh, setCustomerGardesh] = useState([]);

  const showDataCustomer = (data) => {
    setOpenCustomerDetail(true);
    setOpenCustomerDetailLoad(true);
    setCustomerShowData(data);

    getDetailCustomer(data.financialCode);

    const token = getCookie("TakSess");
    const WuZiK = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-mande"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WuZiK}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: data.financialCode,
        tokenTakro: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCustomerMande(data.responseData.result);
      });
  };

  const getDetailCustomer = (id) => {
    const token = getCookie("TakSess");
    const WuZiK = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-customers-data"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WuZiK}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        tokenTak: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpenCustomerDetailLoad(false);
      });

    fetch(baseUrl("/contact/get-gardesh"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WuZiK}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: id,
        tokenTakro: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomerGardesh(data.responseData.result);
      });
  };

  const removeCustomer = (id) => {
    const WuZiK = getCookie("WuZiK");

    fetch(baseUrl("/contact/remove-cus"), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${WuZiK}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          openNotificationWithIconDel2("success");
        } else {
          openNotificationWithIconDel("error");
        }
      });
  };

  //hogogi

  const mapRef = useRef();

  const handleLocationChangeHg = (newLngLat) => {
    if (mapRef.current) {
      setLonHg(newLngLat[0]);
      setLatHg(newLngLat[1]);
      setMapDataHg(newLngLat);
      mapRef.current.setLocation(newLngLat);
    }
  };

  const [mapDataHg, setMapDataHg] = useState([51.4055941, 35.70019216]);
  const [loadCustomerHg, setLoadCustomerHg] = useState(false);
  const [statesDataHg, setStatesDataHg] = useState([]);
  const [cityDataShowHg, setCityDataShowHg] = useState([]);

  const [nameHg, setNameHg] = useState("");
  const [typeCoHg, setTypeCoHg] = useState("");

  const [financialCodeHg, setFinancialCodeHg] = useState("");
  const [conNameHg, setConNameHg] = useState("");
  const [conDesHg, setConDesHg] = useState("");
  const [buissnessHg, setBuissnessHg] = useState("");
  const [sabtNumHg, setSabtNumHg] = useState("");

  const [birthDateHg, setBirthDateHg] = useState("");
  const [nationalCodeHg, setNationalCodeHg] = useState("");
  const [stateHg, setStateHg] = useState("");
  const [cityHg, setCityHg] = useState("");
  const [addressHg, setAddressHg] = useState("");
  const [postalCodeHg, setPostalCodeHg] = useState("");
  const [workTypeHg, setWorkTypeHg] = useState("");
  const [countOfPersonelHg, setCountOfPersonelHg] = useState("");
  const [ownerShipHg, setOwnerShipHg] = useState("");
  const [connectionHg, setConnectionHg] = useState("");
  const [relationTypeHg, setRelationTypeHg] = useState("");
  const [phoneHg, setPhoneHg] = useState("");

  const [lonHg, setLonHg] = useState("");
  const [latHg, setLatHg] = useState("");

  const setCityDataHg = (e) => {
    setStateHg(e.value);

    fetch("https://iran-locations-api.ir/api/v1/fa/cities?state=" + e.value, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCityDataShowHg(data[0].cities);
      });
  };

  const birthCalChange = (e) => {
    let fullDate = e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD;

    setBirthDateHg(fullDate);
  };

  const addCustomerHg = () => {
    const getCookies = getCookie("WuZiK");
    setLoadCustomerHg(true);

    fetch(baseUrl("/contact/create-customer"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameHg,

        financialCode: financialCodeHg,
        conName: conNameHg,
        conDes: conDesHg,
        birthDate: birthDateHg,
        nationalCode: nationalCodeHg,
        state: stateHg,
        city: cityHg,
        address: addressHg,
        postalCode: postalCodeHg,
        workType: workTypeHg,
        relationType: relationTypeHg,
        countOfPersonel: countOfPersonelHg,
        ownerShip: ownerShipHg,
        connection: connectionHg,
        type: "2",
        lon: lonHg,
        lat: latHg,
        phone: phoneHg,
        sabtNumber: sabtNumHg,
        buissCode: buissnessHg,
        coType: typeCoHg,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIconSabt("success");
          setLoadCustomerHg(false);
        } else {
          openNotificationWithIconSabt2("error");
          setLoadCustomerHg(false);
        }
      });
  };

  // edit Customer

  const [editCustomer, setEditCustomer] = useState({});
  const [cityEditCustomer, setCityEditCustomer] = useState([]);

  const [editCustomerLoad, setEditCustomerLoad] = useState(false);
  const [openCustomer, setOpenCustomer] = useState(false);
  const [showLoadPrd, setShowLoadPrd] = useState(false);

  const showEditCustomer = (data) => {
    setEditCustomer({
      _id: data._id,
      name: data.name,
      perName: data.perName,
      financialCode: data.financialCode,
      conName: data.conName,
      conDes: data.conDes,
      birthDate: data.birthDate,
      nationalCode: data.nationalCode,
      state: data.state,
      city: data.city,
      address: data.address,
      postalCode: data.postalCode,
      workType: data.workType,
      relationType: data.relationType,
      countOfPersonel: data.countOfPersonel,
      ownerShip: data.ownerShip,
      connection: data.connection,
      type: data.type,
      coType: data.coType,
      sabtNumber: data.sabtNumber,
      buissCode: data.buissCode,
      lon: data.lon,
      lat: data.lat,
      phone: data.phone,
      des: data.des,
      userName: data.userName,
      password: data.password,
    });

    setOpenCustomer(true);
    setEditCustomerLoad(true);

    setTimeout(() => setEditCustomerLoad(false), 2000);
  };

  const changeStateHandler = (e) => {
    setEditCustomer({ ...editCustomer, state: e.value });

    fetch("https://iran-locations-api.ir/api/v1/fa/cities?state=" + e.value, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCityEditCustomer(data[0].cities);
      });
  };

  const changeCityHandler = (e) => {
    setEditCustomer({ ...editCustomer, city: e.value });
  };

  const changeHandler = (e) => {
    setEditCustomer({ ...editCustomer, [e.target.name]: e.target.value });
  };

  const handleLocationChangeEdit = (newLngLat) => {
    setEditCustomer({ ...editCustomer, lon: newLngLat[1], lat: newLngLat[0] });
  };

  const sendDataToServerEdit = async () => {
    const getCookiess = await getCookie("WuZiK");
    setShowLoadPrd(true);

    try {
      const postDatas = await fetch(baseUrl("/contact/edit-customer"), {
        method: "PUT",
        headers: {
          authorization: `Bearer ${getCookiess}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editCustomer),
      });

      const getResponses = await postDatas.json();

      if (getResponses.status == 202) {
        setShowLoadPrd(false);
        openNotificationWithIcon2("success");
      } else {
        setShowLoadPrd(false);
        openNotificationWithIcon("error");
      }
    } catch (error) {
      setShowLoadPrd(false);
      openNotificationWithIcon("error");
    }
  };

  //leads

  const [dataLeads, setDataLeads] = useState([]);
  const [dataLeadsAdd, setDataLeadsAdd] = useState({
    leadName: "",
    leadSubject: "",
    leadCompany: "",
    leadCompanyId: "",
    leadPosition: "",
    leadEmail: "",
    staticPhone: "",
    phone: "",
    leadWebsite: "",
    leadAddress: "",
    leadType: "",
    leadSource: "",
    leadLevel: "",
    leadStatus: "",
    leadCompanyCount: "",
  });
  const [loadLeads, setLoadLeads] = useState(false);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/getAll"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataLeads([]) : setDataLeads(data.data.dataGet)
      );
  }, []);

  const changeHandlerLeads = (e) => {
    setDataLeadsAdd({ ...dataLeadsAdd, [e.target.name]: e.target.value });
  };

  const changeHandlerLeadsData2 = (e) => {
    setDataLeadsAdd({ ...dataLeadsAdd, leadLevel: e.value });
  };

  const deleteLead = (id) => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/remove"), {
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
          openNotificationWithIconDel2("success");
          setLoadLeads(false);
        } else {
          openNotificationWithIconDel("error");
          setLoadLeads(false);
        }
      });
  };

  const addLeads = () => {
    setLoadLeads(true);
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/create"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataLeadsAdd),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon2("success");
          setLoadLeads(false);
        } else {
          openNotificationWithIcon("error");
          setLoadLeads(false);
        }
      });
  };

  const [datePrd, setDatePrd] = useState([]);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/product/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setDatePrd([]) : setDatePrd(data.data.dataGet);
      });
  }, []);

  //order
  const [tableFrm, setTableDataFrm] = useState([]);
  const [tableServerFrm, setTableDataServerFrm] = useState([]);
  const [selectedProductFrm, setSelectedProductFrm] = useState({});
  const [countData, setCountData] = useState("");
  const [pricePrd, setPricePrd] = useState("");
  const [desOrder, setDesOrder] = useState("");
  const [taxHandlerData, setTaxHandler] = useState("");

  const changePrdHandler = (e) => {
    setSelectedProductFrm(e.data);
  };

  const changeTaxHandler = (e) => {
    setTaxHandler(e.value);
  };

  const addProductToTableFrm = () => {
    const newProduct = {
      name: selectedProductFrm.title,
      count: countData,
      code: selectedProductFrm.code,

      vahed: selectedProductFrm.vahed,
      price: pricePrd == "" ? 0 : pricePrd,

      opr: (
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
      title: "پیش فاکتور",
      products: tableFrm,
    };

    setTableDataServerFrm([...tableServerFrm, PrdServer]);

    setTableDataFrm([...tableFrm, newProduct]);
  };

  const removeProductFromTableFrm = (id) => {
    const updatedData = tableFrm.filter((item) => item.name !== id);
    setTableDataFrm(updatedData);
  };

  const [dataIdCustomer, setDataIdCustomer] = useState("");

  const changeCustomerName = (e) => {
    setDataIdCustomer(e.value);
  };

  const sendPrdToServer = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/add-order"), {
      method: "POST",
      body: JSON.stringify({
        title: "پیش فاکتور",
        products: tableFrm,
        id: dataIdCustomer,
        des: desOrder,
        tax: taxHandlerData,
      }),
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon2("success");
          orderRefresh();
        } else {
          openNotificationWithIcon("error");
        }
      });
  };

  const [orderData, setOrderData] = useState([]);
  const [loadOrder, setLoadOrder] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);

  const [loadEstelam, setLoadEstelam] = useState(false);
  const [dataOrderDetail, setDataOrderDetail] = useState({
    products: [],
  });
  const [dataOrderDetailBuyer, setDataOrderDetailBuyer] = useState({});
  const [dataFactor, setDataFactor] = useState({});
  const [signCode, setSignCode] = useState("");
  const [orderId, setOrderId] = useState("");
  const [havaleSell, seHavaleSell] = useState([]);

  const [havaleData, setHavaleData] = useState([]);
  const [loadHavale, setLoadHavale] = useState(false);
  const [openHavale, setOpenHavale] = useState(false);

  const [loadEstelamHavale, setLoadEstelamHavale] = useState(false);
  const [dataOrderDetailHavale, setDataOrderDetailHavale] = useState({
    products: [],
  });
  const [dataOrderDetailBuyerHavale, setDataOrderDetailBuyerHavale] = useState(
    {}
  );
  const [signCodeHavale, setSignCodeHavale] = useState("");
  const [havaleId, setHavaleId] = useState("");

  const orderRefresh = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-orders"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setOrderData([]) : setOrderData(data.data.dataGet);
      });
  };

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-orders"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setOrderData([]) : setOrderData(data.data.dataGet);
      });

    fetch(baseUrl("/auth/get-setting"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataFactor({}) : setDataFactor(data.data.dataGet)
      );
  }, []);

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

  const showOrderDetail = (data) => {
    setLoadOrder(true);
    setOpenOrder(true);
    setOrderId(data._id);
    setDataOrderDetail(data);
    setDataOrderDetailBuyer(data);
    setTimeout(() => setLoadOrder(false), 2000);
  };

  const confirmFactorHavale = () => {
    const getCookies = getCookie("WuZiK");
    const tokenTak = getCookie("TakSess");

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
          if (data.thatsOp == false) {
            openNotificationWithIconSign("success");
            setLoadEstelam(false);

            fetch(baseUrl("/contact/confirm-order"), {
              method: "POST",
              headers: {
                Authorization: `Bearer ${getCookies}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                _id: orderId,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.status == 202) {
                  openNotificationWithIconSignConf("success");
                  setOpenOrder(false);
                  dataRefresh();
                } else {
                  openNotificationWithSignConf2("error");
                }
              });
          } else {
            if (data.thatsOpSarparast == true) {
              openNotificationWithIconSign("success");
              setLoadEstelam(false);

              fetch(baseUrl("/contact/confirm-order-operator"), {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${getCookies}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  _id: orderId,
                  tokenTak,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.status == 202) {
                    openNotificationWithIconSignConf("success");
                    setOpenOrder(false);
                    dataRefresh();
                  } else {
                    openNotificationWithSignConf2("error");
                  }
                });
            }
            if (data.thatsOpModir == true) {
              openNotificationWithIconSign("success");
              setLoadEstelam(false);

              fetch(baseUrl("/contact/confirm-order-operator-manage"), {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${getCookies}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  _id: orderId,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.status == 202) {
                    openNotificationWithIconSignConf("success");
                    setOpenOrder(false);
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

  const confirmFactorHavaleSell = () => {
    const getCookies = getCookie("WuZiK");
    const tokenTak = getCookie("TakSess");

    setLoadEstelam(true);
    fetch(baseUrl("/auth/sign-check"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signCode: signCodeHavale,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 200) {
          if (data.thatsOp == false) {
            openNotificationWithIconSign("success");
            setLoadEstelam(false);

            fetch(baseUrl("/contact/confirm-havale-manage"), {
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
                  setOpenHavale(false);
                  dataRefresh();
                } else {
                  openNotificationWithSignConf2("error");
                }
              });
          } else {
            if (data.thatsOpModir == true) {
              openNotificationWithIconSign("success");
              setLoadEstelam(false);

              fetch(baseUrl("/contact/confirm-havale-operator-manage"), {
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
                    setOpenHavale(false);
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

  const showHavaleDetail = (data) => {
    setLoadHavale(true);
    setOpenHavale(true);
    setHavaleId(data._id);
    setDataOrderDetailHavale(data);
    setDataOrderDetailBuyerHavale(data);
    setTimeout(() => setLoadHavale(false), 2000);
  };

  const dataRefresh = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/get-orders"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setOrderData([]) : setOrderData(data.data.dataGet);
      });

    fetch(baseUrl("/contact/get-havale-sell"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? seHavaleSell([]) : seHavaleSell(data.data.dataGet);
      });

    fetch(baseUrl("/auth/get-setting"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataFactor({}) : setDataFactor(data.data.dataGet)
      );

    fetch(baseUrl("/contact/get-customers"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => {
        !data.data ? setCustomerData([]) : setCustomerData(data.data.dataGet);
      });
  };

  //customer transfer

  const [dataPersonelApp, setDataPersonelApp] = useState([]);

  useEffect(() => {
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
  }, []);

  const [transferCustomerOpen, settransferCustomerOpen] = useState(false);
  const [transferCustomerLoad, settransferCustomerLoad] = useState(false);
  const [showLoadTransfer, setshowLoadTransfer] = useState(false);
  const [dataTransfer, setDataTransfer] = useState("");
  const [newAdmin, setNewAdmin] = useState("");

  const transferCustomer = (data) => {
    settransferCustomerOpen(true);
    settransferCustomerLoad(true);
    setDataTransfer(data._id);
    setTimeout(() => settransferCustomerLoad(false), 2000);
  };

  const transferCu = () => {
    setshowLoadTransfer(true);
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/contact/transfer-customer"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: dataTransfer,
        adminId: newAdmin,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon2("success");
          setshowLoadTransfer(false);
          dataRefresh();
        } else {
          openNotificationWithIcon("error");
          setshowLoadTransfer(false);
        }
      });
  };

  //Contract
  const [openContract, setOpenContract] = useState(false);
  const [loadContract, setLoadContract] = useState(false);

  const [loadingContract, setLoadingContract] = useState(false);
  const [dataContract, setDataContract] = useState({
    name: "",
    coName: "",
    text: "",
    phone: "",
    date: "",
    type: "",
    contractName: "",
    contractStep: "",
    contractPrice: "",
  });

  const [dataCont, setDataCont] = useState([]);

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/get-contracts"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataCont([]) : setDataCont(data.data.dataGet)
      );
  }, []);

  const showContractAdd = () => {
    setOpenContract(true);
    setLoadingContract(true);

    setTimeout(() => setLoadingContract(false), 2000);
  };

  const changeHandlerContract = (e) => {
    setDataContract({ ...dataContract, [e.target.name]: e.target.value });
  };
  const ContractDateChange = (e) => {
    let fullDate = e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD;
    setDataContract({ ...dataContract, date: fullDate });
  };
  const changeSelectContract = (e) => {
    setDataContract({ ...dataContract, contractStep: e.value });
  };

  const addContract = () => {
    setLoadContract(true);
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/create-contract"), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataContract),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon2("success");
          setLoadContract(false);
          refreshDataContract();
        } else {
          openNotificationWithIcon("error");
          setLoadContract(false);
        }
      });
  };

  const [showDataCont, setShowDataCont] = useState(false);
  const [showDataContLoad, setShowDataContLoad] = useState(false);
  const [dataCon, setDataCon] = useState({});
  const [dataContractEdit, setDataContractEdit] = useState({
    _id: "",
    name: "",
    coName: "",
    text: "",
    phone: "",
    date: "",
    type: "",
    contractName: "",
    contractStep: "",
    contractPrice: "",
  });

  const changeHandlerContractEdit = (e) => {
    setDataContractEdit({
      ...dataContractEdit,
      [e.target.name]: e.target.value,
    });
  };

  const ContractDateChangeEdit = (e) => {
    let fullDate = e.$jy + "-" + (e.$jM + 1) + "-" + e.$jD;
    setDataContractEdit({ ...dataContractEdit, date: fullDate });
  };

  const changeSelectContractEdit = (e) => {
    setDataContractEdit({ ...dataContractEdit, contractStep: e.value });
  };

  const showDataContract = (data) => {
    setShowDataCont(true);
    setShowDataContLoad(true);

    setTimeout(() => setShowDataContLoad(false), 2000);
    setDataCon(data);

    setDataContractEdit({
      _id: data._id,
      name: data.name,
      coName: data.coName,
      text: data.text,
      phone: data.phone,
      date: data.date,
      type: data.type,
      contractName: data.contractName,
      contractStep: data.contractStep,
      contractPrice: data.contractPrice,
    });
  };

  const [loadContractEdit, setLoadContractEdit] = useState(false);

  const [loadingDelContractEdit, setLoadingDelContractEdit] = useState(false);

  const addContractEdit = () => {
    setLoadContractEdit(true);
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/leads/edit-contract"), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${getCookies}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataContractEdit),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 202) {
          openNotificationWithIcon2("success");
          setLoadContractEdit(false);
          refreshDataContract();
        } else {
          openNotificationWithIcon("error");
          setLoadContractEdit(false);
        }
      });
  };

  const deleteContract = (id) => {
    const getCookies = getCookie("WuZiK");
    setLoadingDelContractEdit(true);
    fetch(baseUrl("/leads/remove-contract"), {
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
          openNotificationWithIconDel2("success");
          setLoadingDelContractEdit(false);
          refreshDataContract();
        } else {
          openNotificationWithIconDel("error");
          setLoadingDelContractEdit(false);
        }
      });
  };

  const totalAmount = dataOrderDetailHavale.products.reduce(
    (accumulator, transaction) => {
      const price = parseInt(!transaction.price ? 0 : transaction.price); // قیمت هر تراکنش
      const count = parseInt(transaction.count); // تعداد هر تراکنش
      const subtotal = price * count; // مبلغ هر تراکنش
      return accumulator + subtotal; // جمع کل مبالغ
    },
    0
  );

  // اضافه کردن ۱۰ درصد به جمع کل
  const totalAmountWithTax = totalAmount + (totalAmount * 10) / 100;
  const totalAmountWithTaxApp = (totalAmount * 10) / 100;

  const totalAmountFactor = dataOrderDetail.products.reduce(
    (accumulator, transaction) => {
      const price = parseInt(!transaction.price ? 0 : transaction.price); // قیمت هر تراکنش
      const count = parseInt(transaction.count); // تعداد هر تراکنش
      const subtotal = price * count; // مبلغ هر تراکنش
      return accumulator + subtotal; // جمع کل مبالغ
    },
    0
  );

  // اضافه کردن ۱۰ درصد به جمع کل
  const totalAmountWithFacTax =
    totalAmountFactor + (totalAmountFactor * 10) / 100;
  const totalAmountWithFacTaxApp = (totalAmountFactor * 10) / 100;

  return (
    <>
      <div className="w-full flex flex-col  h-full px-6 gap-4 py-1">
        {/* <div className="w-full flex justify-between items-center">
          <span className="text-black text-3xl py-6 font-bold">
            فروش و مشتریان
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
              {filteredMenu.map((data, index) => (
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
            {showFirstPage == 0 ? (
              <CardStat
                type={"10"}
                title={"مشتریان"}
                des={"مشتریان خود را در این بخش ببینید"}
                data={
                  <>
                    <div className="w-full mt-3">
                      <Tag color="blue">
                        *نکته : به دلیل کمبود داده در سامانه تکروسیستم می بایست
                        تمامی داده های مشتریان بروز شود .
                      </Tag>
                    </div>

                    <div
                      role="tablist"
                      className="tabs w-full mt-3 grid-cols-7 tabs-bordered"
                    >
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="لیست مشتریان"
                        defaultChecked
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full ">
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
                                title: "نام شخص حقیقی / حقوقی",
                                dataIndex: "name",
                                key: "name",
                                sorter: true,
                              },
                              {
                                title: "کد مشتری",
                                dataIndex: "modirname",
                                key: "modirname",
                                sorter: true,
                              },
                              {
                                title: "کد ملی / شناسه ملی",
                                dataIndex: "nati",
                                key: "nati",
                                sorter: true,
                              },

                              {
                                title: "استان",
                                dataIndex: "state",
                                key: "state",
                                sorter: true,
                              },
                              {
                                title: "شهر",
                                dataIndex: "city",
                                key: "city",
                                sorter: true,
                              },
                              {
                                title: "نام کاربری",
                                dataIndex: "birthDate",
                                key: "birthDate",
                                sorter: true,
                              },
                              {
                                title: "ایجاد کننده",
                                dataIndex: "adder",
                                key: "adder",
                                sorter: true,
                              },
                              {
                                title: "عملیات",
                                dataIndex: "opr",
                                key: "opr",
                                sorter: true,
                              },
                            ]}
                            data={customerData
                              .filter((l) => l.name != " ")
                              .map((leads, i) => ({
                                key: leads._id,
                                name: leads.name,
                                code: i + 1,
                                modirname: !leads.financialCode
                                  ? "-"
                                  : leads.financialCode,
                                financialCode: leads.financialCode,
                                birthDate:
                                  leads.userName == "" ? "-" : leads.userName,
                                state: leads.state == "" ? "-" : leads.state,
                                city: leads.city == "" ? "-" : leads.city,
                                adder: leads.adminUserName,
                                nati: leads.nationalCode,

                                opr: (
                                  <>
                                    <div className="w-full flex  justify-center items-center gap-3">
                                      <Tag
                                        className=" cursor-pointer"
                                        onClick={() => showDataCustomer(leads)}
                                        color="blue"
                                      >
                                        مشاهده
                                      </Tag>

                                      <Tag
                                        className=" cursor-pointer"
                                        onClick={() => showEditCustomer(leads)}
                                        color="green"
                                      >
                                        ویرایش
                                      </Tag>

                                      {getCookieAccess == "1" ? (
                                        <Tag
                                          className=" cursor-pointer"
                                          onClick={() =>
                                            transferCustomer(leads)
                                          }
                                          color="purple"
                                        >
                                          انتقال مشتری
                                        </Tag>
                                      ) : (
                                        ""
                                      )}

                                      <Tag
                                        className=" cursor-pointer"
                                        onClick={() =>
                                          removeCustomer(leads._id)
                                        }
                                        color="red"
                                      >
                                        حذف
                                      </Tag>
                                    </div>
                                  </>
                                ),
                              }))}
                          />
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="افزودن مشتری جدید "
                      />
                      <div role="tabpanel" className="tab-content px-3 py-3">
                        <div className="w-full grid grid-cols-1 gap-3">
                          <div className="w-full grid grid-cols-4 gap-3 mt-3 items-end">
                            <InputCom
                              name={"name"}
                              onChenge={(e) => setName(e.target.value)}
                              type={"req"}
                              placeholder={"نام"}
                            />
                            <SelectCombo
                              onChange={changeDataPerHandler}
                              options={[
                                {
                                  value: "آقا",
                                  label: "آقا",
                                },
                                {
                                  value: "خانم",
                                  label: "خانم",
                                },
                              ]}
                              placeholder={"پیشوند"}
                            />
                            <InputCom
                              name={"financialCode"}
                              onChenge={(e) => setFinancialCode(e.target.value)}
                              type={"req"}
                              placeholder={"کد اشتراک"}
                            />
                            <SelectCombo
                              onChange={changeDataConHandler}
                              options={[
                                {
                                  value: "مشتری",
                                  label: "مشتری",
                                },
                                {
                                  value: "تامین کننده",
                                  label: "تامین کننده",
                                },
                                {
                                  value: "مشتری / تامین کننده",
                                  label: "مشتری / تامین کننده",
                                },
                                {
                                  value: "نماینده",
                                  label: "نماینده",
                                },
                                {
                                  value: "همکار",
                                  label: "همکار",
                                },
                              ]}
                              placeholder={"نوع ارتباط"}
                            />
                            <InputCom
                              type={"req"}
                              name={"conDes"}
                              onChenge={(e) => setConDes(e.target.value)}
                              placeholder={"جزئیات بیشتر نوع ارتباط "}
                            />
                            <InputCom
                              onChenge={changeDataDateHandler}
                              type={"date"}
                              placeholder={"تاریخ تولد"}
                            />{" "}
                            <InputCom
                              name={"nationalCode"}
                              onChenge={(e) => setNationalCode(e.target.value)}
                              type={"req"}
                              placeholder={"کد ملی"}
                            />
                            <SelectCombo
                              options={statesData.map((i) => ({
                                value: i.name,
                                label: i.name,
                                lon: i.longitude,
                                lat: i.latitude,
                              }))}
                              onChange={setCityData}
                              placeholder={"استان"}
                            />
                            <SelectCombo
                              options={cityDataShow.map((i) => ({
                                value: i.name,
                                label: i.name,
                                lon: i.longitude,
                                lat: i.latitude,
                              }))}
                              onChange={changeDataCityHandler}
                              placeholder={"شهر"}
                            />
                            <InputCom
                              name={"address"}
                              onChenge={(e) => setAddress(e.target.value)}
                              type={"req"}
                              placeholder={"آدرس"}
                            />
                            <InputCom
                              name={"address"}
                              onChenge={(e) => setPhone(e.target.value)}
                              type={"req"}
                              placeholder={"شماره تلفن"}
                            />
                            <InputCom
                              name={"postalCode"}
                              onChenge={(e) => setPostalCode(e.target.value)}
                              type={"req"}
                              placeholder={"کد پستی"}
                            />
                            <SelectCombo
                              onChange={changeDataWorkHandler}
                              options={[
                                {
                                  value: "پخش کننده",
                                  label: "پخش کننده",
                                },
                                {
                                  value: "مصرف شخصی",
                                  label: "مصرف شخصی",
                                },
                                {
                                  value: "سازمانی",
                                  label: "سازمانی",
                                },
                                {
                                  value: "همکاری",
                                  label: "همکاری",
                                },
                              ]}
                              placeholder={"نوع فعالیت"}
                            />
                            <SelectCombo
                              onChange={changeDataRelHandler}
                              options={[
                                {
                                  value: "بازاریاب",
                                  label: "بازاریاب",
                                },
                                {
                                  value: "تبلیغات",
                                  label: "تبلیغات",
                                },
                                {
                                  value: "گوگل",
                                  label: "گوگل",
                                },
                                {
                                  value: "پیامک",
                                  label: "پیامک",
                                },
                                {
                                  value: "دوستان و آشنایان",
                                  label: "دوستان و آشنایان",
                                },
                              ]}
                              placeholder={"نحوه آشنایی"}
                            />
                            <InputCom
                              type={"dis"}
                              placeholder={
                                "مختصات جغرافیایی" + " " + lat + "-" + lon
                              }
                            />
                            <InputCom
                              type={"req"}
                              name={"countOfPersonel"}
                              onChenge={(e) =>
                                setCountOfPersonel(e.target.value)
                              }
                              placeholder={"تعداد کارکنان"}
                            />
                            <SelectCombo
                              onChange={changeDataOwnerHandler}
                              options={[
                                {
                                  value: "مالک",
                                  label: "مالک",
                                },
                                {
                                  value: "استیجاری",
                                  label: "استیجاری",
                                },
                                {
                                  value: "سرقفلی",
                                  label: "سرقفلی",
                                },
                              ]}
                              placeholder={"وﺿﻌﻴﺖ ﻣﺎﻟﻜﻴﺖ"}
                            />
                            <div className="col-span-2">
                              <InputCom
                                type={"req"}
                                name={"connection"}
                                onChenge={(e) => setConnection(e.target.value)}
                                placeholder={"روابط ، ارتباطات و سایر توضیحات"}
                              />
                            </div>
                            <div className="w-full flex gap-3 ">
                              <ButtonAfra
                                showLoad={loadCustomer}
                                text={"ثبت"}
                                type={"green"}
                                onClick={addCustomer}
                              />
                              <ButtonAfra text={"انصراف"} type={"blue-dark"} />
                            </div>
                          </div>
                          <div className="w-full mt-3 flex flex-col gap-3">
                            <Tag color="red" className="p-1">
                              *نکته مهم : در ابتدا مختصات جغرافیایی در شهر تهران
                              ثبت است ، برای تغییر می بایست نقطه مورد نظر را از
                              روی نقشه انتخاب کنید
                            </Tag>
                            <Tag color="red" className="p-1">
                              *نکته : با انتخاب محل لوکیشن جدید ثبت خواهد شد
                            </Tag>
                          </div>
                          <div className="w-full mt-3">
                            <Map
                              onUserLocationChange={handleLocationChange}
                              latlon={[lat, lon]}
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab hidden"
                        aria-label="افزودن مشتری حقوقی "
                      />
                      <div
                        role="tabpanel"
                        className="hidden tab-content px-3 py-3"
                      >
                        <div className="w-full grid grid-cols-4 gap-3 mt-3 items-end">
                          <InputCom
                            type={"req"}
                            name={"facturyName"}
                            onChenge={(e) => {
                              setNameHg(e.target.value);
                            }}
                            placeholder={"نام شرکت ، فروشگاه یا موسسه"}
                          />
                          <InputCom
                            type={"req"}
                            name={"facturyName"}
                            onChenge={(e) => setPhoneHg(e.target.value)}
                            placeholder={"شماره تلفن"}
                          />
                          <SelectCombo
                            placeholder={"نوع شرکت"}
                            onChange={(e) => setTypeCoHg(e.value)}
                            name="factoryType"
                            options={[
                              {
                                value: "سهامی عام",
                                label: "سهامی عام",
                              },
                              {
                                value: "سهامی خاص",
                                label: "سهامی خاص",
                              },
                              {
                                value: "مسئولیت محدود",
                                label: "مسئولیت محدود",
                              },
                              {
                                value: "دولتی",
                                label: "دولتی",
                              },
                              {
                                value: "بخش خصوصی",
                                label: "بخش خصوصی",
                              },
                            ]}
                          />
                          <InputCom
                            onChenge={(e) => setFinancialCodeHg(e.target.value)}
                            type={"req"}
                            placeholder={"کد اشتراک"}
                          />
                          <SelectCombo
                            name={"select2"}
                            placeholder={"نوع ارتباط"}
                            options={[
                              {
                                value: "مشتری",
                                label: "مشتری",
                              },
                              {
                                value: "تامین کننده",
                                label: "تامین کننده",
                              },
                              {
                                value: "مشتری / تامین کننده",
                                label: "مشتری / تامین کننده",
                              },
                              {
                                value: "نماینده",
                                label: "نماینده",
                              },
                              {
                                value: "همکار",
                                label: "همکار",
                              },
                            ]}
                            onChenge={(e) => setConNameHg(e.value)}
                          />
                          <InputCom
                            type={"req"}
                            name={"name"}
                            onChenge={(e) => setConDesHg(e.target.value)}
                            placeholder={"جزئیات بیشتر نوع ارتباط "}
                          />
                          <InputCom
                            onChenge={(e) => setSabtNumHg(e.target.value)}
                            type={"req"}
                            placeholder={"شماره ثبت"}
                          />{" "}
                          <InputCom
                            onChenge={birthCalChange}
                            type={"date"}
                            placeholder={"تاریخ تولد"}
                          />{" "}
                          <InputCom
                            onChenge={(e) => setNationalCodeHg(e.target.value)}
                            type={"req"}
                            placeholder={"کد ملی"}
                          />
                          <InputCom
                            onChenge={(e) => setBuissnessHg(e.target.value)}
                            type={"req"}
                            placeholder={"کد اقتصادی"}
                          />
                          <SelectCombo
                            options={statesData.map((i) => ({
                              value: i.name,
                              label: i.name,
                              lon: i.longitude,
                              lat: i.latitude,
                            }))}
                            onChange={setCityDataHg}
                            placeholder={"استان"}
                          />
                          <SelectCombo
                            options={cityDataShowHg.map((i) => ({
                              value: i.name,
                              label: i.name,
                              lon: i.longitude,
                              lat: i.latitude,
                            }))}
                            onChange={(e) => setCityHg(e.value)}
                            placeholder={"شهر"}
                          />
                          <InputCom
                            type={"req"}
                            onChenge={(e) => setPostalCodeHg(e.target.value)}
                            placeholder={"کد پستی"}
                          />
                          <InputCom
                            type={"req"}
                            onChenge={(e) => setAddressHg(e.target.value)}
                            placeholder={"آدرس"}
                          />
                          <SelectCombo
                            options={[
                              {
                                value: "پخش کننده",
                                label: "پخش کننده",
                              },
                              {
                                value: "مصرف شخصی",
                                label: "مصرف شخصی",
                              },
                              {
                                value: "سازمانی",
                                label: "سازمانی",
                              },
                              {
                                value: "همکاری",
                                label: "همکاری",
                              },
                            ]}
                            placeholder={"نوع فعالیت"}
                            onChange={(e) => setWorkTypeHg(e.value)}
                          />
                          <SelectCombo
                            onChange={(e) => setRelationTypeHg(e.value)}
                            options={[
                              {
                                value: "بازاریاب",
                                label: "بازاریاب",
                              },
                              {
                                value: "تبلیغات",
                                label: "تبلیغات",
                              },
                              {
                                value: "گوگل",
                                label: "گوگل",
                              },
                              {
                                value: "پیامک",
                                label: "پیامک",
                              },
                              {
                                value: "دوستان و آشنایان",
                                label: "دوستان و آشنایان",
                              },
                            ]}
                            placeholder={"نحوه آشنایی"}
                          />
                          <InputCom
                            onChange={(e) =>
                              setCountOfPersonelHg(e.target.value)
                            }
                            type={"req"}
                            placeholder={"تعداد کارکنان"}
                          />
                          <SelectCombo
                            onChange={(e) => setOwnerShipHg(e.value)}
                            options={[
                              {
                                value: "مالک",
                                label: "مالک",
                              },
                              {
                                value: "استیجاری",
                                label: "استیجاری",
                              },
                              {
                                value: "سرقفلی",
                                label: "سرقفلی",
                              },
                            ]}
                            placeholder={"وﺿﻌﻴﺖ ﻣﺎﻟﻜﻴﺖ"}
                          />
                          <InputCom
                            onChange={(e) => setConnectionHg(e.target.value)}
                            type={"req"}
                            placeholder={"روابط ، ارتباطات و سایر توضیحات"}
                          />
                          <div className="w-full flex gap-3 ">
                            <ButtonAfra
                              text={"ثبت"}
                              type={"green"}
                              showLoad={loadCustomerHg}
                              onClick={addCustomerHg}
                            />
                            <ButtonAfra text={"انصراف"} type={"blue-dark"} />
                          </div>
                        </div>
                        <div className="w-full mt-3 flex flex-col gap-3">
                          <Tag color="red" className="p-1">
                            *نکته مهم : در ابتدا مختصات جغرافیایی در شهر تهران
                            ثبت است ، برای تغییر می بایست نشان سبز را به لوکیشن
                            یا موقعیت جدید هدایت کنید
                          </Tag>
                          <Tag color="red" className="p-1">
                            *نکته : با کشیدن انگشت روی نشان سبز موقعیت جدید را
                            ثبت کنید
                          </Tag>
                        </div>
                        <div className="w-full mt-3">
                          {/* <Map onLocationChange={handleLocationChangeHg} /> */}
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}

            {showFirstPage == 1 ? (
              <CardStat
                type={"10"}
                title={"سرنخ ها"}
                des={"سرنخ های خود را در این بخش ببینید"}
                data={
                  <>
                    <div className="w-full">
                      <div
                        role="tablist"
                        className="tabs w-full mt-3 grid-cols-7 tabs-bordered"
                      >
                        <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="لیست سرنخ ها"
                          defaultChecked
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <TableAfra
                            type={"green"}
                            columns={[
                              {
                                title: "نام",
                                dataIndex: "name",
                                key: "name",
                                sorter: true,
                              },
                              {
                                title: "موضوع",
                                dataIndex: "subject",
                                key: "subject",
                                sorter: true,
                              },
                              {
                                title: "شرکت یا حساب",
                                dataIndex: "company",
                                key: "company",
                                sorter: true,
                              },
                              {
                                title: "منبع",
                                dataIndex: "source",
                                key: "source",
                                sorter: true,
                              },

                              // {
                              //   title: "وضعیت",
                              //   dataIndex: "status",
                              //   key: "status",
                              //   sorter: true,
                              // },
                              // {
                              //   title: "سطح ارتباط",
                              //   dataIndex: "level",
                              //   key: "level",
                              //   sorter: true,
                              // },
                              {
                                title: "کاربر ثبت",
                                dataIndex: "visitor",
                                key: "visitor",
                                sorter: true,
                              },
                              {
                                title: "عملیات",
                                dataIndex: "operation",
                                key: "operation",
                                sorter: true,
                              },
                            ]}
                            data={dataLeads.map((leads) => ({
                              key: leads._id,
                              name: leads.leadName,
                              subject: leads.leadSubject,
                              company: leads.leadCompany,
                              source: leads.leadSource,
                              // status: leads.leadStatus,
                              // level:
                              //   leads.leadLevel == "داغ" ? (
                              //     <Tag color="red">{leads.leadLevel}</Tag>
                              //   ) : leads.leadLevel == "گرم" ? (
                              //     <Tag color="orange">{leads.leadLevel}</Tag>
                              //   ) : leads.leadLevel == "سرد" ? (
                              //     <Tag color="blue">{leads.leadLevel}</Tag>
                              //   ) : (
                              //     ""
                              //   ),
                              // leads.leadLevel == "داغ" ? (
                              //   <span className="bg-red-200 text-red-500">
                              //     {leads.leadLevel}
                              //   </span>
                              // ) : leads.leadLevel == "گرم" ? (
                              //   <span className="bg-orange-200 text-orange-500">
                              //     {leads.leadLevel}
                              //   </span>
                              // ) : leads.leadLevel == "سرد" ? (
                              //   <span className="bg-blue-200 text-blue-500">
                              //     {leads.leadLevel}
                              //   </span>
                              // ) : (
                              //   ""
                              // ),
                              visitor: leads.adminUserName,
                              operation: (
                                <Tag
                                  className=" cursor-pointer"
                                  onClick={() => deleteLead(leads._id)}
                                  color="red"
                                >
                                  حذف
                                </Tag>
                              ),
                            }))}
                          />
                        </div>
                        <input
                          type="radio"
                          name="my_tabs_1"
                          role="tab"
                          className="tab"
                          aria-label="افزودن سرنخ"
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <div className="w-full grid grid-cols-4 items-end gap-3">
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadName"}
                              placeholder={"نام"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />

                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadSubject"}
                              placeholder={"موضوع"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadCompany"}
                              placeholder={"شرکت یا حساب"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadEmail"}
                              placeholder={"ایمیل"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadPosition"}
                              placeholder={"موقعیت کاری"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"staticPhone"}
                              placeholder={"تلفن ثابت"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"phone"}
                              placeholder={"تلفن همراه"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadWebsite"}
                              placeholder={"وبسایت"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />
                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadAddress"}
                              placeholder={"آدرس"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />

                            <InputCom
                              onChenge={changeHandlerLeads}
                              name={"leadSource"}
                              placeholder={" منبع"}
                              type={"req"}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />

                            <SelectCombo
                              onChenge={changeHandlerLeadsData2}
                              placeholder={"سطح ارتباط"}
                              options={[
                                {
                                  value: "داغ",
                                  label: "داغ",
                                },
                                {
                                  value: "گرم",
                                  label: "گرم",
                                },
                                {
                                  value: "سرد",
                                  label: "سرد",
                                },
                              ]}
                              // value={inputValue}
                              // onChange={handleInputChange}
                            />

                            <div className="w-full flex gap-3">
                              <ButtonAfra
                                showLoad={loadLeads}
                                onClick={addLeads}
                                type={"green"}
                                text={"ثبت"}
                              />
                              <ButtonAfra
                                onClick={() => location.reload()}
                                type={"blue-dark"}
                                text={"انصراف"}
                              />
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
            )}
            {showFirstPage == 2 ? (
              <CardStat
                type={"10"}
                title={"سفارشات"}
                des={
                  "سفارشات خود را که توسط مشتریان افزوده شده است را در این بخش ببینید"
                }
                data={
                  <>
                    <div className="w-full">
                      <div
                        role="tablist"
                        className="tabs w-full mt-3 grid-cols-7 tabs-bordered"
                      >
                        <input
                          type="radio"
                          name="my_tabs_2"
                          role="tab"
                          className="tab"
                          aria-label="لیست سفارشات"
                          defaultChecked
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <TableAfra
                            type={"green"}
                            data={orderData.map((i) => ({
                              name: i.title + " " + i.code,
                              code: i.code,
                              signOp:
                                i.statusOpAdmin == "true"
                                  ? i.statusOpUserAdmin
                                  : "-",
                              signSarparast:
                                i.statusOp == "true" ? i.statusOpUser : "-",
                              signAdmin:
                                i.statusOp == "false"
                                  ? "تائید نشده"
                                  : "تائید سرپرست",
                              status:
                                i.statusOp == "false"
                                  ? "تائید نشده"
                                  : "تائید مدیریت",
                              cr: !i.creatorName ? i.adminName : i.creatorName,
                              cu: !i.creatorName ? "-" : i.adminName,

                              opr: (
                                <>
                                  <Tag
                                    onClick={() => showOrderDetail(i)}
                                    color="green"
                                    className=" cursor-pointer"
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
                                title: "کد سفارش",
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
                                title: "ایجاد کننده",
                                dataIndex: "cr",
                                key: "cr",
                                sorter: true,
                              },
                              {
                                title: "نام مشتری",
                                dataIndex: "cu",
                                key: "cu",
                                sorter: true,
                              },
                              // {
                              //   title: "امضا مدیر مالی",
                              //   dataIndex: "signOp",
                              //   key: "signOp",
                              //   sorter: true,
                              // },
                              {
                                title: "امضا سرپرست",
                                dataIndex: "signSarparast",
                                key: "signSarparast",
                                sorter: true,
                              },
                              {
                                title: "امضا نهائی",
                                dataIndex: "signAdmin",
                                key: "signAdmin",
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
                          name="my_tabs_2"
                          role="tab"
                          className="tab"
                          aria-label="افزودن سفارش"
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <div className="w-full mt-3">
                            <Tag color="red">
                              *نکته : لطفا در صورتی که سفارش برای مشتری نیست
                              مشتری خالی بماند
                            </Tag>
                          </div>

                          <div className="w-full grid grid-cols-4 gap-3 items-end">
                            <SelectCombo
                              placeholder={"کالا را انتخاب کنید"}
                              options={datePrd
                                .filter((i) => i.sourceId == "104")
                                .map((i) => ({
                                  value: i.code,
                                  label: i.title,
                                  data: i,
                                }))}
                              onChange={changePrdHandler}
                            />

                            {getCookieAccess != 7 ? (
                              <>
                                <SelectCombo
                                  placeholder={"مشتری را انتخاب کنید"}
                                  options={customerData.map((i) => ({
                                    value: i._id,
                                    label: i.name,
                                    data: i,
                                  }))}
                                  onChange={changeCustomerName}
                                />
                                <InputCom
                                  onChenge={(e) => setPricePrd(e.target.value)}
                                  type={"req"}
                                  placeholder={"قیمت مخصوص این کالا برای مشتری"}
                                />
                              </>
                            ) : (
                              ""
                            )}

                            <SelectCombo
                              placeholder={"دارای مالیات یا ارزش افزوده است؟"}
                              options={[
                                {
                                  value: "1",
                                  label: "بله",
                                },
                                {
                                  value: "0",
                                  label: "خیر",
                                },
                              ]}
                              onChange={changeTaxHandler}
                            />

                            <InputCom
                              onChenge={(e) => setCountData(e.target.value)}
                              type={"req"}
                              placeholder={"تعداد درخواستی"}
                            />
                          </div>
                          <div className="w-full">
                            <InputCom
                              type={"textarea"}
                              row={10}
                              col={20}
                              onChenge={(e) => setDesOrder(e.target.value)}
                              placeholder={"توضیحات سفارش"}
                            />

                            <div className="w-[300px] flex gap-3 mt-3">
                              <ButtonAfra
                                onClick={addProductToTableFrm}
                                type={"green"}
                                text={"افزودن کالا"}
                              />
                              <ButtonAfra type={"blue-dark"} text={"انصراف"} />
                            </div>
                          </div>
                          <div className="w-full mt-3">
                            <TableAfra
                              type={"green"}
                              data={tableFrm}
                              columns={[
                                {
                                  title: "نام کالا",
                                  dataIndex: "name",
                                  key: "name",
                                  sorter: true,
                                },
                                {
                                  title: "تعداد درخواستی",
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
                                  title: "قیمت کالا",
                                  dataIndex: "price",
                                  key: "price",
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

                          <div className=" w-full mt-3 flex justify-center">
                            <div className="w-[400px] flex gap-3">
                              <ButtonAfra
                                type={"green"}
                                onClick={sendPrdToServer}
                                text={"ثبت نهایی پیش فاکتور"}
                              />
                              <ButtonAfra type={"blue-dark"} text={"انصراف"} />
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
            )}
            {showFirstPage == 3 ? (
              <CardStat
                type={"10"}
                title={"حواله های فروش"}
                des={
                  "حواله های فروش که توسط سرپرست تائید شده است را در این بخش ببینید"
                }
                data={
                  <>
                    <div className="w-full">
                      <div
                        role="tablist"
                        className="tabs w-full mt-3 grid-cols-7 tabs-bordered"
                      >
                        <input
                          type="radio"
                          name="my_tabs_2"
                          role="tab"
                          className="tab"
                          aria-label="لیست حواله ها"
                          defaultChecked
                        />
                        <div role="tabpanel" className="tab-content px-3 py-3">
                          <TableAfra
                            type={"green"}
                            data={havaleSell.map((i) => ({
                              name: i.title + " " + i.takroPish,
                              code: i.takroPish,
                              signOp:
                                i.statusOpAdmin == "true"
                                  ? i.statusOpUserAdmin
                                  : "-",
                              signSarparast:
                                i.statusOp == "true" ? i.statusOpUser : "-",
                              signAdmin:
                                i.status == "false"
                                  ? "تائید نشده"
                                  : "تائید مدیریت",
                              status:
                                i.status == "false"
                                  ? "تائید نشده"
                                  : "تائید مدیریت",
                              cr: !i.creatorName ? i.adminName : i.creatorName,
                              cu: !i.creatorName ? "-" : i.adminName,

                              opr: (
                                <>
                                  <Tag
                                    onClick={() => showHavaleDetail(i)}
                                    color="green"
                                    className=" cursor-pointer"
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
                                title: "کد حواله",
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
                                title: "ایجاد کننده",
                                dataIndex: "cr",
                                key: "cr",
                                sorter: true,
                              },
                              {
                                title: "نام مشتری",
                                dataIndex: "cu",
                                key: "cu",
                                sorter: true,
                              },
                              {
                                title: "امضا مدیر مالی",
                                dataIndex: "signOp",
                                key: "signOp",
                                sorter: true,
                              },
                              {
                                title: "امضا سرپرست",
                                dataIndex: "signSarparast",
                                key: "signSarparast",
                                sorter: true,
                              },
                              {
                                title: "امضا مدیرعامل",
                                dataIndex: "signAdmin",
                                key: "signAdmin",
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
                      </div>
                    </div>
                  </>
                }
              />
            ) : (
              ""
            )}
            {showFirstPage == 4 ? (
              <CardStat
                type={"10"}
                title={"کاریز معاملات"}
                des={"کاریز معاملات سیستم را در این بخش ببینید"}
                data={
                  <>
                    <div className="w-full">
                      <div className="w-full flex gap-3">
                        <div className="w-[300px]">
                          <div className="rounded-l-full border w-full border-zinc-300 h-[50px] flex items-center px-2">
                            <span className="text-sm text-zinc-700">
                              مذاکرات اولیه
                            </span>
                          </div>
                          <div className=" mt-2 flex flex-col gap-3">
                            {/* <ButtonAfra
                              onClick={showContractAdd}
                              type={"blue-dark"}
                              text={"افزودن معامله"}
                            /> */}

                            {dataCont
                              .filter((k) => k.contractStep == "1")
                              .map((i) => (
                                <div
                                  onClick={() => showDataContract(i)}
                                  className="w-full flex flex-col overflow-hidden justify-center items-center p-4 relative gap-3 h-fit border rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer bg-yellow-100 text-zinc-700 text-sm"
                                >
                                  <span className=" absolute top-1 text-zinc-400">
                                    <ContractsIcon
                                      size={"8rem"}
                                      className=" opacity-10"
                                    />
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>عنوان معامله :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.contractName}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>مبلغ حدودی :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {ConvertEnNumberToPersian(
                                        separate(i.contractPrice)
                                      ) +
                                        " " +
                                        "ریال"}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>شخص مرتبط :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.name}
                                    </span>
                                  </span>
                                </div>
                              ))}

                            <div
                              onClick={showContractAdd}
                              className="w-full h-[90px] rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer border border-dashed text-zinc-600 text-xl border-zinc-600 flex items-center justify-center"
                            >
                              <PlusSquareOutlined />
                            </div>
                          </div>
                        </div>
                        <div className="w-[300px]">
                          <div className="rounded-l-full relative  border-l border-b border-t  w-full border-zinc-300 h-[50px] flex items-center pr-7">
                            <span className="text-sm text-zinc-700">
                              پیگیری
                            </span>
                            <div className="cont-steps"></div>
                          </div>
                          <div className=" mt-2 flex flex-col gap-3">
                            {dataCont
                              .filter((k) => k.contractStep == "2")
                              .map((i) => (
                                <div
                                  onClick={() => showDataContract(i)}
                                  className="w-full flex flex-col overflow-hidden justify-center items-center p-4 relative gap-3 h-fit border rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer bg-blue-100 text-zinc-700 text-sm"
                                >
                                  <span className=" absolute top-1 text-zinc-400">
                                    <ContractsIcon
                                      size={"8rem"}
                                      className=" opacity-10"
                                    />
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>عنوان معامله :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.contractName}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>مبلغ حدودی :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {ConvertEnNumberToPersian(
                                        separate(i.contractPrice)
                                      ) +
                                        " " +
                                        "ریال"}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>شخص مرتبط :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.name}
                                    </span>
                                  </span>
                                </div>
                              ))}

                            <div
                              onClick={showContractAdd}
                              className="w-full h-[90px] rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer border border-dashed text-zinc-600 text-xl border-zinc-600 flex items-center justify-center"
                            >
                              <PlusSquareOutlined />
                            </div>
                          </div>
                        </div>
                        <div className="w-[300px]">
                          <div className="rounded-l-full relative  border-l border-b border-t  w-full border-zinc-300 h-[50px] flex items-center pr-7">
                            <span className="text-sm text-zinc-700">
                              قیمت و نهایی کردن
                            </span>
                            <div className="cont-steps"></div>
                          </div>
                          <div className=" mt-2 flex flex-col gap-3">
                            {dataCont
                              .filter((k) => k.contractStep == "3")
                              .map((i) => (
                                <div
                                  onClick={() => showDataContract(i)}
                                  className="w-full flex flex-col overflow-hidden justify-center items-center p-4 relative gap-3 h-fit border rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer bg-green-100 text-zinc-700 text-sm"
                                >
                                  <span className=" absolute top-1 text-zinc-400">
                                    <ContractsIcon
                                      size={"8rem"}
                                      className=" opacity-10"
                                    />
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>عنوان معامله :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.contractName}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>مبلغ حدودی :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {ConvertEnNumberToPersian(
                                        separate(i.contractPrice)
                                      ) +
                                        " " +
                                        "ریال"}
                                    </span>
                                  </span>
                                  <span className="w-full relative flex justify-between">
                                    <span>شخص مرتبط :</span>
                                    <span className="bg-white py-1 px-2 rounded-lg border">
                                      {i.name}
                                    </span>
                                  </span>
                                </div>
                              ))}

                            <div
                              onClick={showContractAdd}
                              className="w-full h-[90px] rounded-lg hover:scale-95 duration-300 transition-all cursor-pointer border border-dashed text-zinc-600 text-xl border-zinc-600 flex items-center justify-center"
                            >
                              <PlusSquareOutlined />
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
            )}
            {showFirstPage == 5 ? (
              <CardStat
                type={"10"}
                title={"دفترچه مخاطبین"}
                des={"دفترچه مخاطبان خود را در این بخش ببینید"}
                data={
                  <>
                    <div className="w-full">
                      <div className="w-full flex gap-3">
                        <span
                          onClick={() => spellContacts("")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          همه
                        </span>
                        <span
                          onClick={() => spellContacts("الف")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          الف
                        </span>
                        <span
                          onClick={() => spellContacts("ب")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ب
                        </span>
                        <span
                          onClick={() => spellContacts("پ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          پ
                        </span>
                        <span
                          onClick={() => spellContacts("ت")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ت
                        </span>
                        <span
                          onClick={() => spellContacts("ث")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ث
                        </span>
                        <span
                          onClick={() => spellContacts("ج")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ج
                        </span>
                        <span
                          onClick={() => spellContacts("چ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          چ
                        </span>
                        <span
                          onClick={() => spellContacts("ح")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ح
                        </span>
                        <span
                          onClick={() => spellContacts("خ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          خ
                        </span>
                        <span
                          onClick={() => spellContacts("د")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          د
                        </span>
                        <span
                          onClick={() => spellContacts("ذ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ذ
                        </span>
                        <span
                          onClick={() => spellContacts("ر")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ر
                        </span>
                        <span
                          onClick={() => spellContacts("ز")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ز
                        </span>
                        <span
                          onClick={() => spellContacts("ژ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ژ
                        </span>
                        <span
                          onClick={() => spellContacts("س")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          س
                        </span>
                        <span
                          onClick={() => spellContacts("ش")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ش
                        </span>
                        <span
                          onClick={() => spellContacts("ص")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ص
                        </span>
                        <span
                          onClick={() => spellContacts("ض")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ض
                        </span>
                        <span
                          onClick={() => spellContacts("ط")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ط
                        </span>
                        <span
                          onClick={() => spellContacts("ظ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ظ
                        </span>
                        <span
                          onClick={() => spellContacts("ع")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ع
                        </span>
                        <span
                          onClick={() => spellContacts("غ")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          غ
                        </span>
                        <span
                          onClick={() => spellContacts("ف")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ف
                        </span>
                        <span
                          onClick={() => spellContacts("ق")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ق
                        </span>
                        <span
                          onClick={() => spellContacts("ک")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ک
                        </span>
                        <span
                          onClick={() => spellContacts("ل")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ل
                        </span>{" "}
                        <span
                          onClick={() => spellContacts("م")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          م
                        </span>{" "}
                        <span
                          onClick={() => spellContacts("ن")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ن
                        </span>
                        <span
                          onClick={() => spellContacts("و")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          و
                        </span>
                        <span
                          onClick={() => spellContacts("ه")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ه
                        </span>
                        <span
                          onClick={() => spellContacts("ی")}
                          className="flex items-center text-sm justify-center text-[var(--color-blue-dark)] hover:text-white w-10 h-7 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-[var(--color-green)] bg-[var(--color-gray-bc)] rounded-lg p-1"
                        >
                          ی
                        </span>
                      </div>
                      <div className="w-full h-full overflow-auto mt-3 grid grid-cols-5 gap-3">
                        {customerData.map((l) => (
                          <div className="w-full bg-[var(--color-gray-bc)] group cursor-pointer hover:bg-[var(--color-green)] hover:scale-95 duration-300 transition-all border flex justify-center items-center rounded-lg h-fit p-4">
                            <div className="w-full flex flex-col gap-3 justify-center items-center">
                              <div className="avatar placeholder">
                                <div className="bg-[var(--color-blue)]  w-12 rounded-lg ">
                                  <span className="text-lg text-white font-bold">
                                    {l.name.slice(0, 1)}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-1 text-zinc-800 group-hover:text-white duration-300 transition-all">
                                {l.name}
                              </div>
                              <div className="mt-1 text-zinc-800 group-hover:text-white duration-300 transition-all">
                                {l.phone}
                              </div>
                              <div className="flex gap-3 mt-3">
                                <WhatsappIcon
                                  onClick={() =>
                                    location.replace(
                                      `https://web.whatsapp.com/send?phone=+98${l.phone}`
                                    )
                                  }
                                  className="flex group-hover:text-white duration-300 transition-all text-[#454545] cursor-pointer hover:scale-95  justify-center items-center p-1 border  border-zinc-500 group-hover:border-white rounded-lg"
                                  size={"1.9rem"}
                                />

                                <TelegramIcon
                                  onClick={() =>
                                    location.replace(
                                      ` https://t.me/+98${l.phone}`
                                    )
                                  }
                                  className="flex justify-center cursor-pointer hover:scale-95 group-hover:text-white duration-300 transition-all text-[#454545] items-center p-1 border  border-zinc-500 group-hover:border-white rounded-lg"
                                  size={"1.9rem"}
                                />
                                <Call02Icon
                                  onClick={() =>
                                    location.replace(`tel:+98${l.phone}`)
                                  }
                                  className="flex justify-center cursor-pointer hover:scale-95 group-hover:text-white duration-300 transition-all text-[#454545] items-center p-1 border border-zinc-500 group-hover:border-white rounded-lg"
                                  size={"1.9rem"}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
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

      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>مشتریان</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={() => setOpenCustomerDetail(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={openCustomerDetailLoad}
        open={openCustomerDetail}
        onCancel={() => setOpenCustomerDetail(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">مشاهده اطلاعات مشتری</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات مشتری مورد نظر خود را مشاهده کنید
            </div>

            <div className="w-full mt-3">
              <div
                role="tablist"
                className="tabs w-full grid-cols-4 tabs-bordered"
              >
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="اطلاعات شخصی"
                  defaultChecked
                />
                <div role="tabpanel" className="tab-content px-3 py-3">
                  <div className="w-full grid grid-cols-3 gap-3 items-end">
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "نام شخص حقیقی / حقوقی :" + " " + customerShowData.name
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "کد ملی / شناسه ملی :" +
                        " " +
                        customerShowData.nationalCode
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "نام کاربری :" + " " + customerShowData.userName
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "رمز عبور :" + " " + customerShowData.password
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "پیشوند :" +
                        " " +
                        (!customerShowData.perName
                          ? "-"
                          : customerShowData.perName)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "تاریخ تولد / ثبت :" + " " + customerShowData.birthDate
                      }
                    />

                    <InputCom
                      type={"dis"}
                      placeholder={
                        "کد :" + " " + customerShowData.financialCode
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "نوع ارتباط :" +
                        " " +
                        (!customerShowData.conName
                          ? "-"
                          : customerShowData.conName)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "توضیحات ارتباط :" +
                        " " +
                        (!customerShowData.conDes
                          ? "-"
                          : customerShowData.conDes)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={"استان :" + " " + customerShowData.state}
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={"شهر :" + " " + customerShowData.city}
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "نوع فعالیت :" +
                        " " +
                        (!customerShowData.workType
                          ? "-"
                          : customerShowData.workType)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "تعداد پرسنل :" +
                        " " +
                        (!customerShowData.countOfPersonel
                          ? "-"
                          : customerShowData.countOfPersonel)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "وضعیت مالکیت :" +
                        " " +
                        (!customerShowData.ownerShip
                          ? "-"
                          : customerShowData.ownerShip)
                      }
                    />
                    <InputCom
                      type={"dis"}
                      placeholder={
                        "نحوه آشنایی :" +
                        " " +
                        (!customerShowData.relationType
                          ? "-"
                          : customerShowData.relationType)
                      }
                    />
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="اطلاعات تماس"
                />
                <div role="tabpanel" className="tab-content px-3 py-3">
                  <div className="w-full grid grid-cols-1 gap-3 items-end">
                    <div className="w-full grid grid-cols-3 gap-3 items-end">
                      <InputCom
                        type={"dis"}
                        placeholder={
                          "شماره تماس :" +
                          " " +
                          (!customerShowData.phone
                            ? "-"
                            : customerShowData.phone)
                        }
                      />
                      <InputCom
                        type={"dis"}
                        placeholder={"آدرس :" + " " + customerShowData.address}
                      />
                      <InputCom
                        type={"dis"}
                        placeholder={
                          "کدپستی :" +
                          " " +
                          (!customerShowData.postalCode
                            ? "-"
                            : customerShowData.postalCode)
                        }
                      />
                      <InputCom
                        type={"dis"}
                        placeholder={
                          "عرض جغرافیایی :" +
                          " " +
                          parseFloat(customerShowData.lon).toFixed(6)
                        }
                      />
                      <InputCom
                        type={"dis"}
                        placeholder={
                          "طول جغرافیایی :" +
                          " " +
                          parseFloat(customerShowData.lat).toFixed(6)
                        }
                      />
                    </div>
                    <div className="w-full h-[500px]">
                      <MapDetail
                        latlon={[
                          parseFloat(customerShowData.lat).toFixed(6),
                          parseFloat(customerShowData.lon).toFixed(6),
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="توضیحات"
                />
                <div role="tabpanel" className="tab-content px-3 py-3">
                  <div className="w-full">
                    <InputCom
                      type={"textareaDis"}
                      row={10}
                      col={10}
                      placeholder={
                        "توضیحات :" +
                        " " +
                        (!customerShowData.des ? "-" : customerShowData.des)
                      }
                    />
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="گردش حساب و مانده مشتری"
                />
                <div role="tabpanel" className="tab-content px-3 py-3">
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
                        title: "شماره سریال",
                        dataIndex: "name",
                        key: "name",
                        sorter: true,
                      },
                      {
                        title: "تاریخ سند",
                        dataIndex: "nati",
                        key: "nati",
                        sorter: true,
                      },
                      {
                        title: "مبلغ سند",
                        dataIndex: "modirname",
                        key: "modirname",
                        sorter: true,
                      },

                      {
                        title: "عنوان",
                        dataIndex: "onvan",
                        key: "onvan",
                        sorter: true,
                      },
                      {
                        title: "توضیحات",
                        dataIndex: "resDes",
                        key: "resDes",
                        sorter: true,
                      },
                      {
                        title: "توضیحات دوم",
                        dataIndex: "resDes2",
                        key: "resDes2",
                        sorter: true,
                      },
                    ]}
                    data={customerGardesh.map((leads, i) => ({
                      key: !leads.serialNo ? "-" : leads.serialNo,
                      name: !leads.serialNo ? "-" : leads.serialNo,
                      code: i + 1,
                      nati: !leads.docDate ? "-" : leads.docDate,
                      modirname: !leads.credit
                        ? "-"
                        : separate(leads.credit) + " " + "ریال",
                      onvan: !leads.processName ? "-" : leads.processName,
                      resDes: !leads.recDesc ? "-" : leads.recDesc,
                      resDes2: !leads.recDesc2 ? "-" : leads.recDesc2,
                    }))}
                  />
                  <div className="mt-4 flex gap-3 items-center">
                    <span>مانده مشتری :</span>
                    <span>{separate(customerMande) + " " + "ریال"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Edit PrD */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex justify-between ">
            <p>ویرایش مشتری</p>
            <p>{editCustomer.name}</p>
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
              onClick={() => setOpenCustomer(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={editCustomerLoad}
        open={openCustomer}
        onCancel={() => setOpenCustomer(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">ویرایش اطلاعات کالا</div>
            <div className="text-[12px] font-normal text-zinc-500">
              در این بخش می توانید اطلاعات مشتری مورد نظر خود را ویرایش کنید
            </div>
          </div>
          <div
            role="tablist"
            className="tabs w-full mt-3 grid-cols-3 tabs-bordered"
          >
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="اطلاعات مشتری"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content px-3 py-3">
              <div className="grid grid-cols-1 gap-3 w-full items-end">
                <div className="w-full gap-3 grid grid-cols-2 items-end">
                  <InputCom
                    onChenge={changeHandler}
                    name={"name"}
                    type={"req"}
                    value={editCustomer.name}
                    placeholder={"نام مشتری را وارد کنید"}
                  />
                  <InputCom
                    onChenge={changeHandler}
                    name={"financialCode"}
                    type={"req"}
                    value={editCustomer.financialCode}
                    placeholder={"کد اختصاصی مشتری را وارد کنید"}
                  />

                  <InputCom
                    onChenge={changeHandler}
                    name={"nationalCode"}
                    type={"req"}
                    value={editCustomer.nationalCode}
                    placeholder={"کد / شناسه ملی را وارد کنید"}
                  />

                  <InputCom
                    onChenge={changeHandler}
                    name={"address"}
                    type={"req"}
                    value={editCustomer.address}
                    placeholder={"آدرس را وارد کنید"}
                  />
                </div>

                <InputCom
                  onChenge={changeHandler}
                  name={"postalCode"}
                  type={"req"}
                  value={editCustomer.postalCode}
                  placeholder={"کدپستی را وارد کنید"}
                />
                <InputCom
                  onChenge={changeHandler}
                  name={"countOfPersonel"}
                  type={"req"}
                  value={editCustomer.countOfPersonel}
                  placeholder={"تعداد پرسنل را وارد کنید"}
                />
                <InputCom
                  onChenge={changeHandler}
                  name={"userName"}
                  type={"req"}
                  value={editCustomer.userName}
                  placeholder={"نام کاربری را وارد کنید"}
                />
                <InputCom
                  onChenge={changeHandler}
                  name={"password"}
                  type={"req"}
                  value={editCustomer.password}
                  placeholder={"رمز عبور را وارد کنید"}
                />

                <SelectCombo
                  options={statesData.map((i) => ({
                    value: i.name,
                    label: i.name,
                    lon: i.longitude,
                    lat: i.latitude,
                  }))}
                  onChange={changeStateHandler}
                  placeholder={"استان"}
                />
                <SelectCombo
                  options={cityEditCustomer.map((i) => ({
                    value: i.name,
                    label: i.name,
                    lon: i.longitude,
                    lat: i.latitude,
                  }))}
                  onChange={changeCityHandler}
                  placeholder={"شهر"}
                />
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="اطلاعات موقعیت جغرافیایی مشتری"
            />
            <div role="tabpanel" className="tab-content px-3 py-3">
              <Map
                onUserLocationChange={handleLocationChangeEdit}
                latlon={[editCustomer.lat, editCustomer.lon]}
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
            <p>نمایش فاکتور</p>

            {dataOrderDetail.statusOp == "true" ? (
              <Tag color="green">فاکتور تائید شده</Tag>
            ) : (
              <Tag color="red">فاکتور تائید نشده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex justify-center gap-3 items-end mt-3">
            {getCookieAccess == "1" || getCookieAccess == "3" ? (
              <div
                className={`w-2/3 ${dataOrderDetail.statusOp == "true" ? "hidden" : ""} flex gap-3 items-end`}
              >
                <InputCom
                  onChenge={(e) => setSignCode(e.target.value)}
                  type={"req"}
                  placeholder={"کد امضای اپراتور یا مدیر جهت تایید فاکتور"}
                />
                <ButtonAfra
                  onClick={confirmFactorHavale}
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
                onClick={() => setOpenOrder(false)}
                type={"blue-dark"}
                text={"بستن"}
              />
            </div>
          </div>
        }
        loading={loadOrder}
        open={openOrder}
        onCancel={() => setOpenOrder(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">پیش فاکتور سفارش فروش</div>
            <div className="text-[12px] font-normal text-zinc-500">
              می توانید پیش فاکتور سفارش فروش را با جزئیات و کالا ها ببینید.
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <Tag color="red">
                *نکته : این فاکتور بدون تایید مدیر فاقد اعتبار و اهمیت می باشد
              </Tag>
              <Tag color="red">
                *نکته : تائید اپراتور به منزله تائید نهائی نمی باشد
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
                    پیش فاکتور سفارش فروش
                  </h2>
                  <span className="w-[1%] flex justify-end">
                    {new Date().toLocaleDateString("fa-ir")}
                  </span>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات فروشنده</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3 items-center">
                    <span>نام فروشنده : {dataFactor.sellerName}</span>
                    <span>شناسه ملی : {dataFactor.nationalCode} </span>
                    <span>نشانی : {dataFactor.address}</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره اقتصادی : {dataFactor.bussinessNumber}</span>
                    <span> کد پستی : {dataFactor.postalCode}</span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره ثبت : {dataFactor.sabtNmuber}</span>
                    <span> فکس : {dataFactor.fax}</span>
                    <span>تلفن : {dataFactor.phone}</span>
                  </div>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات خریدار</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3 items-center">
                    <span>نام خریدار : {dataOrderDetailBuyer.buyerName}</span>
                    <span>
                      شناسه ملی : {dataOrderDetailBuyer.nationalCode}{" "}
                    </span>
                    <span>نشانی : {dataOrderDetailBuyer.address}</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>
                      شماره اقتصادی : {dataOrderDetailBuyer.buissCode}
                    </span>
                    <span> کد پستی : {dataOrderDetailBuyer.postalCode}</span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره ثبت : {"-"}</span>
                    <span> فکس : {"-"}</span>
                    <span>تلفن : {dataOrderDetailBuyer.phone}</span>
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
                    قیمت کالا
                  </div>
                </div>

                {dataOrderDetail.products.map((data, index) => (
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
                      {/* <div className="flex justify-center items-center h-[200px]">
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
                      </div> */}
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <div className="flex">
                      <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                        جمع کل
                      </div>
                      <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                        {separate(
                          // dataOrderDetail.products.reduce(
                          //   (accumulator, transaction) => {
                          //     return (
                          //       accumulator +
                          //       parseInt(
                          //         !transaction.price ? 0 : transaction.price
                          //       ) *
                          //         parseInt(transaction.count) +
                          //       ((accumulator +
                          //         parseInt(
                          //           !transaction.price ? 0 : transaction.price
                          //         ) *
                          //           parseInt(transaction.count)) *
                          //         10) /
                          //         100
                          //     );
                          //   },
                          //   0
                          // )
                          totalAmountFactor
                        ) + "ریال"}
                      </div>
                    </div>
                    {dataOrderDetailBuyer.tax == "1" ? (
                      <>
                        <div className="flex">
                          <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                            مالیات و ارزش افزوده
                          </div>
                          <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                            {separate(
                              // dataOrderDetailHavale.products.reduce(
                              //   (accumulator, transaction) => {
                              //     return (
                              //       accumulator +
                              //       parseInt(
                              //         !transaction.price ? 0 : transaction.price
                              //       ) *
                              //         parseInt(transaction.count) +
                              //       ((accumulator +
                              //         parseInt(
                              //           !transaction.price ? 0 : transaction.price
                              //         ) *
                              //           parseInt(transaction.count)) *
                              //         10) /
                              //         100
                              //     );
                              //   },
                              //   0
                              // )
                              totalAmountWithFacTaxApp
                            ) + "ریال"}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                            جمع کل با 10% ارزش افزوده
                          </div>
                          <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                            {separate(
                              // dataOrderDetailHavale.products.reduce(
                              //   (accumulator, transaction) => {
                              //     return (
                              //       accumulator +
                              //       parseInt(
                              //         !transaction.price ? 0 : transaction.price
                              //       ) *
                              //         parseInt(transaction.count) +
                              //       ((accumulator +
                              //         parseInt(
                              //           !transaction.price ? 0 : transaction.price
                              //         ) *
                              //           parseInt(transaction.count)) *
                              //         10) /
                              //         100
                              //     );
                              //   },
                              //   0
                              // )
                              totalAmountWithFacTax
                            ) + "ریال"}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="mt-2 p-3">
                      توضیحات : {dataOrderDetailBuyer.des}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Transfer Customer */}
      <Modal
        // className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>انتقال مشتری</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={transferCu}
              type={"green"}
              showLoad={showLoadTransfer}
              text={"انتقال"}
            />
            <ButtonAfra
              onClick={() => settransferCustomerOpen(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={transferCustomerLoad}
        open={transferCustomerOpen}
        onCancel={() => settransferCustomerOpen(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">انتقال مشتری</div>
            <div className="text-[12px] font-normal text-zinc-500">
              به جهت انتقال مشتری به کارتابل کارشناسان فروش از این بخش استفاده
              کنید
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <div className=" w-full">
                <SelectCombo
                  onChange={(e) => setNewAdmin(e.value)}
                  placeholder={"انتخاب کارشناس فروش"}
                  options={dataPersonelApp
                    .filter((o) => o.access == "3")
                    .map((k) => ({
                      value: k._id,
                      label: k.name + " " + k.lastName,
                    }))}
                />
              </div>
              <div className="w-full mt-3">
                <Tag color="red" className="w-full p-1">
                  *نکته : در این بخش فقط کارشناسان فروش در دسترس هستند
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal add contract */}
      <Modal
        // className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>افزودن معامله</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            <ButtonAfra
              onClick={addContract}
              type={"green"}
              showLoad={loadContract}
              text={"ثبت"}
            />
            <ButtonAfra
              onClick={() => setOpenContract(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={loadingContract}
        open={openContract}
        onCancel={() => setOpenContract(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">ثبت معامله جدید</div>
            <div className="text-[12px] font-normal text-zinc-500">
              افزودن معامله جدید به این کاریز معاملات سیستم
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3 items-end">
                <InputCom
                  onChenge={changeHandlerContract}
                  name={"name"}
                  type={"req"}
                  placeholder={"نام و نام خانوادگی"}
                />
                <InputCom
                  onChenge={changeHandlerContract}
                  name={"coName"}
                  type={"req"}
                  placeholder={"نام شرکت"}
                />
                <InputCom
                  onChenge={changeHandlerContract}
                  name={"phone"}
                  type={"req"}
                  placeholder={"شماره تماس"}
                />
                <InputCom
                  onChenge={changeHandlerContract}
                  name={"contractName"}
                  type={"req"}
                  placeholder={"عنوان معامله"}
                />
                <span className="flex gap-3">
                  <InputCom
                    onChenge={changeHandlerContract}
                    name={"contractPrice"}
                    type={"req"}
                    placeholder={"مبلغ حدودی"}
                  />
                  <span className="w-[60px]">
                    <InputCom type={"dis"} placeholder={"ریال"} />
                  </span>
                </span>
                <InputCom
                  onChenge={ContractDateChange}
                  type={"date"}
                  placeholder={"تاریخ بسته شدن معامله"}
                />
              </div>
              <div className=" w-full">
                <SelectCombo
                  onChange={changeSelectContract}
                  placeholder={"انتخاب مرحله معامله"}
                  options={[
                    {
                      value: "1",
                      label: "مذاکرات اولیه",
                    },
                    {
                      value: "2",
                      label: "پیگیری",
                    },
                    {
                      value: "3",
                      label: "قیمت و نهایی کردن",
                    },
                  ]}
                />
                <InputCom
                  onChenge={changeHandlerContract}
                  name={"text"}
                  type={"textarea"}
                  placeholder={"توضیحات"}
                  col={5}
                  row={5}
                />
              </div>
              <div className="w-full mt-3">
                <Tag color="success" className="w-full p-1">
                  *نکته : تمامی معاملات ثبت شده در سامانه به منزله قطعی بودن و
                  کسر از انبار نمی باشد
                </Tag>
                <Tag color="success" className="w-full p-1 mt-3">
                  *نکته : به منظور تکمیل می بایست برای مشتری پیش فاکتور صادر
                  شود.
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal Show contract */}
      <Modal
        className="modal-big-data"
        title={
          <div className="w-[90%] flex gap-3">
            <p>مشاهده معامله</p>
          </div>
        }
        footer={
          <div className="w-full flex gap-3 mt-5">
            {getCookieAccess == "1" ? (
              <>
                <ButtonAfra
                  onClick={addContractEdit}
                  type={"blue"}
                  showLoad={loadContractEdit}
                  text={"بروزرسانی"}
                />
                <ButtonAfra
                  onClick={() => deleteContract(dataContractEdit._id)}
                  type={"red"}
                  showLoad={loadingDelContractEdit}
                  text={"حذف"}
                />
              </>
            ) : (
              <></>
            )}

            <ButtonAfra
              onClick={() => setShowDataCont(false)}
              type={"blue-dark"}
              text={"بستن"}
            />
          </div>
        }
        loading={showDataContLoad}
        open={showDataCont}
        onCancel={() => setShowDataCont(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <div className="text-lg font-bold">اطلاعات معامله</div>
                <div className="text-[12px] font-normal text-zinc-500">
                  مشاهده اطلاعات معامله ثبت شده در کاریز
                </div>
              </div>
              <div className="flex gap-3">
                <WhatsappIcon
                  onClick={() =>
                    location.replace(
                      `https://web.whatsapp.com/send?phone=+98${dataCon.phone}`
                    )
                  }
                  color="#25D366"
                  className="flex cursor-pointer hover:scale-95 duration-300 transition-all  justify-center items-center p-1 border rounded-lg"
                  size={"1.9rem"}
                />

                <TelegramIcon
                  onClick={() =>
                    location.replace(` https://t.me/+98${dataCon.phone}`)
                  }
                  color="#34B7F1"
                  className="flex justify-center cursor-pointer hover:scale-95 duration-300 transition-all items-center p-1 border rounded-lg"
                  size={"1.9rem"}
                />
                <Call02Icon
                  onClick={() => location.replace(`tel:+98${dataCon.phone}`)}
                  color="#454545"
                  className="flex justify-center cursor-pointer hover:scale-95 duration-300 transition-all items-center p-1 border rounded-lg"
                  size={"1.9rem"}
                />
              </div>
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3 items-end">
                <InputCom
                  onChenge={changeHandlerContractEdit}
                  name={"name"}
                  type={"req"}
                  placeholder={"نام و نام خانوادگی"}
                  defaultValue={dataContractEdit.name}
                />
                <InputCom
                  onChenge={changeHandlerContractEdit}
                  name={"coName"}
                  type={"req"}
                  placeholder={"نام شرکت"}
                  defaultValue={dataContractEdit.coName}
                />
                <InputCom
                  onChenge={changeHandlerContractEdit}
                  name={"contractName"}
                  type={"req"}
                  placeholder={"عنوان معامله"}
                  defaultValue={dataContractEdit.contractName}
                />
                <span className="flex gap-3">
                  <InputCom
                    name={"contractPrice"}
                    type={"dis"}
                    value={
                      ConvertEnNumberToPersian(
                        separate(dataContractEdit.contractPrice)
                      ) +
                      " " +
                      "ریال"
                    }
                  />
                  <span className="w-[60px]">
                    <InputCom type={"dis"} placeholder={"ریال"} />
                  </span>
                </span>
                <InputCom
                  onChenge={ContractDateChangeEdit}
                  type={"date"}
                  placeholder={dataContractEdit.date}
                />

                <SelectCombo
                  placeholder={
                    dataContractEdit.contractStep == "2"
                      ? "پیگیری"
                      : dataContractEdit.contractStep == "1"
                        ? "مذاکرات اولیه"
                        : dataContractEdit.contractStep == "3"
                          ? "قیمت و نهایی کردن"
                          : ""
                  }
                  onChange={changeSelectContractEdit}
                  options={[
                    {
                      value: "1",
                      label: "مذاکرات اولیه",
                    },
                    {
                      value: "2",
                      label: "پیگیری",
                    },
                    {
                      value: "3",
                      label: "قیمت و نهایی کردن",
                    },
                  ]}
                />
              </div>
              <div className=" w-full">
                <InputCom
                  placeholder={"شماره تماس"}
                  onChenge={changeHandlerContractEdit}
                  name={"phone"}
                  type={"req"}
                  defaultValue={dataContractEdit.phone}
                />
                <InputCom
                  onChenge={changeHandlerContractEdit}
                  name={"text"}
                  placeholder={"توضیحات"}
                  type={"textarea"}
                  defaultValue={dataContractEdit.text}
                  col={5}
                  row={5}
                />
              </div>
              <div className="w-full mt-3">
                <Tag color="success" className="w-full p-1">
                  *نکته : تمامی معاملات ثبت شده در سامانه به منزله قطعی بودن و
                  کسر از انبار نمی باشد
                </Tag>
                <Tag color="success" className="w-full p-1 mt-3">
                  *نکته : به منظور تکمیل می بایست برای مشتری پیش فاکتور صادر
                  شود.
                </Tag>
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
            <p>نمایش حواله فروش</p>

            {dataOrderDetailHavale.status == "true" ? (
              <Tag color="green">حواله تائید شده</Tag>
            ) : (
              <Tag color="red">حواله تائید نشده</Tag>
            )}
          </div>
        }
        footer={
          <div className="w-full flex justify-center gap-3 items-end mt-3">
            {getCookieAccess == "1" || getCookieAccess == "3" ? (
              <div
                className={`w-2/3 ${dataOrderDetailHavale.status == "true" ? "hidden" : ""} flex gap-3 items-end`}
              >
                <InputCom
                  onChenge={(e) => setSignCodeHavale(e.target.value)}
                  type={"req"}
                  placeholder={"کد امضای اپراتور یا مدیر جهت تایید فاکتور"}
                />
                <ButtonAfra
                  onClick={confirmFactorHavaleSell}
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
                text={"چاپ حواله"}
              />
              <ButtonAfra
                onClick={() => setOpenHavale(false)}
                type={"blue-dark"}
                text={"بستن"}
              />
            </div>
          </div>
        }
        loading={loadHavale}
        open={openHavale}
        onCancel={() => setOpenHavale(false)}
      >
        <div className="w-full flex flex-col gap-5 justify-start items-center">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <div className="text-lg font-bold">حواله فروش</div>
            <div className="text-[12px] font-normal text-zinc-500">
              می توانید حواله فروش را با جزئیات و کالا ها ببینید.
            </div>

            <div className="w-full mt-3 flex flex-col gap-3">
              <Tag color="red">
                *نکته : این فاکتور بدون تایید مدیر فاقد اعتبار و اهمیت می باشد
              </Tag>
              <Tag color="red">
                *نکته : تائید اپراتور به منزله تائید نهائی نمی باشد
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
                    حواله فروش
                  </h2>
                  <span className="w-[1%] flex justify-end">
                    {new Date().toLocaleDateString("fa-ir")}
                  </span>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات فروشنده</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3 items-center">
                    <span>نام فروشنده : {dataFactor.sellerName}</span>
                    <span>شناسه ملی : {dataFactor.nationalCode} </span>
                    <span>نشانی : {dataFactor.address}</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره اقتصادی : {dataFactor.bussinessNumber}</span>
                    <span> کد پستی : {dataFactor.postalCode}</span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره ثبت : {dataFactor.sabtNmuber}</span>
                    <span> فکس : {dataFactor.fax}</span>
                    <span>تلفن : {dataFactor.phone}</span>
                  </div>
                </div>
                <div className="border-t border-b border-zinc-300 w-full flex justify-center items-center h-[35px]">
                  <span>مشخصات خریدار</span>
                </div>
                <div className=" border-b px-3 border-zinc-300 w-full grid grid-cols-3 gap-3 justify-center items-center h-[120px]">
                  <div className="flex flex-col gap-3 items-center">
                    <span>
                      نام خریدار : {dataOrderDetailBuyerHavale.buyerName}
                    </span>
                    <span>
                      شناسه ملی : {dataOrderDetailBuyerHavale.nationalCode}{" "}
                    </span>
                    <span>نشانی : {dataOrderDetailBuyerHavale.address}</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>
                      شماره اقتصادی : {dataOrderDetailBuyerHavale.buissCode}
                    </span>
                    <span>
                      {" "}
                      کد پستی : {dataOrderDetailBuyerHavale.postalCode}
                    </span>
                    <span></span>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <span>شماره ثبت : {"-"}</span>
                    <span> فکس : {"-"}</span>
                    <span>تلفن : {dataOrderDetailBuyerHavale.phone}</span>
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
                    قیمت کالا
                  </div>
                </div>

                {dataOrderDetailHavale.products.map((data, index) => (
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
                        <div className="border-l w-full h-full flex flex-col gap-3 ">
                          <span>امضا سرپرست</span>
                          {dataOrderDetailBuyerHavale.statusOp == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyerHavale.statusOpUserSignImage ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96 h-32"
                                  src={
                                    !dataOrderDetailBuyerHavale.statusOpUserSignImage
                                      ? "#"
                                      : dataOrderDetailBuyerHavale.statusOpUserSignImage
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

                          {dataOrderDetailBuyerHavale.statusOpAdmin ==
                          "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyerHavale.statusOpUserAdminSignImage ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96  h-32"
                                  src={
                                    !dataOrderDetailBuyerHavale.statusOpUserAdminSignImage
                                      ? "#"
                                      : dataOrderDetailBuyerHavale.statusOpUserAdminSignImage
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

                          {dataOrderDetailBuyerHavale.status == "true" ? (
                            <span className="mx-auto">
                              {dataOrderDetailBuyerHavale.statusSignImage ==
                              "-" ? (
                                ""
                              ) : (
                                <img
                                  className="w-96 h-32"
                                  src={
                                    !dataOrderDetailBuyerHavale.statusSignImage
                                      ? "#"
                                      : dataOrderDetailBuyerHavale.statusSignImage
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
                          // dataOrderDetailHavale.products.reduce(
                          //   (accumulator, transaction) => {
                          //     return (
                          //       accumulator +
                          //       parseInt(
                          //         !transaction.price ? 0 : transaction.price
                          //       ) *
                          //         parseInt(transaction.count) +
                          //       ((accumulator +
                          //         parseInt(
                          //           !transaction.price ? 0 : transaction.price
                          //         ) *
                          //           parseInt(transaction.count)) *
                          //         10) /
                          //         100
                          //     );
                          //   },
                          //   0
                          // )
                          totalAmount
                        ) + "ریال"}
                      </div>
                    </div>
                    {dataOrderDetailBuyerHavale.tax == "1" ? (
                      <>
                        <div className="flex">
                          <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                            مالیات و ارزش افزوده
                          </div>
                          <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                            {separate(
                              // dataOrderDetailHavale.products.reduce(
                              //   (accumulator, transaction) => {
                              //     return (
                              //       accumulator +
                              //       parseInt(
                              //         !transaction.price ? 0 : transaction.price
                              //       ) *
                              //         parseInt(transaction.count) +
                              //       ((accumulator +
                              //         parseInt(
                              //           !transaction.price ? 0 : transaction.price
                              //         ) *
                              //           parseInt(transaction.count)) *
                              //         10) /
                              //         100
                              //     );
                              //   },
                              //   0
                              // )
                              totalAmountWithTaxApp
                            ) + "ریال"}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-[18.4rem] border-b border-l border-zinc-300 flex justify-center items-center h-[35px]">
                            جمع کل با 10% ارزش افزوده
                          </div>
                          <div className="w-full border-b  border-zinc-300 flex justify-center items-center h-[35px]">
                            {separate(
                              // dataOrderDetailHavale.products.reduce(
                              //   (accumulator, transaction) => {
                              //     return (
                              //       accumulator +
                              //       parseInt(
                              //         !transaction.price ? 0 : transaction.price
                              //       ) *
                              //         parseInt(transaction.count) +
                              //       ((accumulator +
                              //         parseInt(
                              //           !transaction.price ? 0 : transaction.price
                              //         ) *
                              //           parseInt(transaction.count)) *
                              //         10) /
                              //         100
                              //     );
                              //   },
                              //   0
                              // )
                              totalAmountWithTax
                            ) + "ریال"}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <div className="mt-2 p-3">
                      توضیحات : {dataOrderDetailBuyerHavale.des}
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
export default sales;
