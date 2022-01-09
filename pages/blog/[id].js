//importaciones

//componente layout
import Layout from "../../components/Layout";

const primerPost = ({ data }) => {
  return (
    <Layout title="First Post | Next.js" description="First Post Page">
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </Layout>
  );
};

export default primerPost;

export async function getStaticPaths() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
