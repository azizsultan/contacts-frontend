import axiosInstance from "../../../helpers/axios";

export default () => {
  axiosInstance
    .get("/contacts/")
    .then(res => console.log("data", res.data))
    .catch(err => console.log("err", err));
};
