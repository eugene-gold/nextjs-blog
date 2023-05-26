import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export default function DevelopPage() {

    return (
       <Layout>
           <Head>
               <title>О разработке</title>
           </Head>
           <>
               <div className={styles.grid}>
                   <a href="https://github.com/eugene-gold" className={styles.card}>
                       <h3>GitHub &rarr;</h3>
                       <p>Больше информации по разработке и репозиториям</p>
                   </a>

                   <a href="https://warm-crisp-5889a8.netlify.app" className={styles.card}>
                       <h3>Магазин одежды &rarr;</h3>
                       <p>Магазинчик с корзиной и оплатой, Redux, React</p>
                   </a>

                   <a
                       href="https://famous-meringue-a923fb.netlify.app/"
                       className={styles.card}
                   >
                       <h3>Образец приложения &rarr;</h3>
                       <p>Приложение, работающее с данными Stars-Wars Api,
                           и Zustand (в разработке)
                       </p>
                   </a>

                   <a
                       href="https://singular-tulumba-7f4dfd.netlify.app/"
                       className={styles.card}
                   >
                       <h3>Простой поиск &rarr;</h3>
                       <p>
                           Страница простого поиска по данным на React.
                       </p>
                   </a>
               </div>
           </>
       </Layout>
           )
}
