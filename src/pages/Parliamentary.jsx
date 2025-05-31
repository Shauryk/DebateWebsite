import React from "react";

const Parliamentary = () => {
  return (
    <div className="mt-30 min-h-screen py-10 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Public Forum Format
        </h1>

        {/* The Setup */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">The Setup</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Government (Gov) Team:</strong> Supports the motion.</li>
            <li><strong>Opposition (Opp) Team:</strong> Argues against it.</li>
            <li><strong>Team Structure:</strong> Typically two speakers per team.</li>
          </ul>
        </section>

        {/* Structure */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Structure</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Prime Minister (PM):</strong> Defines the motion and presents Gov case (~7 min).</li>
            <li><strong>Leader of Opposition (LO):</strong> Rebuts PM and presents Opp case (~7 min).</li>
            <li><strong>Member of Government (MG):</strong> Expands Gov case & rebuts Opposition (~7 min).</li>
            <li><strong>Member of Opposition (MO):</strong> Expands Opp case & finalizes arguments (~7 min).</li>
            <li><strong>Reply Speeches:</strong> PM and LO summarize their side (~4 min each).</li>
          </ul>
        </section>

        {/* Tips for Government */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Tips for the Government (Gov)</h2>
          <h3 className="font-semibold text-lg text-green-800 mb-1">Prime Minister (PM):</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Present clear and fair definitions.</li>
            <li>Introduce 2-3 strong arguments with relevance.</li>
            <li>Explain the positive impact and benefits of the motion.</li>
          </ul>
          <h3 className="font-semibold text-lg text-green-800 mb-1">Member of Government (MG):</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Rebut key Opp points and reinforce Gov arguments.</li>
            <li>Deepen the case with examples and analysis.</li>
            <li>Spot inconsistencies in Opp’s logic.</li>
          </ul>
          <h3 className="font-semibold text-lg text-green-800 mb-1">Reply Speech (PM):</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Summarize why Gov wins without new points.</li>
            <li>Compare impacts and prove Gov superiority.</li>
          </ul>
        </section>

        {/* Tips for Opposition */}
        <section>
          <h2 className="text-2xl font-semibold text-red-700 mb-3">Tips for the Opposition (Opp)</h2>
          <h3 className="font-semibold text-lg text-red-800 mb-1">Leader of Opposition (LO):</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Challenge vague or biased definitions.</li>
            <li>Suggest counter-frameworks if needed.</li>
            <li>Present 2-3 powerful counterarguments.</li>
          </ul>
          <h3 className="font-semibold text-lg text-red-800 mb-1">Member of Opposition (MO):</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Rebut new Gov points aggressively.</li>
            <li>Highlight flaws and weaknesses in Gov case.</li>
            <li>Critique Gov's proposed impacts or solutions.</li>
          </ul>
          <h3 className="font-semibold text-lg text-red-800 mb-1">Reply Speech (LO):</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Summarize why Opp wins using a strong framing.</li>
            <li>Compare core impacts and show Opp strength.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Parliamentary;
