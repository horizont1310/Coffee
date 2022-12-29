import "./cards.scss";

const Cards = () => {
  const data = [
    {
      id: 1,
      src: "./img/our-best/2_packages-of-coffee.png",
      descr: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
    },
    {
      id: 2,
      src: "./img/our-best/presto.png",
      descr: "Presto Coffee Beans 1 kg",
      price: "15.99$",
    },
    {
      id: 3,
      src: "./img/our-best/aromistico.png",
      descr: "AROMISTICO Coffee 1 kg",
      price: "6.99$",
    },
  ];

  const content = data.map((item) => {
    const {id, src,descr,price} = item;
    return (
      <div key={id} className="cards__content">
        <img src={src} alt="item"  className="cards__img"/>
        <div className="cards__descr text-dark">{descr}</div>
        <div className="cards__price text-dark">{price}</div>
      </div>
    );
  });

  return (
    <div className="cards__wrapper">
      <div className="cards">{content}</div>
    </div>
  );
};

export default Cards;