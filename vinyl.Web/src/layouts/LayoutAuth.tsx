import { Outlet } from "react-router-dom";

type Props = {};

function LayoutAuth({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}

export default LayoutAuth;
