import "./promo.scss";

const Promo = () => {
  const onOurCoffee = () => {
    document.querySelector(".promo").classList.remove('pleasure');
    document.querySelector(".promo").classList.add("second-screen");
    document.querySelector(".promo").classList.remove("pleasure__text");
    document.querySelector(".about__us_second").style.display = 'block';
    document.querySelector(".about_first-screen").style.display = 'none';
    document.querySelector(".our_best").classList.add("second-screen_best");
    document.querySelector('.pleasure__text').style.display = 'none';
    document.querySelector(".promo__our_coffee").style.display = 'block';
    document.querySelector('.about__us_second-img').style.display = 'block';
    document.querySelector('.about__us_second-imgTwo').style.display = 'none';
  };

  const onCoffeeHouse = () => {
    document.querySelector(".promo").classList.remove('pleasure');
    document.querySelector(".promo").classList.remove("second-screen");
    document.querySelector(".promo").classList.remove("pleasure__text");
    document.querySelector(".about__us_second").style.display = 'none';
    document.querySelector(".about_first-screen").style.display = 'block';
    document.querySelector(".our_best").classList.remove("second-screen_best");
    document.querySelector('.pleasure__text').style.display = 'none';
    document.querySelector('.promo__our_coffee').style.display = 'none';
  };

  const forYour = () => {
    document.querySelector(".promo").classList.add("second-screen");
    document.querySelector(".promo").classList.add('pleasure');
    document.querySelector(".about__us_second").style.display = 'block';
    document.querySelector(".about_first-screen").style.display = 'none';
    document.querySelector(".promo__our_coffee").style.display = 'none';
    document.querySelector('.pleasure__text').style.display = 'block';
    document.querySelector('.about__us_second-topic').textContent = 'About our goods';
    document.querySelector('.about__us_second-img').style.src="img/about/cup_of_coffee.jpg";
    document.querySelector('.about__us_second-img').style.display = 'none';
    document.querySelector('.about__us_second-imgTwo').style.display = 'block';
    document.querySelector(".our_best").classList.add("second-screen_best");
  }

  return (
    <div className="promo">
      <div className="wrapper">
        <div className="promo__link common_link">
          <img src="img/coffee-white-border.png" alt="white_coffee" />
          <button className="promo__link_a text-white" onClick={onCoffeeHouse}>Coffee house</button>
          <button className="promo__link_a text-white" onClick={onOurCoffee}>
            Our coffee
          </button>
          <button className="promo__link_a text-white" onClick={forYour}>
            For your pleasure
          </button>
        </div>

        <div className="wrapper_first-screen">
          <div className="promo__interview text-white">
            <h1 className="promo__interview text-h1">
              Everything You Love About Coffee
            </h1>
          </div>

          <div className="lines-spans lines-spans_white">
            <span></span>
            <img className="promo__coffee" src="img/white-coffee.png" alt="" />
            <span></span>
          </div>

          <div className="promo__try-beans">
            <p className="text-white">
              We makes every day full of energy and taste
            </p>
            <p className="text-white">Want to try our beans?</p>
          </div>

          <div className="promo__btn">
            <button className="promo__btn-more" onClick={onOurCoffee}>More</button>
          </div>
        </div>
      </div>

      <div className="promo__our_coffee text-h1">
        <h1>Our Coffee</h1>
      </div>
      <div>
        <h1 className="pleasure__text text-h1 text-white">For your pleasure</h1>
      </div>
    </div>
  );
};

export default Promo;
