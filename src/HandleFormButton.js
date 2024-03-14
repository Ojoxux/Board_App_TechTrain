// フォームの送信処理を行う関数
export async function handleFormButton(title, nav) {
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
  }
  