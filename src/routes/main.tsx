import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "src/components";
import { Messaging } from "src/layouts";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Messaging />} />
      </Routes>
    </BrowserRouter>
  );
};
