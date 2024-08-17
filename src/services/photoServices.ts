import axios from "./api-client";
import { Photo } from "../types/Photo";

export const getPhotos = async () => {
  return await axios.get<Photo[]>("/photos");
};
