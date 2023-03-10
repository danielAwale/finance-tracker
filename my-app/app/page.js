"use client";

import { useState, useRef, useEffect } from "react";

import { currencyFormatter } from "@/lib/utils";

import CategoryItem from "@/components/CategoryItem";
import Modal from "@/components/Modal";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

//Firebase

import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

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
  const [income, setIncome] = useState([])
  const [addIncomeModal, setAddIncomeModal] = useState(false);
  const amountRef = useRef();
  const descriptionRef = useRef();

  //handler funtion
  const addIncomeHandler = async (e) => {
    e.preventDefault();

    const newIncome = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      createdAt: new Date(),
    };

    // create a reference to the collection, it will use the collection function,
    const collectionRef = collection(db, "income");
    try {
      const docSnap = await addDoc(collectionRef, newIncome);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getIncomeData = async () => {
      const collectionRef = collection(db, 'ioncome')
      const docsSnap = await getDocs(collectionRef)

      const data = docsSnap.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.ddata().createdAt.toMillis())
        }
      })

      setIncome(data)
    }

    getIncomeData()
  }, [])

  return (
    <>
      {/* Add Income Modal */}
      <Modal show={addIncomeModal} onClose={setAddIncomeModal}>
        <form className="input-group" onSubmit={addIncomeHandler}>
          <div className="input-group">
            <label htmlFor="amount">Income Amount</label>
            <input
              name="amount"
              ref={amountRef}
              type="number"
              min={0.01}
              step={0.01}
              placeholder="Enter income amount"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="amount">Description</label>
            <input
              name="description"
              ref={descriptionRef}
              type="text"
              placeholder="Enter income description"
              required
            />
          </div>

          <button type="submit" className="self-start btn btn-primary">
            Add Entry
          </button>
        </form>

        <div className="flex flex-col gap-4 mt-6">
          <h3 className="text-2xl font-bold">Income History</h3>

        </div>
      </Modal>

      <main className="container mac-w-2xl px-6 py-6 mx-auto">
        <section className="py-3">
          <small className="text-gray-400 text-md">My Balance</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(10000)}</h2>
        </section>
        <section className="flex items-center gap-2 py-3">
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary"
            onClick={() => { }}
          >
            + Expense
          </button>
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary-outline"
            onClick={() => setAddIncomeModal(true)}
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
                  key={item.id}
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
