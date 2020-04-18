import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAsteroids } from "../../features/asteroids";

const Asteroids = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsteroids());
  }, [dispatch])

  return <h1>Asteroids</h1>;
}

export default Asteroids;