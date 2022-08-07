import { Row, Col } from "antd";

const WebsiteLifeCycle = () => (
  <>
    <div style={{ marginTop: -150, textAlign: "center", fontSize: 20 }}>
      <h1>Working with us is easy!</h1>
    </div>

    {/* 4 Step Solution */}
    <img
      src="/images/4-steps.png"
      alt="Technologies Used"
      style={{
        marginBottom: 50,
        width: "100%",
        overFlow: "hidden",
        objectFit: "cover",
      }}
    />

    {/* Column 1: Pick a Niche */}
    <div>
      <Row>
        <Col span={10} offset={1} style={{ textAlign: "center", fontSize: 20 }}>
          <img
            src="/images/pick-a-niche.png"
            alt="Content Management"
            style={{
              height: "100%",
              overFlow: "hidden",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col
          span={12}
          style={{ marginTop: 100, textAlign: "center", fontSize: 20 }}
        >
          <h1>1. Pick a Niche</h1>
          <h4>
            Have a content mindset? Thought of an article? Just write it! Pick
            any niche you like, it may be Travel, Entertainment, Technology or
            even Games! Write you thoughts, your content, your ideas to the
            world. With the help of our categories section, you can create
            multiple categories and can give your article a different section!
          </h4>
        </Col>
      </Row>
    </div>

    {/* Column 2: Create */}
    <div>
      <Row>
        <Col
          span={11}
          offset={1}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <h1>2. Create</h1>
          <h4 class="H5">
            With the help of our Rich-Text Editor, creating content is super
            easy! Just take your keyboard and start typing, rest will be taken
            care by our editor. Our text editor support multiple formatting with{" "}
          </h4>
          <h1 class="H5">H1</h1> Tags to <h6 class="H5">H6</h6>{" "}
          <h4 class="H5">
            tags, from <b>bold</b> to <i>Italic</i> and even{" "}
            <s>Striketrough Texts!</s>
          </h4>
        </Col>
        <Col span={12} style={{ marginTop: -50, textAlign: "center", fontSize: 20 }}>
          <img
            src="/images/create.png"
            alt="Content Management"
            style={{
              height: "100%",
              overFlow: "hidden",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </div>

    {/* Column 3: Publish */}
    <div>
      <Row>
        <Col span={10} offset={1} style={{ marginTop: -50, textAlign: "center", fontSize: 20 }}>
          <img
            src="/images/publish.png"
            alt="Content Management"
            style={{
              height: "100%",
              overFlow: "hidden",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col
          span={11}
          offset={1}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <h1>3. Publish</h1>
          <h4>
            Once you become an author, publishing content will be too easy!
            Write your post, select any image that you want to feature in your
            post and click on PUBLISH! And your post will be visible to
            thousands of our viewers! Any viewer can engage and can share your
            post which will increase your credibility.
          </h4>
        </Col>
      </Row>
    </div>

    {/* Column 4: Engage */}
    <div>
      <Row>
        <Col
          span={11}
          offset={1}
          style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
        >
          <h1>4. Engage</h1>
          <h4>
            Posting a content is not enough! Thus you can even see how people
            are reacting to your post! They will have the ability to leave the
            comment which you can review and reply to. Engaging with your
            audience will not only provide the feedback but will also increase
            the understanding of that particular topic!
          </h4>
        </Col>
        <Col span={12} style={{ marginTop: -150, textAlign: "center", fontSize: 20 }}>
          <img
            src="/images/engage.png"
            alt="Content Management"
            style={{
              height: "100%",
              overFlow: "hidden",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </div>
  </>
);

export default WebsiteLifeCycle;
