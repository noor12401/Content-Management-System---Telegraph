import AuthorLayout from "../../components/layout/AuthorLayout";
import { Col, Row, Card, Button } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import Link from "next/link";
import Quote from "inspirational-quotes";

function Author() {
  // context
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <AuthorLayout>
      <div style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}>
        <h1>Welcome Back {auth?.user?.name || "Guest"}!</h1>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 20,
          textShadow: "2px 2px 4px #000000",
        }}
      >
        <Link href="/author/posts/new">
          <a>
            <Button type="primary" icon={<FormOutlined />} size="large">
              Inspired? Let's write a content!
            </Button>
          </a>
        </Link>
      </div>

      <Row gutter={8} style={{ marginTop: 30, marginBottom: 170 }}>
        <Col span={8} offset={8}>
          <Card title="Quote of the day" hoverable={true}>
            {Quote.getRandomQuote()}
          </Card>
        </Col>
      </Row>
    </AuthorLayout>
  );
}

export default Author;
