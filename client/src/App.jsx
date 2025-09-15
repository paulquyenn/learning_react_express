import { useEffect } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "./utils/axios.customize";
import Header from "./components/layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const fetchHello = async () => {
      const res = await axios.get("/v1/api");
      console.log("[LOG] Check res: ", res);
    };

    fetchHello();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
