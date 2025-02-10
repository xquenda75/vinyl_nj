import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
//Pages admin
import Error404 from "./pages/Error404";
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";

//Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Profile from "./pages/admin/Profile";
import Albums from "./pages/admin/Albums";
import EditAlbum from "./pages/admin/EditAlbum";
import AddAlbum from "./pages/admin/AddAlbum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recoverpassword" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:id" element={<EditAlbum />} />
          <Route path="albums/add" element={<AddAlbum />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
