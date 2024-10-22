import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from './components/sign-in-side/SignInSide'
import ForgotPassword from './components/sign-in-side/ForgotPassword'

import ReflaxAppBar from "./components/ReflaxAppBar";
import AppTheme from "./components/shared-theme/AppTheme";
import { CssBaseline } from "@mui/material";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <AppTheme >
      <CssBaseline enableColorScheme />
      <ReflaxAppBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </AppTheme> 
  );
}
