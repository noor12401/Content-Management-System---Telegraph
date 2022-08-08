import SubscriberLayout from "../../components/layout/SubscriberLayout";
import { Col, Row, Card } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import Quote from "inspirational-quotes";

function Subscriber() {
  // context
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <SubscriberLayout>
      <div style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}>
        <h1>Welcome Back {auth?.user?.name || "Guest"}!</h1>
      </div>

      <Row gutter={8} style={{ marginTop: 30, marginBottom: 170 }}>
        <Col span={8} offset={8}>
          <Card title="Quote of the day" hoverable={true}>
            {Quote.getRandomQuote()}
          </Card>
        </Col>
      </Row>
    </SubscriberLayout>
  );
}

export default Subscriber;
