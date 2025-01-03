import { Component } from "react";
import "./contactUs.css";
import emailjs from "emailjs-com";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_wbh38ka",
        "template_myja6tr",
        {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        },
        "hfMfsLSUo5I925w-I"
      )
      .then((result) => {
        alert("Message sent successfully!");
        this.setState({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message, Please try again.");
        console.error(error);
      });
  }
  render() {
    return (
      <div className="contactus">
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <div className="formContent">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formContent">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formContent">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="sendMessage">
            <button className="btn-n " type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactUs;
