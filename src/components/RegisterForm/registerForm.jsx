import React from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

function RegisterForm() {
  return (
    <form>
      <TextField
        id="Name"
        label="Name"
        autoComplete="true"
        variant="outlined"
        required="true"
        margin="normal"
        fullWidth
      />
      <TextField
        id="Family Name"
        label="Family Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
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

      <Button typeof="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
