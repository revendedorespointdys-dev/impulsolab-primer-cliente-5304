import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Problems } from "../components/landing/Problems";
import { Transformation } from "../components/landing/Transformation";
import { Includes } from "../components/landing/Includes";
import { Roadmap } from "../components/landing/Roadmap";
import { Audience } from "../components/landing/Audience";
import { Value } from "../components/landing/Value";
import { Offer } from "../components/landing/Offer";
import { FAQ } from "../components/landing/FAQ";
import { FinalCTA } from "../components/landing/FinalCTA";
import { Footer } from "../components/landing/Footer";

function Index() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Problems />
        <Transformation />
        <Includes />
        <Roadmap />
        <Audience />
        <Value />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default Index;
