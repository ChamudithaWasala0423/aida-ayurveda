import {useTranslations} from 'next-intl';
import Heading from '@/components/general/Heading';
import HeroImage from '@/components/sections/hero-image';
import ContactSection from '@/components/sections/contact-section';

const  Page = () => {
      const t2 = useTranslations("ContactUsPage");
    return (
     <>
          <Heading
        title={t2("HeadingTitle")}
        description={t2("HeadingDescription")}
        keywords={t2("HeadingKeywords")}
      />
      <HeroImage
        title={t2("HeroTitle")}
        description={t2("HeroDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128796/WhatsApp-Image-2023-11-08-at-9.56.36-AM_sustzs.jpg"
        uri="https://booking.aidaayurveda.com"
        buttonText={t2("HeroButtonText")}
      />

      <ContactSection  />
     </>
    )
}


export default Page;