import React from "react";
import MetaBalls from "./MetaBalls";

const MetaBallsDemo = () => {
  return (
    <MetaBalls
      color="#ffffff"
      cursorBallColor="#ffffff"
      cursorBallSize={2}
      ballCount={15}
      animationSize={30}
      enableMouseInteraction={true}
      enableTransparency={true}
      hoverSmoothness={0.05}
      clumpFactor={1}
      speed={0.3}
    />
  );
};

export default MetaBallsDemo;
