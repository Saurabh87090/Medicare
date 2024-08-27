
import Footer from "@/components/Footer";
import  Header  from "@/components/Header";
import Review from "@/components/Review"
import  Main from "@/components/Main";
import Service from "@/components/Service";
import Doctor from "@/components/Doctor";
import About from "@/components/About";
import Booking from "@/components/Booking";

export default function Home() {
  return(
    <div>
      <Header/>
      <Main/>
      <Service/>
      <About/>
      <Doctor/>
      <Review/>
      <Booking/>
      <Footer/>
    </div>
    );
}