import Header from "./Components/Header";
import NewFeedback from "./pages/NewFeedback";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Feedbacks from "./Components/Feedback/Feedbacks";
import FeedbackInfo from "./pages/FeedbackInfo";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [filterValue, setFilterValue] = useState<string>("all");

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />{" "}
              <Feedbacks
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            </>
          }
        ></Route>
        <Route path="/feedback/:id" element={<FeedbackInfo />}></Route>
        <Route
          path="/new-feedback"
          element={
            <>
              <NewFeedback />
            </>
          }
        ></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

// text for comments and relpy : text-gray-500
