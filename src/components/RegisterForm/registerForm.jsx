import React, { useState } from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

function RegisterForm() {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [cpf, setCpf] = useState("");
  const [news, setNews] = useState(false);
  const [offers, setOffers] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, familyName);
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let tmp = event.target.value;

          if (tmp.length > 5) {
            tmp = tmp.substring(0, 5);
          }

          setName(tmp);
        }}
        id="Name"
        label="Name"
        autoComplete="true"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />
      <TextField
        value={familyName}
        onChange={(event) => setFamilyName(event.target.value)}
        id="Family Name"
        label="Family Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        onChange={(event) => setCpf(event.target.value)}
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Offers"
        control={<Switch name="Offers" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="News"
        control={<Switch name="News" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
