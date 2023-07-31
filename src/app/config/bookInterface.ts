export interface BookInterface {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  quantity?:number;
  totalPrice?:number;
}

export interface cartInterface {
  id:string,
  quantity:number
}