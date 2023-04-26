import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";

function App() {
  const [openExpence, setOpenExpence] = useState(false);
  return (
    <div>
      {openExpence ? (
          <Header setOpenExpence={setOpenExpence} />
      ) : (
        <Login openExpence={openExpence} setOpenExpence={setOpenExpence} />
      )}
    </div>
  );
}

export default App;
