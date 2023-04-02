import Header from "./Header"
import About from './About'
import PopularAdventure from "./PopularAdventure"
import InquiryForm from "./InquiryForm"
const PageLayOut = () => {
  return (
    <div>
      <Header />
      <About/>
      <PopularAdventure/>
      <InquiryForm/>
    </div>
  )
}

export default PageLayOut