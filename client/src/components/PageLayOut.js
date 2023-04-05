
import Header from "./Header"
import About from './About'
import Blogs from './Blogs'
import Statement from "./Statement"
import PopularAdventure from "./PopularAdventure"
import InquiryForm from "./InquiryForm"
import Gallery from "./gallery"
const PageLayOut = () => {
  return (
    <div>
      <Header />
      <About/>
      <Statement/>
      <PopularAdventure/>
      <InquiryForm/>
      <Gallery/>
      <Blogs/>

    </div>
  )
}

export default PageLayOut