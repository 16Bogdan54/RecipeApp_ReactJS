import React from "react";

export const Nutrition = ({ nutrition }) => {
  let h =
    Object.entries(nutrition).length !== 0
      ? "Nutrition"
      : "Nutrition wasn't added yet";

  return (
    <>
      <h4>{h}</h4>
      <ul
        style={{
          listStyleType: "disc",
        }}
      >
        {Object.entries(nutrition).map((item, index) => {
          return <li key={index}>{`${item[0]} ${item[1]}`}</li>;
        })}
      </ul>
    </>
  );
};
