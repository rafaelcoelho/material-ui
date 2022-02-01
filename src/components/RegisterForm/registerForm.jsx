import React, { useState } from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

function RegisterForm({ onSubmitHandler, validateCPF }) {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [cpf, setCpf] = useState("");
  const [news, setNews] = useState(false);
  const [offers, setOffers] = useState(false);
  const [errors, setErrors] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitHandler({ name, familyName, cpf, offers, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let tmp = event.target.value;

          if (tmp.length > 15) {
            tmp = tmp.substring(0, 10);
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
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        onBlur={(event) => {
          const isValid = validateCPF(cpf);
          setErrors({ cpf: isValid });
        }}
      />

      <FormControlLabel
        label="Offers"
        control={
          <Switch
            checked={offers}
            onChange={(event) => setOffers(event.target.checked)}
            name="Offers"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="News"
        control={
          <Switch
            checked={news}
            onChange={(event) => setNews(event.target.checked)}
            name="News"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
