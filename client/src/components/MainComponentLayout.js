import NavBar from "./NavBar"

const MainComponentLayout = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default MainComponentLayout