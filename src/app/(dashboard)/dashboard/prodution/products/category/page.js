"use client";
import baseUrl from "@/utils/baseUrl";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { Tree } from "antd";
import CardStat from "@/app/components/modules/Card";
import InputCom from "@/app/components/modules/Inputs";
import ButtonAfra from "@/app/components/modules/Buttons";
import DialogPopup from "@/app/components/modules/Dialog";
import { HiOutlineCube } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const { DirectoryTree } = Tree;

const productCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState("1");
  const [dialogTitle, setDialogTitle] = useState("مشکلی پیش آمد");
  const [dialogDes, setDialogDes] = useState(
    " لطفا پس از بازبینی مجدد دوباره اقدام کنید"
  );
  const [disCheck, setDisCheck] = useState("check");
  const [data, setData] = useState([]);
  const [countCat, setCountCat] = useState("");
  const [data2, setData2] = useState({
    title: "",
    des: "",
    icon: "",
    slug: "",
    parent: false,
  });
  const [parent, setParent] = useState(
    "دسته بندی مادر را از روبرو انتخاب کنید"
  );

  const router = useRouter();

  useEffect(() => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/category/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));

    fetch(baseUrl("/category/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));
  }, []);

  const getDataWhenClick = () => {
    const getCookies = getCookie("WuZiK");

    fetch(baseUrl("/category/get"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setData([]) : setData(data.data.dataGet)));
    fetch(baseUrl("/category/get-count"), {
      method: "GET",
      headers: { Authorization: `Bearer ${getCookies}` },
    })
      .then((response) => response.json())
      .then((data) => (!data.data ? setCountCat("") : setCountCat(data.data)));
  };

  const sendDataToServer = async () => {
    const getCookiess = await getCookie("WuZiK");

    try {
      if (data2.title == "" && data2.des == "" && data2.parent == "") {
        setIsOpen(true);
        setDialogTitle("مشکلی پیش آمد");
        setDialogDes("لطفا تمامی فیلد های خواسته شده را با دقت پر کنید");
        getDataWhenClick();
      } else {
        try {
          const postDatas = await fetch(baseUrl("/category/create"), {
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
            setDialogDes("دسته بندی با موفقیت به سیستم اضافه شد");
            getDataWhenClick();
          } else {
            setIsOpen(true);
            setDialogType("1");
            setDialogTitle("ثبت نا موفق");
            setDialogDes("اضافه کردن دسته بندی با مشکل مواجه شد");
          }
        } catch (error) {
          setIsOpen(true);
          setDialogType("1");
          setDialogTitle("ثبت نا موفق");
          setDialogDes("اضافه کردن دسته بندی با مشکل مواجه شد");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSelect = (keys, info) => {
    setParent(info.node.title);
    setData2({ ...data2, parent: info.node.key });
    setDisCheck("discheck");
  };

  const changeHandler = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  const changeHandler2 = (e) => {
    if (e.target.checked) {
      if (data2.parent) {
        setIsOpen(true);
        setDialogType("1");
        setDialogTitle("خطا");
        setDialogDes(
          "لطفا در صورتی که دسته بندی مادر انتخاب کرده اید از انتخاب گزینه این دسته بندی مادر است خودداری کنید ، لطفا یکبار صفحه را بارگذاری مجدد کنید"
        );
      } else {
        setData2({ ...data2, parent: undefined });
      }
    }
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
                  onClick={() => router.push("/dashboard/prodution/products")}
                  text={"بازگشت"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          title={"بخش دسته بندی های کلی محصولات و مواد"}
          des={"بخش دسته بندی محصولات و مواد وارد شده در سیستم یا سازمان"}
          data={
            <>
              <div className="flex flex-col lg:flex-row mt-6 gap-3">
                <div className="lg:w-1/2 sm:w-full flex flex-col gap-4 rounded-xl p-3 bg-gray-100 border-2 border-gray-200 h-[460px] overflow-auto section-layout">
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
                <div className="lg:w-1/2 sm:w-full ">
                  <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-3 h-fit">
                    <CardStat
                      type={"9"}
                      color={"bg-[var(--color-red)]"}
                      icon={<HiOutlineCube size={"2rem"} />}
                      title={"افزودن دسته بندی به سیستم"}
                      des={
                        "به جهت افزودن دسته بندی به سیستم از فرم زیر استفاده کنید "
                      }
                    />
                    <CardStat
                      type={"9"}
                      count={countCat}
                      color={"bg-[var(--color-slate)]"}
                      icon={<HiOutlineSquares2X2 size={"2rem"} />}
                      title={"آمار کلی دسته بندی ها"}
                      countTitle={"عدد"}
                      des={"مشاهده تعداد کلی دسته بندی های موجود در سیستم"}
                    />
                    <InputCom
                      onChenge={changeHandler}
                      name={"title"}
                      legend={"نام دسته بندی"}
                      type={"req"}
                      placeholder={"نام دسته بندی را وارد کنید"}
                    />
                    <InputCom
                      onChenge={changeHandler}
                      name={"des"}
                      legend={"توضیحات دسته بندی"}
                      type={"req"}
                      placeholder={"توضیحات دسته بندی را وارد کنید"}
                    />
                    <InputCom
                      onChenge={changeHandler}
                      name={"slug"}
                      legend={"عنوان لاتین"}
                      type={"req"}
                      placeholder={"عنوان لاتین را وارد کنید"}
                    />
                    <InputCom
                      onChenge={changeHandler}
                      name={"parent"}
                      legend={"دسته بندی مادر"}
                      type={"dis"}
                      value={parent}
                      placeholder={"دسته بندی مادر را از روبرو انتخاب کنید"}
                    />
                    <InputCom
                      onChenge={changeHandler2}
                      name={"parent"}
                      legend={"دسته بندی مادر است ؟"}
                      type={disCheck}
                    />
                    <div></div>

                    {/* <ButtonAfra
                    onClick={() => router.push("/dashboard/prodution/products")}
                    type={"white"}
                    text={"بازگشت به صفحه قبل"}
                  /> */}
                  </div>
                  <div className="w-full mt-4">
                    <ButtonAfra
                      onClick={sendDataToServer}
                      type={"green"}
                      text={"افزودن دسته بندی"}
                    />
                  </div>
                </div>
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
    </>
  );
};

export default productCategory;
