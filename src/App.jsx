import "./App.css";
import Content from "./Commponents/content";
import Footer from "./Commponents/footer";
import Header from "./Commponents/header";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Content />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
