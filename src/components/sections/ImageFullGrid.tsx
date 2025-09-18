import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
};

const ImageFullGrid = ({ title, description, imageUrl, buttonText }: Props) => {
  return (
    <>
      <section className="py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
          <div className="flex flex-col  items-center gap-4 sm:gap-6">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt="ayurvedic icon"
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light">
              {title}
            </h2>
            <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
              {description}
            </p>
            <Link href="https://booking.aidaayurveda.com" className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-full" size="lg">
                  {buttonText}
                </Button>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        <div className="w-full h-[700px] bg-slate-100 mt-16 ">
          <Image
            src={imageUrl}
            alt="aida hotel"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default ImageFullGrid;
