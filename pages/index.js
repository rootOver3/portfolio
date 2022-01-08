// Core Components
// Custom Components
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";


export default function Index() {
    const pageData = {
        title: 'Abu Taher Muhammad',
        class: 'p_page_home'
    }
    const dataImg = {
        url: "/images/index.jpg",
        alt: 'About banner Image',
        width: 1444,
        height: 579
    }
    return (
        <>
            <Layout data={pageData}>
                <PageBanner dataImg={dataImg} />
            </Layout>
        </>
    )
}