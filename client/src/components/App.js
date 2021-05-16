import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

import Loader from "./Loader";
import ReviewsList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://radiant-tundra-36046.herokuapp.com/")
      .then(({ data }) => {
        setReviews(data);
      })
      .catch((e) => console.log(e));
  }, [setReviews]);

  return (
    <Suspense fallback={<Loader />}>
      <ReviewForm />
      <ReviewsList reviews={reviews} />
    </Suspense>
  );
}
