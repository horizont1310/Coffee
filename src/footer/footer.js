import "./footer.scss";

const Footer = () => {
  const onCoffeeHouse = () => {
    document.querySelector(".promo").classList.remove("pleasure");
    document.querySelector(".promo").classList.remove("second-screen");
    document.querySelector(".promo").classList.remove("pleasure__text");
    document.querySelector(".about__us_second").style.display = "none";
    document.querySelector(".about_first-screen").style.display = "block";
    document.querySelector(".our_best").classList.remove("second-screen_best");
    document.querySelector(".pleasure__text").style.display = "none";
    document.querySelector(".promo__our_coffee").style.display = "none";
  };

  const onOurCoffee = () => {
    document.querySelector(".promo").classList.remove("pleasure");
    document.querySelector(".promo").classList.add("second-screen");
    document.querySelector(".promo").classList.remove("pleasure__text");
    document.querySelector(".about__us_second").style.display = "block";
    document.querySelector(".about_first-screen").style.display = "none";
    document.querySelector(".our_best").classList.add("second-screen_best");
    document.querySelector(".pleasure__text").style.display = "none";
    document.querySelector(".promo__our_coffee").style.display = "block";
    document.querySelector(".about__us_second-img").style.display = "block";
    document.querySelector(".about__us_second-imgTwo").style.display = "none";
  };

  const forYour = () => {
    document.querySelector(".promo").classList.add("second-screen");
    document.querySelector(".promo").classList.add("pleasure");
    document.querySelector(".about__us_second").style.display = "block";
    document.querySelector(".about_first-screen").style.display = "none";
    document.querySelector(".promo__our_coffee").style.display = "none";
    document.querySelector(".pleasure__text").style.display = "block";
    document.querySelector(".about__us_second-topic").textContent =
      "About our goods";
    document.querySelector(".about__us_second-img").style.src =
      "img/about/cup_of_coffee.jpg";
    document.querySelector(".about__us_second-img").style.display = "none";
    document.querySelector(".about__us_second-imgTwo").style.display = "block";
    document.querySelector(".our_best").classList.add("second-screen_best");
  };

  return (
    <div className="footer">
      <div className="footer__link common_link">
        <img src="img/coffee-dark-border.png" alt="coffee-dark-border" />
        <button className="footer__link_a text-dark" onClick={onCoffeeHouse}>
          Coffee house
        </button>
        <button className="footer__link_a text-dark" onClick={onOurCoffee}>
          Our coffee
        </button>
        <button className="footer__link_a text-dark" onClick={forYour}>
          For your pleasure
        </button>
      </div>

      <div className="lines-spans lines-spans_dark footer__lines">
        <span className=""></span>
        <img
          className="dark-coffee"
          src="img/coffee-dark.png"
          alt="coffee-dark"
        />
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
