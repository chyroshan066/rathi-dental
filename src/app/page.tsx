import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { BackToTop } from "@/components/BackToTop";
import { CallToAction } from "@/components/CallToAction";
import { Doctor } from "@/components/Doctor";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Maps } from "@/components/Maps";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <Gallery />
          <Doctor />
          <CallToAction />
          <Appintment />
          <Maps />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
