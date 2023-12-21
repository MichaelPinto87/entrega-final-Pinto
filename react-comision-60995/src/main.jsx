import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9oT8a1-WLDu0fC_zxsE2zgzKe_ydfbGo",
  authDomain: "proyecto-coder60995.firebaseapp.com",
  projectId: "proyecto-coder60995",
  storageBucket: "proyecto-coder60995.appspot.com",
  messagingSenderId: "652848149067",
  appId: "1:652848149067:web:feb760dc07c68f560393ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
