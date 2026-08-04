import { useState, useEffect } from "react";
import Home from "./pages/home";
import Loader from "./components/Loader/loader";
import WhatsAppButton from "./components/WhatsAppButton/whatsappbutton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default App;