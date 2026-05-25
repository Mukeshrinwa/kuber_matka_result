
import bannerImg from "../../assets/images/banner-shot.png";

import AndroidIcon from "@mui/icons-material/Android";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="sara-hero">

        {/* FLOATING DOTS */}
        <div className="dot yellow"></div>
        <div className="dot orange"></div>
        <div className="dot blue"></div>
        <div className="dot peach"></div>
        <div className="dot green"></div>

        <div className="sara-container">

          {/* LEFT CONTENT */}
          <div className="sara-left">

            <h1>
              Sara777 | Sara 777 |
              <br />
              Sara777 App
            </h1>

          </div>

          {/* RIGHT IMAGE */}
          <div className="sara-right">
            <img
              src={bannerImg}
              alt="Sara777 Banner"
            />
          </div>

        </div>

        {/* DOWNLOAD BAR */}
        <div className="download-bar">

          <button className="download-btn">
            <AndroidIcon />
            Download App
          </button>

        </div>

        {/* CONTACT */}
        <div className="contact-section">

          <h2>+91 91222 57775</h2>

          <div className="contact-buttons">

            <button className="call-btn">
              <CallIcon />
              Call Now
            </button>

            <button className="whatsapp-btn">
              <WhatsAppIcon />
              Whatsapp
            </button>

          </div>

        </div>

      </section>{/* ================= ABOUT SECTION ================= */}

      <section className="about-section">

        <div className="about-card">

          <h2>
            Welcome to Sara777
          </h2>

          <p>
            Welcome to <span>Sara777</span>, your premier destination for exciting
            online gaming adventures! Our website provides a vast variety of
            Jodi games, giving players plenty of opportunities to challenge
            their luck and strategy with engaging interactive games.
          </p>

          <p>
            At <strong>Sara777</strong>, your fun and security come first.
            Our games are structured to provide equitable play and honesty,
            so you can relax while you enjoy the thrill.
          </p>

          <p>
            Become part of our active gaming community and get rewarded with
            regular draws and limited-time promotions that make your gameplay
            even better!
          </p>

          <h3>
            Sara777 Satta Matka Chart Collection
          </h3>

          <p>
            We offer a wide selection of Satta Matka Charts, including:
          </p>

          <ul>
            <li>Kalyan Jodi Chart</li>
            <li>Milan Day Panel Chart</li>
            <li>Madhur Day Panel Chart</li>
            <li>Kalyan Night Panel Chart</li>
            <li>Kalyan Panel Chart</li>
            <li>Sridevi Chart</li>
            <li>Main Bazar Chart</li>
            <li>Rajdhani Night Chart</li>
            <li>Milan Night Chart</li>
          </ul>

          <div className="about-tags">
            Sara777 || Sara777 apk || sara777 Login ||
            Sara777 Kalyan Chart || sara777 game ||
            sara777 starline chart || sara777 jackpot chart ||
            Sara 777 App download latest version ||
            Sara 777 download APK ||
            Sara 777 Matka App download.
          </div>

        </div>

      </section>
    </>
  );
}