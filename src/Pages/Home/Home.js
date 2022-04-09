import { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";

import { useNavigate } from "react-router";

import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";

const home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const response = await axios("/api/categories");
    setCategories(response.data.categories);
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3 className="h3_plain">Fell the freshness</h3>
          <p className="p_plain">
            Organic is fantastic. Our focus is on green and clean.
          </p>

          <button
            className="button btn-success"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
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
