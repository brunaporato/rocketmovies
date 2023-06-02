import {Route, Routes} from "react-router-dom";

import { Register } from "../pages/Register";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}