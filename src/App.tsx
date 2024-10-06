import { useState } from "react";
import Alert from "./Components/Alert";
import FunButton from "./Components/FunButton";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["Chicken Wrap", "Chicken Nuggets", "French Fries", "Coffee"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //const [showAlert, setShowAlert] = useState(false);

  return (
    // 1. Using List Groups
    <ListGroup
      items={items}
      heading="Food Name"
      onSelectItem={handleSelectItem}
    ></ListGroup>

    // 2. Using Alerts for children
    // <Alert>
    //   Hello <span>World</span>
    // </Alert>

    // 3. Button Testing
    // <>
    //   {showAlert && (
    //     <Alert onClose={() => setShowAlert(false)}> My Alert</Alert>
    //   )}
    //   <FunButton
    //     onClick={() => {
    //       console.log("Clicked");
    //       setShowAlert(true);
    //     }}
    //     color="primary"
    //   >
    //     Fun Button
    //   </FunButton>
    // </>
  );
}

export default App;
