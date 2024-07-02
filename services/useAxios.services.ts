import axios, { Method } from 'axios';

interface AxiosProps {
  url: string;
  method: Method;
  body?: any;
  idParams?: number | string | null;
  token?: string | undefined | any;
}

const useAxios: any | any[] | undefined = async (props: AxiosProps): Promise<any> => {
  const { url, method, body, idParams, token } = props;
  let dataReturn;

  try {

    const headers: { [key: string]: string } = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const urls = idParams !== null
      ? `${url}/${idParams}`
      : `${url}`;

    const response: any | any[] | undefined = await axios({
      method: method, // Ensure method is of type Method from axios
      url: urls,
      data: body,
      headers: headers
    });

    return dataReturn = response.data

  } catch (error: any) {
    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error stack:", error.stack);

    // Si hay propiedades adicionales en el error
    console.error("Error details:", error);    // throw error;
  }
};

export default useAxios;