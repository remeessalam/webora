import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import ceoImg from "../assets/ceo.jpg";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Building the Future with Cutting-Edge Technology.
              </h3>
              <p className="description">
                At Webora AI, we are more than a tech company—we are a strategic
                partner in your digital transformation journey. With expertise
                in AI, blockchain, RPA, game development, and more, we craft
                solutions that drive innovation and efficiency. From startups to
                enterprises, we empower businesses to stay ahead in the digital
                era with custom digital solutions tailored to their unique
                needs. Let’s create a smarter, more connected world—together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="about-us" className="relative py-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Why AI Matters</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <p className="description">
                At Webora AI, we believe that Artificial Intelligence is more
                than a technology—it’s a transformative force reshaping
                industries. By integrating AI into business processes, we help
                organizations streamline operations, uncover insights, and
                deliver hyper-personalized experiences. From predictive
                analytics to intelligent automation, we empower companies to
                harness AI for sustainable growth and competitive advantage.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="wrapper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[15%_auto] items-center gap-7 pt-[5rem] pb-[3rem]">
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading">Message from Our CEO</h3>
            <p className="description">
              At Webora AI, we don’t just build technology solutions—we engineer
              progress. Our mission is to empower businesses with innovative,
              future-ready digital products that drive growth, efficiency, and
              lasting impact. Let’s work together to transform challenges into
              opportunities and create a smarter, more connected world.
            </p>
          </div>
        </div>
      </section>

      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
