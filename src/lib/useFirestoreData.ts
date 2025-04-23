'use client';

// src/lib/useFirestoreData.ts
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const useFirestoreData = () => {
  const [data, setData] = useState<{ timestamp: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "currencyData"));
        const dataArray = querySnapshot.docs.map(doc => {
          const { timestamp, value } = doc.data();
          return { timestamp: String(timestamp), value: Number(value) };
        });
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFirestoreData;
