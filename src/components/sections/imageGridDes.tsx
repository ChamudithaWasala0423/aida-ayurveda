import Link from "next/link";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Button } from "../ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";



type CardProps = { title: string; description: string };

const ImageGridDes = () => {
  const t = useTranslations("ImageGridDes");
  const cardsData = [
    {
      id: 1,
      content: (
        <SkeletonCard
          title={t("cards.one.title")}
          description={t("cards.one.description")}
        />
      ),
      className: "md:col-span-2",
      thumbnail:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106389/AH2I6140-Enhanced-NR-copy_yubjmi.jpg",
    },
    {
      id: 2,
      content: (
        <SkeletonCard
          title={t("cards.two.title")}
          description={t("cards.two.description")}
        />
      ),
      className: "col-span-1",
      thumbnail:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg",
    },
    {
      id: 3,
      content: (
        <SkeletonCard
          title={t("cards.three.title")}
          description={t("cards.three.description")}
        />
      ),
      className: "col-span-1",
      thumbnail:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128722/AH2I6167-Enhanced-NR-copy_1_u3qawt.jpg",
    },
    {
      id: 4,
      content: (
        <SkeletonCard
          title={t("cards.four.title")}
          description={t("cards.four.description")}
        />
      ),
      className: "md:col-span-2",
      thumbnail:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115623/Avinya-Ayurveda-7-1-2048x1464_swznke.jpg",
    },
  ];

  return (
    <section className=" bg-[#FCF2EB]  py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col  items-center gap-4 sm:gap-6">
          <Image
            src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
            alt={t("FlowerAlt")}
            width={200}
            height={200}
          />
          <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight font-light text-3xl md:text-5xl  font-[family-name:var(--font-lora)]">
            {t("Title")}
          </h2>
          <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
            {t("Description")}
          </p>
          <Link href="/contact" className="order-3">
            <div className="flex items-center justify-center mt-4">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full" size="lg">
                {t("ButtonText")}
              </Button>
            </div>
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="h-screen  w-full mt-10">
        <LayoutGrid cards={cardsData} />
      </div>
    </section>
  );
};

// Localized skeleton card
const SkeletonCard = ({ title, description }: CardProps) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white font-[family-name:var(--font-artifex-hand-regular)]">
        {title}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-[family-name:var(--font-artifex-hand-regular)]">
        {description}
      </p>
    </div>
  );
};

export default ImageGridDes;
