import { Row, Col, Divider, Button } from "antd";
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => (
  <>
    {/* Footer */}
    <div>
      <Divider>
        <h4>
          Made with 🧡 by{" "}
          <Link href="https://www.linkedin.com/in/nooruddin-shaikh">
            Nooruddin Shaikh
          </Link>{" "}
          and{" "}
          <Link href="https://www.linkedin.com/in/nooruddin-shaikh">
            Mohd Sharif
          </Link>
        </h4>
      </Divider>
      <Row>
        <Col span={12} style={{ textAlign: "center", fontSize: 20 }}>
          Nooruddin Shaikh
        </Col>
        <Col span={12} style={{ textAlign: "center", fontSize: 20 }}>
          Mohd Sharif
        </Col>
      </Row>

      <Row>
        <Col
          span={12}
          style={{ marginBottom: 50, textAlign: "center", fontSize: 20 }}
        >
          <Button
            href={"https://github.com/noor12401"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <GithubOutlined />
          </Button>
          <Button
            href={"https://www.linkedin.com/in/nooruddin-shaikh"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <LinkedinOutlined />
          </Button>
          <Button
            href={"https://noor12401.medium.com/"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <MediumOutlined />
          </Button>
        </Col>
        <Col
          span={12}
          style={{ marginBottom: 50, textAlign: "center", fontSize: 20 }}
        >
          <Button
            href={"https://github.com/"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <GithubOutlined />
          </Button>
          <Button
            href={"https://www.linkedin.com/in/"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <LinkedinOutlined />
          </Button>
          <Button
            href={"https://medium.com/"}
            style={{ fontSize: 20, borderStyle: "none" }}
          >
            <MediumOutlined />
          </Button>
        </Col>
      </Row>
    </div>
  </>
);

export default Footer;
