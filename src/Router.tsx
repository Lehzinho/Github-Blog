import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Post } from "./pages/post";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default Router;
