import Header from "./Header"
import About from './About'
import PopularAdventure from "./PopularAdventure"
import InquiryForm from "./InquiryForm"
import Gallery from "./gallery"
const PageLayOut = () => {
  return (
    <div>
      <Header />
      <About/>
      <PopularAdventure/>
      <InquiryForm/>
      <Gallery/>
    </div>
  )
}

export default PageLayOut