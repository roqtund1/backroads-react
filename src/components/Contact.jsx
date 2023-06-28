export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-center contact-center">
        <article className="contact-title">
          <h3>want latest tour info and updates?</h3>
          <p>sign up for newsletter and stay up to date</p>
        </article>

        <form action="" className="contact-form">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="your email"
          />
          <button type="submit" className="btn-submit">
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
