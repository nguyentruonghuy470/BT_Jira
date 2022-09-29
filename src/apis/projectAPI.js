import axiosClient from "./axiosClient";

const projectAPI = {
  getProjectAll: () => {
    return axiosClient.get("Project/getAllProject");
  },
  getProjectAllById: (movieId) => {
    console.log(movieId);
    return axiosClient.get(`Project/getProjectDetail?id=${movieId}`);
  },
  updateProjectById: (values) => {
    console.log(values);
    return axiosClient.put(`Project/updateProject?projectId=${7604}`, values);
  },
};

export default projectAPI;
