import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import FeaturedProperties from "@/components/FeaturedProperties";
import connectDB from "@/config/database";

const HomePage = () => {
    connectDB()
    return ( <>
       <Hero />
       <InfoBoxes />
       <FeaturedProperties />
       <HomeProperties/>
    </> );
}
 
export default HomePage;