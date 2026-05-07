export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For University Counseling Centers & Students
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Track Student Stress<br />
          <span className="text-[#58a6ff]">Before It Peaks</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor assignment deadlines, exam schedules, and workload to predict stress levels and trigger timely interventions — keeping students on track and counselors informed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-sm text-[#8b949e] mt-1">Stress prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">3x</div>
            <div className="text-sm text-[#8b949e] mt-1">Earlier interventions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">10k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Students tracked</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited deadline tracking",
              "AI-powered stress scoring",
              "Automated intervention alerts",
              "Counseling center dashboard",
              "Exam & assignment calendar sync",
              "Weekly wellbeing reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the stress prediction work?",
              a: "Our algorithm scores each student based on upcoming deadlines, exam proximity, assignment volume, and historical patterns. When the score crosses a threshold, counselors receive an automated alert."
            },
            {
              q: "Is student data kept private?",
              a: "Yes. All data is encrypted at rest and in transit. Students control their own data and can opt out at any time. We are FERPA-compliant and never sell student information."
            },
            {
              q: "Can counseling centers customize intervention triggers?",
              a: "Absolutely. Counseling centers can set custom stress score thresholds, define intervention templates, and configure notification channels including email and SMS."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Student Deadline Stress Tracker. All rights reserved.
      </footer>
    </main>
  );
}
