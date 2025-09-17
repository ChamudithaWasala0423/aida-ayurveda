"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useTranslations } from "next-intl";

export function CardsCarousel() {
  const t = useTranslations("OffersCarousel");

  const data = [
    {
      category: t("items.relax.category"),
      title: t("items.relax.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115623/Avinya-Ayurveda-7-1-2048x1464_swznke.jpg",
    },
    {
      category: t("items.ayurvedic.category"),
      title: t("items.ayurvedic.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg",
    },
    {
      category: t("items.yoga.category"),
      title: t("items.yoga.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115727/Avinya-Ayurveda-40-2048x1365_kuyvwd.jpg",
    },
    {
      category: t("items.meditation.category"),
      title: t("items.meditation.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115832/Avinya-Ayurveda-5-2048x1365_cpflvc.jpg",
    },
    {
      category: t("items.stay.category"),
      title: t("items.stay.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115876/Avinya-Ayurveda-9-scaled_kunfdk.jpg",
    },
    {
      category: t("items.swimming.category"),
      title: t("items.swimming.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115954/Avinya-Ayurveda-44-2048x1365_xaijri.jpg",
    },
    {
      category: t("items.enjoy.category"),
      title: t("items.enjoy.title"),
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758116006/Avinya-Ayurveda-3-2048x1492_ub1ryd.jpg",
    },
  ];

  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full h-full -mt-16">
      <Carousel items={cards} />
    </div>
  );
}
