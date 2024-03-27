import { Component } from "react"
import About from "@/pages/Home/About.jsx"
import Hero from "@/pages/Home/Hero.jsx"
import Testimonial from "@/pages/Home/Testimonial.jsx"
import Contact from "@/pages/Home/Contact.jsx"
import Footer from "@/pages/Home/Footer.jsx"
import Navbar from "@/pages/Home/Navbar.jsx"

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
