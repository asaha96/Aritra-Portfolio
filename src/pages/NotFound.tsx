import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <p className="mono-label">404</p>
        <h1 className="text-5xl font-semibold">This route does not exist.</h1>
        <p className="text-muted-foreground">Let's get you back to the main page.</p>
        <a href="/" className="button-primary">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
