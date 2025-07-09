import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DVLPR | Seu estilo além do style.css</title>
        <meta
          name='description'
          content='Camisetas para devs, chaveiros para devs, adesivos para devs, bonés para devs, canecas para devs e pins para devs.'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <Image src='/logo.png' alt='DVLPR' width={150} height={48} />
        <p>
          Nossa estará no evento presencial Codecon Summit 2025, voltaremos com nosso estoque na loja virtual em breve.
        </p>
      </main>
    </div>
  );
}
