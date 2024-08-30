import React from "react";

const Gallery = () => {
  const gallery = [
    "../../public/images/img1.jpg",
    "../../public/images/img2.jpg",
    "../../public/images/img3.jpg",
    "../../public/images/img4.jpg",
    "../../public/images/img5.jpg",
    "../../public/images/img6.jpg",
    "../../public/images/img7.jpg",
    "../../public/images/img8.jpg",
    "../../public/images/img9.jpg",
  ];

  return (
    <div className="bg-black mt-12">
      <h1 className="text-2xl font-bold text-blue-400 text-center pt-16">
        BETTER BEATS BEST
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 px-4">
        {gallery.map((ele, ind) => (
          <img
            className="w-full h-auto object-cover"
            key={ind}
            src={ele}
            alt={`Gallery Image ${ind + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
