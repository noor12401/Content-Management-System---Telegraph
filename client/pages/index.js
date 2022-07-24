import { useContext } from "react";
import { AuthContext } from "../context/auth";

function Home() {
  // Using the Global Context for Authentication
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>

      <br />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
}

export default Home;