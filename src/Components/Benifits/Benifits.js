import { Grid } from "@mui/material";
import React from "react";
import "./Benifits.css";
import saveMoney from "../../Assets/save time.jpg";

const Benifits = () => {
  return (
    <div className="containers">
      <h1 style={{ margin: "0", textAlign: "center" }}>
        Benefits of Grocery and Medicine Delivery for Busy Schedules
      </h1>
      <p style={{ fontSize: "14px", fontWeight: "500" }}>
        Think there is just not enough time in the day? You are not alone! A lot
        of us struggle to slot even the basic deliveries because work, family,
        and other social obligations take up much of our time. Even so, fear not
        busy bee! The grocery and medicine delivery services online can save you
        time with ease. Let’s have a look at some of the benefits of grocery
        delivery as well as online pharmacies and see how these services will
        give you some valuable minutes (and sanity!) on your crammed calendar. a
      </p>
      <Grid container spacing={6}>
        <Grid item xs={12} alignSelf="stretch">
          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "30px",
              }}
            >
              <div style={{ width: "75%" }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Time Saved And Stress Reduced
                </h1>
                <p>
                  No more weekend marathon shopping at grocery stores from now
                  on. With grocery delivery, you can pick and choose from an
                  extensive range of products, place orders for them, and
                  schedule their delivery all the while sitting at home (or
                  stuck in that inevitable traffic!). This means no need to
                  brave through crowded aisles or stand in queues waiting to
                  check out and then carry heavy bags back home again. This has
                  been found by many as a way of reducing stress in that it
                  saves time which can be spent either on self-care or quality
                  moments with loved ones thereby enhancing one’s overall health
                  status. Indeed, having groceries and medications brought right
                  to your doorsteps is a modern luxury that helps balance out
                  life making it more enjoyable.
                </p>
              </div>
              <div>
                <img
                  style={{ height: "200px", borderRadius: "10px" }}
                  src={saveMoney}
                  alt="SaveImg"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Simplified Planning:</h1>
            <p>
              No more rushing around trying to get last-minute ingredients or
              realizing that you’re out of essential medicine. Some delivery
              apps enable you to create shopping lists and reorder items that
              are often purchased hence ensuring you always have a constant
              supply of your household staples. By doing this kind of planning,
              one will avoid those stressful mid-week trips to buy foodstuffs as
              well as probable medicine shortages.
            </p>
          </div>
        </Grid>
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Reduced Impulse Purchases:</h1>
            <p>
              It has been shown that impulsive buying adds considerably to final
              grocery bills. Before placing your order online, go over what is
              in your cart to prevent those last minute cravings which affect
              your budget adversely. You can exercise shopping discipline and
              keep your money in check by sticking to your digitized list. For
              example, in-store promotion-induced impulse buying can cause a 14%
              increase on a customer’s overall grocery bills according to
              research.
            </p>
          </div>
        </Grid>
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>
              Increased Variety and Convenience:
            </h1>
            <p>
              The range of stores partnering with this grocery delivery app is
              often much wider than the ones that your neighborhood Kirana shop
              may partner with. Hence, in case you are looking for something
              different from normal foods like organic, specialty, or
              international products that are not sold in your neighborhood
              store, this offers a chance to have access to them. This variety
              not only accommodates the preferences of your taste buds but also
              helps you observe dietary requirements as well as try out new
              cuisines.
            </p>
          </div>
        </Grid>{" "}
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>
              Contactless Delivery for Peace of Mind:
            </h1>
            <p>
              Regarding the ongoing emphasis on health and hygiene, many
              applications provide contactless deliveries hence offering more
              peace of mind. It promotes minimal physical touch and thus lowers
              germs infection risks. In today’s world, such services are not
              just convenient; they become needed by many who prioritize their
              health and safety.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Find All Types of Medicines:</h1>
            <p>
              Buying healthcare products has changed drastically due to
              technology advancements with options like online shopping apps
              available. If you need the latest era allopathic drugs or herbal
              medications or those specialized treatments that seldom find space
              on shelves such platforms link customers with a myriad of
              pharmacies. Therefore, a wide assortment of medicinal products
              catering to your quick medical attention is at your disposal just
              by clicking on a button.
            </p>
          </div>
        </Grid>
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>
              {" "}
              Save More with Every Purchase:
            </h1>
            <p>
              Today healthcare cost management is as important as care itself.
              These platforms know it quite well thus giving exclusive deals and
              discounts most times. It’s not about spending less but saving more
              on every purchase made hence adding value to them. You can take
              care of yourself without breaking the bank because fast shipping
              is convenient while buying there is competitive in terms of
              pricing.
            </p>
          </div>
        </Grid>{" "}
        <Grid item xs={6} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Community Support: </h1>
            <p>
              The power of community has never been stronger than in the digital
              age we live in today. Online delivery services are not mere
              conveniences; they act as a lifesaver for senior citizens and
              bedridden individuals due to ill-health situations. By choosing to
              buy through the internet all one needs to do is to simplify
              his/her life without neglecting others. These facilities ensure
              that each person has access to their basic requirements thus
              building a feeling of community and concern for each other.
            </p>
          </div>
        </Grid>
        <Grid item xs={4} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Time for Meal Planning: </h1>
            <p>
              Just think of the hours you can save by skipping the grocery
              store. Online delivery services give you this time that can be
              turned into meal planning. It is not only about arranging your
              weekly menu, but it is also about developing healthier eating
              practices, reducing wastage of food and embracing the pleasure of
              home cooked meals. It will be well spent for healthy living.
            </p>
          </div>
        </Grid>{" "}
        <Grid item xs={4} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Eco-Friendly Packaging: </h1>
            <p>
              Every little thing we do counts towards the kind of world we want
              to have. Such an alternative as opting for groceries and medicines
              delivered in eco-friendly packages is one of those choices. This
              method appears simple but has a great impact as it helps to reduce
              your carbon footprint; minimize waste and contribute to a
              healthier planet. Let us wrap our choices in green.
            </p>
          </div>
        </Grid>{" "}
        <Grid item xs={4} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px" }}>Emergency Preparedness:</h1>
            <p>
              Preparation is key when times are uncertain. Reliable delivery
              services mean that you are never caught off guard with supplies
              delivered directly to your doorstep constantly. Whether it’s a
              natural disaster or a personal emergency, having an online
              delivery plan can make all the difference in the world. This is
              more than just convenience; it’s continual care in difficult
              times.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} alignSelf="stretch">
          <div className="card">
            <h1 style={{ fontSize: "25px", textAlign: "center" }}>
              The Takeaway
            </h1>
            <p>
              You could gain back some valuable time from your busy schedule by
              using available grocery and medicine delivery services correctly.
              The home delivery advantages are multiple and these services
              provide convenient and efficient alternatives when it comes to
              handling groceries and drugs for instance through eliminating
              errands that cause stress or facilitating organized meal plans
              among other ways of managing users’ groceries and medicine needs
              in a well-organised manner. Hence they should embrace this
              transformation so that technology makes their life easier. Are you
              ready for the shopping experience revolution? Get the Local app
              right now for all deliveries related to groceries and medications
              at your doorstep. Download the LOCAL Mobile App today!
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Benifits;
