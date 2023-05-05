import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import Statement from './Statement';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import SocialsButtons from './SocialsButtons';
import FixedBanner from './FixedBanner';
const PageLayOut = () => {
  return (
    <div>
      <Header />
      <FixedBanner />
      <About />
      <Statement />
      <PopularAdventure />
      <InquiryForm />
      <Blogs />
      <SocialsButtons />
    </div>
  );
};

export default PageLayOut;
