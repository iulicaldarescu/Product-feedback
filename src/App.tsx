import Header from "./Components/Header";
import NewFeedback from "./pages/NewFeedback";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Feedbacks from "./Components/Feedback/Feedbacks";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
