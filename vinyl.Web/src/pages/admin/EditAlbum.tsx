import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

type Props = {};

function EditAlbum({}: Props) {
  const [album, setAlbum] = useState<any>({});
  const { id } = useParams();
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  console.log("Id del album: ", id);

  useEffect(() => {
    const getAlbum = async (id: any) => {
      try {
        console.log("Obteniendo album");
        const urlApiBase = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("authToken");

        const response = await axios.get(`${urlApiBase}/albums/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Album obtenido: ", response.data);
        setAlbum(response.data[0]);
        console.log("DataAlbum: ", response.data[0]);

        if (response.status === 200) {
          console.log("Album obtenido correctamente");
        }
      } catch (error) {
        console.log("Error al obtener el album", error);
        if (error.response.status === 401) {
          setMessageError("Acceso no autorizado");
          console.log("Acceso no autorizado");
        } else {
          setMessageError("Error al obtener el album");
          console.log("Error al obtener el album");
        }
      }
    };
    getAlbum(id);
  }, []);

  const handleUpdateAlbum = async (values: any) => {
    const urlApiBase = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("authToken");

    try {
      const albumDto = {
        title: values.title,
        artist: values.artist,
        price: values.price,
      };

      await axios.put(`${urlApiBase}/albums/${id}`, albumDto, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire({
        title: "Album updated",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/albums");
    } catch (error) {
      if (error.response.status === 401) {
        setMessageError("Acceso no autorizado");
        console.log("Acceso no autorizado");
      } else {
        setMessageError("Error al actualizar el album");
        console.log("Error al actualizar el album");
      }
    }
  };

  console.log("Data Album: ", album);
  console.log("Title: ", album.title);
  console.log("Artist: ", album.artist);
  return (
    <>
      <h1 className="text-white font-bold text-lg mb-2">Edit Album</h1>

      <Formik
        enableReinitialize={true}
        initialValues={{
          title: album.title,
          artist: album.artist,
          price: album.price,
        }}
        onSubmit={(values) => {
          handleUpdateAlbum(values);
          console.log("Guardando album");
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          artist: Yup.string().required("Artist is required"),
          price: Yup.number().required("Price not is valid"),
        })}
      >
        <Form>
          <div className="flex flex-col gap-4 mt-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-white">Title</label>
              <Field
                name="title"
                type="text"
                className="bg-secondary-100 text-white rounded-md p-2"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white">Artist</label>
              <Field
                name="artist"
                type="text"
                className="bg-secondary-100 text-white rounded-md p-2"
              />
              <ErrorMessage
                name="artist"
                component="div"
                className="text-red-500 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white">Price</label>
              <Field
                name="price"
                type="text"
                className="bg-secondary-100 text-white rounded-md p-2"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 w-full"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button className="bg-primary text-white py-2 px-2 rounded-md mr-5 flex flex-row items-center hover:bg-primary/80 transition-colors">
              <IoIosSave className="text-xl mr-1" />
              <span>Save</span>
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-2 rounded-md mr-5 flex flex-row items-center hover:bg-red-500/80 transition-colors"
              onClick={() => navigate("/albums")}
            >
              <TiCancel className="text-xl mr-1" />
              <span>Cancel</span>
            </button>
          </div>
          <div className="text-red-500 text-center mt-4">{messageError}</div>
        </Form>
      </Formik>
    </>
  );
}

export default EditAlbum;
