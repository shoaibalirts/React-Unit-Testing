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
