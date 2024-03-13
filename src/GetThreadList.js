// スレッドリストをAPIから取得する非同期関数
export async function getThreadList() {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        { method: "GET" }
      );
      console.log("APIリクエスト成功"); // 成功時のログ
  
      if (response.ok) {
        // リクエストが完了してから結果を表示したいのでawaitを使う
        const threads = await response.json(); // レスポンスデータをJSON形式に変換
        return threads; // 取得したスレッドリストを返す
      } else {
        console.error("APIリクエストが失敗しました"); // 失敗時のエラーログ
        return []; // 失敗した場合は空の配列を返す
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました", error); // エラーハンドリング
      return []; // エラーが発生した場合は空の配列を返す
    }
  }
  