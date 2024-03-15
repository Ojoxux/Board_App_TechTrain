// @ts-check
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const Header = () => {
  return (
    <header className="HeaderComp1">
      <h1>掲示板</h1>
      <br></br>
      <header className="HeaderComp2">
        <div className="submit"> 
          {/* スレッド一覧画面に遷移するための処理 */}
          <Link to="/thread/new">スレッドを立てる</Link>
        </div>
      </header>
    </header>
  );
};