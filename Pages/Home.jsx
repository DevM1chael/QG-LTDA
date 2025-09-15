import React from "react";
import HeroSection from "../components/Home/HeroSection";
import SectorsSection from "../components/Home/SectorsSection";
import BankSection from "../components/Home/BankSection.js";
import ValueSection from "../components/Home/ValueSection.js";
import InvestorsSection from "../components/Home/InvestorsSection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <SectorsSection />
      <BankSection />
      <ValueSection />
      <InvestorsSection />
    </div>
  );
}