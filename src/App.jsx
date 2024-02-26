import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//CSS
import "./App.scss";

// Utils
import ScrollToTop from "./Utils/ScrollToTop";





function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <UserLayout>
                <Home />
              </UserLayout>
            }
          />

        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
