import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.1.1.106/",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export default apiClient;
