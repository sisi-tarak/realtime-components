import React, { useRef, useCallback, useImperativeHandle } from "react";
import { balloons, textBalloons } from "balloons-js";

// Helper function to replace cn utility
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Balloons = React.forwardRef(
  (props, ref) => {
    const { 
      type = "default", 
      text, 
      fontSize = 120, 
      color = "#000000", 
      className, 
      onLaunch 
    } = props;
    
    const containerRef = useRef(null);
    
    const launchAnimation = useCallback(() => {
      if (type === "default") {
        balloons();
      } else if (type === "text" && text) {
        textBalloons([
          {
            text,
            fontSize,
            color,
          },
        ]);
      }
      
      if (onLaunch) {
        onLaunch();
      }
    }, [type, text, fontSize, color, onLaunch]);
    
    // Export the launch animation method
    useImperativeHandle(ref, () => ({
      launchAnimation,
      ...(containerRef.current || {})
    }), [launchAnimation]);
    
    return <div ref={containerRef} className={classNames("balloons-container", className)} />;
  }
);

Balloons.displayName = "Balloons";