import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import { initialize } from "./redux/UserState/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./pages/MyProfile/Profile";

const App = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:ownerId" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
