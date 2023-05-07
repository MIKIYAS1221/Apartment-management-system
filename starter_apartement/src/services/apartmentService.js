import axios from "axios";

// Define the base URL for the room API
const BASE_URL = "http://localhost:5000/api";

// const BASE_URL = "http://localhost:3000";

export const getApartments = async () => {
  return await axios.get(`${BASE_URL}/apartments`).then((response) => {
    return response.data;
  })
};

export const updateApartment = async (ApartmentId,formData) => {
  return await axios.put(`${BASE_URL}/apartments/update/${ApartmentId}`,formData).then((response) => {
    return response.data;
  });
};

export const getApartment = async (ApartmentId) => {
  return await axios.get(`${BASE_URL}/apartments/${ApartmentId}`).then((response) => {
    return response.data;
  });
};

export const saveApartment = async (Apartement) => {
    return await axios.post(`${BASE_URL}/apartments/createApartment`, Apartement).then((response) => {
      return response.data;
    });
  // }
};

export const deleteApartment = async (ApartmentId) => {
  return await axios.delete(`${BASE_URL}/apartments/delete/${ApartmentId}`).then((response) => {
  return response.data;
  });
};

export const freeApartment = async () => {
  return await axios.get(`${BASE_URL}/apartments/free/apartment`).then((response) => {
    return response.data;
  });
}

export const occupiedApartment = async () => {
  return await axios.get(`${BASE_URL}/apartments/occupied/apartment`).then((response) => {
    return response.data;
  });
}

export const addReview = async (review,id) => {
  return await axios.put(`${BASE_URL}/apartments/addReview/${id}`, review).then((response) => {
    return response.data;
  });
}



// // Define a service to fetch the list of rooms from the API
// export const fetchRoomList = async () => {
//   try {
//     const response = await axios.get(API_BASE_URL);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch room list");
//   }
// };

// // Define a service to add a new room to the API
// export const addRoom = async (room) => {
//   try {
//     const response = await axios.post(API_BASE_URL, room);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to add room");
//   }
// };

// // Define a service to update an existing room in the API
// export const updateRoom = async (id, room) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/${id}`, room);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to update room");
//   }
// };

// // Define a service to delete a room from the API
// export const deleteRoom = async (id) => {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to delete room");
//   }
// };
// // 