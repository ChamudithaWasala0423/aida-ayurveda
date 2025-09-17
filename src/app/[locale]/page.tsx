import Heading from "@/components/general/Heading";
import HeroVideo from "@/components/sections/HeroVideo";

export default function Home() {
  return (
    <>
      <Heading
        title="AIDA Ayurveda Resort & Spa"
        description="AIDA Ayurveda, your serene escape nestled along the tranquil Bentota River, Sri Lanka. Immerse yourself in the ancient healing traditions of Ayurveda while enjoying luxurious accommodations that blend wellness with comfort. At AIDA Ayurveda, we provide a holistic approach to rejuvenation through personalized treatments, organic nutrition, and spiritual balance, all set amidst the natural beauty of Bentota. Whether you seek relaxation or revitalization, our Ayurvedic retreat offers the perfect sanctuary to heal, refresh, and rediscover your inner peace."
        keywords="Ayurvedic Resort, Ayurvedic Spa, AIDA, AIDA Gems, Bentota, Sri Lanka"
      />
    <HeroVideo videoUrl="https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758022877/web_djruis.mp4" />
    </>
  );
}
