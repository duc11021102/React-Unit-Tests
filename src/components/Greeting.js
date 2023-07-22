import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const onChangeHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello World</h1>
      {!changeText && <Output>It's good to see you</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={onChangeHandler}>Change</button>
    </div>
  );
};
export default Greeting;
