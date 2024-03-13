import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

// props としてコメントが投稿された際の処理を受け取る（onCommentSubmit）
const PostForm = ({ onCommentSubmit }) => {
  // コメントの入力内容を管理する state
  const [comment, setComment] = useState("");
  const nav = useNavigate();

  // テキスト入力フィールドの変更時に呼び出され、コメントの内容を更新
  const handleChange = (e) => setComment(e.target.value);

  // フォームが送信された際の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim().length < 3) {
      // タイトルが3文字未満の場合、画面遷移を行わない
      alert("スレッドタイトルは3文字以上必要です。");
      return;
    }
     // 親コンポーネントで受け取ったコメント投稿の処理を呼び出し
     onCommentSubmit(comment);
     // コメントの内容をクリア
     setComment("");
  };

  // コンポーネントのレンダリング
  return (
    <form onSubmit={handleSubmit}>
      {/* テキスト入力フィールド */}
      <input
        id="newComment"
        value={comment}
        type="text"
        size="50"
        placeholder="投稿しよう！！"
        onChange={handleChange}
      />
      <br></br>
      {/* 投稿ボタン */}
      <Button variant="contained" color="primary" type="submit">投稿</Button>
      {/* 戻るボタン */}
      <Button variant="outlined" color="secondary" type="button" onClick={() => nav("/")}>戻る</Button>
    </form>
  );
};

export default PostForm;