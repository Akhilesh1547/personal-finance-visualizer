import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryChart from "../components/CategoryChart";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/categories") // Make sure this API is correctly implemented!
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setData([]); // Fallback to an empty array
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category Breakdown</h1>
      <CategoryChart data={data} />
    </div>
  );
};

export default Categories;
