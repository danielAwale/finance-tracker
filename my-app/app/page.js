import { currencyFormatter } from "@/lib/utils";

import CategoryItem from "@/components/CategoryItem";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const dummyData = [
  {
    id: 1,
    title: "rent",
    color: "red",
    amount: 2477,
  },
  {
    id: 2,
    title: "car payments",
    color: "green",
    amount: 500,
  },
  {
    id: 3,
    title: "internet",
    color: "blue",
    amount: 150,
  },
  {
    id: 4,
    title: "phone bill",
    color: "purple",
    amount: 70,
  },
  {
    id: 5,
    title: "groceries",
    color: "orange",
    amount: 600,
  },
];

export default function Home() {
  return (
    <main className="container mac-w-2xl px-6 py-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(6000)}</h2>
      </section>
      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expense</button>
        <button className="btn btn-primary-outline">+ Income</button>
      </section>

      {/* Expenses */}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {dummyData.map((item) => {
            return (
              <CategoryItem
                color={item.color}
                title={item.title}
                amount={item.amount}
              />
            );
          })}
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-6 px-6">
        <h3 className="text-2xl">Stats</h3>
      </section>
    </main>
  );
}
