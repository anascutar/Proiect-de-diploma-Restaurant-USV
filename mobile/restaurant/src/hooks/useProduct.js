import React, { useState } from "react";
import axios from "axios";

export const useProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = React.useCallback(async (type, searchTerm) => {
    try {
      setLoading(true);
      const resp = await fetch(`http://192.168.0.102:8080/api/v1/itemi`);
      const data = await resp.json();
      setListProducts(data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const resetList = () => {
    setListProducts([]);
  };

  return [listProducts, isLoading, fetchProducts, resetList];
};
