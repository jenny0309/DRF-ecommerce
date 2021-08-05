import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import Link from "next/link";

// use this code as baseline!

// override styles
const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0",
  },
  cardMedia: {
    paddingTop: "140%",
  },
}));

function Home({ posts }) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>  {/* space between two items */}
            {console.log(posts)}
            {posts.map((post) => (
              <Link key={post.id} href={"/"}>
                <Grid item xs={6} sm={4} md={3}>  {/* number of columns divided by 12 <- xs: extra-small, sm: small, md: medium */}
                  <Card className={classes.card} elevation={0}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.product_image[0].image}
                      alt={post.product_image[0].alt_text}
                    />
                    <CardContent>
                      <Typography gutterBottom component="p">
                        {post.title}
                      </Typography>
                      <Box component="p" fontSize={16} fontWeight={900}>
                        ${post.regular_price}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/"); // Django server
  const posts = await res.json(); // store data

  return {
    props: {
      posts,
    },
  };
}

export default Home;
