import Search from "./components/Search";
import Result from "./components/Result";
import draw from "./assets/draw.png";
import boulder from "./assets/boulder.png";
import nut from "./assets/nut.png";
import Display from "./components/Display";

import bookData from "./Data.json";
import { useState } from "react";

const correct = {
  name: "Red Rocks",
  image: draw,
  region: "North America",
  routes: 2621,
  type: "Sandstone",
};

function App() {
  const [displayData, setDisplayData] = useState<any[]>([]);

  const handleChildButtonClick = (data: any) => {
    setDisplayData([...displayData, data]);
  };

  return (
    <>
      <main className="w-full h-screen flex flex-col items-center bg-purple-50 pt-5">
        <h1 className="text-3xl font-bold underline mx-auto mb-5">Cragdle!</h1>

        <Search
          placeholder="Enter your guess"
          data={bookData}
          onButtonClick={handleChildButtonClick}
        />

        <div id="resultArea" className=" flex flex-col-reverse">
          {displayData.map((data, index) => (
            <Display key={index} correct={correct} guess={data} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
