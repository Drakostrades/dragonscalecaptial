import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dragon Scale Capital</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Challenge-based funding for elite traders in Forex, Crypto & Gold.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-3">Start Your Challenge</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-white text-white">
            Dashboard Login
          </Button>
        </div>
      </section>

      <section className="text-center py-4">
        <h2 className="text-3xl font-semibold mb-6">Choose Your Challenge</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 max-w-6xl mx-auto">
        {[
          { title: "10K Challenge", price: "$99", details: "Phase 1: 8% | Phase 2: 5% | Max Drawdown: 10%" },
          { title: "50K Challenge", price: "$249", details: "Phase 1: 8% | Phase 2: 5% | Max Drawdown: 10%" },
          { title: "100K Challenge", price: "$399", details: "Phase 1: 8% | Phase 2: 5% | Max Drawdown: 10%" },
        ].map((plan, i) => (
          <Card key={i} className="bg-slate-800 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-xl mb-2">{plan.price}</p>
              <p className="text-sm text-slate-400">{plan.details}</p>
              <Button className="mt-4 w-full">Select</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Why Dragon Scale?</h2>
        <ul className="text-lg space-y-2">
          <li>✔️ 2-Phase Evaluation Model</li>
          <li>✔️ Fast Payouts & Scaling Plans</li>
          <li>✔️ Trade Crypto 24/7</li>
          <li>✔️ Built by Traders, for Traders</li>
          <li>✔️ Real-time Dashboard for Performance Tracking</li>
          <li>✔️ Instant Challenge Purchase & Account Setup</li>
          <li>✔️ Support via Discord + Email</li>
        </ul>
      </section>

      <section className="text-center py-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-md mb-2">Join our <a href="#" className="text-blue-400 underline">Discord</a> or email us at <a href="mailto:support@dragonscalecapital.com" className="text-blue-400 underline">support@dragonscalecapital.com</a></p>
      </section>

      <footer className="text-center text-sm text-slate-500 py-6">
        &copy; {new Date().getFullYear()} Dragon Scale Capital. All rights reserved.
      </footer>
    </main>
  );
}
