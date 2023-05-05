import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../LandingPage/components/Footer";
import Navbar from "../LandingPage/components/Navbar";
import { freeApartment } from "../../services/apartmentService";
export default function AvailableApartments() {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    freeApartment().then((data) => {
      setApartments(data.data);
    });
  }, []);

  return (
    <div className="bg-white mx-auto">
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-4 p-4">
        {apartments.length > 0 &&
        apartments.map((apartment) => (
      
        <Link to={`/apartment/${apartment._id}`} key={apartment._id}>
          <div className="flex mb-2">
            <img
              className="rounded-2xl object-cover aspect-square"
              src={
                apartment.images[0].url
              }
            />
          </div>
          <h2 className="font-bold">second floor</h2>
          <h3 className="text-sm truncate text-gray-500">
           {apartment.type}
          </h3>

          <div className="mt-1">
            <span className="font-bold">${apartment.price}</span> per month
          </div>
        </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}