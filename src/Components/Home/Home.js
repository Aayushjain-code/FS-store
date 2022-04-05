import { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

import FeaturedCard from "./FeaturedCard";

const home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const response = await axios("/api/categories");
    setCategories(response.data.categories);
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>Fell the freshness</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. alias eos
            facilis, ipsa est asperiores repellendus!
          </p>
          <button className="button btn-success">Read more</button>
        </div>
      </section>
      <section className="category" id="category">
        <div className="category">
          <h1 className="heading"> Featured Categories </h1>

          <div className="box-container">
            {categories.map((item) => {
              return (
                <>
                  <FeaturedCard item={item} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
