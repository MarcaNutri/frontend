import axios, {AxiosResponse} from "axios";

//Customer
interface CustomerInfo {
  typeUser: string;
  name: string;
  birthday: string;
  phoneNumber: string;
  document: string;
  gender:string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  email: string;
  password: string;
}

export const handleRegisterCustomer = async (
  customer: CustomerInfo
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(
      "http://localhost:3001/customer",
      {
        ...customer,
        typeUser: "CUSTOMER",
        address:`${customer.state} ${customer.city} ${customer.neighborhood}`
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error registering customer:", error);
    throw error;
  }
};


// Login
interface AddressInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const authentication = async (
  cep: string
): Promise<AxiosResponse<AddressInfo>> => {
  try {
    const response = await axios.get<AddressInfo>(`https://viacep.com.br/ws/${cep}/json/`);
    return response;
  } catch (error) {
    console.error("Error getting address info:", error);
    throw error;
  }
};

// CEP
interface AddressInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const getAddressInfoByCEP = async (
  cep: string
): Promise<AxiosResponse<AddressInfo>> => {
  try {
    const response = await axios.get<AddressInfo>(`https://viacep.com.br/ws/${cep}/json/`);
    return response;
  } catch (error) {
    console.error("Error getting address info:", error);
    throw error;
  }
};
