import { useEffect, useState } from "react";

export const useFetchProduct = (url) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setItems(data), setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { items, loading };
};
