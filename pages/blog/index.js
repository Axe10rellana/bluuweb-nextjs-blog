//importaciones
import Link from "next/link";

//helpers
//import { helpHttp } from "../../helpers/helpHttp";

//componente layout
import Layout from "../../components/Layout";

export default function index({ data }) {
  return (
    <Layout title="Posts List | Next.js" description="Posts List Page">
      <h1>Lista De Post</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
