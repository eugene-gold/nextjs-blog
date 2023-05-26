import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css'
import Date from "../../components/date";

const date = [
    {
        date: '2023-03-01'
    },
    {
        date: '2023-05-24'
    }
]

export default function TranslatePage() {
    return (
        <Layout>
            <Head>
                <title>Перевод</title>
            </Head>
            <>
                <div className={`${utilStyles.headingXl} ${utilStyles.center}`} >Опыт работы с китайским языком</div>

                <article className={utilStyles.articleStyle}>
                    <div className={utilStyles.articleHeading}>
                        <a href='https://www.crcc.cn/'>СИАРСИСИ.РУС</a>
                        <small>
                            Март - Май 2023
                            <i> проектная работа</i>
                        </small>
                    </div>
                <p>
                    Помощь в поездке в г.Иркутске, г. Улан-Удэ, г. Чита, перевод коммерческих предложений, сопровождение.
                </p>
                </article>
                <article className={utilStyles.articleStyle}>
                    <div className={utilStyles.articleHeading}>
                        <a href='https://domstroy38.ru/'>Домстрой Иркутск</a>
                        <small>Апрель 2018 - Октябрь 2019 <i>cезонные работы</i></small>
                    </div>
                    <p>
                        Переводчик с китайского языка на объектах малоэтажного и многоэтажного строительства, социальных объектах.
                        Технический перевод, товарное обеспечение, ведение документации.
                    </p>
                </article>
                <article className={utilStyles.articleStyle}>
                    <div className={utilStyles.articleHeading}>
                        <a href='https://www.batrussia.ru/'>British American Tobacco Russia</a>
                        <small>Июль - Ноябрь 2015 <i>проектная работа</i></small>
                    </div>
                    <p>
                        Представитель китайской сигаретной торговой марки на территории РФ. Продвижение и реализация продукции среди жителей КНР на территории Иркутской обл.
                        Ведение отчетности, активные продажи, работа с транспортными компаниями, командировки.
                    </p>
                </article>
                <article className={utilStyles.articleStyle}>
                    <div className={utilStyles.articleHeading}>
                        <a href='https://lcmg.ru/'>LCMG</a>
                        <small>Август 2014 - Март 2015 <i>Работа в КНР</i></small>
                    </div>
                    <p>
                        Работа в международных перевозках грузов: обуви, текстильной продукции, электроники.
                        Взаимодействие с китайскими поставщиками, фабриками, приемка грузов, размещение на складе,
                        формировка отгрузки, оценка соответствия качества, претензионная работа,
                        подготовка груза для таможенного декларирования.
                    </p>
                </article>
                <article className={utilStyles.articleStyle}>
                    <div className={utilStyles.articleHeading}>
                        <div>Восточный Ирис</div>
                        <small>Январь 2011 - Август 2012 <i>российско-китайская компания</i></small>
                    </div>
                    <p>
                        Управление организацией, занимавшейся оптовыми поставкам свежесрезанных растений из КНР.
                        Работа с китайскими поставщиками, таможенными органами,СВХ, фитосанитарным контролем.
                        Ведение и расширением клиентской базы, ведение учета товаро-материальных ценностей, оптимизация хранения скоропортящихся товаров на складе, управление финансами, персоналом и хозяйственной частью.
                        Ведение складской, таможенной, юридической документации. Найм сотрудников.
                    </p>
                </article>
            </>
        </Layout>
    )
}
