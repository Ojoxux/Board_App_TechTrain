import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOMのクライアントバージョンをインポート

import "./index.css"; // CSSファイルのインポート
import "./App"; // Appコンポーネントのインポート
import { ThreadList } from "./ThreadList"; // スレッドリストコンポーネントのインポート
import { ThreadCreateScreen } from "./ThreadCreateScreen"; // スレッド作成画面コンポーネントのインポート
import { Post } from "./Post"; // 投稿コンポーネントのインポート
import { Route, Routes, BrowserRouter } from "react-router-dom"; // React Routerの関連要素をインポート
import { Header } from "./Header"; // ヘッダーコンポーネントのインポート

const root = ReactDOM.createRoot(document.getElementById("root")); // Reactのルートを作成し、HTMLのroot要素に割り当てる
root.render(
  //デフォルトURLを/appに設定
  <BrowserRouter basebame="/app">
    <Header />
    <Routes>
      <Route path="/" element={<ThreadList />} />{" "}
      {/* ルートパスにThreadListコンポーネントを表示 */}
      {/* スレッド一覧画面(スレッド新着の画面) */}
      <Route path="thread/new" element={<ThreadCreateScreen />} />{" "}
      {/* スレッド作成画面を表示 */}
      {/* 新規スレッド作成画面 */}
      <Route path="thread/:thread_id" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

async function callApi() {
  const res = await fetch(
    // APIにGETリクエストを送信し、レスポンスを取得
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  const users = await res.json(); // レスポンスデータをJSON形式に変換
  console.log(users); // レスポンスデータをコンソールに出力
}

callApi(); // api呼び出し
