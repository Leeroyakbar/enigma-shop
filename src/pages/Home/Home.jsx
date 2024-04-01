import { Component } from "react"
import About from "@/pages/Home/components/About.jsx"
import Hero from "@/pages/Home/components/Hero.jsx"
import Testimonial from "@/pages/Home/components/Testimonial.jsx"
import Contact from "@/pages/Home/components/Contact.jsx"
import Footer from "@/pages/Home/components/Footer.jsx"
import Navbar from "@/pages/Home/components/Navbar.jsx"

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Testimonial />
        <Contact />
        <Footer />
      </>
    )
  }
}
