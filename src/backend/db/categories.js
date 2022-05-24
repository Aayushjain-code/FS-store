import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Vegitables",
    imageUrl:
      "https://media.istockphoto.com/photos/indian-marketplace-showing-different-kinds-of-vegetables-picture-id183255683?k=20&m=183255683&s=612x612&w=0&h=c83XK4ylZ-a-_WuxZ0EarGRVSut5P21I_oD-JY7oHWM=",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Fruits",
    imageUrl:
      "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Sprouts",
    imageUrl:
      "https://media.istockphoto.com/photos/sprouted-lentil-salad-picture-id1127740593?k=20&m=1127740593&s=612x612&w=0&h=hOp4ugKPf-3Qyklddj5ba1iNRr4lZ2hoqOcMCUESFEg=",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
];
