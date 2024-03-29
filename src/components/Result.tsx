import React from "react";
import draw from "./assets/draw.png";
import boulder from "./assets/boulder.png";
import nut from "./assets/nut.png";

interface Props {
  name: string;
  image: string;
  region: string;
  routes: number;
  type: string;
  readonly answer: {
    readonly name: string;
    readonly image: string;
    readonly region: string;
    readonly routes: number;
    readonly type: string;
  };
}

function Result({ name, image, region, routes, type, answer }: Props) {
  const checkAnswer = (answer: string | number, guess: string | number) => {
    let color;
    answer === guess ? (color = " bg-green-300") : (color = " bg-red-300");
    return color;
  };

  const baseClass = "border border-black rounded-full text-center p-2";
  return (
    <>
      <div className="border-2 border-black w-fit mx-auto mt-5 flex space-x-4 p-4 bg-gray-300 rounded-md font-bold shadow-lg">
        <div className={baseClass + " bg-gray-200"}>{name}</div>
        <div>
          <img
            className={
              "w-10 aspect-square border border-black rounded-full " +
              checkAnswer(answer.image, image)
            }
            src={image}
          />
        </div>

        <div className={baseClass + checkAnswer(answer.region, region)}>
          {region}
        </div>
        <div className={baseClass + checkAnswer(answer.name, name)}>
          {routes} Routes
        </div>
        <div className={baseClass + checkAnswer(answer.type, type)}>{type}</div>
      </div>
    </>
  );
}

export default Result;
