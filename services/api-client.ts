import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
  count:number;
  results:T[];
  next:string | null;
}

const axiosInstance= axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ebf3935ff67f4244951489921b819746",
  },
});

class APIClient<T>{
  endpoint:string;
  constructor(endpoint :string){
    this.endpoint=endpoint;
  }

  getAll=(config:AxiosRequestConfig)=>{
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint,config).then(res=>res.data)
  }
}
export default APIClient;