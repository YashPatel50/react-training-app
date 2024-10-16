import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App3 = () => {
  useEffect(() => {
    connect();

    //This should 'undo' what effect does
    //This is clean up
    return () => disconnect();
  });

  return <div></div>;
};

export default App3;
