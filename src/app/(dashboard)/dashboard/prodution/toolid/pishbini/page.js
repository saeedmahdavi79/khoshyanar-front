"use client";

import ButtonAfra from "@/app/components/modules/Buttons";
import CardStat from "@/app/components/modules/Card";
import PishbiniCard from "@/app/components/modules/PishbiniCard";
import { useRouter } from "next/navigation";

const pishbiniPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full max-h-[86vh] h-full">
        <CardStat
          type={"10"}
          title={"انتخاب ماه ها"}
          buttons={
            <div className="flex gap-2">
              <div className="w-[200px]">
                <ButtonAfra
                  onClick={() => router.push("/dashboard/")}
                  text={"بازگشت به بخش تولید"}
                  type={"white-green-2"}
                />
              </div>
            </div>
          }
          des={"ماه برنامه ریزی را انتخاب کنید"}
          data={
            <>
              <div className="w-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  grid xl:grid-cols-6 gap-3 mt-3">
                <PishbiniCard
                  month={"فروردین"}
                  season={"bahar"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=1"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=1"
                    )
                  }
                />
                <PishbiniCard
                  month={"اردیبهشت"}
                  season={"bahar"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=2"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=2"
                    )
                  }
                />
                <PishbiniCard
                  month={"خرداد"}
                  season={"bahar"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=3"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=3"
                    )
                  }
                />
                <PishbiniCard
                  month={"تیر"}
                  season={"tabestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=4"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=4"
                    )
                  }
                />
                <PishbiniCard
                  month={"مرداد"}
                  season={"tabestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=5"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=5"
                    )
                  }
                />
                <PishbiniCard
                  month={"شهریور"}
                  season={"tabestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=6"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=6"
                    )
                  }
                />
                <PishbiniCard
                  month={"مهر"}
                  season={"paeez"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=7"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=7"
                    )
                  }
                />
                <PishbiniCard
                  month={"آبان"}
                  season={"paeez"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=8"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=8"
                    )
                  }
                />
                <PishbiniCard
                  month={"آذر"}
                  season={"paeez"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=9"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=9"
                    )
                  }
                />
                <PishbiniCard
                  month={"دی"}
                  season={"zemestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=10"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=10"
                    )
                  }
                />
                <PishbiniCard
                  month={"بهمن"}
                  season={"zemestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=11"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=11"
                    )
                  }
                />
                <PishbiniCard
                  month={"اسفند"}
                  season={"zemestan"}
                  year={"1403"}
                  des={"توضیحات تکمیلی"}
                  clickOne={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/detail?month=12"
                    )
                  }
                  clickTwo={() =>
                    router.push(
                      "/dashboard/prodution/toolid/pishbini/start?month=12"
                    )
                  }
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default pishbiniPage;
