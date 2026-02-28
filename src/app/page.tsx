"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
interface Flight {
  flight_date: string;
  flight_status: string;
  departure: { airport: string; iata: string };
  arrival: { airport: string; iata: string };
  airline: { name: string };
  flight: { number: string };
}

export default function AviationPage() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await fetch("/api/flights");
        const data = await res.json();
        setFlights(data.data.slice(0, 20)); // first 20 flights
      } catch (err) {
        console.error("Failed to fetch flights", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading flights...</p>;

  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto p-4">
      {/* Heading with logo */}
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
        <img
          src="https://static.vecteezy.com/system/resources/previews/051/583/607/non_2x/flight-radar-logo-design-vector.jpg"
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        Live Flights
      </h1>
     <Link href="/about">About</Link> 


      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {flights.map((f, i) => (
          <li
            key={i}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <p className="font-semibold">
              {f.airline.name} Flight {f.flight.number}
            </p>
            <p className="text-sm">
              {f.departure.iata} → {f.arrival.iata}
            </p>
            <p className="text-sm">Status: {f.flight_status}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}