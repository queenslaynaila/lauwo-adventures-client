import NavBar from "./NavBar"
import Footer from "./Footer"

const MainComponentLayout = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default MainComponentLayout