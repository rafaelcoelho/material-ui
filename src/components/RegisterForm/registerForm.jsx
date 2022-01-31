import React from 'react';

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

      <button typeof='submit'>
        Register
      </button>
    </form>
   );
}

export default RegisterForm;