import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-forge-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Know what an ecommerce venture must prove before you build the catalogue.
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
          EvidenceForge pressure-tests customer demand, acquisition, repeat purchase, and unit economics before inventory, tooling, and paid growth turn a guess into a commitment.
        </p>
        <Link
          href="/intake"
          className="mt-10 inline-block bg-forge-900 text-white px-8 py-4 rounded font-semibold hover:bg-black transition"
        >
          Get your Thesis Audit — $997
        </Link>
      </header>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">The Working Question</h2>
        <p className="text-2xl font-medium mb-4">
          Will this venture earn a second order — and a healthy margin?
        </p>
        <p className="text-gray-700">
          A click-through rate is not a venture thesis. We follow observable marketplace patterns and test the riskiest assumption with real people before capital is committed.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-forge-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">1. Frame the customer</h3>
            <p>Who has the urgent problem or desire this offer owns? We define the customer and the job-to-be-done before looking at products.</p>
          </div>
          <div className="p-6 bg-forge-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">2. Inspect the pattern</h3>
            <p>Marketplace and business listings on Flippa, Acquire.com, and Empire Flippers reveal how demand is acquired, converted, repeated, and monetized.</p>
          </div>
          <div className="p-6 bg-forge-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">3. Run the smallest test</h3>
            <p>Design the cheapest experiment that can change the decision before inventory or ad spend.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ecommerce Thesis Audit</h2>
        <p className="text-lg mb-6">Fixed-scope. 5–7 business days. Clear go / kill / pivot.</p>
        <ul className="text-left inline-block space-y-2 mb-8">
          <li>• Customer + offer brief</li>
          <li>• Evidence map from public marketplace listings</li>
          <li>• Unit economics and margin risk assessment</li>
          <li>• Smallest viable test plan</li>
          <li>• Written recommendation + review call</li>
        </ul>
        <Link
          href="/intake"
          className="inline-block bg-forge-900 text-white px-8 py-4 rounded font-semibold"
        >
          Start your audit
        </Link>
      </section>

      <footer className="bg-forge-100 py-10 text-center text-gray-600">
        EvidenceForge — Evidence before enthusiasm.
      </footer>
    </div>
  );
}
