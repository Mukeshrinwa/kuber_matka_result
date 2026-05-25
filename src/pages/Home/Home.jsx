
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
              Kuber Matka App
            </h1>

          </div>

          {/* RIGHT IMAGE */}
          <div className="sara-right">
            <img
              src={bannerImg}
              alt="Kuber Matka Banner"
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
            Welcome to Kuber Matka
          </h2>

          <p>
            Welcome to <span>Kuber Matka</span>, your premier destination for exciting
            online gaming adventures! Our website provides a vast variety of
            Jodi games, giving players plenty of opportunities to challenge
            their luck and strategy with engaging interactive games.
          </p>

          <p>
            At <strong>Kuber Matka</strong>, your fun and security come first.
            Our games are structured to provide equitable play and honesty,
            so you can relax while you enjoy the thrill.
          </p>

          <p>
            Become part of our active gaming community and get rewarded with
            regular draws and limited-time promotions that make your gameplay
            even better!
          </p>

          <h3>
            Kuber Matka Satta Matka Chart Collection
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
            Kuber Matka || Kuber Matka apk || Kuber Matka Login ||
            Kuber Matka Kalyan Chart || Kuber Matka game ||
            Kuber Matka starline chart || Kuber Matka jackpot chart ||
            Kuber Matka App download latest version ||
            Kuber Matka download APK ||
            Kuber Matka App download.
          </div>

        </div>

      </section>
    </>
  );
}