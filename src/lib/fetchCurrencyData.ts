export async function fetchCurrencyData(base: string, symbols: string[], start: string, end: string) {
    const res = await fetch(
      `https://api.exchangerate.host/timeseries?base=${base}&symbols=${symbols.join(",")}&start_date=${start}&end_date=${end}`
    );
  
    const data = await res.json();
  
    console.log("🔥 Raw API response:", data); // 👈 ADD THIS
  
    if (!data.rates) {
      throw new Error("No rate data found in response.");
    }
  
    return Object.entries(data.rates).map(([date, currencies]) => ({
      date,
      ...(typeof currencies === "object" && currencies !== null ? currencies : {})
    }));
  }
  