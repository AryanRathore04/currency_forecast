"use client";

import { useEffect, useState } from "react";
import { fetchCurrencyData } from "@/lib/fetchCurrencyData";
import Chart_Component from "@/components/Chart_Component";
import { CurrencyData } from "@/types/CurrencyData";

export default function Home() {
  const [data, setData] = useState<CurrencyData[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      const result = await fetchCurrencyData(
        "INR",
        ["USD", "EUR", "JPY"],
        "2025-04-15", // 7 days ago
        "2025-04-22"  // yesterday (API might not return same-day data)
      );
      
      
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="p-6 bg-zinc-800 text-amber-50">
      <h2 className="text-xl font-bold mb-4">Currency Forecast</h2>
      <Chart_Component data={data} />
      <pre className="text-xs text-gray-500">{JSON.stringify(data, null, 2)}</pre>


    </div>
  );
}
