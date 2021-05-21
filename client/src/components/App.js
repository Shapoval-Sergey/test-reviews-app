import React, { useEffect, useState } from "react";
import axios from "axios";

import ReviewsList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

export default function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/")
      .then(({ data }) => {
        setResponse(data.reviews);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ReviewForm getData={fetchData} />
      <ReviewsList reviews={response} load={loading} hasError={hasError} />
    </>
  );
}
