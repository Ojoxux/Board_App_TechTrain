import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ThreadCreateScreen = () => {
  // スレッドのタイトルを管理するstate
  const [title, setTitle] = useState("");
  // React Routerのページ遷移関数を取得
  const nav = useNavigate();

  // 入力されたタイトルの変更を検知し、stateを更新する関数
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  // フォームの送信処理を行う関数
  const handleFormButton = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信動作を防止

    // タイトルが3文字未満の場合はエラーメッセージを表示し、処理を終了する
    if (title.trim().length < 3) {
      alert("スレッド名は3文字以上で入力してください");
      return;
    }

    // POSTリクエストを送信するためのデータを準備
    const url = "https://railway.bulletinboard.techtrain.dev/threads";
    const titleJson = {
      title: title,
    };

    // リクエストに必要なオプションを指定
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(titleJson),
    };

    // POSTリクエストを送信して、処理の結果に応じて処理を行う
    try {
      const res = await fetch(url, fetchData);
      if (res.ok) {
        // スレッド作成に成功した場合、スレッド一覧画面に遷移する
        nav("/");
      } else {
        console.error("APIリクエストが失敗しました");
      }
    } catch (err) {
      console.error("APIリクエスト中にエラーが発生しました", err);
    }
  };

  // コンポーネントの描画
  return (
    <div className="OnclickButton">
      <h2>新着スレッドの作成</h2>
      <form>
        <div className="intitle">
          <label htmlFor="title">スレッドタイトルを入力</label>
          <input
            id="title"
            type="text"
            placeholder="スレッドタイトルを入力"
            value={title}
            onChange={onChange}
          />
        </div>

        <p>
          <button type="submit" onClick={handleFormButton}>
            スレッド作成
          </button>
        </p>
        
        <button type="submit" onClick={() => nav("/")}>
          Topに戻る
        </button>
      </form>
    </div>
  );
}