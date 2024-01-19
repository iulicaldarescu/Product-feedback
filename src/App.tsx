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
    <div className="md:px-16 lg:px-32 xl:px-56 2xl:px-72">
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
    </div>
  );
}

export default App;

// text for comments and relpy : text-gray-500
