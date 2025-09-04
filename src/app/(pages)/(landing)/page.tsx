import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Maps } from "@/components/Maps";
import { Service } from "@/components/Service";
import { TestimonialSlider } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Intro />
          <Service />
          <About />
          <CallToAction />
          <TestimonialSlider />
          <Appintment />
          <Maps />
        </article>
      </main>
    </>
  );
}
