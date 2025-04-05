import { Balloons } from "./Balloons";
import { Button } from "./Button";
import { useRef } from "react";

export function DefaultBalloonsDemo() {
  const balloonsRef = useRef(null);

  const handleLaunch = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <Button onClick={handleLaunch} className="bg-blue-500 hover:bg-blue-600">
        Launch Balloons! 🎈
      </Button>
      <Balloons ref={balloonsRef} type="default" />
    </div>
  );
}
