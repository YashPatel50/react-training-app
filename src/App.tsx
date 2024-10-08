import { useState } from "react";
import Like from "./Components/Like";

function App() {
  //Item list for ListGroup
  // let items = ["Chicken Wrap", "Chicken Nuggets", "French Fries", "Coffee"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  //const [showAlert, setShowAlert] = useState(false);

  //Testing state objects

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({
      title: drink.title,
      price: 6,
    });
  };

  return (
    // 1. Using List Groups
    // <ListGroup
    //   items={items}
    //   heading="Food Name"
    //   onSelectItem={handleSelectItem}
    // ></ListGroup>

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

    // 4. Adding icons
    // <div>
    //   <BsTiktok color="red" />
    // </div>

    // 5. Adding CSS to button excercise
    // <div>
    //   <FunButton onClick={() => {}} color="primary">
    //     CSS Button
    //   </FunButton>
    // </div>

    //6. Like Button excercise
    // <div>
    //   <Like onClick={() => console.log("Clicked")}></Like>
    // </div>

    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
