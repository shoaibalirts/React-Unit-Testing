import emailValidator1 from "./emailValidator1";

describe("Email validator all tests", () => {
  test("should be valid email", () => {
    expect(emailValidator1("eksemple@mail.dk")).toBe(true);
    expect(emailValidator1("humlebuks.fisk-nu@yahoo.dk")).toBe(true);
    expect(emailValidator1("humlebuks.fisk-nu@yahoo.dk.dk")).toBe(true);
  });
  test("should be invalid email", () => {
    expect(emailValidator1("eksempel!@mail1")).toBe(false);
    expect(emailValidator1("eksempel@mail_dk")).toBe(false);
    expect(emailValidator1("nusseprinsen@mail.y")).toBe(false);
    expect(emailValidator1("humlebuks.fisk")).toBe(false);
  });
});

// import { render, screen } from "@testing-library/react";
// import Greeting from "./Greeting";
// import EmailValidator from "./EmailValidator";
// // import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

// describe("EmailandGreeting Suit", () => {
//   test("Email Input Validation", () => {
//     render(<EmailValidator />);
//     const validEmailAddressElement = screen.getByText("Valid Email Address", {
//       exact: false,
//     });
//     expect(validEmailAddressElement).toBeInTheDocument();
//   });
//   test("renders Hello World as a text", () => {
//     render(<Greeting />);

//     const helloWorldElement = screen.getByText("Hello World", { exact: false });
//     expect(helloWorldElement).toBeInTheDocument();
//   });
// });
