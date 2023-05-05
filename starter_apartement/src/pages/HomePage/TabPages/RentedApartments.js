import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../../LandingPage/components/Navbar";
import Footer from "../../LandingPage/components/Footer";
import Modal from "react-modal";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { apartmentListState } from "../../../recoil_state";
// import { roo msState } from "../atoms";
import {
  getApartments,
  getApartment,
  deleteApartment,
  updateApartment,
} from "../../../services/apartmentService";
import { Navigate } from "react-router-dom";

const RentedApartements = () => {
  const [apartments, setApartments] = useState([]);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  // const [image, setImage] = useState([]);

  // const [form, setForm] = useState({
  //   _id: null,
  //   type: "",
  //   description: "",
  //   status: "",
  //   price: "",
  //   image: "",
  // });

  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState(null);

  

  const handleDelete = async (id) => {
    deleteApartment(id).then((data) => {
      console.log(data);
    });
    getApartments().then((data) => {
      setApartments(data.data);
    });
    // setApartments((prevApartments) =>
    //   prevApartments.filter((Apartment) => Apartment.id !== id)
    // );
  };

  const handleEdit = (id) => {

    getApartment(id).then((data) => {
      
      setType(data.data.type);
      setDescription(data.data.description);
      setStatus(data.data.available ? "Available" : "Not Available");
      setPrice(data.data.price);
      setId(data.data._id);
    })

    

    setIsEditing(true);
    setModalIsOpen(true);

  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm((prevForm) => ({ ...prevForm, [name]: value }));
  // };

  // const handleImageChange = (event) => {
  //   const { name, files } = event.target;
  //   const url = URL.createObjectURL(files[0]);
  //   setForm((prevForm) => ({ ...prevForm, [name]: url }));
  // };

  const handleSubmit = async (event) => {
    const formData = new FormData();
    formData.set("type", type);
    formData.set("description", description);
    formData.set("status", status);
    formData.set("price", price);
    // formData.set("image", image);
    
    event.preventDefault();
    updateApartment(id,formData).then((data) => {
      console.log(data);
    });

    getApartments().then((data) => {
      setApartments(data.data);
    });
    

    // setForm({
    //   id: null,
    //   type: "",
    //   description: "",
    //   status: "",
    //   price: "",
    //   image: "",
    // });
    setIsEditing(false);
    setModalIsOpen(false);
    // const data = await getApartments();
    // setApartments(data);
  };

  useEffect(() => {
    getApartments().then((data) => {
      setApartments(data.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-8">
        <h2 className="text-lg font-large mb-4 flex justify-center">
          All Apartments
        </h2>

        <table className="table-auto border-collapse w-full mt-4 mb-16">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Type</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
              <th className="border border-gray-400 px-4 py-2">Price</th>
              {/* <th className="border border-gray-400 px-4 py-2">Image</th> */}
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apartments.map((Apartment) => (
              <tr key={Apartment._id}>
                <td className="border border-gray-400 px-4 py-2">
                  {Apartment._id}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {Apartment.type}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {Apartment.description}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {Apartment.available ? "Available" : "Not Available"}
                      
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {Apartment.price}
                </td>
                {/* <td className="border border-gray-400 px-4 py-2">
                  <img
                    className="h-10 w-10 object-cover rounded-full"
                    src={Apartment.image}
                    alt={Apartment.title}
                  />
                </td> */}
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    
                    className="mx-2"
                    onClick={() => handleEdit(Apartment._id)}
                  >
                    <PencilIcon className="h-5 w-5 text-indigo-500" />
                  </button>
                  <button
                    className="mx-2"
                    onClick={() => handleDelete(Apartment._id)}
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setModalIsOpen(true)}
      >
        Add Apartment
      </button> */}

      <div className="modal max-w-3xl max-h-screen">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="Modal w-96 h-96"
          overlayClassName="Overlay"
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "auto",
              backgroundColor: "#F3F4F6",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <h2 className="text-lg font-medium mb-4">
            {isEditing ? "Edit Apartment" : "Add Apartment"}
          </h2>
          <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="type">
                Apartment Type
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="text"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="description">
                Apartment Description
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="status">
                Apartment Status
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="text"
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-medium" htmlFor="price">
                Apartment Price
              </label>
              <input
                className="border rounded-lg py-2 px-3"
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* <div>
              <label
                htmlFor="image"
                className="text-gray-600 mb-2 block font-medium"
              >
                Apartment Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageChange}
                className="border border-gray-400 rounded-md p-2 w-full"
                required
              />
            </div> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {isEditing ? "Save Changes" : "Add Apartment"}
            </button>
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={() => setModalIsOpen(false)}

            >
              cancel
            </button>
          </form>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default RentedApartements;
