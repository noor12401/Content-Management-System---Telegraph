import axios from "axios";
import { Row, Col, Card, Avatar } from "antd";
import Head from "next/head";
import Link from "next/link";

const { Meta } = Card;

export const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Recent blog posts</title>
        <meta description="Blog posts about web development, programming etc" />
      </Head>
      <Row>
        {posts.map((post) => (
          <Col xs={23} xl={8}  style={{ marginTop: 10, marginBottom: 5}}>
            <Link href={`/post/${post.slug}`}>
              <a>
                <Card
                  hoverable
                  style={{ marginLeft: 5, marginRight: 5}}
                  cover={
                    <Avatar
                      shape="square"
                      style={{ height: "300px", borderRadius: "5px" }}
                      src={post.featuredImage?.url || "images/default.jpg"}
                      alt={post.title}
                    />
                  }
                >
                  <Meta title={post.title} />
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/posts`);
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
