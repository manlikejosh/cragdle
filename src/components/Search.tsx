import React, { useState } from "react";

interface Props {
  placeholder: string;
  data: any;
  onButtonClick: (data: any) => void;
}

function Search({ placeholder, data, onButtonClick }: Props) {
  const object = (obj: {} | undefined) => {
    return obj;
  };

  const [filteredData, setFilteredData] = useState([]);
  const [defaultValue, setDefaultValue] = useState("");

  // return the obejct that was found, if no object return error
  const getObjectByValue = (array: [], key: string, value: string) => {
    const object = array.find((item) => item[key] === value);
    if (!object) {
      return undefined;
    } else {
      return object;
    }
  };

  // when click the result, populate the input with the value
  const handleResultClick = (event: any) => {
    setDefaultValue(event.target.innerHTML);
  };

  // filter through the data
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;

    const newFilter = data.filter((value: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
    setDefaultValue(event.target.value);
  };

  // when submit button is clicked
  const handleButtonClick = (event: any) => {
    setDefaultValue("");
    setFilteredData([]);

    let choice = object(getObjectByValue(data, "name", defaultValue));

    if (choice === undefined) {
      alert("NOT IN THE FUCKING LIST DUMBY");
    } else {
      console.log(choice);
      onButtonClick(choice);
    }
  };

  return (
    <div>
      <div className="flex text-center ">
        <input
          className="bg-white outline-none py-5 px-2  h-[30px] w-[300px] border-2 border-black  focus:border-gray-500 border-r-0"
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={defaultValue}
        />
        <button
          className="bg-white border-black border-2 align-middle px-2 "
          onClick={handleButtonClick}
        >
          GUESS
        </button>
      </div>

      {filteredData.length != 0 && (
        <div className="results w-[372.1px] bg-white max-h-[100px] overflow-scroll pt-1 rounded-sm shadow-sm absolute">
          {filteredData.slice(0, 15).map((value: any, key: any) => {
            return (
              <div
                className="p-1 hover:bg-gray-200 focus:bg-gray-200 "
                key={Math.random()}
                onClick={handleResultClick}
              >
                {value.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
