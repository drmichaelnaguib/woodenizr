import Features2 from "@/components/common/Features2";
import Testimonials from "@/components/common/Testimonials";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import Hero from "@/components/homes/home-1/Hero";
import Hero5 from "@/components/homes/home-5/Hero";

import ShopGram from "@/components/othersPages/about/ShopGram";

import Products from "@/components/shopDetails/Products";

export const metadata = {
  title: "Woodenizr || Wood and more..",
  description: "Woodenizr-Wood and more delivered to your door",
};
export default function Home() {
  return (
    <>
      <Topbar2 />
      <Header2 />
      <Hero />
      <Products />
      <ShopGram />
      <Products />
      <Hero5 />
      <Testimonials />
      <Features2 />
      <Footer2 />
    </>
  );
}
