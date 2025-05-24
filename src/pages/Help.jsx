import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen mt-16 py-10 flex justify-center">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Help & Support
        </h1>

        {/* Embedded Google Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Need help? Submit your query:</h2>
          <div className="w-full h-[700px]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSckjQ9g-_y7r2x8zt7188QZOjCgd2cfxlZf7SPnDa1mvGsA6w/viewform"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Help Form"
              className="rounded-xl border"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">1. Who can use this platform?</h3>
              <p>Any high school or college student interested in debate can sign up and participate.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">2. Is it free to use?</h3>
              <p>Yes! The platform is completely free for educational and personal development purposes.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">3. Can I suggest new features or topics?</h3>
              <p>Absolutely! Use the form above to share your feedback or suggestions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">4. How do I report a bug?</h3>
              <p>Fill out the help form and describe the issue. We'll look into it as soon as possible!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
