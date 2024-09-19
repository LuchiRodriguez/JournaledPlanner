import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Areas from "./pages/Areas";
import Reminders from "./pages/Reminders";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import UserHook from "./App/UserHook";
import Landing from "./pages/Landing";

const Router = () => {
  const { user } = UserHook();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Landing />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
