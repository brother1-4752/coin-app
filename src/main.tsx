import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterInfo } from "./router";
import Authorization from "./components/Authorization";
import { createBrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((router) => {
    return router.withAuth
      ? {
          path: router.path,
          element: <Authorization>{router.element}</Authorization>,
        }
      : {
          path: router.path,
          element: router.element,
        };
  })
);
