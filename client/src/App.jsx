import { useEffect } from "react";
import axios from "./utils/axios.customize";

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
      <div>Hello world</div>
    </>
  );
}

export default App;
