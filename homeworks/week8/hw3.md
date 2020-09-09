### 什麼是 Ajax？

AJAX 是 Asynchronous JavaScript and XML 的縮寫。是一套綜合了多項技術的**瀏覽器端**網頁開發技術。常用於讓網頁能在不用重新整理的狀態下，把需要的資訊傳給伺服器端，不必等待伺服器端回傳的結果，可以繼續執行其他工作。

就字面上的意思，可以拆解三個部分：
* Asynchronous: 非同步
* JavaScript: 使用的程式語言
* XML: Extensible Markup Language，是一種用戶端 (client) 與伺服器端 (server) 交換資料的格式，近年由於 JSON 等格式的流行，使用 Ajax 處理的資料格式並不限於 XML。

### 用 Ajax 與我們用表單送出資料的差別在哪？
用表單送出資料時用戶端向網頁伺服器端傳送一個請求。伺服器接收並處理傳來的表單，然後送回一個新的網頁。在收到伺服器傳來的回應後用戶端才能執行後下一步動作，在這之前用戶端處在等待的狀態。這對使用者體驗來說並不是很好。

利用 AJAX 可以僅向伺服器傳送並取回必須的資料，在用戶端發出請求後，不需要等待伺服器回應，可以持續執行其他動作。且因為在伺服器和瀏覽器之間交換的資料大量減少，伺服器回應更快。

用表單送資料就像你到餐廳點餐，在你點完餐後，你只能站在那裡什麼事情也不能做，直到你的餐點做好並拿給你。
而利用 AJAX 傳送資料，就像是你在點完餐，可以先做其他事，例如：滑手機、找位置等等，等你的餐點好了時，再過去拿就好。

### JSONP 是什麼？
JSONP（JSON with Padding）是資料格式 JSON 的一種「使用模式」，可以讓一個網頁跨網域 (cross-domain) 請求資料，繞過 AJAX 因為有瀏覽器安全性限制無法跨網域使用的問題 (same-origin policy)。JSONP 是解決跨網域限制的方法之一，其原理就是利用 `<script>` 標籤可以跨網域請求的特性。

伺服器端允許用戶端傳遞一個 callback 參數給伺服器，然後伺服器端返回資料時會把這個 callback 參數作為函數名來包裹住 JSON 資料，這樣用戶端就可以隨意命名自己的函數並處理返回的資料了。

``` js
<script>
  function receiveData (response) {
    console.log(response);
  }
</script>
<script src="https://api.XXX?client_id=xxx&callback=receiveData&limit=1"></script>
```

而 JSONP 的限制就是用戶端帶的參數只能用附加在網址上的方式（GET），沒辦法用 POST。

### 要如何存取跨網域的 API？
1. 跨來源嵌入：有些 HTML tag 是可以允許跨來源存取資源的，例如：`<script src="..."></script>`, `<img>`, `<video>`, `<link rel="stylesheet" href="...">`, `<iframe>` 等等。而上題所述的 JSONP 就是利用 `<script>` 標籤來獲得資料。

2. CORS (Cross-Origin Resource Sharing，跨來源資源共享) : 讓伺服器端在 Response 的 Header 裡面加上 `Access-Control-Allow-Origin`，表示其允許跨網域存取的來源。
例如：`Access-Control-Allow-Origin: *` * 代表萬用字元，意思是任何一個 Origin 都接受。
而其他例如 `Access-Control-Allow-Headers` 跟 `Access-Control-Allow-Methods`，可以定義接受哪些 Request Header 以及接受哪些 Method。也是伺服器端在 Response Header 可以設定的欄位。

### 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為跨網域的同源政策是針對**瀏覽器**所設置。這週我們使用瀏覽器這個環境幫我們發出 request，而第四週是使用 node.js 這個執行環境，所以不受同源政策的影響。

其中值得一提的是，用瀏覽器跨網域發出請求時，「Request 還是有發出去」，而且「瀏覽器也確實有收到從伺服器傳回來的 Response」，但重點是「瀏覽器因為同源政策，不把結果傳回給我們的 JavaScript」。


#### 參考資料
* [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
* [什麼是 Ajax？ 搞懂非同步請求 (Asynchronous request)概念](https://tw.alphacamp.co/blog/ajax-asynchronous-request)
* [AJAX - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/AJAX)
* [JSONP - JSON 教學 Tutorial](https://www.fooish.com/json/jsonp.html)
* [用 JSONP 跨域 GET 簡易示範 ＆ 說明](https://medium.com/@brianwu291/jsonp-with-simple-example-4711e2a07443)
* [Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [Same Origin Policy 同源政策 ! 一切安全的基礎](https://medium.com/@jaydenlin/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)
* [跨來源資源共用（CORS） - HTTP | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)