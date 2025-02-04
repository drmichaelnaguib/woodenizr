import Features2 from "@/components/common/Features2";
import Testimonials from "@/components/common/Testimonials";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
// import Brands from "@/components/homes/home-1/Brands";
import Hero from "@/components/homes/home-1/Hero";
import Hero5 from "@/components/homes/home-5/Hero";
// import Hero6 from "@/components/homes/home-6/Hero";
// import Categories from "@/components/homes/home-2/Categories";

import ShopGram from "@/components/othersPages/about/ShopGram";

import Products from "@/components/shopDetails/Products";
// import Hero from "@/components/homes/home-4/Hero";

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
      {/* <Brands /> */}
      {/* <Categories /> */}
      <Products />
      <ShopGram />
      {/* <Hero6 /> */}
      <Products />
      <Hero5 />
      <Testimonials />
      <Features2 />
      <Footer2 />
    </>
  );
}
