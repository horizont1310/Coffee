import "./goods.scss";
import { Component } from "react";

class Goods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          src: "./img/about/goods.jpg",
          descr: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          exposition:
            "FLAVOUR - A rich and strong dark roast with smoky, malty and chocolate notes. This coffee blend is 4/5 strength. Look forward to the mornings with our smooth, aromatic blend. A sophisticated, full-bodied coffee that’s perfect for drinking at any time of day. This blend has a long lasting aftertaste and will leave all you home baristas wanting more. Also available in Ground, Espresso Ground, and 1kg Beans.",
        },
        {
          id: 2,
          src: "./img/about/goods.jpg",
          descr: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: "6.99$",
          exposition:
            "ORIGIN - A blend from the Brazilian Coast of Santos, Kaapi Royale of India and the mountains of Central America. Using carefully balanced and crafted combinations of quality arabica and robusta beans, sourced from all around the globe, we have developed a range of distinct blends",
        },
        {
          id: 3,
          src: "./img/about/goods.jpg",
          descr: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: "6.99$",
          exposition:
            "Our gourmet, artisan coffee is hand roasted in small batches in Lake Garda, Northern Italy by the Pelliconi family. Our independent, family run business is passionate about creating high quality coffee, full of aroma. We strive to provide you with the true Italian coffee experience, bringing you a slice of Italy to your home. To ensure you receive fresh coffee, we roast, grind and ship in small batches",
        },
        {
          id: 4,
          src: "./img/about/goods.jpg",
          descr: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          exposition:
            " Grind in your coffee grinder and brew using any method; espresso, cafetiere / french press, moka pot, filter, percolator, chemex, pour over, drip, aeropress or bean-to-cup coffee machine. Our coffee comes in a resealable bag with a valve to ensure it stays fresh. Find the perfect coffee gift for friends & family who need high-quality, Italian coffee everyday.",
        },
        {
          id: 5,
          src: "./img/about/goods.jpg",
          descr: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: "6.99$",
          exposition:
            "Every purchase of Aromistico goes towards planting coffee trees in the Usambara Biodiversity Conservation in Tanzania, helping offset our CO2 emissions. Planting trees has proven to be one of the most efficient solutions to fight Climate Change.",
        },
        {
          id: 6,
          src: "./img/about/goods.jpg",
          descr: "Coffee Roasters 1 kg",
          country: "Brazil",
          price: "7.99$",
          exposition:
            "Our project supports the community of coffee growers, allowing them to grow more coffee trees and boost their local economy. For every 10kg of Aromistico Coffee sold, we plant 1 coffee tree",
        },
      ],
      term: "",
      visible: "",
    };
  }

  commitInputChanges = (e) => {
    this.setState({ term: e.target.value });
    document.querySelector(".goods__cards").style.display = "grid";
    document.querySelector(".goods__about_it").style.display = "none";
  };

  onKenya = (e) => {
    this.setState({ term: e.target.value });
    document.querySelector(".goods__cards").style.display = "flex";
    document.querySelector(".goods__about_it").style.display = "none";
  };

  onBrazil = (e) => {
    this.setState({ term: e.target.value });
    document.querySelector(".goods__cards").style.display = "grid";
    document.querySelector(".goods__about_it").style.display = "none";
  };

  onColumbia = (e) => {
    this.setState({ term: e.target.value });
    document.querySelector(".goods__cards").style.display = "flex";
    document.querySelector(".goods__about_it").style.display = "none";
  };

  onAbout = (e) => {
    document.querySelector(".goods__cards").style.display = "none";
    document.querySelector(".goods__about_it").style.display = "flex";
    this.setState({ visible: e.currentTarget.id });
    // console.log(this.state.visible);
  };

  render() {
    const { data, term } = this.state;

    return (
      <div className="goods">
        <div className="wrapper">
          <div className="goods__search">
            <div className="goods__looking">
              <div className="text-dark">Looking for</div>
              <input
                className="text-dark goods__input"
                type="text"
                placeholder="start typing here..."
                onChange={this.commitInputChanges}
              />
            </div>
            <div className="goods__filter">
              <div className="goods__filter-text text-dark">Or filter</div>
              <button
                className="goods__btns goods__btns-brazil text-dark"
                value={"Brazil"}
                onClick={this.onBrazil}
              >
                Brazil
              </button>
              <button
                className="goods__btns text-dark"
                value={"Kenya"}
                onClick={this.onKenya}
              >
                Kenya
              </button>
              <button
                className="goods__btns text-dark"
                value={"Columbia"}
                onClick={this.onColumbia}
              >
                Columbia
              </button>
            </div>
          </div>
          <div className="goods__cards">
            {data
              .filter(
                (item) =>
                  item.country.toLowerCase().includes(term.toLowerCase()) ||
                  item.price.toLowerCase().includes(term.toLowerCase()) ||
                  item.descr.toLowerCase().includes(term.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="text-dark goods__content goods__card"
                  onClick={this.onAbout}
                  id={item.id}
                >
                  <img className="cards__img" src={item.src} alt="" />
                  <h2 className="text-dark cards__descr">{item.descr}</h2>
                  <h2 className="text-dark goods__country">{item.country}</h2>
                  <h2 className="text-dark cards__price">{item.price}</h2>
                </div>
              ))}
          </div>
          <div className="goods__about_it">
            {this.state.visible.length !== 0
              ? data
                  .filter((item) => item.id === Number(this.state.visible))
                  .map((item) => (
                    <div key={item.id} className="wrapper">
                      <img
                        className="goods__about_img"
                        src="./img/about/about_it.jpg"
                        alt="about_it.jpg"
                      />
                      <div className="goods__about_it-text">
                        <div className="about__us_second-topic text-dark">
                          About it
                        </div>
                        <div className="lines-spans lines-spans_dark about__us_second-lines goods__about_it-lines">
                          <span className=""></span>
                          <img
                            className="dark-coffee"
                            src="img/coffee-dark.png"
                            alt="coffee-dark"
                          />
                          <span></span>
                        </div>
                        <h2 className="text-dark goods__about_it-descr">
                          <b>Country</b>: {item.country}
                        </h2>
                        <h2 className="text-dark goods__about_it-descr">
                          <p>
                            <b>Description</b>: {item.exposition}
                          </p>
                        </h2>
                        <h2 className="text-dark goods__about_it-descr">
                          <b>Price</b>:
                          <div className="goods__about_it-price">
                            {item.price}
                          </div>
                        </h2>
                      </div>
                    </div>
                  ))
              : console.log('correct')}
          </div>
        </div>
      </div>
    );
  }
}

export default Goods;
