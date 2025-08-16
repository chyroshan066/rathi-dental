import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Doctor } from "@/components/Doctor";
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
        </article>
      </main>
    </>
  );
}
