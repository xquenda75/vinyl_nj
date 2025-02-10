import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { AiFillLike } from "react-icons/ai";
import { FaChevronDown, FaRegComment } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b  bg-secondary-900 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        {/* <button className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <IoMdNotifications />
          <span className="absolute -top-0.5 right-0.5 bg-primary rounded-full py-0.5 px-[5px] font-bold text-[8px]">
            2
          </span>
        </button> */}

        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <IoMdNotifications />
              <span className="absolute -top-0.5 right-0.5 bg-primary rounded-full py-0.5 px-[5px] box-content font-bold text-[8px]">
                2
              </span>
            </MenuButton>
          }
          transition
          menuClassName={"bg-secondary-100 text-white p-4"}
          gap={10}
          align="center"
        >
          <h1 className="text-white font-medium text-center">Notificaciones</h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center gap-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1"
            >
              <img
                src="/src/assets/icons/Dock.png"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex item-center justify-between gap-4">
                  <span>Dock Tech</span>
                  <span className="text-[8px] right-0">22/08/2024</span>
                </div>
                <p className="text-gray-500">Bienvenido...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center gap-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1"
            >
              <AiFillLike className="bg-blue-200 rounded-full p-2 text-blue-700 border-black box-content" />
              <div className="text-sm flex flex-col">
                <div className="flex item-center justify-between gap-4">
                  <span>Nuevo Like</span>
                  <span className="text-[8px]">22/08/2024</span>
                </div>
                <p className="text-gray-500">A Jorge le gusta tu pub...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center gap-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-4 flex-1"
            >
              <FaRegComment className="bg-yellow-100 rounded-full p-2 text-yellow-700 border-black box-content" />
              <div className="text-sm flex flex-col">
                <div className="flex item-center justify-between gap-4">
                  <span>Comentarios</span>
                  <span className="text-[8px]">22/08/2024</span>
                </div>
                <p className="text-gray-500">A Jorge le gusta tu pub...</p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-defaul">
            <Link
              to="/"
              className=" text-gray-400 text-sm hover:text-primary transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>

        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="/src/assets/icons/Dock.png"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span className="text-white">Jorge Lopez</span>
              <FaChevronDown />
            </MenuButton>
          }
          transition
          menuClassName={
            "bg-secondary-100 border border-secondary-700 text-white p-4"
          }
          gap={10}
          align="end"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <img
                src="/src/assets/icons/Dock.png"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-white text-sm">Jorge Lopez</span>
                <span className="text-xs text-gray-500">
                  jorge.lopez@dock.tech
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <IoMdSettings /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/auth"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <FiLogOut /> Cerrar Sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
