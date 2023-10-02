import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';

const Authentication = () => {
  useEffect( () => {
    async function fetchUser() {
      const { user } = await getRedirectResult(auth) || {};
      const userDocRef = user && await createUserDocumentFromAuth(user);
    }

    fetchUser();
  }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
};

export default Authentication;