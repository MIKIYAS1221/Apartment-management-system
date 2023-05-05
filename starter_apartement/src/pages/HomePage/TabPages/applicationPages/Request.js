import React, { useState } from "react";
import { acceptApartmentRequest } from "../../../../services/managerService";

const Request = ({ data, isPending }) => {
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')

  const handleAcceptRequest = (ev) => {
    ev.preventDefault();
    console.log(data._id);
    console.log(startDate);
    console.log(endDate);
    acceptApartmentRequest(data._id,startDate,endDate).then((data) => {
      console.log(data);
      
    });
  };
  const handleRejectRequest = (ev) => {
    ev.preventDefault();
    
    acceptApartmentRequest(data._id).then((data) => {
      console.log(data);
      
    });
  };
  return (
    <div class="bg-white rounded-lg shadow-lg px-6 py-8">
      <h2 class="text-2xl font-bold mb-4">Applicant Information</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">Name:</label>
          <span class="text-gray-700">{data.user.name}</span>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">Email:</label>
          <span class="text-gray-700">{data.user.email}</span>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">Phone:</label>
          <span class="text-gray-700">{data.user.phoneNumber}</span>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">date:</label>
          <span class="text-gray-700">{data.createdAt}</span>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">status:</label>
          <span class="text-gray-700">{data.status}</span>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <label class="text-lg font-bold">Apartment ID:</label>
          <span class="text-gray-700">{data.apartment._id}</span>
        </div>
        </div>
        <div class="flex flex-row space-x-4 mt-6">
          {isPending && (
            <>
              <div>
              <div class="flex flex-col sm:flex-row justify-between">
                <label class="text-lg font-bold">Start Date:</label>
                <input class="text-gray-700" type="date" value={startDate}
                onChange={(e)=> setStartDate(e.target.value)} />
              </div>
              <div class="flex flex-col sm:flex-row justify-between">
                <label class="text-lg font-bold">End Date:</label>
                <input class="text-gray-700" type="date" value={endDate} onChange={(e)=> setEndDate(e.target.value)}/>
              </div>
              </div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAcceptRequest}
              >
                Accept
              </button>
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleRejectRequest}
              >
                Reject
              </button>
            </>
          )}
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {/* onClick={handleDetailInfo} */}
            Detail Info
          </button>
      </div>
    </div>
  );
};

export default Request;
