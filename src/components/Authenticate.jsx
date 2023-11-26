// import SignupForm from "./SignUpForm";
import { useState } from "react";

export default function Authenticate(props) {
   // const {token, setToken} = props;
   const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const { token, setToken } = props;

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "applicatoin/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      console.log(result);

    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}