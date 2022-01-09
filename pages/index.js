//importaciones

//componente layout y variables del layout
import Layout from "../components/Layout";

//estilos css
import utilStyles from "../styles/utils.module.css";

const Home = () => {
  return (
    <Layout title="Home | Next.js" description="Home Page" home>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
