import Head from "next/head";
import styles from "../../styles/Head.module.css"

type HeadComponentPropsType = {
  title: string;
  metaData: string;
}

const HeadComponent = ({title, metaData}: HeadComponentPropsType) => {
  return (
    <Head>
      <title className={styles.main}>{title}</title>
      <meta name="description" content={metaData} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

export default HeadComponent;
