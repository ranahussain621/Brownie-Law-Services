import { Routes, Route, useLocation } from "react-router-dom";
import routes from "../routers/routes";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export function Auth() {
 
  const location = useLocation();

  // Check if the current path is login or register
  const isLoginOrRegister = location.pathname.includes("/auth/login") || location.pathname.includes("/auth/register") || location.pathname.includes("/auth/forgot-password");

  return (
    <div className="relative min-h-screen w-full" style={{overflowX:'hidden'}}>
    <Header />
      <Routes >
        {routes?.map(
          ({ layout, children }) =>
            layout === "auth" &&
            children.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      {!isLoginOrRegister && <Footer />}

    </div>
  );
}


export default Auth;
