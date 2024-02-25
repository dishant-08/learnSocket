import React, { useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const App = () => {
  // const socket = useMemo(
  //   () =>
  //     io("http://localhost:3000", {
  //       withCredentials: true,
  //     }),
  //   []
  // );

  const socket = io("http://localhost:3000");

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setSocketId(socket.id);
  //     console.log("connected", socket.id);
  //   });
  // }, []); // Added an empty dependency array to useEffect to ensure it runs only once.

  return <div>App</div>;
};

export default App;
