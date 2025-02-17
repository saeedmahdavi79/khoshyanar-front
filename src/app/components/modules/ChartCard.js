// import LineAreaChart from "./LineChart";

const ChartCard = ({ data, option, title, des }) => {
  return (
    <div className="w-2/3 h-fit  bg-white rounded-[20px] shadow-afra flex flex-col justify-between py-6 items-center">
      <div className="flex w-full px-5 justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[16px] text-[var(--color-slate-dark)]">
            {/* گزارشات فروش بر اساس کارشناس */}
            {title}
          </span>
          <span className="text-[11px] font-normal text-gray-400">{des}</span>
        </div>
        <div>
          <span className="font-bold text-[12px] text-gray-400">
            مشاهده همه
          </span>
        </div>
      </div>
      <div className="w-full">
        {/* <LineAreaChart chartData={data} chartOptions={option} /> */}
      </div>
    </div>
  );
};

export default ChartCard;
