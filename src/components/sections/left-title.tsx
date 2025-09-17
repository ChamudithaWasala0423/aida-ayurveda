import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
};

const LeftTitle = ({ title, description, buttonUrl, buttonText }: Props) => {
  return (
    <section className=" mt-6">
      <div className="container px-4">
        <MaxWidthWrapper>
          <div className="text-start ">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt="ayurvedic icon"
              width={200}
              height={200}
              className="mb-4"
            />
            <h2 className="font-heading  text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light  text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-5xl  leading-relaxed mb-6">
              {description}
            </p>
            <Link href={buttonUrl}>
              <Button size="lg" className="cursor-pointer">
                {buttonText}
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default LeftTitle;
