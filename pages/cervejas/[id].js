import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Jumbotron from "../../components/Jumbotron";

function Post({ post }) {
  const router = useRouter()
  const beer = post[0];
  console.log("beer.id >> ", beer);
  return (
    <>
      <Jumbotron beer={beer}/>
    </>
    // <>
    //   <main >
    //     <button onClick={() => router.back()}>Voltar</button>
    //     <Image src={beer.image_url} width={200} height={400} alt={beer.name} />
    //     <h1 >{beer.name}</h1>
    //     <h1 >{beer.tagline}</h1>
    //     <h1 >{beer.description}</h1>
    //   </main>
    // </>
  );
}
export async function getStaticPaths() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  console.log("id product >> ", params.id);

  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
  const post = await res.json();
  return { props: { post } };
}

export default Post;
