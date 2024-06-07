import React from "react";
import headimage from "../../Assets/blogsImage.jpg";
import "./Home.css";
import { Button } from "@mui/material";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <div>
        <img className="home-main-image" src={headimage} alt="image1280×1920" />
        <div className="home-cards-section">
          <div className="home-cards">
            <h1>Tips to Save Money on Groceries and Medicines Online</h1>
            <p>
              You are not alone in suffering from inflation at the Billing
              Counter. In India, the All India Consumer Price Index (CPI) and
              Consumer Food Price Index (CFPI) for February 2024 show that the
              year-on-year inflation rates based on CPI (General) and CFPI are
              5.09% and 8.66%,{" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "blue",
                  cursor: "pointer",
                }}
                to="/save-money"
              >
                Read More...
              </Link>
            </p>
          </div>
          <div className="home-cards">
            <h1>
              Benefits of Grocery and Medicine Delivery for Busy Schedules
            </h1>
            <p>
              Think there is just not enough time in the day? You are not alone!
              A lot of us struggle to slot even the basic deliveries because
              work, family, and other social obligations take up much of our
              time. Even so, fear not busy bee! The grocery and medicine
              delivery services online can save you time with ease.
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "blue",
                  cursor: "pointer",
                }}
                to="/benifits"
              >
                Read More...
              </Link>
            </p>
          </div>
          <div className="home-cards">
            <h1>
              How Our App for Delivering Groceries and Medicines Can Change Your
              Business{" "}
            </h1>
            <p>
              India’s way of shopping is changing digitally. Online grocery
              sales and medicine delivery are growing rapidly, with the Indian
              online grocery market expected to reach US$ 9.0 billion in 2023;
              according to IMARC Group, it should jump up to US$ 80.6 billion by
              2032 at a CAGR of 26.7% from 2024-2032.{"            "}
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "blue",
                  cursor: "pointer",
                }}
                to="/delivering"
              >
                Read More...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
