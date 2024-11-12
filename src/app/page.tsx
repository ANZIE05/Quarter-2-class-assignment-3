import NavbarPage from "./components/navbar";
import HeroPage from "./components/hero";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import SponsorPage from "./components/sponsors";
import FooterPage from "./components/footer";

export default function page() {
  return (
    <div>
      <NavbarPage/>
      <HeroPage/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <SponsorPage/>
      <FooterPage/>
      
    </div>
  )
}
