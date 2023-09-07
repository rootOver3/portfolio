import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import AboutBody from "../../views/pages/about/AboutBody";
// import IMG from "../../assets/images/about.jpg";
import IMG from "../../assets/images/about.webp";
import { memo } from "react";
import Meta from "../../components/Meta";

function About() {
  return (
    <>
      <Meta title="About" />

      <Layout data={{ class: "p_page_about" }}>
        <PageHeader
          data={{
            heading: "FAMILY, FRIENDS, ACHIEVEMENTS, AND BEYOND",
            subheading: ["Journey.", "Purification.", "Rewards reimagined."],
          }}
        />
        <PageBanner img={IMG} />
        {/* <AboutQuote /> */}
        <AboutBody />
      </Layout>
    </>
  );
}

export default memo(About);
