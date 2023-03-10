"use client";

import { useState } from "react";

import { currencyFormatter } from "@/lib/utils";

import CategoryItem from "@/components/CategoryItem";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyData = [
  {
    id: 1,
    title: "rent",
    color: "red",
    total: 2477,
  },
  {
    id: 2,
    title: "car payments",
    color: "green",
    total: 500,
  },
  {
    id: 3,
    title: "internet",
    color: "blue",
    total: 150,
  },
  {
    id: 4,
    title: "phone bill",
    color: "purple",
    total: 70,
  },
  {
    id: 5,
    title: "groceries",
    color: "orange",
    total: 600,
  },
];

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      {/* Modal */}
      {modalIsOpen && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container mx-auto max-w-2xl h-[80vh] rounded-3xl bg-slate-800 py-6 px-4">
            <button
              onClick={() => setModalIsOpen(false)}
              className="w-10 h-10 mb-4 font-bold rounded-full bg-slate-600"
            >
              X
            </button>
            <h3>I am a modal</h3>
          </div>
        </div>
      )}
      <main className="container mac-w-2xl px-6 py-6 mx-auto">
        <section className="py-3">
          <small className="text-gray-400 text-md">My Balance</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(6000)}</h2>
        </section>
        <section className="flex items-center gap-2 py-3">
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary"
          >
            + Expense
          </button>
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary-outline"
          >
            + Income
          </button>
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
                  amount={item.total}
                />
              );
            })}
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-6 px-6">
          <h3 className="text-2xl">Stats</h3>
          <div className="w-1/2 mx-auto">
            <Doughnut
              data={{
                labels: dummyData.map((expense) => expense.title),
                datasets: [
                  {
                    label: "Expenses",
                    data: dummyData.map((expenses) => expenses.total),
                    backgroundColor: dummyData.map(
                      (expenses) => expenses.color
                    ),
                    borderColor: ["#18181b"],
                    borderWidth: 5,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
