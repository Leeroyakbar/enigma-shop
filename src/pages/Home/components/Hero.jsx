import { Component } from "react";

class Hero extends Component {
  render() {
    const containerStyle = {
      paddingTop: "10rem",
    };
    const belanjaStyle = {
      paddingLeft: "2.1rem",
      paddingRight: "2.1rem",
    };
    return (
      <div className="container" style={containerStyle}>
        <div className="row d-flex mt-5">
          <div className="col-md mb-4 text-lg-start row-gap-3">
            <h3>Selamat datang di Enigma Shop</h3>
            <h3>
              <b>Pusat Kebutuhan Harian Anda</b>
            </h3>
            <h4>
              Temukan Segala Kebutuhan Makanan dan <br />
              Kelontong di sini
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quia recusandae quisquam, cumque porro laborum magnam ab eius sunt
              reprehenderit.
            </p>
            <div className="gap-3">
              <button
                type="button"
                className="btn bg-info me-5 text-white rounded-0"
                style={belanjaStyle}
              >
                belanja sekarang
              </button>
              <button
                type="button"
                className="btn btn-outline-info px-5 rounded-0"
              >
                Kontak Kami
              </button>
            </div>
          </div>
          <div className="col-md mb-4">
            <img src="belanja.jpg" alt="belanja" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
