"use client";
import baseUrl from "@/utils/baseUrl";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { Tag, Tree } from "antd";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import ButtonAfra from "@/app/components/modules/Buttons";
import DialogPopup from "@/app/components/modules/Dialog";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import SelectCombo from "@/app/components/modules/SelectCombo";
import TableAfra from "@/app/components/modules/TableAfra";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const { DirectoryTree } = Tree;

const productCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );

  const [isOpen2, setIsOpen2] = useState(false);
  const [dialogType2, setDialogType2] = useState("1");
  const [dialogTitle2, setDialogTitle2] = useState("مشکلی پیش آمد");
  const [dialogDes2, setDialogDes2] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );

  const [isOpen3, setIsOpen3] = useState(false);
  const [dialogType3, setDialogType3] = useState("dataCount");
  const [inputBOMName, setInputBOMName] = useState();

  const [typeUser, setTypeUser] = useState("1");
  const [inputCount, setInputCount] = useState();
  const [inputCountData, setInputCountData] = useState("");

  const [disCheck, setDisCheck] = useState("check");
  const [data, setData] = useState([]);
  const [countCat, setCountCat] = useState("");
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
    parent: undefined,
  });
  const [dataParent, setDataParent] = useState();
  const [dataChild, setDataChild] = useState();
  const [data3, setData3] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [parent, setParent] = useState(
    "دسته بندی محصول را از روبرو انتخاب کنید"
  );
  const [motherProduct, setProductMother] = useState(
    "دسته بندی محصول را از روبرو انتخاب کنید"
  );
  const [parentInput, setParentInput] = useState();
  const [childInput, setChildInput] = useState();
  const [dataFormula, setDataFormula] = useState();

  const [parentShow, setParentShow] = useState("انتخاب نشده");
  const [childShow, setChildShow] = useState("انتخاب نشده");

  const [title, setTitle] = useState("");
  const [childs, setChilds] = useState([]);

  let arrayFormula = [];

  const router = useRouter();

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    // دریافت دسته بندی ها

    fetch(baseUrl("/category/get-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

    // دریافت تعداد محصول ها

    fetch(baseUrl("/product/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));

    // دریافت محصول ها

    fetch(baseUrl("/product/get-product-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData3([]) : setData3(data.data.dataGet)
      );

    //دریافت انبار ها

    fetch(baseUrl("/source/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setDataSource("") : setDataSource(data.data.dataGet)
      );
  }, []);

  const getDataWhenClick = () => {
    const getCookies = getCookie("WuZiK");
    fetch(baseUrl("/product/get-product-id"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) =>
        !data.data ? setData3("") : setData3(data.data.dataGet)
      );

    fetch(baseUrl("/product/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));
  };

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (!data2.title && !data2.des && !data2.parent) {
        setIsOpen(true);
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
            setIsOpen(true);
            setDialogType("2");
            setDialogTitle("ثبت موفق");
            setDialogDes("محصول با موفقیت به سیستم اضافه شد");
            getDataWhenClick();
          } else {
            setIsOpen(true);
            setDialogType("1");
            setDialogTitle("ثبت نا موفق");
            setDialogDes("اضافه کردن محصول با مشکل مواجه شد");
          }
        } catch (error) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن محصول با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSelect = (keys, info) => {
    setParent(info.node.title);
    setData2({
      ...data2,
      productCatId: info.node.key,
      productCatName: info.node.title,
    });
  };
  const onSelect2 = (keys, info) => {
    setProductMother(info.node.title);
    setData2({
      ...data2,
      parent: info.node.key,
    });
  };
  const onSelect3 = (keys, info) => {
    // setParentShow(info.node.title);
    // setDataParent(info.node.key);
  };

  const changeHandlerLast = (e) => {
    setTitle(e.target.value);
  };

  const onSelect4 = async (keys, info) => {
    Swal.fire({
      title: "وارد کردن تعداد",
      text: "تعداد را برای تولید یک واحد از محصول فرمولاسیون وارد کنید",
      input: "text",
      inputAttributes: {
        type: "text",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "تعداد وارد شد!",
          "تعداد وارد شده برای فرمولاسیون انجام شد",
          "موفق"
        );
        arrayFormula.push({
          title: info.node.title,
          key: info.node.key,
          count: parseFloat(result.value),
          children: info.node.children,
        });
        setChilds(arrayFormula);
        setParentInput(
          <>
            <DirectoryTree
              onSelect={onSelect3}
              treeData={arrayFormula.map((data) => ({
                title: data.title + " " + `(${data.count})`,
                key: data.key,
                children: data.children.map((data) => ({
                  title: data.title,
                  key: data.key,
                  children: data.children,
                })),
              }))}
            />
          </>
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleCount = async () => {
    const getCookiess = await getCookie("WuZiK");

    const postDatas = await fetch(baseUrl("/formula/create"), {
      method: "POST",
      headers: {
        authorization: `Bearer ${getCookiess}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, childs }),
    });

    const getResponses = await postDatas.json();
    if (getResponses.status == 200) {
      setIsOpen(true);
      setDialogType("2");
      setDialogTitle("ثبت موفق");
      setDialogDes("فرمولاسیون با موفقیت به سیستم اضافه شد");
    } else {
      setIsOpen(true);
      setDialogType("1");
      setDialogTitle("ثبت نا موفق");
      setDialogDes("اضافه کردن فرمولاسیون با مشکل مواجه شد");
    }
  };

  const parentChildHandler = () => {
    setIsOpen2(true);
    setDialogType2("dataProduct");
    setInputBOMName(
      <>
        <input
          onChange={changeHandlerLast}
          className="w-full p-2 rounded-lg bg-white focus:outline-none"
          placeholder="نام BOM را وارد کنید"
        />
      </>
    );
    setChildInput(
      <>
        <DirectoryTree
          onSelect={onSelect4}
          treeData={data3.map((data) => ({
            title: data.title,
            key: data.key,
            children: data.children.map((data) => ({
              title: data.title,
              key: data.key,
              children: data.children,
            })),
          }))}
        />
      </>
    );
  };

  // const parentChildHandlerEvent = async () => {
  //   const getCookiess = await getCookie("WuZiK");

  //   try {
  //     if (!dataParent && !dataChild) {
  //       setIsOpen(true);
  //     } else {
  //       try {
  //         const postDatas = await fetch(baseUrl("/product/add-child-parent"), {
  //           method: "POST",
  //           headers: {
  //             authorization: `Bearer ${getCookiess}`,
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ child: dataChild, parent: dataParent }),
  //         });

  //         const getResponses = await postDatas.json();

  //         if (getResponses.status == 200) {
  //           setIsOpen(true);
  //           setDialogType("2");
  //           setDialogTitle("ثبت موفق");
  //           setDialogDes("محصول با موفقیت به سیستم اضافه شد");
  //           getDataWhenClick();
  //         } else {
  //           setIsOpen(true);
  //           setDialogType("1");
  //           setDialogTitle("ثبت نا موفق");
  //           setDialogDes("اضافه کردن محصول با مشکل مواجه شد");
  //         }
  //       } catch (error) {
  //         setIsOpen(true);
  //         setDialogType("1");
  //         setDialogTitle("ثبت نا موفق");
  //         setDialogDes("اضافه کردن محصول با مشکل مواجه شد");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          buttons={
            <div className="flex gap-2">
              <div className="w-fit">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/prodution")}
                  text={"بازگشت"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          title={"مشاهده تمامی محصولات و مواد"}
          des={"مشاهده کلیه محصولات و مواد وارد شده در سیستم یا سازمان"}
          data={
            <>
              <div className="flex mt-6 gap-3">
                <div className="w-full flex flex-col justify-evenly md:flex md:flex-row xl:flex xl:flex-row  gap-3 ">
                  <div className="flex w-full flex-col gap-4 rounded-[20px] p-3 bg-gray-100 border-2 border-gray-200 h-full overflow-auto section-layout md:w-1/4">
                    <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
                      دسته بندی ها
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
                  <div>
                    <div className="w-full grid grid-cols-1 gap-3 h-fit md:grid md:grid-cols-1 xl:grid  xl:grid-cols-2">
                      <CardStat
                        type={"9"}
                        color={"bg-[var(--color-red)]"}
                        icon={<HiOutlineCube size={"2rem"} />}
                        title={"افزودن محصول به سیستم"}
                        des={
                          "به جهت افزودن محصول به سیستم از فرم زیر استفاده کنید "
                        }
                      />
                      <CardStat
                        type={"9"}
                        count={countCat}
                        color={"bg-[var(--color-slate)]"}
                        icon={<HiOutlineSquares2X2 size={"2rem"} />}
                        title={"آمار کلی محصولات"}
                        countTitle={"عدد"}
                        des={"مشاهده تعداد کلی محصولات موجود در سیستم"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"title"}
                        legend={"نام محصول"}
                        type={"req"}
                        placeholder={"نام محصول را وارد کنید"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"code"}
                        legend={"کد اختصاصی محصول"}
                        type={"req"}
                        placeholder={"نام محصول را وارد کنید"}
                      />

                      {/* <SelectCombo
                        defaultValue={typeUser}
                        options={dataSource.map((data) => ({
                          value: data._id,
                          label: data.sourceName,
                        }))}
                        name="erpCount"
                        onChange={changeHandlerSource}
                        legend={"انبار مورد استفاده"}
                        placeholder={"انبار مورد استفاده را انتخاب کنید"}
                      /> */}

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
                        legend={"منابع انسانی مورد استفاده"}
                        placeholder={"منابع انسانی مورد استفاده را انتخاب کنید"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"des"}
                        legend={"توضیحات محصول"}
                        type={"req"}
                        placeholder={"توضیحات محصول را وارد کنید"}
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
                        legend={"واحد شمارش محصول"}
                        placeholder={"واحد محصول را انتخاب کنید"}
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
                        legend={"وضعیت محصول"}
                        placeholder={"وضعیت محصول را انتخاب کنید"}
                      />

                      <InputCom
                        onChenge={changeHandler}
                        name={"machineCount"}
                        legend={"تعداد ماشین آلات مورد استفاده"}
                        type={"req"}
                        placeholder={
                          "تعداد ماشین آلات مورد استفاده را وارد کنید"
                        }
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"firstCount"}
                        legend={"تعداد موجودی اول دوره محصول مورد استفاده"}
                        type={"req"}
                        placeholder={"تعداد موجودی اول دوره محصول را وارد کنید"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"entryCount"}
                        legend={"تعداد ورودی محصول "}
                        type={"req"}
                        placeholder={"تعداد ورودی محصول را وارد کنید"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"exportCount"}
                        legend={"تعداد خروجی محصول"}
                        type={"req"}
                        placeholder={"تعداد خروجی محصول را وارد کنید"}
                      />

                      <InputCom
                        onChenge={changeHandler}
                        name={"productCatId"}
                        legend={"دسته بندی محصول"}
                        type={"dis"}
                        value={parent}
                        placeholder={"دسته بندی محصول را از روبرو انتخاب کنید"}
                      />
                      <InputCom
                        onChenge={changeHandler}
                        name={"parent"}
                        legend={"محصول مادر"}
                        type={"dis"}
                        value={motherProduct}
                        placeholder={"محصول مادر را از روبرو انتخاب کنید"}
                      />

                      <ButtonAfra
                        onClick={sendDataToServer}
                        type={"green"}
                        text={"افزودن محصول"}
                      />
                      <ButtonAfra
                        onClick={parentChildHandler}
                        type={"blue"}
                        text={"افزودن فرمولاسیون"}
                      />
                    </div>
                    <div className="w-full mt-3">
                      <ButtonAfra
                        onClick={() =>
                          router.push("/dashboard/prodution/storage")
                        }
                        type={"sabz"}
                        text={"رفتن به انبار"}
                      />
                    </div>
                  </div>

                  <div className="flex w-full md:w-1/4 xl:w-1/4 flex-col gap-4 rounded-[20px] p-3 bg-gray-100 border-2 border-gray-200 h-full overflow-auto section-layout">
                    <span className="font-bold text-[16px] text-[var(--color-slate-dark)] ">
                      محصولات به صورت درختی
                    </span>
                    <DirectoryTree
                      onSelect={onSelect2}
                      defaultExpandAll
                      multiple
                      treeData={data3.map((data) => ({
                        title: data.title,
                        key: data.key,
                        children: data.children.map((data) => ({
                          title: data.title,
                          key: data.key,
                          children: data.children,
                        })),
                      }))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <CardStat
                  type={"7"}
                  title={"همه محصولات"}
                  des={"تمامی محصولات ثبت شده شما"}
                  data={
                    <TableAfra
                      type={"green"}
                      data={data3.map((leads) => ({
                        key: leads._id,
                        name: leads.title,
                        company: leads.productCatName,
                        source: leads.sourceName,
                        status: leads.erpCount,
                        level: leads.vahed,
                        main: leads.mainCount,
                        main: leads.mainCount,
                        first: leads.firstCount,
                        visitor: leads.machineCount,
                      }))}
                      columns={[
                        {
                          title: "نام محصول",
                          dataIndex: "name",
                          key: "name",
                          sorter: true,
                        },
                        {
                          title: "دسته بندی",
                          dataIndex: "company",
                          key: "company",
                          sorter: true,
                        },
                        {
                          title: "انبار محصول",
                          dataIndex: "source",
                          key: "source",
                          sorter: true,
                        },

                        {
                          title: "موجودی اول دوره",
                          dataIndex: "first",
                          key: "first",
                          sorter: true,
                        },
                        {
                          title: "موجودی فعلی",
                          dataIndex: "main",
                          key: "main",
                          sorter: true,
                        },

                        {
                          title: "منابع انسانی مورد نیاز",
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
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>
      <DialogPopup
        isOpen={isOpen}
        type={dialogType}
        title={dialogTitle}
        des={dialogDes}
        close={() => setIsOpen(false)}
      />
      <DialogPopup
        isOpen={isOpen2}
        type={dialogType2}
        title={dialogTitle2}
        des={dialogDes2}
        parentPDK={parentShow}
        childPDK={parentInput}
        inputParent={inputBOMName}
        inputChild={childInput}
        handleEvent={handleCount}
        close={() => setIsOpen2(false)}
      />
    </>
  );
};

export default productCategory;
