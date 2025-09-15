import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

<<<<<<< HEAD
  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(enteredValues); // store submitted values in state
=======

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');


// const [ enteredValues, setEnteredValues]= useState(
//   {
//   email:'',
//   password:'',
// })




  function handleSubmit(event){
    // event.preventDefault()
    console.log({email:enteredEmail, password:enteredPassword});
    
>>>>>>> 6903f5db237d3dfbac7bf75a30736953eb009ef1
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleReset (){
    setEnteredValues({email:"" , password:''})
    setSubmittedData(null)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) =>
              handleInputChange('email', event.target.value)
            }
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleReset}
          
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>

      {/* Show submitted data below the form */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </form>
  );
}


// const [enteredEmail, setEnteredEmail] = useState('');
// // const [enteredPassword, setEnteredPassword] = useState('');
// const [enteredValues, setEnteredValues] = useState({
//   email: '',
//   password: '',
// });

// function handleSubmit(event) {
//   event.preventDefault();

//   const enteredEmail = emailRef.current.value;
//   const enteredPassword = passwordRef.current.value;

//   console.log({
//     email: enteredEmail,
//     password: enteredPassword
//   });

// }



// function handleEmailChange(event) {
//   setEnteredEmail(event.target.value);
// }

// function handlePasswordChange(event) {
//   setEnteredPassword(event.target.value);
// }
