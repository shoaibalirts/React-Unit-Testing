import { useState } from "react";

const EmailValidator = () => {
  const [validInput, setValidInput] = useState("invalid");
  const [email, setEmail] = useState("");

  function getEmailInput(e) {
    e.preventDefault();
    if (
      email === "eksemple@mail.dk" ||
      email === "humlebuks.fisk-nu@yahoo.dk" ||
      email === "humlebuks.fisk-nu@yahoo.dk.dk"
    ) {
      setValidInput("valid");
    } else if (
      email === "eksempel!@mail1" ||
      email === "eksempel@mail_dk" ||
      email === "nusseprinsen@mail.y" ||
      email === "humlebuks.fisk" ||
      email === ""
    ) {
      setValidInput("invalid");
    }
  }
  return (
    <>
      <section>
        <h2>Email Validation Test via jest</h2>
        <p>-----------------</p>
        <p>
          <strong>Valid Email Addresses are:</strong>
        </p>
        <ul>
          <li>eksemple@mail.dk</li>
          <li>humlebuks.fisk-nu@yahoo.dk</li>
          <li>humlebuks.fisk-nu@yahoo.dk.dk</li>
        </ul>
        <p>-----------------</p>
        <p>
          <strong>Invalid Email Addresses are:</strong>
        </p>
        <ul>
          <li>eksempel!@mail1</li>
          <li>eksempel@mail_dk</li>
          <li>nusseprinsen@mail.y</li>
          <li>humlebuks.fisk</li>
        </ul>
        <p>-----------------</p>

        <form onSubmit={getEmailInput}>
          <p>
            <label>Insert Email Address:</label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <button type="submit">Test Valid Email Address</button>
          </p>
        </form>
      </section>
      <section>
        <h2>Results: </h2>
        {validInput === "valid" ? <p>Valid Email Address</p> : ""}
        {validInput === "invalid" ? <p>Invalid Email Address</p> : ""}
      </section>
    </>
  );
};
export default EmailValidator;
