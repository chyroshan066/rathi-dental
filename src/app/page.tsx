import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { BackToTop } from "@/components/BackToTop";
import { CallToAction } from "@/components/CallToAction";
import { Doctor } from "@/components/Doctor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
          <Doctor />
          <CallToAction />
          <Appintment />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
