import { Component } from "react"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand text-white" href="#home">
            <i>
              <b>Enigma</b> shop
            </i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 column-gap-4">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#testimoni">
                  Testimoni
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#kontak-kami">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
