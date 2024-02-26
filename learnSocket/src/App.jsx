import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const socket = useMemo(
    () =>
      io(
        "http://localhost:3000"
        // {
        //   withCredentials: true,
        // }
      ),
    []
  );

  const [data, setData] = useState("jio");
  // const res = [];
  const [message, setMessage] = useState([]);
  const [socketId, setSocketId] = useState();
  const [input, setInput] = useState();

  // const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("welcm", (s) => console.log(s));
    socket.on(
      "respond",
      (s) => {
        setMessage((message) => [...message, s]);
        // console.log(s);
      }
      //  res.push(s)
    );
  }, []); // Added an empty dependency array to useEffect to ensure it runs only once.

  const handleSubmit = (e) => {
    e.preventDefault();
    // res.push(input);
    socket.emit("msg", input);
    // console.log(res);
    setInput("");
  };

  // useEffect(() => {

  //   console.log(res);
  // }, [input]);
  console.log(message);

  return (
    <div>
      <h1>{socketId}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          className=" border-2  border-bg-orange-700 "
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {message.map((item, index) => {
        return <div key={index}>{item} </div>;
      })}
      {/* {res.map((item) => item)} */}
    </div>
  );
};

export default App;
