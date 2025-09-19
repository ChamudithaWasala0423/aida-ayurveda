"use client";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdCloseCircle } from "react-icons/io";
import { getGallery } from "../../../sanity/sanity.query";
import { Loader } from "../general/loader";
export type GalleryType = {
  type: string;
  imageUrl: string;
};
const GalleryMainPage = () => {
  const [images, setImages] = useState<GalleryType[]>([]);
  // State for handling loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // State for handling errors
  const [error, setError] = useState<string | null>(null);

  // State for managing modal visibility
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // State for storing the selected image
  const [selectedImage, setSelectedImage] = useState<GalleryType | null>(null);
  // State for storing the index of selected image
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // Helper function to load gallery data based on type
  const loadGallery = async (galleryType: string) => {
    setIsLoading(true);
    setError(null);
    try {
      let fetchedImages: GalleryType[] = [];
      switch (galleryType) {
        case "all":
          const taraImages = await getGallery();

          fetchedImages = [...taraImages];
          break;
        default:
          fetchedImages = [];
      }

      setImages(fetchedImages);
      if (fetchedImages.length === 0) {
        setError("No images found for the selected gallery.");
      }
    } catch (err) {
      setError("Failed to fetch images.");
      console.error(err);
    }
    setIsLoading(false);
  };

  // Load all images by default when component mounts
  useEffect(() => {
    loadGallery("all");
  }, []);

  // Function to handle image click
  const handleImageClick = (image: GalleryType, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(
      images[selectedIndex === images.length - 1 ? 0 : selectedIndex + 1]
    );
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(
      images[selectedIndex === 0 ? images.length - 1 : selectedIndex - 1]
    );
  };

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap space-x-3">
          <Button
            onClick={() => loadGallery("all")}
            className="hidden  focus:ring-4 focus:outline-none  cursor-pointer"
          >
            All Collection
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-items-center justify-center">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-96 col-span-2 md:col-span-3">
              <Loader loading={isLoading}>Loading</Loader>
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            images.map((image, index) => (
              <div
                key={image.imageUrl}
                className="bg-white rounded-sm w-full h-80 overflow-hidden group"
                onClick={() => handleImageClick(image, index)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.type}
                  width={500}
                  height={500}
                  layout="responsive"
                  className="rounded-sm cursor-pointer object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
              </div>
            ))
          )}
        </div>
        {/* Modal for displaying enlarged image */}
        {modalOpen && selectedImage && (
          <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center">
            <div className="relative mx-auto max-w-full mt-24">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-0 right-0 m-4 text-white text-lg z-50 focus:outline-none"
              >
                <IoMdCloseCircle size={30} />
              </button>
              <div className="flex justify-between mt-10">
                <button onClick={prevImage} className=" p-4 m-4">
                  <FaChevronCircleLeft color="white" size={30} />
                </button>
                <div>
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.type}
                    width={800}
                    height={800}
                    className="rounded-lg "
                  />
                </div>
                <button onClick={nextImage} className=" p-4 m-4">
                  <FaChevronCircleRight color="white" size={30} />
                </button>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default GalleryMainPage;
