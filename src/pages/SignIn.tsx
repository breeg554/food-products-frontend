import { SyntheticEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "../contexts/authContext";

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    signIn(email, password);
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleLogin}>
      <TextField
        id="standard-basic"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Zaloguj się
      </Button>
    </form>
  );
};

export default SignIn;
