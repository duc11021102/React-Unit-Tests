import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting components", () => {
  test("render hello word as a text", () => {
    //arrange
    render(<Greeting />);

    //action
    // ...nothing

    //assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render It's good to see you if button was not clicked" , () => {
    render(<Greeting></Greeting>);
    //assert
    const changeTextElement = screen.getByText('It\'s good to see you' , {exact : false});
    expect(changeTextElement).toBeInTheDocument();
  });

  test("render Changed! if button was clicked" , () => {
    render(<Greeting></Greeting>);

    //action 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const changeTextElement = screen.getByText('Changed!' , {exact : false});
    expect(changeTextElement).toBeInTheDocument();
  });

  test("does not render It's good to see you after clicked" , () => {
    render(<Greeting></Greeting>);

    //action 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const changeTextElement = screen.queryByText('It\'s good to see you' , {exact : false});
    expect(changeTextElement).toBeNull();
  });

});
