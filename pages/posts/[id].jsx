import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilstyles from "../../styles/utils.module.css";
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function post({ postData }) {
    return (
        <div>
            <Layout></Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilstyles.headingX1}>{postData.title}</h1>
                <span className={utilstyles.lightText}>{postData.date}</span>
                <br />
                <span dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}></span>
            </article>
        </div>
    );

}