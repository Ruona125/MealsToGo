import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase";
require("firebase/auth");
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index.js";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDhegLGqmPWlHVTz3lwJhDRaqfgR_gSrdQ",
  authDomain: "mealstogo-f0841.firebaseapp.com",
  projectId: "mealstogo-f0841",
  storageBucket: "mealstogo-f0841.appspot.com",
  messagingSenderId: "989639348067",
  appId: "1:989639348067:web:b8051b59332f57c8008d56",
  measurementId: "G-R9V2S199XD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword("mo@binni.io", "test123")
  //       .then((user) => {
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
