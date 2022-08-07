import { AuthContext } from "../../context/auth";
import RenderProgress from "../../components/posts/RenderProgress";
import useNumbers from "../../hooks/useNumbers";
import { useContext } from "react";
import { Row, Col } from "antd";

const HomePageStatistics = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext);
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
            link="/admin/posts"
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
            link="/admin/comments"
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
            link="/admin/categories"
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
            link="/admin/users"
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePageStatistics;
