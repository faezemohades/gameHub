"use client"
import { Platform } from './useGames';
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react"


export interface Genre{
  id:number;
  name:string;
}

export interface FetchGanresResponse{
    count:number;
    results:Genre[];
  }

export const useGenres = () => {
    const [genres,setGenres]=useState<Genre[]>([]);
    const[error,setError]=useState('');
    const [isLoading, setIsLoading]=useState(false);

    
    useEffect(() => {
      const controller=new AbortController();
      setIsLoading(true)
      apiClient.get<FetchGanresResponse>("/genres",{signal:controller.signal})
      .then((res)=>{
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err)=>{
        if(err instanceof CanceledError)return;
        setError(err.message)
        setIsLoading(false)
      });
    return ()=>controller.abort();
    },[])
    
 return{genres,error,isLoading};
  }

export default useGenres;