import { DollarSign, BellRing, HandCoins, ChartColumnBig } from "lucide-react";
import StatCard from "./StatCard";

const Stats = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
     <StatCard title="Total Balance" subtitle="all accounts" icon={<DollarSign size={22}/>} stat="$4500"/>
     <StatCard title="Monthly Expenses" subtitle="total spent this month" icon={<ChartColumnBig size={22}/>} stat="$1500"/>
     <StatCard title="Upcoming Bills" subtitle="due in 5 days" icon={<BellRing size={22}/>} stat="$2000"/>
     <StatCard title="Savings Progress" subtitle="progress in time" icon={<HandCoins size={22}/>} stat="43%"/>
    </div>
  )
}

export default Stats