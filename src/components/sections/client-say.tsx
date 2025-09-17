import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";

type Testimonial = {
  description: string;
  name: string;
  role: string;
};

type Props = {
  imageUrl: string;
};

const ClientSay = ({ imageUrl }: Props) => {
    const t = useTranslations("ClientSay");

  const testimonials: Testimonial[] = [
    {
      description: t("reviewThree"),
      name: "Isa G",
      role: t("guest"),
    },
    {
      description: t("reviewOne"),
      name: "Rasa Gaizauskaite",
      role: t("guest"),
    },
    {
      description: t("reviewTwo"),
      name: "Sudhanshu Bhushan",
      role: t("guest"),
    },
       {
      description: t("reviewFive"),
      name: "DINAYADURA D",
      role: t("guest"),
    },
    {
      description: t("reviewFour"),
      name: "Tharaka Dilshan",
      role: t("guest"),
    },
 
  ];

  return (
    <div className="py-24">
      <section className="relative w-full h-[700px] bg-slate-100 ">
        <MaxWidthWrapper>
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="background image"
              className="w-full h-full object-cover"
              width={1300}
              height={800}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        </div>

        <MaxWidthWrapper>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 md:p-4 lg:p-10 xl:p-10">
            <div className="w-full lg:w-[80%] md:w-[80%] xl:[80%] h-full bg-white rounded-sm flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                
                <Link href="https://search.google.com/local/writereview?placeid=ChIJyVOoo54u4joRv1EipPoN8OM" target="_blank" >
                  <div className="flex flex-col items-center gap-2 font-bold underline cursor-pointer">
                    {/* Google Review Icon */}
                    <Image
                      src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755671534/google-logo-png_ojebut.png"
                      alt="Google Review Icon"
                      width={200}
                      height={200}
                      className="h-full w-16 object-contain"
                    />
                    <p>
                      { t("reviewTitle")}
                    </p>
                  </div>
                </Link>

                <Carousel className="w-full max-w-xs md:max-w-lg lg:max-w-lg xl:max-w-lg">
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <p className="order-2 mt-4 text-sm md:text-lg space-x-1 text-gray-900 text-center w-full text-balance">
                          {testimonial.description}
                        </p>
                        <p className="order-3 mt-4 text-sm font-bold text-gray-900 text-center w-full text-balance">
                          {testimonial.name}
                        </p>
                        <p className="order-3 text-sm font-medium text-gray-900 text-center w-full text-balance">
                          {testimonial.role}
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default ClientSay;
