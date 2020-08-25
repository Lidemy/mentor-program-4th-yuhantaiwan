### 什麼是 DOM？
DOM 全名，Document Object Model，中文翻譯為文件物件模型。一個網頁就是一份文件，瀏覽器則會編譯我們寫的網頁程式。為了讓不同的瀏覽器有共同的標準可以遵守，W3C 因此制訂了標準物件模型，讓各瀏覽器廠商可以依此一模型進行實作與擴充。在 DOM 的標準下，一份 HTML 文件內的各個標籤，包括文字、圖片等等都定義成物件，而這些物件形成一個樹狀結構。

![](https://i.imgur.com/cl90hHy.png)

參考資料：
* [W3C DOM 簡介](https://openhome.cc/Gossip/JavaScript/W3CDOM.html)

### 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞機制的順序是先捕獲(capture)，到達目標(target)後，再冒泡(bubble)。
捕獲階段(CAPTURING_PHASE)：事件傳遞從根節點(window)開始往下傳遞到目標(target)。
冒泡階段(BUBBLING_PHASE)：事件傳遞從目標(target)開始向上傳回去根節點(window)。

![](https://i.imgur.com/pvp1um9.png)

參考資料：
* [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

* [event-flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)

### 什麼是 event delegation，為什麼我們需要它？
event delegation 又名事件代理或事件委任。利用事件傳遞機制中的冒泡階段，讓我們可以把事件處理綁定在父層元素，減少為每個子層元素綁定事件處理的方式。
好處：
1. 節省記憶體。
2. 動態新增或刪除元素時，不用再為每個元素綁定或移除事件處理。

好文推薦：
* [為什麼有時你應該優先考慮 event delegate 而不是 event binding](https://ithelp.ithome.com.tw/articles/10120565)

參考資料：
* [Event delegation](https://javascript.info/event-delegation)

### event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

* `event.preventDefault()`： 阻止元素的預設行為，例如：送出表單、超連結到別的網址等。但不會影響事件的傳遞，事件仍會繼續傳遞。

* `event.stopPropagation()`：阻止事件的冒泡階段。

```html
<div class="container">
  <div class="box">
    <a class="link" href="www.google.com">Google</a>
  </div>
</div>
```
```javascript
document.querySelector('.link').addEventListener('click', function(e) {
  e.preventDefault()  
  console.log('This is a link to google') 
})
```
阻止超連結的導頁行為，但仍然會出現 console 內容 'This is a link to google'。

```javascript
document.querySelector('.container').addEventListener('click', function(e) {
  console.log('This is a container') 
})

document.querySelector('.box').addEventListener('click', function(e) {
  console.log('This is a box') 
})

document.querySelector('.link').addEventListener('click', function(e) {
  e.preventDefault()  
  console.log('This is a link to google')
  e.stopPropagation()  
})
```
阻止事件冒泡，原本點擊超連結，因為事件傳遞機制 console 內容會是 'This is a link to google', 'This is a box', 'This is a container'，加了 `e.stopPropagation()` 後，就只會出現 'This is a link to google'。

參考資料：
* [[筆記][JavaScript]所謂的「停止事件」到底是怎麼一回事？](https://ithelp.ithome.com.tw/articles/10198999)