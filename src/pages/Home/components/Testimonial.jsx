import { Component } from "react"

class Testimonial extends Component {
  render() {
    const styleImg = {
      width: "100%",
    }
    return (
      <div id="testimoni" className="container text-center mt-5">
        <h3  className="mb-5">
          Testimoni
        </h3>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow h-100">
              <img src="people2.png" alt="gambar belanja" className="card-img-top bg-info rounded-4" style={styleImg} />
              <div className="card-body">
                <p className="card-text text-start">Berbelanja di Enigma Shop selalu menjadi pilihan utama saya. Produknya lengkap dan kualitasnya top!</p>
                <p className="card-text text-start">
                  <small className="text-body-secondary">-Bento</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow h-100">
              <img src="people2.png" alt="gambar belanja" className="card-img-top bg-info rounded-4" style={styleImg} />
              <div className="card-body">
                <p className="card-text text-start">Berbelanja di Enigma Shop selalu menjadi pilihan utama saya. Produknya lengkap dan kualitasnya top!</p>
                <p className="card-text text-start">
                  <small className="text-body-secondary">-Bento</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow h-100">
              <img src="people2.png" alt="gambar belanja" className="card-img-top bg-info rounded-4" style={styleImg} />
              <div className="card-body">
                <p className="card-text text-start">Berbelanja di Enigma Shop selalu menjadi pilihan utama saya. Produknya lengkap dan kualitasnya top!</p>
                <p className="card-text text-start">
                  <small className="text-body-secondary">-Bento</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 shadow h-100">
              <img src="people2.png" alt="gambar belanja" className="card-img-top bg-info rounded-4" style={styleImg} />
              <div className="card-body">
                <p className="card-text text-start">Berbelanja di Enigma Shop selalu menjadi pilihan utama saya. Produknya lengkap dan kualitasnya top!</p>
                <p className="card-text text-start">
                  <small className="text-body-secondary">-Bento</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial
