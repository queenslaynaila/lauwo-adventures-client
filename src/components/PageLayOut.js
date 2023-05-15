import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import SocialsButtons from './SocialsButtons';
import FixedBanner from './FixedBanner';
 
import Why from './Why';
import TourGroups from './TourGroups';
const PageLayOut = () => {
  return (
    <div>
    

      <Header />
      <FixedBanner />
      <About />

      <Why />
      <PopularAdventure />
      <TourGroups />
      <InquiryForm />
      <Blogs />
      <SocialsButtons />
    </div>
  );
};

export default PageLayOut;
