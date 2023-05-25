import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
    return {
      props: {
          allPostsData
      }
    }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className={styles.description}>
            Приветствую! Меня зовут Евгений, и я занимаюсь  <Link href="posts/develop">разработкой web приложений </Link>
            и <Link href="posts/translate">переводом (русский/китайский язык).</Link>
        </p>
          <p className={utilStyles.listItem}> Мне можно написать <a href="mailto:goldin.irk@gmail.com">на почту</a></p>
      </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date}/>
                        </small>
                    </li>
                ))}
            </ul>
        </section>

    </Layout>
  )
}
