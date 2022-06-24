import axiosInstance from "../../../helpers/axiosInstance";

export default navigate => {
  axiosInstance(navigate)
    .get("/contacts/")
    .then(res => console.log("data", res.data))
    .catch(err => console.log("err", err));
};
