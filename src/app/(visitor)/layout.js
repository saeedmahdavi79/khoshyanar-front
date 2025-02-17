import NextTopLoader from "nextjs-toploader";
import HeaderDashboardVisitor from "../components/layout/HeaderVisitor/HeaderVisitor";

export default function DashboardLayoutVisitor({ children }) {
  return (
    <div className="bg-white rounded-[40px] dashboard-layout w-[95%] flex max-h-[1080px] h-full overflow-hidden">
      <NextTopLoader
        color="#fb8230"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        zIndex={9999999999999999999}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <HeaderDashboardVisitor child={children} />
    </div>
  );
}
