import React from "react";
import Result from "./Result";

interface Props {
  guess: {
    name: string;
    image: string;
    region: string;
    routes: number;
    type: string;
  };
  correct: {
    name: string;
    image: string;
    region: string;
    routes: number;
    type: string;
  };
}
function Display({ guess, correct }: Props) {
  return (
    <Result
      name={guess.name}
      image={guess.image}
      region={guess.region}
      routes={guess.routes}
      type={guess.type}
      answer={correct}
    />
  );
}

export default Display;
