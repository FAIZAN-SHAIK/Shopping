
import { Products } from "./products.class";

export interface login {
 
  id : number;
  firstname: string ;
  lastname: string ;
  gender: string ;
  mobile: number;
  emailid: string ;
  address: string;
  username: string ;
  password: string ;
  addtocart : Products[],
  wishlist : Products[],
  orders : Products[]


}

// export interface addTocart{

// }



// export interface Orders{
//   products : Products[],
//   orderId : number;
// } 
