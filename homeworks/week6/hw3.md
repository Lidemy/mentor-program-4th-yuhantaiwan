## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

### 1. `<details>` & `<summary>`

* `<details>` : 可以讓使用者藉由點擊，來展開或收起 `<details>` 內包裹的內容。
* `<summary>` : 與 `<details>` 一起使用，為 `<details>` 顯示可見的標題

```html
<details>
  <summary>Click me</summary>
  <div>
    <p>This is an animal.</p>
    <img src="http://lorempixel.com/600/400/animals" />
  </div> 
</details>
```

可以藉由調整 `summary::-webkit-details-marker` 來改變 marker 的樣式。 
[codepen](https://codepen.io/YuHan0704/pen/abNzxGN) 連結


### 2. `<meter>` & `<progress>`

* `<meter>`: 顯示已知範圍內的某個測量數據或分數。
有 `value`, `min`, `max`, `low`, `high`, `optimum` 等屬性可以使用。
當 `value` 在 `low` 之下, `high` 之上，與之間，會呈現不一樣的顏色。

* `<progress>`: 顯示任務完成的進度狀況。常與 Js 搭配使用。
有 `max` 與 `value` 等屬性可以使用。

```html
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50"> at 50/100 </meter>

<progress id='progress' max="100" value="0"></progress>
```

 [codepen](https://codepen.io/YuHan0704/pen/VwaLjgL) 連結


### 3. `<mark>`
* `<mark>`: 用來標記或凸顯文字。與 `<strong>` 標籤不同的是，`<strong>` 表現的是重要性；`<mark>` 表現的是相關性。

```html
<p>It is a dark time destroyed <mark>Imperial</mark> troops have driven </p>
```

[codepen](https://codepen.io/YuHan0704/pen/yLONXdq) 連結



## 請問什麼是盒模型（box model）
每個 HTML 元素都可以視為一個盒子 (box)。CSS 盒模型（box model）包裝每個 HTML 元素。每個盒模型（box model）包含：content（實際內容）, padding（內距）, border（邊線）, 與 margin（外距）。

![](https://i.imgur.com/88g1CJj.png)


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

* `inline`: 元素佔據的寬度只有內容寬度。
  1. 不可設定寬度與高度。
  2. 可以設定 padding/margin，但不會影響到其他元素的排列。還是維持行內排列。

[codepen連結](https://codepen.io/YuHan0704/pen/zYqGgOe)


* `block`: 元素佔據的寬度為一整行。
  1. 可設定寬度與高度。
  2. 設定 padding/margin，會影響到其他元素的排列。

[codepen連結](https://codepen.io/YuHan0704/pen/yLONmOq)


* `inline-block`: 結合 `inline` 與 `block` 的特性。
  1. 元素以 inline 行內排列，但可以設定寬高。
  2. 設定 padding/margin，會影響到其他元素的排列。

[codepen連結](https://codepen.io/YuHan0704/pen/abNOeBe)



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* `static` : 預設值。元素「不會被特別定位」在頁面上特定位置，而是照著瀏覽器預設的配置自動排版在頁面上。無法定義 top、left、bottom 與 right。

* `relative` : 與 static 位置相同，可定義 top、left、bottom 與 right。 **元素移動後仍會佔據原始位置** 。

* `absolute`: 以 **「父層非 static」** 的元素為定位基準。若上層所有父元素都是預設的 static 定位，則會根據 body 定位。

* `fixed` : 以目前瀏覽器視窗定位，固定在瀏覽視窗的固定位置，不會隨滾動捲軸而移動。

[codepen連結](https://codepen.io/YuHan0704/pen/ZEWbvpM)



### 參考資料來源
* [10 superpowers HTML5 gives you (and you are not using)](https://dev.to/shadowwarior5/10-superpowers-that-html5-gives-you-and-you-are-not-using-4ph1)
* [\<details>: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#Customizing_the_disclosure_widget)
* [\<progress>: The Progress Indicator element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
* [\<mark>: The Mark Text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
* [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
* [Understanding positioning in CSS](https://dev.to/huijing/understanding-positioning-in-css-7mn?ref=dailydevlinks.com)

