import React, { useEffect, useRef } from "react";

const App3 = () => {
  const ref = useRef<HTMLInputElement>(null);

  //after render
  useEffect(() => {
    //Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App3;
