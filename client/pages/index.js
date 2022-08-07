import Head from "next/head";
import FullWidthImage from "../components/pages/FullWidthImage";
import WebsiteLifeCycle from "../components/pages/WebsiteLifeCycle";
import HomePageStatistics from "../components/pages/HomePageStatistics";
import LandingImage from "../components/pages/LandingImage";
import HomePageCategories from "../components/pages/HomePageCategories";
import HomePageLatestPosts from "../components/pages/HomePageLatestPosts";
import Footer from "../components/pages/Footer";


function Home() {

  
  return (
    <>
      <Head>
        <title>Telegraph - A Modern Content Management System</title>
        <meta
          name="description"
          content="Read latest blog posts on web development"
        />
      </Head>

      <LandingImage />

      {/* Technology Used */}
      <img
        src="/images/tech-used.png"
        alt="Technologies Used"
        style={{
          marginTop: -500,
          overFlow: "hidden",
          objectFit: "cover",
        }}
      />

      <WebsiteLifeCycle />

      <HomePageStatistics />

      <HomePageLatestPosts />

      <HomePageCategories />

      <Footer />
    </>
  );
}

export default Home;
