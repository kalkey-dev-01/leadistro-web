import { signInWithEmailAndPassword } from 'firebase/auth';

// import {} from "react-firebase-hooks/auth";
import { auth } from './config';

export default async function signUp(email: string, password: string) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
