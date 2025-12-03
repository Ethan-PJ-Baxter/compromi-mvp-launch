import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Founders from "@/components/Founders";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Compromi - Bet on Your Fitness Goals</title>
        <meta name="description" content="Turn your fitness goals into unbreakable commitments. Set your workout frequency, place your wager, and let AI verify your progress. Compromi - bet on yourself." />
        <meta name="keywords" content="fitness app, workout tracker, fitness accountability, fitness wager, gym motivation" />
        <link rel="canonical" href="https://compromi.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Compromi - Bet on Your Fitness Goals" />
        <meta property="og:description" content="Turn your fitness goals into unbreakable commitments. Set your workout frequency, place your wager, and let AI verify your progress." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compromi - Bet on Your Fitness Goals" />
        <meta name="twitter:description" content="Turn your fitness goals into unbreakable commitments. Set your workout frequency, place your wager, and let AI verify your progress." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <Founders />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
