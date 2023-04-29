import Header from './Header';
import About from './About';
import Blogs from './Blogs';
import Statement from './Statement';
import PopularAdventure from './PopularAdventure';
import InquiryForm from './InquiryForm';
import SocialsButtons from './SocialsButtons';
const PageLayOut = () => {
  return (
    <div>
      <Header />
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
