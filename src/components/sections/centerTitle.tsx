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

const CenterTitle = ({ title, description, buttonUrl, buttonText }: Props) => {
  return (
    <section className="py-10 mt-10">
      <div className="container mx-auto px-4">
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt="ayurvedic icon"
              width={200}
              height={200}
              className="mb-4"
            />
            <h2 className="font-heading text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light   text-foreground mb-6">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              {description}
            </p>
            <Link href={buttonUrl}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full">
                {buttonText}
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default CenterTitle;
