import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import logo from "./images/logo.png";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const registerHandler = () => {
    if (!name) {
      return alert("Name is required");
    }

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userAuth) =>
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: photoUrl,
          })
          .then(
            dispatch(
              login({
                displayName: name,
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoUrl: photoUrl,
              })
            )
          )
      )
      .catch((err) => alert(err.message));
  };
  const loginHandler = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, pass).then((userAuth) => {
      dispatch(
        login({
          displayName: userAuth.user.displayName,
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          photoUrl: userAuth.user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login">
      <img src={logo} alt="logo" className="logo__login" />

      <form>
        <input onChange={(e) => setName(e.target.value)} value={name} className="login__input" type="text" placeholder="Full name (required)" />

        <input onChange={(e) => setEmail(e.target.value)} value={email} className="login__input" type="text" placeholder="Email address" />

        <input onChange={(e) => setPhotoUrl(e.target.value)} value={photoUrl} className="login__input" type="text" placeholder="Profile Pic (optional)" />

        <input onChange={(e) => setPass(e.target.value)} value={pass} className="login__input" type="password" placeholder="Password" />

        <button className="login__input login__button" type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerHandler}>
          Register here
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
