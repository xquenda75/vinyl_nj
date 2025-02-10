import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import List from "../../components/List";

type Props = {};

function Albums({}: Props) {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const getAlbums = async () => {
    const urlApiBase = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("authToken");

    console.log("Token en pagina Albums: ", token);
    try {
      const response = await axios.get(`${urlApiBase}/albums`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      setAlbums(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        setMessageError("Acceso no autorizado");
        Swal.fire("Acceso no autorizado", "", "error");
        console.log("Acceso no autorizado");
      } else {
        setMessageError("Error al cargar los albums");
        console.log("Error al cargar los albums");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white">Cargando...</h1>
      </div>
    );
  }

  const apiDeleteAlbum = async (id: string) => {
    const urlApiBase = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("authToken");
    try {
      await axios.delete(`${urlApiBase}/albums/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getAlbums();
    } catch (error) {
      console.log("Error al eliminar el album");
    }
  };

  const deleteAlbum = (id: string) => {
    console.log("Eliminar album con id: ", id);

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Después de eliminar no podrás recuperar el album",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        apiDeleteAlbum(id);
        Swal.fire("Album eliminado", "", "success");
        console.log("Album eliminado");
      }
    });
  };

  const editAlbum = (id: string) => {
    navigate(`/albums/${id}`);
    console.log("Editar album con id: ", id);
  };

  return (
    <>
      <h1 className="text-white font-bold text-lg mb-2">Albums</h1>
      <div className="flex flex-row justify-end mb-8">
        <Link
          to="/albums/add"
          className="bg-primary text-white py-2 px-2 rounded-md mr-5 flex flex-row items-center"
        >
          <IoMdAddCircle className="text-xl mr-1" />
          <span>Agregar</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-200 font-bold">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs  text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs  text-gray-500 uppercase"
                    >
                      Artist
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs  text-gray-500 uppercase"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs  text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {albums.map((item: any) => (
                    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.artist}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => editAlbum(item.id)}
                          className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <FaEdit className="" />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteAlbum(item.id)}
                          className="inline-flex items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <MdDeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-red-500 text-center mt-4">{messageError}</div>
      <List data={albums} />
    </>
  );
}

export default Albums;
