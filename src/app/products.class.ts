
export class Products {
    id: number;
    name: string;
    type: string;
    price: number;
    gender: string;
    color: string;
    brand: string;
    imageUrl: string;

    constructor(id: number, name: string, type: string, price: number, gender: string, color: string, brand: string, imageUrl: string) {

        this.id = id
        this.name = name
        this.type = type
        this.price = price
        this.gender = gender
        this.color = color
        this.brand = brand
        this.imageUrl = imageUrl
    }


}