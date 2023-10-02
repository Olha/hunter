import { useState } from 'react';
import {
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h1>Already have an account?</h1>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required type="email" onChange={handleChange} name="email" value={email}/>
        <FormInput
          label="Password"
          required type="password" onChange={handleChange} name="password" value={password}/>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
        </div>
      </form>
    </div>
  )

};

export default SignInForm;