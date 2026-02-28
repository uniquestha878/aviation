
      export default function About() {
  return ( 
    <div>
      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-center">About This App</h2>
        <p className="text-center text-gray-700">
          This Aviation Live Flights Tracker app shows real-time flight data using
          AviationStack API. You can see airline, flight number, departure and
          arrival airports, and the current flight status. Built with Next.js,
          TypeScript, and Tailwind CSS for a responsive and fast experience.
        </p>
      </section>
      <nav className="mt-8 text-center">
        <a
          href="https://aviationstack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Powered by AviationStack API
        </a>
      </nav>
      </div>
);
}