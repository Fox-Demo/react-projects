import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTab = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTabs(result[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTab();
  }, [isLoading]);

  return { tabs, isLoading };
};
