import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
//CSS
import "./App.scss";
// Utils
import ScrollToTop from "./Utils/ScrollToTop";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={
            <Dashboard/>
            // <HomePage />
            }
          />

        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
