import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { IoIosSave } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { ThreeDot } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

type Props = {};

function AddAlbum({}: Props) {
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values: any, { setMessageError }: any) => {
    //await new Promise((r) => setTimeout(r, 3000));
    //return;
    console.log(values);
    console.log("Guardando album");

    const urlApiBase = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("authToken");
    try {
      const albumDto = {
        title: values.title,
        artist: values.artist,
        price: values.price,
      };
      await axios.post(`${urlApiBase}/albums`, albumDto, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("Album guardado", "", "success");
    } catch (error) {
      setMessageError("Error al guardar el album");
      console.log("Error al guardar el album");
    } finally {
      values.title = "";
      values.artist = "";
      values.price = 0;
    }
  };

  return (
    <>
      <h1 className="text-white font-bold text-lg mb-2">Add Album</h1>

      <Formik
        initialValues={{ title: "", artist: "", price: 0 }}
        onSubmit={(values) => handleSubmit(values, { setMessageError })}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          artist: Yup.string().required("Artist is required"),
          price: Yup.number().required("Price not is valid"),
        })}
      >
        {(formikProps) => (
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
              <button
                type="submit"
                disabled={formikProps.isSubmitting}
                className="bg-primary text-white py-2 px-2 rounded-md mr-5 flex flex-row items-center hover:bg-primary/80 transition-colors"
              >
                {formikProps.isSubmitting ? (
                  <div className="flex justify-center py-2 px-4">
                    <ThreeDot
                      color="#eef3ee"
                      size="small"
                      text=""
                      textColor=""
                    />
                  </div>
                ) : (
                  <>
                    <IoIosSave className="text-xl mr-1" />
                    <span>Save</span>
                  </>
                )}
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
        )}
      </Formik>
    </>
  );
}

export default AddAlbum;
