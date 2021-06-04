import React, { useEffect, useState } from "react";
import axios from "axios";

import ReviewsList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

const baseUrl = "https://radiant-tundra-36046.herokuapp.com/api";

export default function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then(({ data }) => {
        setResponse(data.reviews);
      })
      .catch((e) => {
        setHasError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ReviewForm reviews={response} setReviews={setResponse} />
      <ReviewsList reviews={response} load={loading} hasError={hasError} />
    </>
  );
}
