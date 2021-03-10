import React, { useState } from "react";
import ColorButtons from "./ColorButtons";
import PositionedCircle from "./PositionedCircle";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

function ColorfulCircles() {
  const [colors, setColors] = useState([]);

  const addColor = newColor => {
    let size = getRandom()
    setColors(colors => [
      ...colors,
      { color: newColor, x: getRandom(), y: getRandom(), width: size, height: size }
    ]);
  };
  const changePosition = i => {
    setColors(colors => {
      // create a copy of state array
      const colorsCopy = [...colors];
      // create a copy of the object at index i,
      // then change the copy
      colorsCopy[i] = {
        ...colors[i],
        x: getRandom(),
        y: getRandom()
      };
      // return colorsCopy;
      return colorsCopy;
    });
  };

  return (
    <div>
      <ColorButtons addColor={addColor} />
      {colors.map((colorObj, i) => (
        <PositionedCircle
          colorObj={colorObj}
          key={i}
          idx={i}
          changePosition={changePosition}
        />
      ))}
    </div>
  );
}

export default ColorfulCircles;
