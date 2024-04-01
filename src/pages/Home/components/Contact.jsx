import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h3 id="kontak-kami">Kontak Kami</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
            <label htmlFor="comments" className="form-label">
                Comments
              </label>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="comments"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
