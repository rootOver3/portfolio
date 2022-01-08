// Custom Components
import Layout from "../../components/Layout";
import SingleHeader from "../../components/article/SingleHeader";
import SingleCover from "../../components/article/SingleCover";
import SingleContent from "../../components/article/SingleContent";
import SingleUpdateStatus from "../../components/article/SingleUpdateStatus";
import NavigationalArticles from "../../components/NavigationArticles";
import { motion } from "framer-motion";


export default function ArticlesSingle() {
    const singleArticleHeader = {
        title: 'How Gorgias uses Vouchers to lessen webinar fatigue',
        date: 'Published March 21, 2021',
        cat: 'Front-end Development',
    }
    const singleArticleCover = {
        url: "/images/singleCover.jpg",
        alt: 'About banner Image',
        width: 1088,
        height: 370
    }
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} 
            >
                <Layout>
                    <SingleHeader data={singleArticleHeader} />
                    <SingleCover data={singleArticleCover} />
                    <SingleContent />
                    <SingleUpdateStatus />
                    <NavigationalArticles />
                </Layout>
            </motion.div>
        </>
    )
}