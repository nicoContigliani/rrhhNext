import axios, { Method } from 'axios';

interface AxiosProps {
  url: string;
  method: Method;
  body?: any;
  idParams?: number | string | null;
}

const useAxios = async (props: AxiosProps): Promise<any> => {
  const { url, method, body, idParams } = props;
  let dataReturn;
  
  try {
    const token: string = 'tu_token_aqui' || '';
    
    const headers: { [key: string]: string } = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const urls = idParams !== null
    ? `${url}/${idParams}`
    : `${url}`;
    
  
    const response = await axios({
      method: method, // Ensure method is of type Method from axios
      url: urls,
      data: body,
      headers: headers
    });
    console.log("🚀 ~ file: useAxios.services.ts:42 ~ useAxios ~ response:", response)

    return dataReturn = response.data

  } catch (error) {
    console.log("🚀 ~ file: useAxios.ts:27 ~ useAxios ~ error:", error);
    throw error;
  }
};

export default useAxios;