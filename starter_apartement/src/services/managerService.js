import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getAcceptedRequests = async () => {
    return axios.get(`${BASE_URL}/manager/getAllAcceptedApartmentRequests`).then((response) => {
        return response.data;
    });
    }
export const getAllRequests = async () => {
    return axios.get(`${BASE_URL}/manager/getAllApartmentRequests`).then((response) => {
        return response.data;
    }
    );
}
export const getRejectedRequests = async () => {
    return axios.get(`${BASE_URL}/manager/getAllRejectedApartmentRequests`).then((response) => {
        return response.data;
    }
    );
}
export const acceptApartmentRequest = async (id,startDate,endDate) => {
    return axios.put(`${BASE_URL}/manager/acceptApartmentRequest/${id}`,{startDate,endDate}).then((response) => {
        return response.data;
    }
    );
}
export const rejectApartmentRequest = async (id) => {
    return axios.put(`${BASE_URL}/manager/rejectApartmentRequest/${id}`).then((response) => {
        return response.data;
    }
    );
}
export const getMentainanceReqeust = async () => {
    return axios.get(`${BASE_URL}/manager/getAllMentainanceRequests`).then((response) => {
        return response.data;
    }
    );
}
export const acceptMentainanceRequest = async (id,startDate,endDate) => {
    return axios.put(`${BASE_URL}/manager/acceptMentainanceRequest/${id}`,{startDate,endDate}).then((response) => {
        return response.data;
    }
    );
}
export const rejectMentainanceRequest = async (id) => {
    return axios.put(`${BASE_URL}/manager/rejectMentainanceRequest/${id}`).then((response) => {
        return response.data;
    }
    );
}
export const allAcceptedMentainanceRequest = async () => {
    return axios.get(`${BASE_URL}/manager/getAllAcceptedMentainanceRequests`).then((response) => {
        return response.data;
    }   
    );
}
export const allRejectedMentainanceRequest = async () => {
    return axios.get(`${BASE_URL}/manager/getAllRejectedMentainanceRequests`).then((response) => {
        return response.data;
    }
    );
}   
export const getMaintenaceRequest = async () => {
    return axios.get(`${BASE_URL}/manager/getAllMentainanceRequests`).then((response) => {
        return response.data;
    }
    );
}

export const getAcceptedMaintenaceRequest = async () => {
    return axios.get(`${BASE_URL}/manager/maintenanceRequest/accepted`).then((response) => {
        return response.data;
    }
    );
}
export const getRejectedMaintenaceRequest = async () => {
    return axios.get(`${BASE_URL}/manager/maintenanceRequest/rejected`).then((response) => {
        return response.data;
    }
    );
}

export const acceptMaintenanceRequest = async (id) => {
    return axios.put(`${BASE_URL}/manager/maintenanceRequest/accepted/${id}`).then((response) => {
        return response.data;
    }
    );
}
export const rejectMaintenanceRequest = async (id) => {
        return axios.put(`${BASE_URL}/manager/maintenanceRequest/rejected/${id}`).then((response) => {
            return response.data;
        }
        );
    }