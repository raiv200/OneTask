import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import Head from "next/head";


const login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    if (!username || !password) {
      return;
    }
    try {
      const user = await Auth.signIn(username, password);
      console.log("User Data After Login", user);
      router.push("/dashboard");
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 z-10 overflow-hidden">
      {/* Login Form   */}
      <Head>
        <title>Login - OneTask</title>
        <link rel="icon" href="/onetask-logo-dark.png" />

      </Head>

      <Login
        username={username}
        password={password}
        handleSignIn={handleSignIn}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
      />
    </div>
  );
};

export default login;
