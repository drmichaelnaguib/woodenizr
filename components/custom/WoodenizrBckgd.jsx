import Image from "next/image";
import woodenizr from "@/public/images/slider/Hero-swiper-first-slide.svg";

export default function WoodenizrBckgd() {
  return (
    <div>
      <Image alt="Woodenizr" src={woodenizr} width="1920" height="910" />
    </div>
  );
}
