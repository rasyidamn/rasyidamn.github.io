import React from "react";
import { ArrowDownCircleIcon } from "lucide-react";

const ArrowDown = () => {
  return (
    <div className="fixed cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
      <ArrowDownCircleIcon className="h-6 w-6 text-primary " />
    </div>
  );
};

export default ArrowDown;
