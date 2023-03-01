export default function Home() {
  return (
    <main className="container mac-w-2xl px-6 py-6 mx-auto">
      <section>
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">$98000</h2>
      </section>

      <section>
        <button className="btn">+ Expense</button>
        <button className="btn">+ Income</button>
      </section>
    </main>
  );
}
