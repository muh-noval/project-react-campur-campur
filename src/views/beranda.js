import * as Icon from "react-feather";

function Beranda() {
  const colorSecondary = "#00067c";
  return (
    <>
      <section className="hero">
        <main className="content">
          <h1>
            Adoption <Icon.GitHub size={55} color={colorSecondary} />
          </h1>
          <h2>We Need Help. So Do They.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            inventore.
          </p>
          <div className="action">
            <a href="#" className="explore-now button">
              Explore Now
            </a>
            <a href="#" className="view-intro button-outline">
              View Intro <Icon.PlayCircle color={colorSecondary} />
            </a>
          </div>
        </main>
      </section>
      <section className="products">
        <div className="product-head">
          <div className="product-head-taqline">
            <p>You already know?</p>
            <h3>Useful Pet Knowledge</h3>
          </div>
          <a href="#" className="view-more button-outline">
            View more <Icon.ChevronRight color={colorSecondary} />
          </a>
        </div>

        <div className="row">
          <div className="product-card">
            <div className="product-image">
              <img src="/assets/product/dog-1.jpg" alt="product-1" />
            </div>
            <div className="product-content">
              <span>lorem</span>
              <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                ratione quidem cumque, distinctio explicabo odio.
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/assets/product/dog-2.jpg" alt="product-2" />
            </div>
            <div className="product-content">
              <span>lorem</span>
              <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                ratione quidem cumque, distinctio explicabo odio.
              </p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/assets/product/dog-3.jpg" alt="product-3" />
            </div>
            <div className="product-content">
              <span>lorem</span>
              <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                ratione quidem cumque, distinctio explicabo odio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <main>
          <div className="register">
            <h2>Register Now So You Don't Miss Our Programs</h2>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <button type="submit" className="button-subscribe">
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="navigation">
            <div className="links">
              <a href="#home">Home</a>
              <a href="#category">Category</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="socials">
              <a href="#">
                <Icon.Instagram />
              </a>
              <a href="#">
                <Icon.Twitter />
              </a>
              <a href="#">
                <Icon.Facebook />
              </a>
              <a href="#">
                <Icon.Youtube />
              </a>
            </div>
          </div>
          <div className="footer">
            <div className="footer-credit">
              <p>&copy; 2024 Monito All Rights Reserved</p>
            </div>
            <div className="footer-brand">
              <img src="#" alt="Brand" />
            </div>
            <div className="footer-service">
              <a href="#terms-of-service">Terms of Service</a>
              <a href="#privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
}

export default Beranda;
