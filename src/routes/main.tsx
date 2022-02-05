import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "src/components";
import { Messaging } from "src/layouts";
import { Chat, Intro } from "src/views";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Messaging />}>
          <Route index element={<Intro />} />
          <Route path=":uuid" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
