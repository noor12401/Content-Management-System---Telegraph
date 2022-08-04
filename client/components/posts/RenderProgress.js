import { Progress } from "antd";
import CountTo from "react-count-to";
import Link from "next/link";

const RenderProgress = ({ number, name, link = "#" }) => (
  <Link href={link}>
    <a>
      <Progress
        type="circle"
        gapDegree={100}
        percent={100}
        status="active"
        format={() => <CountTo to={number} speed={number * 100} />}
      />
      <p style={{ color: "#666" }}>{name}</p>
    </a>
  </Link>
);

export default RenderProgress;
