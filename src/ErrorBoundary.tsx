import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    console.error(error);
  }

  return (
    <div>
      <h1>Oops! </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) ? error.error?.message : undefined}</i>
      </p>
    </div>
  );
}

export default ErrorBoundary;
