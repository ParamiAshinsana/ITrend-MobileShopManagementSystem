import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./Components/ItemCard";

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items/getAllItems")
      .then((response) => {
        setItems(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {items.map((item) => (
          <ItemCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
