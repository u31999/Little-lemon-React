import TopPromo from "../Component/TopPromo"
import Footer from "../Component/Footer"
import '../styles/homePage.css'
import Header from "../Component/Header"
import MenuSpecials from "../Component/MenuSpecials"
import Testimonials from "../Component/Testimonials"

const HomePage = () => {
  return (
    <div className="home_page">
      <Header />
      <TopPromo />
      <MenuSpecials />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage
