import Features from "@/components/common/Features";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import Hero from "@/components/homes/home-1/Hero";

export const metadata = {
  title: "Woodenizr || Wood and more..",
  description: "Woodenizr-Wood and more delivered to your door",
};
export default function Home() {
  return (
    <>
      {/* <Topbar1 />
      <Header1 />
      
      <Marquee />
      <Categories />
      <Products />
      <Lookbook />
      <Testimonials />
      <Brands />
      <ShopGram />
      <Features />
      <Footer1 /> */}
      <Topbar2 />
      <Header2 />
      <Hero />
      <Features />
      <Footer2 />
    </>
  );
}
