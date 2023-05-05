import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../../LandingPage/components/Navbar";
import Footer from "../../LandingPage/components/Footer";
import { apartmentListState } from "../../../recoil_state";
import {
  saveApartment,

} from "../../../services/apartmentService";


function AddApartment() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [apartments, setApartments] = useRecoilState(apartmentListState);

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.set("type", type);
      formData.set("description", description);
      formData.set("price", price);
      console.log(images);
      images.forEach(image => {
        formData.append("images", image);
      });
      console.log(formData);
      saveApartment(formData)
        .then((data) => {
          console.log(data);
        })
      alert("Apartment added successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the Apartment.");
    }
  };

  const hundleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    console.log(event.target.files);
    console.log(files);
    setImages(files);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen my-10">
        <div className="w-full max-w-md">
          <h2 className="text-lg font-medium mb-4">Add Apartment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            
            <div>
              <label
                htmlFor="type"
                className="text-gray-600 mb-2 block font-medium"
              >
                Apartment Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={type}
                onChange= {(event)=> setType(event.target.value)}
                placeholder="Enter room type"
                className="border border-gray-400 rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-gray-600 mb-2 block font-medium"
              >
                Apartment Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Enter room description"
                className="border border-gray-400 rounded-md p-2 w-full h-32 resize-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="text-gray-600 mb-2 block font-medium"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={event => setPrice(event.target.value)}
                placeholder="Enter price"
                className="border border-gray-400 rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
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
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={hundleImageUpload}
                className="border border-gray-400 rounded-md p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Apartment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddApartment;
