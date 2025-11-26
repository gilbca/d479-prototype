import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import PageHero from "../components/PageHero/PageHero";
import Footer from "../components/Footer/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
import ScrollOnNavigate from "../components/ScrollOnNavigate/ScrollOnNavigate";

const RootLayout = () => {
  return (
    <>
      <header className="w-100">
        <MainNavigation />
      </header>
      <main className="main-content-wrapper">
        <PageHero />
        <Outlet />
        <GoToTop />
      </main>
      <footer className="w-100">
        <Footer />
      </footer>
      <ScrollOnNavigate />
    </>
  );
};

export default RootLayout;
