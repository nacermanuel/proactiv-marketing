import ClaimGiftForm from "./components/ClaimGiftForm";
import { Spinning } from "./components/Spinning/Spinning.jsx";
import CardsForm from "./components/CardsForm";
import ArtworkDelivery from "./components/ArtworkDelivery";
import SoftwareSubscription from "./components/SoftwareSubscription.jsx";
import ReferalMktText from "./components/ReferalMktText.jsx";
import ReferalMktDiagram from "./components/ReferalMktDiagram.jsx";
import Faqs from "./components/Faqs.jsx";
import CardsFree from "./components/CardsFree";
import RequiredInformation from "./components/RequiredInformation.jsx";
import CardSamples from "./components/CardSamples";
import CardsTestimonials from "./components/CardsTestimonials";
import SoftwareForYou from "./components/SoftwareForYou";
// import Celebration from "./components/Celebration";
import PageSpinning from "./funnel/spin/page";

export default function Home() {
  return (
    <div
      id="containerNEW"
      className="flex flex-col justify-center items-start h-auto pt-4 "
    >

<a className="p-6 font-bold" href="/funnel"> GO TO FUNNEL</a>

      <PageSpinning/>
      <span className="w-full bg-black h-1"></span>

      <ClaimGiftForm />
      <span className="w-full bg-black h-1"></span>

      <Spinning />
      <span className="w-full bg-black h-1"></span>

      <SoftwareSubscription />
      <span className="w-full bg-black h-1"></span>

      <ReferalMktText />
      <span className="w-full bg-black h-1"></span>

      <ReferalMktDiagram />
      <span className="w-full bg-black h-1"></span>

      <Faqs/>
      <span className="w-full bg-black h-1"></span>

      <CardSamples/>
      <span className="w-full bg-black h-1"></span> 

      <CardsTestimonials/>
      <span className="w-full bg-black h-1"></span> 

      <SoftwareForYou/>
      <span className="w-full bg-black h-1"></span> 

      <ArtworkDelivery />
      <span className="w-full bg-black h-1"></span>      

      <CardsFree/>
      <span className="w-full bg-black h-1"></span>

      <CardsForm />
      <span className="w-full bg-black h-1"></span>

      <RequiredInformation/>
      <span className="w-full bg-black h-1"></span>



        





    </div>
  );
}
