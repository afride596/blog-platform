import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import validateEmailAndPassword from "../utils/validateEmailAndPassword";
import { auth } from "../utils/firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const FullName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const [errormessage, seterrormessage] = useState();
  const [successMessage, setsuccesMessage] = useState();

  const [isSign, setisSign] = useState(true);
  const handleSignup = () => {
    setisSign(!isSign);
  };
  const handleButton = () => {
    const message = validateEmailAndPassword(
      FullName.current?.value,
      Email.current?.value,
      Password.current?.value
    );
    seterrormessage(message);

    if (message) return;

    if (!message) {
      if (!isSign) {
        createUserWithEmailAndPassword(
          auth,

          Email.current?.value,
          Password.current?.value
        )
          .then(() => {
            setsuccesMessage(
              "Your account has been created successfully. Please log in to continue"
            );
            setTimeout(() => {
              setisSign(true);
              setsuccesMessage(null);
            }, 1000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errormessage = error.message;
            if (errorCode === "auth/email-already-in-use") {
              seterrormessage(
                "This email is already registered. Please use a different email or log in."
              );
            } else {
              seterrormessage(errormessage);
              setTimeout(() => {
                seterrormessage(null);
              }, 5000);
            }
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          Email.current?.value,
          Password.current?.value
        )
          .then(() => {
            //signIn
            navigate("/home");
          })
          .catch((error) => {
            const errorcode = error.code;
            const errorMessage = error.message;
            if (errorcode === "auth/user-not-found") {
              seterrormessage("No account found with this email address.");
            } else {
              seterrormessage("Invalid email or password. Please try again.");
              setTimeout(() => {
                seterrormessage(null);
              }, 5000);
            }
          });
      }
    } else {
      return;
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" w-screen">
      <div className="absolute  z-0"></div>
      <div
        className="flex justify-center
    items-center h-screen relative -top-10 md:-top-10 "
      >
        <form
          onSubmit={HandleSubmit}
          className="relative  text-white opacity-85 rounded-md  h-[80%] w-[450px] bg-black    flex flex-col "
        >
          <div className="flex flex-col  relative  top-28 items-center">
            <h1 className="absolute left-20  -top-10 font-bold text-4xl ">
              {isSign === true ? "Sign In" : "Sign up"}
            </h1>
            {isSign === true ? (
              ""
            ) : (
              <input
                ref={FullName}
                className="p-3 w-72  my-6 rounded-sm bg-gray-800 text-white  "
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={Email}
              className="p-3 w-72 bg-gray-800 rounded-sm text-white  m-4"
              type="Email"
              placeholder="Email"
            />
            <input
              ref={Password}
              className="p-3 bg-slate-800 rounded-sm text-white w-72 mt-4 mb-1"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <p className="text-red-600 text-sm font-medium my-2 w-72">
              {errormessage === null ? (
                <div className="text-green-500  rounded-sm text-base">
                  {successMessage}
                </div>
              ) : (
                errormessage
              )}
            </p>

            <button
              className="bg-blue-400 rounded-sm px-[117px] py-3"
              type="submit"
              onClick={handleButton}
            >
              {isSign === true ? "Sign In" : "Sign up"}
            </button>
            <p
              className="mt-9 animate text-lg text-gray-400 flex gap-2 cursor-pointer"
              onClick={handleSignup}
            >
              {isSign === true ? "New to Blog?" : "Have an Account?"}{" "}
              <span className="text-white animate-none font-medium">
                {isSign === true ? "Sign up" : "Sign In"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
