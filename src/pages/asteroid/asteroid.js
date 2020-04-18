import React, { useEffect } from "react";

const Asteroid = (props) => (
  <h1>This is the asteroid with {props.match.params.id}</h1>
);

export default Asteroid;