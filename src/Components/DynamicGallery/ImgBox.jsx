import React, { useState } from "react";
import useGallery from "../../context/galleryContext";

const ImgBox = ({ img }) => {
  const [isHover, setIsHover] = useState(false);
  const { deleteImage } = useGallery();

  const handleDelete = () => {
    const check = confirm("Are you sure you want to delete this image?");
    if (check) {
      deleteImage(img.id);
    }
  };
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-40 min-w-48 rounded-xl overflow-hidden transition-all duration-300 relative"
    >
      <img className="w-full h-full object-cover" src={img.path} alt="img" />
      <div
        className={`${isHover ? "flex" : "hidden"} items-center justify-center absolute top-0 left-0 w-full h-full bg-[#00000090] z-10`}
      >
        <i
          onClick={handleDelete}
          className="ri-delete-bin-6-fill text-2xl cursor-pointer text-white transition-transform duration-300 hover:scale-125"
        ></i>
      </div>
    </div>
  );
};

export default ImgBox;
