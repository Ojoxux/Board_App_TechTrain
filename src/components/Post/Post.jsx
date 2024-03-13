import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import PostForm from "./PostForm"; // PostForm コンポーネントのインポート
import PostList from "./PostList"; // PostList コンポーネントのインポート
import { handleCommentSubmit } from "./apiUtils"; // apiUtils.jsからhandleCommentSubmit関数をインポート

export const Post = () => {
  const location = useLocation();
  const { title } = location.state || { id: "", title: "" };
  const [detailData, setDetailData] = useState({
    threadId: "threadId",
    posts: [],
  });
  const { thread_id } = useParams();
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`;

  // コメントを投稿する関数
  const handleCommentSubmitLocal = async (content) => {
    await handleCommentSubmit(url, content, setDetailData); // apiUtils.jsからインポートした関数を呼び出し
  };

  // コンポーネントがマウントされた際に、スレッドの詳細情報を取得
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setDetailData(data);
      } catch (error) {
        console.error("APIリクエストエラー:", error);
      }
    };

    fetchDetailData();
  }, [url]);

  return (
    <div className="Postform">
      <h3>{title}</h3>

      {/* コメント投稿フォームの表示 */}
      <div className="postFormContainer">
        <PostForm onCommentSubmit={handleCommentSubmitLocal} />
      </div>

      {/* コメント一覧の表示 */}
      <PostList posts={detailData.posts} />
    </div>
  );
};

export default Post;
