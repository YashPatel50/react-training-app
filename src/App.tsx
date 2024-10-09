import { useState } from "react";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";

function App() {
  //Item list for ListGroup
  // let items = ["Chicken Wrap", "Chicken Nuggets", "French Fries", "Coffee"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  //const [showAlert, setShowAlert] = useState(false);

  //Testing state objects
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   setDrink({
  //     ...drink,
  //     price: 6,
  //   });

  //Testing nested state objects
  // const [customer, setCustomer] = useState({
  //   name: "Americano",
  //   address: {
  //     city: "Boston",
  //     zipcode: 11111,
  //   },
  // });

  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipcode: 99999 },
  //   });
  // };

  //Testing array state
  // const [tags, setTags] = useState(["Walk Only", "Sleep"]);

  // const handleClick = () => {
  //   //Add
  //   setTags([...tags, "Dance"]);

  //   //Remove
  //   setTags(tags.filter((tag) => tag != "Sleep"));

  //   //Upodate (changes Sleep to Sleeping)
  //   setTags(tags.map((tag) => (tag === "Sleep" ? "Sleeping" : tag)));
  // };
  // const [bugs, setBugs] = useState([
  //   { id: 1, name: "Bug 1", fixed: false },
  //   { id: 2, name: "Bug 2", fixed: false },
  // ]);

  // const handleClick = () => {
  //   // setBugs(
  //   //   bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : { ...bug }))
  //   // );

  //   setBugs(
  //     produce((draft) => {
  //       const changingBug = draft.find((bug) => bug.id === 1);
  //       if (changingBug) changingBug.fixed = true;
  //     })
  //   );
  // };

  //States for multiple components
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
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

    // <div>
    //   <button onClick={handleClick}>Click Me</button>
    //   {bugs.map((bug) => (
    //     <p key={bug.id}>
    //       {bug.name}
    //       {bug.fixed ? "Fixed" : "New"}
    //     </p>
    //   ))}
    // </div>

    //7. Sharing state between components
    // <div>
    //   <NavBar cartItemsCount={cartItems.length}></NavBar>
    //   <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    // </div>

    //8. Excercise change name to someone else
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default App;
