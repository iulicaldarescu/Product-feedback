import Header from "./Components/Header";
import NewFeedback from "./pages/NewFeedback";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Feedbacks from "./Components/Feedbacks";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Feedbacks />
            </>
          }
        ></Route>
        <Route
          path="/new-feedback"
          element={
            <>
              <NewFeedback />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
