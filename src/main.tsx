import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: <Authorization>{routerInfo.element}</Authorization>,
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  })
);