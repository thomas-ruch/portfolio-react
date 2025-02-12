import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Error from "../../pages/Error";
import Layout from "../Layout";

function Router() {
  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
