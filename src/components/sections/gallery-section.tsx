"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128746/aida-hotel-full_efljrg.jpg",
    alt: "Abstract painting with vibrant colors",
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128800/hero_f8cwo2.jpg",
    alt: "Landscape photography of mountains",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128796/WhatsApp-Image-2023-11-08-at-9.56.36-AM_sustzs.jpg",
    alt: "Portrait photography in black and white",
    width: 500,
    height: 500,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128795/Avinya-Ayurveda-Bentota-Rooms-2_q8xmnu.jpg",
    alt: "Modern architecture photography",
    width: 500,
    height: 800,
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128782/Avinya-Ayurveda-7-2048x1365_rroxus.jpg",
    alt: "Macro photography of nature",
    width: 700,
    height: 400,
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128726/AH2I6867-Enhanced-NR-Edit-copy_1_a9qrhv.jpg",
    alt: "Street photography in urban setting",
    width: 400,
    height: 600,
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg",
    alt: "Minimalist product photography",
    width: 500,
    height: 500,
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106386/Avinya-Ayurveda-6-2048x1365_kgsuaw.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115727/Avinya-Ayurveda-40-2048x1365_kuyvwd.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128784/Avinya-Ayurveda-Bentota-Rooms-1_hfsxth.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128715/Avinya-Ayurveda-4-2048x1365_zkpw5l.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758108724/Avinya-Ayurveda-Bentota-YOGA-3-2048x1365_tnqywx.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 800,
    height: 500,
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106389/AH2I6140-Enhanced-NR-copy_yubjmi.jpg",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758126911/avinya-ayurveda-3-2048x1152_ycqrjz.jpg",
    alt: "Modern architecture photography",
    width: 500,
    height: 800,
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className=" py-16">
      <MaxWidthWrapper>
      {/* Masonry Gallery Grid */}
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="mb-4 overflow-hidden rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                width={1200}
                height={600}
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full object-cover"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/20" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MaxWidthWrapper>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 rounded-full bg-background p-2 text-foreground shadow-lg"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={cn(
                "max-h-[80vh] rounded-lg object-contain shadow-2xl",
                selectedImage.width > selectedImage.height
                  ? "max-w-[80vw]"
                  : "max-w-[60vw]"
              )}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </MaxWidthWrapper>
        </motion.div>
      )}
      </MaxWidthWrapper>
    </section>
  );
}
