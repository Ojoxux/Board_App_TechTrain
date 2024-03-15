import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getThreadList } from "../api/GetThreadList";
import "./App.css";

export const ThreadList = () => {
  const [threads, setThreads] = useState([]); // スレッドのタイトルの配列

  // コンポーネントがマウントされた時にスレッドリストを取得
  useEffect(() => {
    async function fetchData() {
      const threads = await getThreadList(); // 別ファイルのメソッドを呼ぶ
      setThreads(threads); // スレッドタイトルのステートを更新
    }
    fetchData();
  }, []);

  return (
    // スレッドリストを表示するJSX
    <div className="newThreadList">
      <h2>新着スレッド</h2>
      <ul>
        <table className="createdThreadtable">
          <tbody>
            {threads.map((newThread) => (
              <tr key={newThread.id}>
                <td>
                  {/*// スレッドのタイトルをリンクにして表示*/}
                  <Link
                    to={`thread/${newThread.id}`}
                    state={{ title: newThread.title }}
                  >
                    {newThread.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default ThreadList;
