import { useContext, useEffect } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "./utils/axios.customize";
import Header from "./components/layouts/Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);

      const res = await axios.get("/v1/api/auth/me");
      if (res) {
        setAuth({
          isAuthenticated: true,
          user: {
            name: res.name,
            email: res.email,
          },
        });
      }
      setAppLoading(false);
    };

    fetchAccount();
  }, []);

  return (
    <>
      {appLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
