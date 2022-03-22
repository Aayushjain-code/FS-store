import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


export const products = [
  {
    _id: uuid(),
    title: "Carrot",
    availableOrNot: true,
    priceOld: 150,
    priceNew: 75,
    offerOFF: "50%",
    categoryName: "tuberous",
    offer: true,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/05/13/15/23/carrot-2309814__340.jpg'
    , rating: 5
  },
  {
    _id: uuid(),
    title: "Orange",
    availableOrNot: true,
    priceOld: 200,
    priceNew: 200,
    offerOFF: "0",
    categoryName: "fruit",
    offer: false,
    imageUrl: 'https://www.collinsdictionary.com/images/full/orange_342874121.jpg'
    , rating: 5
  },
  {
    _id: uuid(),
    title: "Onion",
    availableOrNot: true,
    priceOld: 80,
    priceNew: 80,
    offerOFF: "0",
    categoryName: "tuberous",
    offer: false,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/15/bulb-1238338_960_720.jpg'
    , rating: 4
  },
  {
    _id: uuid(),
    title: "Potatoes",
    availableOrNot: true,
    priceOld: 200,
    priceNew: 100,
    offerOFF: "50%",
    categoryName: "tuberous",
    offer: true,
    imageUrl: "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060__340.jpg"
    , rating: 4
  },
  {
    _id: uuid(),
    title: "Avocado",
    availableOrNot: false,
    priceOld: 250,
    priceNew: 250,
    offerOFF: "0",
    categoryName: "Green",
    offer: false,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/20/17/avocado-933060__340.jpg'
    , rating: 3
  },
  {
    _id: uuid(),
    title: "Eggplant",
    availableOrNot: false,
    priceOld: 100,
    priceNew: 100,
    offerOFF: "0",
    categoryName: "Green",
    offer: false,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784__340.jpg'
    , rating: 3
  },
  {
    _id: uuid(),
    title: "Beetroot",
    availableOrNot: true,
    priceOld: 120,
    priceNew: 60,
    offerOFF: "50%",
    categoryName: "tuberous",
    offer: true,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/06/22/13/52/beetroot-3490809__340.jpg'
    , rating: 2
  },
  {
    _id: uuid(),
    title: "Cabbage",
    availableOrNot: true,
    priceOld: 60,
    priceNew: 60,
    offerOFF: "0",
    categoryName: "leafy",
    offer: false,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_960_720.jpg'
    , rating: 2
  },
  {
    _id: uuid(),
    title: "Cucumbers",
    availableOrNot: true,
    priceOld: 90,
    priceNew: 65,
    offerOFF: "30%",
    categoryName: "Green",
    offer: true,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269__340.jpg'
    , rating: 1
  },
  {
    _id: uuid(),
    title: "Broccoli",
    availableOrNot: true,
    priceOld: 70,
    priceNew: 70,
    offerOFF: "0",
    categoryName: "Green",
    offer: false,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_960_720.jpg'
    , rating: 1
  },
];
