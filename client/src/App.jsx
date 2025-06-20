import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Navbar from "./components/Navbar";
import LoginScreen from "./pages/LoginScreen";
import { useAuthStore } from "./store/authStore";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Router />
        </>
      ) : (
        <LoginScreen />
      )}
    </BrowserRouter>
  );
}

export default App;

