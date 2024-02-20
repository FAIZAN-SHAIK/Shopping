
import { Products } from "./products.class";

export interface login {

  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  mobile: number;
  emailid: string;
  address: address;
  username: string;
  password: string;
  addtocart: Products[],
  wishlist: Products[],
  orders: Products[],
  savelater: Products[],
  buynow : Products[]


}

export interface address{
  houseNumber: string,
  area: string,
  city : string,
  pincode : number,
  state : string 

}




