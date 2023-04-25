import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import Statement from './Statement';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import Gallery from './Gallery';
import SocialsButtons from './SocialsButtons';
const PageLayOut = () => {
  return (
    <div>
      <Header />
      <About />
      <Statement />
      <PopularAdventure />
      <InquiryForm />
      <Gallery />
      <Blogs />
      <SocialsButtons />
    </div>
  );
};

export default PageLayOut;
