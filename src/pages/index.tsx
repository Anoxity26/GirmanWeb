import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { HeroComponent } from "@/components/Hero";
import { CompanyOverview } from "@/components/CompanyOverview";
import { Services } from "@/components/Services";
import { Leadership } from "@/components/LeadershipComponent";
import  ConsultationComponent  from "@/components/ConsultationPage";
import { LayoutSample } from "@/components/LayoutSample";

export default function Home() {
  return (
    <div>
      <TopBar />
      <HeroComponent />
      <CompanyOverview />
      <Services />
      <Leadership />
      <ConsultationComponent />
      <Footer />

      {/* <LayoutSample /> */}
    </div>
  );
}
