
import Header from "./Header"
import About from './About'
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
        <Blogs/>
      <Gallery/>

    </div>
  )
}

export default PageLayOut