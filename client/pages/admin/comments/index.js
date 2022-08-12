import { useEffect, useState, useContext } from "react";
import { Row, Col, Button, Input, List, Modal } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/auth";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import CommentForm from "../../../components/comments/CommentForm";

dayjs.extend(localizedFormat);

function Comments() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // update
  const [selectedComment, setSelectedComment] = useState({});
  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);
  // state
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  // hook
  const router = useRouter();

  useEffect(() => {
    if (auth?.token) {
      fetchComments();
      getTotal();
    }
  }, [auth?.token]);

  useEffect(() => {
    if (page === 1) return;
    if (auth?.token) fetchComments();
  }, [page]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/comments/${page}`);
      //   console.log("__comments__", data);
      setComments([...comments, ...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/comment-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (comment) => {
    try {
      const answer = window.confirm("Are you sure you want to delete?");
      if (!answer) return;

      const { data } = await axios.delete(`/comment/${comment._id}`);
      if (data?.ok) {
        setComments(comments.filter((c) => c._id !== comment._id));
        setTotal(total - 1);
        toast.success("Comment deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/comment/${selectedComment._id}`, {
        content,
      });

      let arr = comments;
      const index = arr.findIndex((c) => c._id === selectedComment._id);
      arr[index].content = data.content;
      setComments(arr);

      setVisible(false);
      setLoading(false);
      setSelectedComment({});

      toast.success("Comment updated");
    } catch (err) {
      console.log(err);
      setVisible(false);
    }
  };

  const filteredComments = comments?.filter((comment) =>
    comment.content.toLowerCase().includes(keyword)
  );

  return (
    <AdminLayout>
      <Row>
        <Col span={24}>
          <h1 style={{ marginTop: 15 }}>{comments?.length} Comments</h1>

          <Input
            placeholder="Search"
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          />

          <List
            itemLayout="horizontal"
            dataSource={filteredComments}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link href={`/post/${item?.postId?.slug}#${item._id}`}>
                    <a>view</a>
                  </Link>,
                  <a
                    id="edit-comment"
                    onClick={() => {
                      setSelectedComment(item);
                      setVisible(true);
                      setContent(item.content);
                    }}
                  >
                    edit
                  </a>,
                  <a id="delete-comment" onClick={() => handleDelete(item)}>
                    delete
                  </a>,
                ]}
              >
                <List.Item.Meta
                  description={`On ${item?.postId?.title} | ${
                    item?.postedBy?.name
                  } | ${dayjs(item.createdAt).format("L LT")}`}
                  title={item.content}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Modal
            visible={visible}
            title="Update comment"
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
          >
            <CommentForm
              handleSubmit={handleSubmit}
              comment={content}
              setComment={setContent}
              loading={loading}
            />
          </Modal>
        </Col>
      </Row>

      {page * 6 < total && (
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              id="load-more-comments"
              size="large"
              type="primary"
              loading={loading}
              onClick={() => setPage(page + 1)}
            >
              Load More
            </Button>
          </Col>
        </Row>
      )}
    </AdminLayout>
  );
}

export default Comments;
