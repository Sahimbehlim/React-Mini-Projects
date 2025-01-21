import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImgBox from "./ImgBox";
import { GalleryProvider } from "../../context/galleryContext";

const DynamicGallery = () => {
  const [images, setImages] = useState([]);
  const galleryRef = useRef();

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [{ id: Date.now(), path: reader.result }, ...prev]);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const scrollGallery = (direction) => {
    direction === "left"
      ? galleryRef.current.scrollBy({ left: "-200" })
      : galleryRef.current.scrollBy({ left: "200" });
  };

  return (
    <GalleryProvider value={{ images, addImage, deleteImage }}>
      <section className="w-full min-h-screen bg-[#111] flex flex-col items-center justify-center px-4">
        <Link to="/" className="mb-4">
          <i className="ri-home-7-fill text-3xl text-white"></i>
        </Link>
        <main className="bg-[#363c43] w-full max-w-2xl rounded-xl p-4 flex flex-col gap-y-6 text-gray-300">
          <div className="flex items-center justify-between">
            <span className="bg-[#111] px-4 py-2 rounded-lg font-medium">
              Gallery
            </span>
            <div className="flex items-center gap-x-2">
              <div className="bg-[#222428] mr-4 rounded-lg">
                <label
                  htmlFor="file-input"
                  className="font-semibold text-sm px-4 py-2 inline-block cursor-pointer text-center"
                >
                  + ADD IMAGE
                </label>
                <input
                  onChange={addImage}
                  id="file-input"
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
              {[
                {
                  icon: "ri-arrow-left-line",
                  handler: () => scrollGallery("left"),
                },
                {
                  icon: "ri-arrow-right-line",
                  handler: () => scrollGallery("right"),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={item.handler}
                  className="bg-[#222428] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </div>
              ))}
            </div>
          </div>
          {images.length === 0 ? (
            <h2 className="text-xl font-medium text-center text-white">
              Gallery Is Empty
            </h2>
          ) : (
            <div
              ref={galleryRef}
              className="flex items-center gap-x-4 overflow-x-hidden scroll-smooth scrollbar-none"
            >
              {images.map((img) => (
                <ImgBox key={img.id} img={img} />
              ))}
            </div>
          )}
        </main>
      </section>
    </GalleryProvider>
  );
};

export default DynamicGallery;
