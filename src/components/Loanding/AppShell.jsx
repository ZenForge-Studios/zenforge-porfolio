import React, { Suspense } from "react";
import { Header } from "../Header/Header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { LoadingScreen } from "./LoadingScreen";

export const AppShell = ({ children }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <GlobalStyles />
      <Header />
      {children}
    </Suspense>
  );
};
