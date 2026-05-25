import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Main from "../pages/Home/Main.jsx";
import JodiChart from "../pages/JodiChart/JodiChart.jsx";
import PanaChart from "../pages/PanaChart/PanaChart.jsx";
import RegisterAccount from "../pages/Register/RegisterAccount.jsx";
import AboutGame from "../pages/HowtoPlay/AboutGame.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import ChartsPage from "../pages/ChartsPage/ChartsPage.jsx";
import BharatstarlinePanaChart from "../pages/BharatJackpotChart/BharatstarlinePanaChart.jsx";
import BharatJackpot from "../pages/Bharat Jackpot/BharatJackpot.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import BlogPost from "../pages/Blog/BlogPost.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        {/* HOME PAGE */}
        <Route index element={<Main />} />

        {/* CHARTS PAGE */}

        <Route path="register" element={<RegisterAccount />} />
        <Route path="how-to-play" element={<AboutGame />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="charts" element={<ChartsPage />} />

        <Route path="starline-pana" element={<BharatstarlinePanaChart />} />
        <Route path="jackpot" element={<BharatJackpot />} />
        <Route path="jodi-chart/:name/:marketId" element={<JodiChart />} />
        <Route path="pana-chart/:name/:marketId" element={<PanaChart />} />


      </Route>
    </Routes>
  );
};

export default AppRoutes;