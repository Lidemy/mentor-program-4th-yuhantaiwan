# 簡答題
## 題目一：請解釋後端與前端的差異。
前端與後端差異主要是以使用者操作看到的畫面作為分界。使用者看到的網站畫面、功能等，屬於前端的領域。而對於網站背後伺服器向資料庫索取資料的行為，是使用者看不到的，這部分就屬於後端的領域。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
要到 Google 首頁，你必須先在瀏覽器內輸入 `www.google.com`。而我們的 DNS (Domain Name Service) 可以藉由我們輸入的域名 `google.com` 來找到 Google 的真實 IP 位置，我們就能來到 Google 首頁了。
你在 Google 首頁上輸入 JavaScript 按下 Enter 時，你的瀏覽器對你的電腦內的網路卡提出傳送訊息的需求 request，而網路卡把你的 request 藉由網路傳送到 Google 的伺服器，接著 Google 伺服器會向他的資料庫索取資料，再把回應 response 回傳到我們現在電腦上的瀏覽器，由瀏覽器更新畫面顯示搜尋結果，就是我們看到搜尋 JavaScript 的結果畫面ˇ了。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. `tail 檔案`：列出檔案最後的內容。預設是 10 列。
   `tail -n N`：指定輸出檔案最後 N 行。
   `tail +n N`：指定輸出檔案第 N 行開始到檔結尾。
2. `head 檔案`：列出檔案最前面的內容。預設是 10 列。
   `head -n N`：指定輸出檔案前面 N 行。
   `head -c N`：指定輸出檔案前面 N 個字元組。
3. `top`：得知目前系統資源的使用狀態。
