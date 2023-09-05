import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout, {siteTitle}from '../components/Layout';

import Link from "next/link";
import utilstyle from "../styles/utils.module.css";
import { getPostsData } from '../lib/post';

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
 /*  console.log(allPostsData) */;

  return {
    props: {
      allPostsData,
    },
  };

}
/* //SSRの場合
export async function getStaticProps(context){
  return{
    props:{
      //コンポーネントに渡すためのprops
    },
  };
} */

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home></Layout>
      <Head>
        <title>{siteTitle}</title>
        {/* <description>ゼロから始める企業計画</description> */}
      </Head>
      <section className={utilstyle.headingMd}>
        <p>アフリカでは１分間に６０秒が過ぎています。</p>
      </section>

      <section className={utilstyle.headingMd}>
        <h2>🍎エンジニアに俺あなる🍎</h2>
      </section>

      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={'/posts/' + id}>
              <img src={thumbnail} className={styles.thumbnailImage} />
            </Link>
            <br />
            <Link href={'/posts/' + id}>
              {title}
            </Link>
            <br />
            <small className={utilstyle.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </div>
  );
}
