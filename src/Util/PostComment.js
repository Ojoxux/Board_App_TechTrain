// コメントを投稿する関数
export async function handleCommentSubmit(url, content, setDetailData) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: content }),
      });
  
      if (res.ok) {
        // 投稿成功後、スレッドの詳細情報を再取得
        const detailRes = await fetch(url);
        const detailData = await detailRes.json();
        setDetailData(detailData);
      } else {
        console.error("メッセージの投稿に失敗しました");
      }
    } catch (error) {
      console.error("APIリクエストエラー", error);
    }
  }
  