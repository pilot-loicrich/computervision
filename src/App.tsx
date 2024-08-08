import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import LandingPage from "./pages/LandingPage";
import Dashboard3 from "./pages/Dashboard3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard2 />} />
      <Route path="/dashboard3" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard1 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/dashboard2" element={<Dashboard3 />} />
    </Routes>
  );
}
export default App;
