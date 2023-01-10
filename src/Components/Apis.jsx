import React from "react";
import { useEffect, useState } from "react";

function Apis() {
  const [data, setData] = useState([]);
  async function getapi() {
    const response = await fetch(
      "https://learnwebcode.github.io/json-example/animals-1.json"
    );
    const data = await response.json();
    // console.log(data);
    setData(data);
  }

  useEffect(() => {
    getapi();
  }, []);
  return (
    <div className="show">
      <h1 style={{ textAlign: "left" }}>OUR API Data</h1>

      <br />
      <p>
        {data.map((item) => {
          const { name, species, foods } = item;
          return (
            <div key={name}>
              <ul style={{ listStyleType: "square", textAlign: "left" }}>
                <li>{name}</li>
                <li>{species}</li>
                <li>{foods.likes.join(" , ")}</li>
                <li>{foods.dislikes.join(" , ")}</li>
                <br />
              </ul>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Apis;
