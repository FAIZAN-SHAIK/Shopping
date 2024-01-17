import { Injectable } from '@angular/core';
import { Products } from './products.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  didItemAddedToCart!: boolean;

  AllProducts: Products[] = [
    new Products(1, "louis blue tshirt", 'tshirt', 1859, 'male', 'blue', 'louis', '../../../assets/men/tshirts/t2.webp', false),
    new Products(2, "AllenSolly Black Jeans", 'jeans', 999, 'male', 'black', 'AllenSolly', '../../../assets/men/jeans/black 3 jeans.webp', false),
    new Products(3, "AllenSolly Black Jeans", 'jeans', 799, 'male', 'black', 'AllenSolly', '../../../assets/men/jeans/black 4 jeans.jpg', false),
    new Products(4, "USPA Black Jeans", 'jeans', 1199, 'male', 'black', 'uspa', '../../../assets/men/jeans/black_1_jeans.png', false),
    new Products(5, "louis ligh Blue Jeans", 'jeans', 899, 'male', 'blue', 'louisPhillipe', '../../../assets/men/jeans/blue 3 jeans.webp', false),
    new Products(6, "Urban  Blue Jeans", 'jeans', 499, 'male', 'blue', 'Urban', '../../../assets/men/jeans/blue jeans.webp', false),
    new Products(7, "AllenSolly grey Jeans", 'jeans', 1899, 'male', 'grey', 'AllenSolly', '../../../assets/men/jeans/grey jeans.jpg', false),
    new Products(8, "AllenSolly grey Jeans", 'jeans', 1859, 'male', 'white', 'AllenSolly', '../../../assets/men/jeans/white 3 jeans.webp', false),
    new Products(9, "Urban white Jeans", 'jeans', 899, 'male', 'white', 'Urban', '../../../assets/men/jeans/white 2 image.webp', false),
    new Products(10, "USPA orange tshirt", 'tshirt', 1299, 'male', 'orange', 'USPA', '../../../assets/men/tshirts/t5.webp', false),
    new Products(11, "USPA pink Shirt", 'shirt', 899, 'female', 'pink', 'USPA', '../../../assets/women/shirts/s5.webp', false),
    new Products(12, "AllenSolly white jeans", 'jeans', 899, 'female', 'white', 'AllenSolly', '../../../assets/women/jeans/j10.webp', false),
    new Products(13, "Urban  Black Shirt", 'shirt', 1859, 'female', 'black', 'Urban', '../../../assets/women/shirts/s2.webp', false),
    new Products(14, "Urban pink tshirt", 'tshirt', 1859, 'female', 'pink', 'Urban', '../../../assets/women/tshirts/t6.webp', false),
    new Products(15, "USPA white tshirt", 'tshirt', 899, 'female', 'white', 'USPA', '../../../assets/women/tshirts/t10.webp', false),
    new Products(16, "Urban Black jeans", 'jeans', 1299, 'female', 'black', 'Urban', '../../../assets/women/jeans/j2.webp', false),
    new Products(17, "louis meroon tshirt", 'tshirt', 899, 'male', 'meroon', 'louis', '../../../assets/men/tshirts/t4.webp', false),
    new Products(18, "Urban Black Shirt", 'shirt', 1859, 'male', 'black', 'Urban', '../../../assets/men/shirts/black shirt.webp', false),
    new Products(19, "USPA blue jeans", 'jeans', 1299, 'female', 'blue', 'USPA', '../../../assets/women/jeans/j6.webp', false),
    new Products(20, "AllenSolly red Shirt", 'shirt', 899, 'male', 'red', 'AllenSolly', '../../../assets/men/shirts/causal half sleeve.webp', false),
    new Products(21, "louis  Black Shirt", 'shirt', 899, 'female', 'black', 'louis', '../../../assets/women/shirts/s3.webp', false),
    new Products(22, "louis purple tshirt", 'tshirt', 1299, 'female', 'purple', 'louis', '../../../assets/women/tshirts/t7.webp', false),
    new Products(23, "Urban red Shirt", 'shirt', 899, 'male', 'red', 'Urban', '../../../assets/men/shirts/red shirt.webp', false),
    new Products(24, "USPA blue jeans", 'jeans', 899, 'female', 'blue', 'USPA', '../../../assets/women/jeans/j8.webp', false),
    new Products(25, "AllenSolly white Shirt", 'shirt', 899, 'male', 'white', 'AllenSolly', '../../../assets/men/shirts/w2.webp', false),
    new Products(26, "USPA  Blue Jeans", 'jeans', 1099, 'male', 'blue', 'uspa', '../../../assets/men/jeans/blue 2 jeans.jpg', false),
    new Products(27, "Urban yellow Shirt", 'shirt', 1299, 'male', 'yellow', 'Urban', '../../../assets/men/shirts/y1.webp', false),
    new Products(28, "Urban red tshirt", 'tshirt', 899, 'male', 'red', 'Urban', '../../../assets/men/tshirts/t3.webp', false),
    new Products(29, "AllenSolly blue tshirt", 'tshirt', 1859, 'male', 'blue', 'AllenSolly', '../../../assets/men/tshirts/t6.webp', false),
    new Products(30, "Urban yellow tshirt", 'tshirt', 899, 'male', 'yellow', 'Urban', '../../../assets/men/tshirts/t7.webp', false),
    new Products(31, "AllenSolly Black jeans", 'jeans', 899, 'female', 'black', 'AllenSolly', '../../../assets/women/jeans/j1.webp', false),
    new Products(32, "Urban Black jeans", 'jeans', 899, 'female', 'black', 'Urban', '../../../assets/women/jeans/j4.webp', false),
    new Products(33, "louis blue jeans", 'jeans', 899, 'female', 'blue', 'louis', '../../../assets/women/jeans/j5.webp', false),
    new Products(34, "Urban blue jeans", 'jeans', 1859, 'female', 'blue', 'Urban', '../../../assets/women/jeans/j7.webp', false),
    new Products(35, "Urban white Jeans", 'jeans', 1699, 'male', 'white', 'Urban', '../../../assets/men/jeans/white 1 jeans.webp', false),
    new Products(36, "Urban white jeans", 'jeans', 1299, 'female', 'white', 'Urban', '../../../assets/women/jeans/j9.webp', false),
    new Products(37, "AllenSolly Black Shirt", 'shirt', 899, 'female', 'black', 'AllenSolly', '../../../assets/women/shirts/s1.webp', false),
    new Products(38, "AllenSolly brown Shirt", 'shirt', 1299, 'female', 'brown', 'AllenSolly', '../../../assets/women/shirts/s4.webp', false),
    new Products(39, "AllenSolly white Shirt", 'shirt', 899, 'male', 'white', 'AllenSolly', '../../../assets/men/shirts/w3.webp', false),
    new Products(40, "AllenSolly Black tshirt", 'tshirt', 899, 'male', 'black', 'AllenSolly', '../../../assets/men/tshirts/t1.webp', false),
    new Products(41, "louis purple Shirt", 'shirt', 1859, 'female', 'purple', 'louis', '../../../assets/women/shirts/s6.webp', false),
    new Products(42, "AllenSolly white Shirt", 'shirt', 899, 'female', 'white', 'AllenSolly', '../../../assets/women/shirts/s7.webp', false),
    new Products(43, "louis  Blue Jeans", 'jeans', 999, 'male', 'blue', 'louis', '../../../assets/men/jeans/blue torn jeans.jpg', false),
    new Products(44, "louis Black Jeans", 'jeans', 899, 'male', 'black', 'louisPhillipe', '../../../assets/men/jeans/black 2 jeans.webp', false),
    new Products(45, "Urban Black Shirt", 'tshirt', 899, 'female', 'black', 'Urban', '../../../assets/women/tshirts/t1.webp', false),
    new Products(46, "USPA Black Shirt", 'tshirt', 1859, 'female', 'black', 'USPA', '../../../assets/women/tshirts/t2.webp', false),
    new Products(47, "AllenSolly Black Shirt", 'tshirt', 1299, 'female', 'black', 'AllenSolly', '../../../assets/women/tshirts/t3.webp', false),
    new Products(48, "Urban Black Shirt", 'tshirt', 899, 'female', 'black', 'Urban', '../../../assets/women/tshirts/t4.webp', false),
    new Products(49, "AllenSolly meroon tshirt", 'tshirt', 899, 'female', 'meroon', 'AllenSolly', '../../../assets/women/tshirts/t5.webp', false),
    new Products(50, "AllenSolly green Shirt", 'shirt', 899, 'male', 'green', 'AllenSolly', '../../../assets/men/shirts/green shirt.webp', false),
    new Products(51, "AllenSolly white Shirt", 'shirt', 1859, 'male', 'white', 'AllenSolly', '../../../assets/men/shirts/w1.webp', false),
    new Products(52, "louis white Shirt", 'shirt', 1859, 'male', 'white', 'louis', '../../../assets/men/shirts/w4.webp', false),
    new Products(53, "louis Black jeans", 'jeans', 1859, 'female', 'black', 'louis', '../../../assets/women/jeans/j3.webp', false),
    new Products(54, "louis blue tshirt", 'tshirt', 1859, 'female', 'blue', 'louis', '../../../assets/women/tshirts/t8.webp', false),
    new Products(55, "AllenSolly white tshirt", 'tshirt', 899, 'female', 'white', 'AllenSolly', '../../../assets/women/tshirts/t9.webp', false),
    new Products(56, "Urban white tshirt", 'tshirt', 159, 'female', 'white', 'Urban', '../../../assets/women/tshirts/t11.webp', false),

  ]

  cartProducts: Products[] = [];

  clearBuyProducts() {
    this.buyProducts = [];
  }

  buyProducts: Products[] = [];

  orders:Products[] = []
  

  constructor() { }


}
