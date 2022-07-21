import { useState } from "react";

function useAuthFormState(initialEmail, initialPassword, initialConfPass) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [confPass, setConfPass] = useState(initialConfPass);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfPass(e) {
    setConfPass(e.target.value);
  }

  function reset() {
    setEmail("");
    setPassword("");
    setConfPass("");
  }

  return [
    email,
    password,
    confPass,
    handleEmail,
    handlePassword,
    handleConfPass,
    reset,
  ];
}

export default useAuthFormState;
