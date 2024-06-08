import { Grid } from "@mui/material";
import React from "react";
import "./SaveMoney.css";

const SaveMoney = () => {
  return (
    <>
      <div className="containers">
        <h1 style={{ margin: "0", textAlign: "center" }}>
          Tips to Save Money on Groceries and Medicines Online
        </h1>
        <p style={{ fontSize: "14px", fontWeight: "500" }}>
          You are not alone in suffering from inflation at the Billing Counter.
          In India, the All India Consumer Price Index (CPI) and Consumer Food
          Price Index (CFPI) for February 2024 show that the year-on-year
          inflation rates based on CPI (General) and CFPI are 5.09% and 8.66%,
          respectively. This means that grocery bills have risen to a large
          extent since last year. But fear not thrifty shoppers! These are some
          smart strategies and insider tips specially designed for the Indian
          market which will help you save a lot of money on groceries and
          medicines.
        </p>
        <div>
          <h1 className="cards-header">
            Get the better of the Kirana and Supermarket
          </h1>
          <Grid container spacing={6}>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Plan Your Meals with a Shopping List:</h1>
                <p>
                  A budget buster is impulse buying. Set aside some time each
                  week to plan your meals and build a shopping list around those
                  plans. Sticking to your list helps you avoid extra items that
                  may quickly increase your invoice. Expand your culinary
                  horizons by using seasonal ingredients, which are usually
                  cheaper and best when they are fresh.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Embrace Weekly Flyers and Bazaar Discounts:</h1>
                <p>
                  Weekly flyers from supermarkets, as well as local grocery
                  stores (kiranas), offer a wide range of special deals!
                  Remember to check them for discounts on things that you love
                  most. Moreover, consider going to local bazaars for cheap
                  seasonal produce. Watch out for clearance sales where you can
                  buy non-perishable goods at once.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Own the Power of Private Labels:</h1>
                <p>
                  Fancy packaging should not distract you! Many times
                  private-label brands offered by supermarkets contain the same
                  quality found in national brands but at much lower costs.
                  Think about getting private-label alternatives for basic items
                  such as pulses, rice, and cooking oils among others . Also;
                  look out for eco-friendly options or organic choices on
                  private labels since they are both environmentally healthy.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <h1 className="cards-header">
            Saving on Medicines is no more stressful
          </h1>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <div className="card">
                <h1>Generic Drugs: Partner in Affordability </h1>
                <p>
                  Just like with groceries, generic medications offer the same
                  active ingredients as brand-name drugs at a significantly
                  lower price. Ask your doctor if there are any generic brands
                  available for the medicine he or she prescribed to you. You
                  can also check if your app has a section for generic drug
                  search which can facilitate this process.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <h1 className="cards-header">Seasonal Shopping Guide</h1>
          <Grid container spacing={6}>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Seasonality and Fruit Harvest:</h1>
                <p>
                  Be aware of the fruit crop seasons. This way, you can buy
                  in-season fruits at lower prices and better quality. Know a
                  calendar that shows which crops are available for harvesting
                  in your specific region so as to be informed more about what
                  you are buying. For example, it is good to buy mangoes during
                  the summer while oranges are winter fruits.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Planning Ahead:</h1>
                <p>
                  Procure plentiful quantities of seasonal produce so that you
                  will have enough to last through the year if possible.
                  Preserving methods, like freezing, drying or canning can be
                  self-taught. Through this method, one can save money and also
                  have access to favourite fruit throughout the year even when
                  they’re not in season.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Know Your Local Farmer:</h1>
                <p>
                  FKnowing local farmers might give you an idea on when it’s
                  best to purchase produce. Local farmers markets also provide
                  farm fresh foodstuff which is sold at a lower price.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Start from Scratch:</h1>
                <p>
                  Begin a small household garden if there is room. Having such
                  herbs, vegetables or even fruits around saves money while
                  keeping your diet free from chemicals.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <h1 className="cards-header">Budgeting Basics</h1>
          <Grid container spacing={6}>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Manage Your Expenses:</h1>
                <p>
                  Take note of all expenses on groceries and medication either
                  using a budgeting app or simpler sheets. You might realize
                  that some areas need cutting off by doing this. In addition,
                  check on a regular basis for your spending habits, awareness
                  and ability to adjust them accordingly depending on prevailing
                  circumstances. Consider dividing up your expenses based on
                  where you could be splurging such as luxury items or
                  unnecessary snacks.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Focus on Realistic Targets:</h1>
                <p>
                  After assessing how much money you spend weekly or monthly,
                  set achievable budgetary objectives including unexpected
                  expenditure allowance too. Goals should conform to SMART
                  requirements meaning; Specific, Measurable, Achievable,
                  Relevant, and Time-bound goals If you find that after a month
                  of steady overspending in one area it may mean that your
                  shopping habits or budget need reevaluating.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Study Your Costs:</h1>
                <p>
                  Categorize your expenses into ‘needs’ and ‘wants’. For
                  example, basic groceries and essential medicines fall under
                  the category of needs. Wants are those things you can do
                  without or hold off on until finances improve. Prioritizing on
                  needs instead of wants can lead to significant savings.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Use Cashback and Rewards:</h1>
                <p>
                  Most budgeting applications and credit cards have incentives
                  in the form of cashback. Using these rewards to your advantage
                  means choosing the best cards or apps that offer high returns
                  on your normal expenditure. Find reward programs for buying
                  groceries and medicines that are consumables.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Analyze and Adjust:</h1>
                <p>
                  Go through your spending at the end of month vis-à-vis your
                  budget. If you overspent, analyze the reasons behind it and
                  make necessary changes in the following month. This may
                  involve substituting costly products with cheaper ones or
                  reducing nonessential “wants”.
                </p>
              </div>
            </Grid>{" "}
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Involve the Family:</h1>
                <p>
                  Make budgeting more effective by involving the whole family.
                  Teach your kids money matters and let them participate in
                  shopping. This ensures not only staying within a given
                  financial plan but also helps develop financial discipline
                  among children.
                </p>
              </div>
            </Grid>{" "}
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Save First:</h1>
                <p>
                  For good budgeting practice, one should ‘pay himself first’.
                  In other words, an individual is expected to save some
                  fraction of his earnings prior to catering to his monthly
                  financial requirements. To do this you can consider automating
                  such a process where a fixed amount goes into your savings
                  account monthly.
                </p>
              </div>
            </Grid>{" "}
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Emergency Fund:</h1>
                <p>
                  Unplanned medical expenses can destroy any well-planned
                  budget. You should establish an emergency fund specifically
                  intended for unanticipated medical costs. This should be
                  different from regular savings and used only during
                  emergencies. These basic budgeting techniques will help you
                  have more control over your finances, decrease anxiety about
                  money, and ensure that you have funds available for meeting
                  essential needs as well as saving purposes.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <h1 className="cards-header">
            Maximize Your Savings with The Local App
          </h1>
          <Grid container spacing={6}>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Step into the Digital Marketplace:</h1>
                <p>
                  Connecting you with local stores, “The Local” app is changing
                  how you shop. It allows you to compare prices in real time so
                  that you can get the best deals without moving out of your
                  house.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Smart Shopping:</h1>
                <p>
                  Make orders through “The Local” app. The interface is
                  intuitive and easy to use allowing you to purchase directly
                  from retailers and avoid making impulse purchases. Confirming
                  your order after analyzing your cart will ensure that all your
                  purchases are deliberate and necessary.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Exclusive App Benefits:</h1>
                <p>
                  Find a wide variety of products from local merchants just at
                  your fingertips. Check out for discounts and special
                  promotions available only on the mobile app which can result
                  in significant savings.
                </p>
              </div>
            </Grid>
            <Grid item xs={6} alignSelf="stretch">
              <div className="card">
                <h1>Efficient Order Fulfillment:</h1>
                <p>
                  This is where LOCAL HUB provided by “The Local” comes in
                  handy; it guarantees that all orders made are delivered on
                  time. This service is especially valuable when it comes to
                  unusual items. Besides money, it also saves time.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} alignSelf="stretch">
              <div className="card">
                <h1>Loyalty Rewards:</h1>
                <p>
                  “The Local” rewards users who shop locally by giving them
                  points for each transaction they make. These points may be
                  redeemed as discounts on future orders thus earning customers’
                  loyalty back.
                </p>
              </div>
            </Grid>{" "}
            <Grid item xs={8} alignSelf="stretch">
              <div className="card">
                <h1>Subscription Services:</h1>
                <p>
                  Additional benefits, like free shipping, better deals or
                  exclusive discounts can be gained if one subscribes to “The
                  Local”. Before choosing any of the subscription options,
                  carefully evaluate their suitability for your purchasing
                  frequency and requirements. With the help of The Local app,
                  online shopping convenience can be achieved while supporting
                  local businesses and saving money at the same time – talk
                  about killing two birds with one stone! By partnering these
                  ingenious methods with attributes of the Local application, an
                  Indian citizen could become an expert at reducing expenditure
                  on groceries/ medicines in India. Download this app today from
                  either Apple Store or Google Play Store and become a smart
                  shopper!
                </p>
              </div>
            </Grid>{" "}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default SaveMoney;
