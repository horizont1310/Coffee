import "./about.scss";

import Goods from "./goods/goods";

const About = () => {
  return (
    <div className="about_us">
      <div className="about_first-screen">
        <h2 className="topic">About Us</h2>

        <div className="lines-spans lines-spans_dark">
          <span className=""></span>
          <img
            className="dark-coffee"
            src="img/coffee-dark.png"
            alt="coffee-dark"
          />
          <span></span>
        </div>

        <div className="about_us-text">
          <div className="about__wrapper">
            <p className="text-dark about_text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p className="text-dark about_text">
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </div>
      <div className="about__us_second">
        <div className="wrapper">
          <img
            className="about__us_second-img"
            src="img/about/girl_with_coffee.jpg"
            alt="girl_with_coffee"
          />
          <img
            className="about__us_second-img about__us_second-imgTwo"
            src="img/about/cup_of_coffee.jpg"
            alt="girl_with_coffee"
          />

          <div className="about__us_second-right">
            <div className="about__us_second-topic text-dark">
              About our beans
            </div>
            <div className="about__us_second-topicTwo text-dark">
            About our goods
            </div>
            <div className="lines-spans lines-spans_dark about__us_second-lines">
              <span className=""></span>
              <img
                className="dark-coffee"
                src="img/coffee-dark.png"
                alt="coffee-dark"
              />
              <span></span>
            </div>
            <div className="text-dark ">
              <p className="about__us_second-text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. <br /> <br /> Afraid at highly months do
                things on at. Situation recommend objection do intention <br />{" "}
                so questions. <br /> As greatly removed calling pleased improve
                an. Last ask him cold feel <br />
                met spot shy want. Children me laughing we <br /> prospect
                answered followed. At it went <br /> is song that held help
                face.
              </p>
            </div>
          </div>
        </div>
        <span className="about__us_second-longLine"></span>
        <Goods />
      </div>
    </div>
  );
};

export default About;
