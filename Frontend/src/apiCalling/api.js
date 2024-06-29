import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method) => {
    try {
      setLoader(true);
      const response = await fetch(url,{
        credentials: "include",
        method: method,
        headers: {
          "Content-Type": "application/json",
        }
      });
      const responseData = await response.json();
      console.log("responseData", responseData);
      setData(responseData);
      return responseData;
    } catch (err) {
      setError(err);
    } finally {
      setLoader(false);
    }
  };

  return { data, loader, error, fetchData };
}

export default useFetch;
