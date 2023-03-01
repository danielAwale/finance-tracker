import { currencyFormatter } from "@/lib/utils";

export default function Home() {
  return (
    <main className="container mac-w-2xl px-6 py-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(98000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expense</button>
        <button className="btn btn-primary-outline">+ Income</button>
      </section>
    </main>
  );
}
