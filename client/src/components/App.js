import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import ReviewsList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

export default function App() {
  const [reviews, setReviews] = useState([]);
  // const { loading, setLoading } = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      if (reviews) {
        await axios
          .get("http://localhost:5000/api/")
          .then((data) => {
            setReviews(data);
          })
          .catch((e) => console.log(e));
      }
    } catch (error) {}
  }, [reviews]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <>
      <ReviewForm />
      <ReviewsList reviews={reviews} />
    </>
  );
}
