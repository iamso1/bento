# 訂便當機器人

## 說明:

有鑒於部分店家使用 line 訂便當需人工統計便當數量很不方便
所以做個訂便當機器人 看能不能幫助我省幾餐(?)

## 使用情境:

1. 使用者在聊天室輸入訂餐內容,機器人聽到後會自動加入資料庫並回覆使用者成功訂餐
2. 使用者在聊天室輸入查詢指令,機器人將回傳該使用者當日訂的餐點
3. 使用者在聊天室輸入取消指令,機器人將取消該使用者當日訂的餐點
4.  管理者在聊天室中輸入關鍵字後,機器人偵測到會自動列出統計結果
5.  管理者在聊天室中輸入關鍵字後,機器人偵測到會自動列出統計結果(by 送餐地點, 用戶清單)
6. 當時間超過訂餐時間, 就不開放訂購, 也不開放取消訂單

### 使用者指令

- 訂餐: 判斷輸入資訊若可正常 parse 則訂餐成功,若失敗則回傳訂餐格式讓使用者參考
  輸入:

  > 訂餐 c 棟 午餐 紅燒牛腩 +1

  輸出:

  > @user 你的餐點是: c 棟 午餐 紅燒牛腩 +1 , 訂餐成功

- 查詢: 回傳使用者當天訂的所有餐點
  輸入:

  > 查詢

  輸出:

  > @user 你的餐點是: c 棟 午餐 紅燒牛腩 +1 ;c 棟 晚餐 紅燒牛腩 +2

- 取消: 判斷輸入資訊若可正常 parse 則取消餐點,若失敗則回傳取消訂餐格式讓使用者參考,若沒指定取消數量 則取消該餐點
  輸入:

  > 取消 午餐 紅燒牛腩

  輸出:

  > @user 你的餐點是: c 棟 午餐 紅燒牛腩 +1 , 取消成功

### 管理者指令(只有群組設定的管理者有效)

- 訂單:列出當日訂單, 不輸入餐別則輸出該群組當日所有訂單
  輸入:

  > 訂單 中餐

  輸出:

  > 紅燒牛腩 10 個
  > 舒肥雞 1 個

- 送貨:列出當日訂單, 並且列出送餐地點跟用戶清單 不輸入餐別則輸出群組當日所有訂單
  輸入:

  > 送貨 中餐

  輸出:

  > 紅燒牛腩 10 個
  > 舒肥雞 1 個

## note:

- 因為不同公司可能有不同訂便當格式，所以必須能按照不同群組使用不同 parse 規則
- 因為不同公司會有不同群組, 所以必須能按照不同群組進行訂便當統計
- 需要建立每個廠商的管理員資訊 確保管理者指令可使用
