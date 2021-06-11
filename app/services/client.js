import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.1.1.106/",
});

export default apiClient;
