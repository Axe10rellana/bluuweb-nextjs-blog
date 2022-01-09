//importaciones
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//estilos css
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

//variables iniciales
const name = "Naturaleza";
//export const siteTitle = "Next.js Sample Website";

const Layout = ({ children, title, description, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/assets/nature.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
              title={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/assets/nature.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                  title={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
        <Link href="/">
          <a>Inicio |</a>
        </Link>
        <Link href="/about">
          <a>Acerca |</a>
        </Link>
        <Link href="/blog">
          <a>Blog |</a>
        </Link>
        <Link href="/contact">
          <a>Contacto </a>
        </Link>
      </nav>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Volver Al Inicio</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Mi sitio web | Next.js",
  description: "Descripción de mi sitio web",
};
