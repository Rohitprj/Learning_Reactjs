import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>Contact@WeAreGood.dev</li>
          <li>+1 123-456-7890</li>
          <li>77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone no</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email id" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your text"
            required
          ></textarea>
          <button
            type="submit"
            className="btn dark-btn"
            style={{ backgroundColor: "#000080", color: "#fff" }}
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
