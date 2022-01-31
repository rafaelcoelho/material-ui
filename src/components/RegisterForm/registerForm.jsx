import React from 'react';
import Button from "@material-ui/core/Button"

function RegisterForm() {
  return ( 
    <form>
      <label>Name</label>
      <input type={"text"}/>

      <label>Family Name</label>
      <input type={"text"}/>

      <label>CPF</label>
      <input type={"text"}/>

      <label>Offers</label>
      <input type={"checkbox"}/>

      <label>News</label>
      <input type={"checkbox"}/>

      <Button typeof='submit' variant="contained" color="primary">
        Register
      </Button>
    </form>
   );
}

export default RegisterForm;