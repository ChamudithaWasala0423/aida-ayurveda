"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/real-carousel";

export function SocialCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.videoSrc} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-16">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "@AIDA Ayurveda",
    title: "",
    videoSrc: "https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758132750/SSYouTube.online_Ayurveda_Treatments_by_AIDA_Ayurveda_Bentota_Best_Ayurveda_Hotel_in_Sri_Lanka_Digital_Escapes_720p_rabinc.mp4",
  },
  {
    category: "@AIDA Ayurveda",
    title: "",
    videoSrc: "https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758132864/SSYouTube.online_Morning_Yoga_by_AIDA_Ayurveda_Bentota_Best_Ayurveda_Hotel_in_Sri_Lanka_Digital_Escapes_720p_gtuf2a.mp4",
  },
  {
    category: "@AIDA Ayurveda",
    title: "",
    videoSrc: "https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758132784/SSYouTube.online_Ayurveda_Consultation_by_AIDA_Ayurveda_Bentota_Best_Ayurveda_Hotel_in_Sri_Lanka_Digital_Escapes_720p_gpkdvl.mp4",
  },
  {
    category: "@AIDA Ayurveda",
    title: "",
    videoSrc: "https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758132828/SSYouTube.online_Flower_Bath_Therapy_by_AIDA_Ayurveda_Bentota_Best_Ayurveda_Hotel_in_Sri_Lanka_Digital_Escapes_720p_wy07bi.mp4",
  },
];