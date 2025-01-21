import { createContext, useContext } from "react";

const galleryContext = createContext({
  images: [],
  addImage: (event) => {},
  deleteImage: (id) => {},
});

export const GalleryProvider = galleryContext.Provider;

export default function useGallery() {
  return useContext(galleryContext);
}
