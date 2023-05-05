import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./pages/SignInPage/SignInPage";
import { SignUp } from "./pages/SignUpPage/SignUpPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./pages/LandingPage/components/Navbar";
import Footer from "./pages/LandingPage/components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { RecoilRoot } from "recoil";
import PendingPage from "./pages/pendingPage/pending";
import VerifyEmail from "./pages/verifyemail/verifyEmail";
import AvailableApartments from "./pages/apartment/ListavailableRooms";
import ForgetPasswordPage from "./pages/ForgotPassWord/forgotPassWord";
import ResetPasswordPage from "./pages/ResetPassword/resetPassWord";
import SingleApartmentPage from "./pages/apartment/RoomsPage";

const isAuthenticated = () => {
  console.log("is logged in: ", localStorage.getItem("authToken") !== null);
  // return localStorage.getItem("authToken") !== null;
  return true;
};

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/pending" element={<PendingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/available-apartments" element={<AvailableApartments />} />
          <Route path="/apartment/:id" element={<SingleApartmentPage />} />

          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPasswordPage />}
          />

          <Route
            path="/home"
            element={
              isAuthenticated() ? <HomePage /> : <Navigate to="/sign-in" />
            }
          />

          <Route
            path="*"
            element={
              isAuthenticated() ? <HomePage /> : <Navigate to="/sign-in" />
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
