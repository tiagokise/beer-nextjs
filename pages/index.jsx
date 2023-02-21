import React from "react";
import { useRouter } from "next/router";
import Home from "../containers/home";

export default function Index() {

  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>

  )
}
