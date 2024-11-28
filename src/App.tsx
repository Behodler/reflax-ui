import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from './components/sign-in-side/SignInSide'
import ForgotPassword from './components/sign-in-side/ForgotPassword'

import ReflaxAppBar from "./components/ReflaxAppBar";
import AppTheme from "./components/shared-theme/AppTheme";
import { CssBaseline } from "@mui/material";
import Landing from "./pages/Landing";
import { BlockchainContextProvider } from "./contexts/BlockchainContextProvider";
import { BalancesContextProvider } from "./contexts/BalancesContextProvider";
import { LockerContextProvider } from "./contexts/LockerContextProvider";
import { VaultContextProvider } from "./contexts/VaultContextProvider";

export default function App() {
  return (
    <AppTheme >

      <CssBaseline enableColorScheme />
      <BlockchainContextProvider>
        <BalancesContextProvider>
          <ReflaxAppBar />
          <LockerContextProvider>
            <VaultContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Landing />} />
                </Routes>
              </BrowserRouter>
            </VaultContextProvider>
          </LockerContextProvider>
        </BalancesContextProvider>
      </BlockchainContextProvider>
    </AppTheme>
  );
}
