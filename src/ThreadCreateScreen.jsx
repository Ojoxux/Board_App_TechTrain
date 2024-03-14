import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleFormButton } from "./HandleFormButton";

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
  const handleForm = (e) => {
    e.preventDefault(); // デフォルトのフォーム送信動作を防止
    handleFormButton(title, nav); // utils.jsからインポートした関数を呼び出し
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
          <button type="submit" onClick={handleForm}>
            スレッド作成
          </button>
        </p>

        <button type="submit" onClick={() => nav("/")}>
          Topに戻る
        </button>
      </form>
    </div>
  );
};
