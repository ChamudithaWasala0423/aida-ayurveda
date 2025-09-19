import {useTranslations} from 'next-intl';
import Heading from '@/components/general/Heading';
import HeroImage from '@/components/sections/hero-image';
import ContactSection from '@/components/sections/contact-section';

const  Page = () => {
    const t = useTranslations('HomePage');
      const t2 = useTranslations("ContactUsPage");
    return (
     <>
        <Heading
        title={`${t2("HeadingTitle")}`}
        description={`${t2("HeadingDescription")}`}
        keywords="Ahangama, Sri Lanka, Chalets"
      />
      <HeroImage
        title={t2("ContactUsTitle")}
        description={t2("ContactUsDescription")}
        imageUrl="https://res.cloudinary.com/dea8hqyoh/image/upload/v1746942191/DSC08431-Edit-2_ll2tp7.jpg"
        uri="https://www.bookinghasthri.com"
        buttonText={t("BookNow")}
      />
      <ContactSection  />
     </>
    )
}


export default Page;