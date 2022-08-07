import RenderProgress from "../../components/posts/RenderProgress";
import useNumbers from "../../hooks/useNumbers";
import { Row, Col } from "antd";

const HomePageStatistics = () => {
  // hooks
  const { numbers } = useNumbers();

  return (
    <>
      <div style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}>
        <h1>Our Statistics Speaks!</h1>
      </div>

      {/* Statistics */}
      <Row style={{ marginTop: 0 }}>
        {/* posts */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.posts}
            name="Posts"
            link="/"
          />
        </Col>
        {/* comments */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.comments}
            name="Comments"
            link="/"
          />
        </Col>
        {/* catgories */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.categories}
            name="Categories"
            link="/"
          />
        </Col>
        {/* users */}
        <Col
          span={6}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <RenderProgress
            number={numbers.users}
            name="Users"
            link="/"
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePageStatistics;
