"use client";
import React, { useState } from "react";
import axios from "axios";
const page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    if (!name || !password) {
      alert("fill everything");
      setLoading(false);
      return;
    }
    try {
      // const config = {
      //   headers: { "Content-type": "application/json" },
      // };
      const {data} = await axios.post(`http://localhost:5002/api/v1/admin/auth`, {
        name,
        password,
      });
      alert("You are Logged");
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      alert("wrong name or password");
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        paddingTop: "20%",
        paddingRight: "20%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <input
        value={name}
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={password}
        placeholder="Enter your password"
        type={show ? "text" : "password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={() => setShow(!show)}>{show ? "HIde" : "Show"}</button>
      <button onClick={onSubmit} width="100%" style={{ marginTop: "15px" }}>
        Submit
      </button>
    </div>
  );
};

export default page;
