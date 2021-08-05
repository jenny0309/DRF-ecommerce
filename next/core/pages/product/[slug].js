// using brackets on file name <- dynamic page!

import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({

}));

function Product({ post }) {
  const classes = useStyles();
  const router = useRouter();

  // if slug is changed, this if statement is executed and another slug page is loaded
  if (router.isFallback) {
      return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      {post.title}
    </>
  );
}

// getStaticPaths should be defined for dynamic pages!
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "prada-shoes" } }], // load one slug at once! <- if all slugs are loaded, the loading time would be longer!
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/${params.slug}`); // Django server
  const post = await res.json(); // store data

  return {
    props: {
      post,
    },
  };
}

export default Product;
