import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Biz2Biz from "../components/AboutCards/Biz2Bix";
import Dir2Consumer from "../components/AboutCards/Dir2Consumer";
// import OurTeam from "../components/AboutCards/OurTeam";
import VetTraining from "../components/AboutCards/VetTraining";

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section
          className="container-fluid mt-4"
          style={{ backgroundColor: "#whitesmoke" }}
        >
          {" "}
          <div
            className="row"
            style={{
              backgroundColor: "whitesmoke",
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            <a href="/">
              <p
                style={{
                  color: "#383838",
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  paddingBottom: 0,
                  marginBottom: 0,
                }}
              >
                <small>
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </span>{" "}
                  Back Home
                </small>
              </p>
            </a>
          </div>
          <div className="row" style={{ backgroundColor: "whitesmoke" }}>
            <div className="col-md-3 pt-0">
              <h2
                style={{
                  fontWeight: 700,
                  color: "#383838",
                }}
              >
                OUR TEAM
              </h2>
            </div>
          </div>
          <div
            className="row"
            style={{ backgroundColor: "whitesmoke", paddingTop: 20 }}
          >
            <div className="col-md-2 mt-4 mb-2">
              <img
                className="text-center"
                src={"../static/images/jeff.jpg"}
                width="70%"
                className="img-thumbnail"
              ></img>
            </div>
            <div
              className="col-md-10 mt-2 mb-2"
              style={{ fontSize: "1.15rem" }}
            >
              <h2>Jeff Slater</h2>
              <p>
                {" "}
                Jeff is co-founder, ideator, and acting President of MilServ ACD
                Corp. Jeff comes from a military family where both his parents
                served proudly and honorably. He ideated and co-founded MilServ
                ACD in their honor.
              </p>
              <p>
                Jeff is both a serial entrepreneur and a season global corporate
                executive. Jeff founded or co- founded Ninkatek ACB LLC (a SaaS
                software company for the US alcoholic beverage industry),
                Brewery Innovations LLC (an ideation company for the brewing
                industry), IS&amp;C Technologies (the owner of Tetricsity.com),
                and International Strategy &amp; Consulting Inc (a boutique
                global strategy consulting company).
              </p>
              <p>
                His time as a global corporate executive included senior
                positions with global food and beverage companies including
                Diageo plc (alc-bev), Allied Domecq plc (alc-bev), PepsiCo,
                Royal Ahold (now Delhaize SA), and Dunkin Brands.{" "}
              </p>
              <p>
                Jeff started his career with DataGeneral (now part of Dell
                Technologies) and has consulted with numerous software
                companies.
              </p>{" "}
              <p>
                {" "}
                Jeff is focusing his social responsibility time finding ways to
                give back to our veteran heroes and their families and as a
                board member for the upcoming commemoration of the 400 th
                anniversary of the landing of the Mayflower and the formation of
                Plymouth Colony (Massachusetts) in 2020.
              </p>
              <p>
                Jeff was born in the Hudson Valley of NY and lives in coastal
                Massachusetts with his wife and dog.
              </p>
              <div className="mb-3">
                <a
                  href="https://linkedin.com/in/jeff-slater-36490bb"
                  style={{ cursor: "pointer" }}
                >
                  <small>
                    <img
                      className="text-center"
                      src={"../static/images/li.png"}
                      width="30px"
                      style={{ borderRadius: 4, marginRight: 4 }}
                    ></img>
                    <em>Connect with Jeff</em>
                  </small>
                </a>
              </div>
              <hr />
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "whitesmoke" }}>
            <div className="col-md-2 mt-2 mb-2">
              {" "}
              <img
                className="text-center"
                src={"../static/images/david.png"}
                width="70%"
                className="img-thumbnail"
              ></img>
            </div>
            <div
              className="col-md-10 mt-2 mb-2"
              style={{ fontSize: "1.15rem" }}
            >
              <h2>David Jones</h2>
              <p>
                {" "}
                His love for entrepreneurship started as a child working for his
                parent’s businesses. He didn’t know it at the time, but it was
                where the seed for his entrepreneurial journey started to grow.
              </p>
              <p>
                {" "}
                Over the last 20+ years, his life has been focused on four main
                pillars: family, business, the Army, and school. During this
                time, he has been blessed with three children, has worked with
                several small businesses, retired with 20 years in the
                Army/National Guard, and attained three business degrees
                (associates/bachelors/MBA).
              </p>
              <p>
                {" "}
                Now that his Army career is over, he likes to (jokingly) assume
                that his days of calling in artillery and air strikes on targets
                are over too. His ideal day now is waking up early, working on
                the business, taking a break to do something active outside with
                the family, then back to working or catching a Bruins game on
                TV.
              </p>
              <p>
                Over the next 20 years he plans on working in high level
                business growth and giving back as much as possible, especially
                to his veteran community.
              </p>{" "}
              <div className="mb-4">
                <a
                  href="https://linkedin.com/in/davivdjones02719"
                  target="_blank"
                  style={{ cursor: "pointer" }}
                >
                  <small>
                    <img
                      className="text-center"
                      src={"../static/images/li.png"}
                      width="30px"
                      style={{ borderRadius: 4, marginRight: 2 }}
                    ></img>
                    <em>Connect with David</em>{" "}
                  </small>
                </a>
              </div>
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "#ffc107", paddingTop: 25 }}
          >
            <div className="col-md-3 mt-3 mb-2">
              <h2 className="program">
                <b style={{ color: "#383838" }}>OUR SERVICES</b>
              </h2>
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "#ffc107", paddingBottom: 40 }}
          >
            <div className="col-md-3 staff-portal-cols m-2">
              <Dir2Consumer />
            </div>

            <div className="col-md-3 staff-portal-cols m-2">
              <Biz2Biz />
            </div>

            <div className="col-md-3 staff-portal-cols m-2">
              <VetTraining />
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{
              backgroundColor: "#383838",
              color: "white",
              paddingTop: 15,
            }}
          >
            <div
              className="col-md-12 aboutSections"
              style={{ fontSize: "1.1rem" }}
            >
              <h2 style={{ fontWeight: 600 }}>OUR MISSION</h2>
              <hr style={{ backgroundColor: "white" }} />
              <p>
                We are current and former military veterans and their families.
                Our lives and business are built on a foundation of service and
                devotion to a greater good.
              </p>
              <p>
                American Craft Deliveries (ACD) MilServ has a mission to ensure
                every artisan beverage maker is provided frontline support for
                their success. We do this on the field, ensuring it’s leveled,
                for each craft beer, wine, and spirit to reach their
                ever-growing, selective target market fresh for the enjoyment of
                all.
              </p>

              <p>
                {" "}
                We allow small and large brewers alike the ability to get their
                product to a market that is under served. This way they can
                focus on what they do best, make innovative beers for passionate
                beer enthusiasts.
              </p>
              <p>
                {" "}
                No need to created a complicated logistics infrastructure, just
                place your beverage on our partner's (ACB) online market
                platform and let the orders start rolling in while we take care
                of all the deliveries.
              </p>
              <br></br>
              <button className="btn btn-sm btn-outline-light mb-5">
                Check if we're in your neck of the woods!
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default About;
