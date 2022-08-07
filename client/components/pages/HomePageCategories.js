import { Row, Col, Button } from "antd";
import Link from "next/link";
import useCategory from "../../hooks/useCategory";

const HomePageCategories = () => {
  const { categories } = useCategory();

  return (
    <>
      {/* Showing All Categories on Homepage */}
      <div style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}>
        <h1>Posts By Categories</h1>
      </div>

      <Row>
        <Col span={24} style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ textAlign: "center" }}>
            {categories.map((c) => (
              <Link href={`/category/${c.slug}`} key={c._id}>
                <a>
                  <Button
                    style={{ marginRight: 20, marginLeft: 20 }}
                    size="large"
                  >
                    {c.name}
                  </Button>
                </a>
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePageCategories;
