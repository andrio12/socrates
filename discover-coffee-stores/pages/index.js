import Head from 'next/head'
import Banner from '../components/banner';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const handleOnBtnClik = () => {
  console.log('btn clik');
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBtnClik} />
        <div className={styles.heroImage}>
          <Image src="/static/icons8-cafe-80.png" alt="coffee-cup" width={120} height={120} />
        </div>
      </main>
    </div>
  );
}
