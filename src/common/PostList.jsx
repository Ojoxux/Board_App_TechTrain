import React from "react";

const PostList = (props) => {
  // props から投稿一覧を取得
  const posts = props.posts;

  // コンポーネントのレンダリング
  return (
    <div>

      {/* 投稿データを表示するテーブル */}
      <table className="postTable">
        {/* テーブルのヘッダー */}
        <thead>
          <tr>
            <th>投稿内容</th>
          </tr>
        </thead>

        {/* テーブルの本体 */}
        <tbody>
          {/* 投稿データをマップして各行に表示 */}
          {posts.map((post) => (
            <tr key={post.id}>
              {/* 各行の投稿内容列 */}
              <td>{post.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;

















// 投稿一覧を表示するための関数 newPostsList
// const newPostsList = () => {
//   const list = [];
//   for (let a = 0; a < posts.length; a++) {
//     // 投稿一覧から各投稿の内容を取得し、リストアイテムとして追加
//     list.push(<li key={posts[a].id}>{posts[a].post}</li>);
//   }
//   return list;
// };

// {
//   /* <ul className="newPostsList">
//       新しい投稿一覧を表示
//       {newPostsList()}
//       </ul> */
// }