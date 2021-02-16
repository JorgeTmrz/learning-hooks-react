import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const onMouseMoveEvent = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", onMouseMoveEvent);

    return () => {
      console.log("Component unmounted!");
      window.removeEventListener("mousemove", onMouseMoveEvent);
    };
  }, []);

  return (
    <div>
      <h3>I'm so cool</h3>
      <p>
        x: {x}
        <br />
        y: {y}
      </p>
    </div>
  );
};
