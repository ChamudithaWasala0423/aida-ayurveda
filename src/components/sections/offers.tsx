import Image from "next/image";

import Link from "next/link";
import { Button } from "../ui/button";
import { CardsCarousel } from "../ui/Offers-carousel";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  url: string;
  buttonText: string;
};

const Offers = ({ title, description, url, buttonText }: Props) => {
  return (
    <>
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 py-24">
          <div className="flex flex-col  items-center gap-4 sm:gap-6">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt="ayurvedic icon"
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight font-light text-3xl md:text-5xl  font-[family-name:var(--font-lora)]">
              {title}
            </h2>
            <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
              {description}
            </p>
            <Link href={url} className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full">
                {buttonText}
                </Button>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        <CardsCarousel />
      </section>
      <Image
        src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
        alt="ayurvedic icon"
        width={800}
        height={800}
        className="hidden md:flex lg:flex xl:flex opacity-20 -mt-64 mr-32"
      />
    </>
  );
};

export default Offers;
