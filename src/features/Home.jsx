import "../styles/Home.css";
import Product from "./Product";
import redmi from "../assets/xiaomi-redmi-13-5g-0.jpg";
import sony1 from "../assets/81rqOytr3JL (1).jpg";
import sony2 from "../assets/119943_original_local_1200x1050_v3_converted.webp";
import laptop from "../assets/684052_741199_01_front_comping.jpg";
import samsung from "../assets/Samsung-Galaxy-S25-Ultra-Drawing-Assist-(front)-Camera-(back-grey)-SOURCE-Julian-Chokkattu.webp";
import boat from "../assets/Product_Highlights_MOB_51_5419f3b3-da9a-4dff-9c58-d20d815fea3d.webp";
import iphone from "../assets/iPhone_15_Pink_PDP_Image_Position-1__en-IN.webp";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        alt="Amazon Banner"
      />
      <div className="home__row">
        <Product
          id="1"
          title="Redmi Note 13 5G"
          price={13999}
          image={redmi}
          rating={4}
        />
        <Product
          id="2"
          title="boAt Rockerz 450 Bluetooth Headphones"
          price={1299}
          image={boat}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="HP Victus Gaming Laptop"
          price={59999}
          image={laptop}
          rating={4}
        />
        <Product
          id="4"
          title="Sony Bravia 55 inch 4K TV"
          price={49999}
          image={sony1}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="5"
          title="Sony Bravia Variant 2"
          price={47999}
          image={sony2}
          rating={4}
        />
        <Product
          id="6"
          title="Samsung Galaxy Flagship"
          price={79999}
          image={samsung}
          rating={5}
        />
        <Product
          id="7"
          title="iPhone 15"
          price={89999}
          image={iphone}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
