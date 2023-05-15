// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

// import Alert from "./components/Alert";

function App() {
  // let items = ["New York", "Australia", "Canada", "Paris"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectedItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     Heloo Worlds <span>Chester</span>
    //   </Alert>
    // </div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons onClick={() => setAlertVisibility(true)} color="primary">
        Hello
      </Buttons>
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=SqcY0GlETPk
