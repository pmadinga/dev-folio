import Head  from 'next/head';
import { Container } from 'react-bootstrap';
import  * as styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phiwa | Home</title>
      </Head>
      <header className={styles.header}>
        <Container>
          <section className={styles.headline}>
            <h1>Developer</h1>
          </section>
        </Container>
      </header>
    </>
  );
};