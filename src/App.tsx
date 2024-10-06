import FunButton from "./Components/FunButton";

function App() {
  //Item list for ListGroup
  // let items = ["Chicken Wrap", "Chicken Nuggets", "French Fries", "Coffee"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  //const [showAlert, setShowAlert] = useState(false);

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
    <div>
      <FunButton onClick={() => {}} color="primary">
        CSS Button
      </FunButton>
    </div>
  );
}

export default App;
