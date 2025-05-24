import React from "react";

const Oxford = () => {
  return (
    <div className="mt-30 min-h-screen py-10 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Oxford Debate Format
        </h1>

        {/* The Setup */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">The Setup</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Affirmative (Aff):</strong> Supports the motion.</li>
            <li><strong>Negative (Neg):</strong> Argues against the motion.</li>
            <li><strong>Team Structure:</strong> Typically two to three speakers per side.</li>
          </ul>
        </section>

        {/* Timing */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Timing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Opening Speeches:</strong> ~4–6 minutes per speaker.</li>
            <li><strong>Rebuttals:</strong> ~3–5 minutes per speaker.</li>
            <li><strong>Closing Arguments:</strong> ~2–3 minutes per speaker.</li>
          </ul>
        </section>

        {/* Tips for Affirmative */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Tips for the Affirmative (Aff)</h2>
          
          <h3 className="font-semibold text-lg text-green-800 mb-1">Opening Speech:</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Define key terms and create a strong, fair framework.</li>
            <li>Present 2–3 compelling, logical, and motion-aligned arguments.</li>
            <li>Outline your roadmap: “We will demonstrate X, Y, and Z...”</li>
          </ul>

          <h3 className="font-semibold text-lg text-green-800 mb-1">Rebuttal:</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Counter Neg arguments with facts and logical analysis.</li>
            <li>Highlight flaws in Neg counterexamples or logic.</li>
            <li>Reinforce your case: “Our position remains strong because...”</li>
          </ul>

          <h3 className="font-semibold text-lg text-green-800 mb-1">Closing Arguments:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Summarize all your main arguments and impacts clearly.</li>
            <li>End powerfully—with a quote, stat, or emotional appeal.</li>
          </ul>
        </section>

        {/* Tips for Negative */}
        <section>
          <h2 className="text-2xl font-semibold text-red-700 mb-3">Tips for the Negative (Neg)</h2>
          
          <h3 className="font-semibold text-lg text-red-800 mb-1">Opening Speech:</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Challenge any biased or unclear definitions from Aff.</li>
            <li>Offer a counterframework showing flaws or harms in the motion.</li>
            <li>Present 2–3 strong, evidence-based counterarguments.</li>
          </ul>

          <h3 className="font-semibold text-lg text-red-800 mb-1">Rebuttal:</h3>
          <ul className="list-disc list-inside ml-4 mb-3 text-gray-700">
            <li>Break down Aff arguments with clear logic and poise.</li>
            <li>Defend your key points confidently and coherently.</li>
            <li>Stay calm and focused—clarity is more effective than aggression.</li>
          </ul>

          <h3 className="font-semibold text-lg text-red-800 mb-1">Closing Arguments:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Assert that the Aff failed to prove X, Y, or Z—so the motion fails.</li>
            <li>Conclude with logical or moral appeal to strengthen your stand.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Oxford;
