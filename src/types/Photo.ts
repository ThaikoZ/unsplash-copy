import photos from "../data/photos.json";

export type PhotoList = typeof photos;
export type Photo = (typeof photos)[0];
