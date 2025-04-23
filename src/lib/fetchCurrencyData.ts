export async function fetchCurrencyData(p0: string, p1: string[], p2: string, p3: string) {
  const base = "INR";
  const symbols = ["USD", "EUR", "JPY"];
  const start = "2024-12-01";
  const end = "2024-12-10";

  const url = `https://api.apilayer.com/exchangerates_data/timeseries?base=${base}&symbols=${symbols.join(",")}&start_date=${start}&end_date=${end}`;

  const res = await fetch(url, {
    headers: {
      apikey: "EpxetfwrvJq1Nx0YShVd7zPUEXq8osLg" // 🔐 <- Replace this with your real key
    }
  });

  const data = await res.json();

  console.log("🔥 API response:", data);

  if (!data.rates) {
    throw new Error("No rate data found in response.");
  }

  return Object.entries(data.rates).map(([date, currencies]) => ({
    date,
    ...(typeof currencies === "object" && currencies !== null ? currencies : {})
  }));
}
