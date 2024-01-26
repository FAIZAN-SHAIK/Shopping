
export class Products {
  id: number;
  name: string;
  type: string;
  price: number;
  gender: string;
  color: string;
  brand: string;
  imageUrl: string;
  wishlist: boolean;

  selectedSize?:string;
  quantity : number=0;

  OrderId?: number;
  

  constructor(id: number, name: string, type: string, price: number, gender: string, color: string, brand: string, imageUrl: string, wishlist: boolean) {

    this.id = id
    this.name = name
    this.type = type
    this.price = price
    this.gender = gender
    this.color = color
    this.brand = brand
    this.imageUrl = imageUrl
    this.wishlist = false
  }


}
