import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { Card } from "antd";
const { Meta } = Card;
import useLatestPosts from "../../hooks/useLatestPosts";
const HomePageLatestPosts = () => {
  const { latestPosts } = useLatestPosts();
  return (
    <>
      <div style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}>
        <h1>Latest Posts</h1>
      </div>

      {/* Top Column on Homepage */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {latestPosts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post._id}>
            <Card
              style={{ marginLeft: 20 }}
              hoverable={true}
              cover={
                <img
                  src={post.featuredImage?.url || "images/default.jpg"}
                  style={{ borderRadius: "5px" }}
                />
              }
            >
              <Meta title={post.title} />
            </Card>
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default HomePageLatestPosts;
