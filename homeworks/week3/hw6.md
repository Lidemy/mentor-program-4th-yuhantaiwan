## Week 3 作業解題心得

### hw1：好多星星
這題利用迴圈進行字串的累加來執行。

### hw2：水仙花數
因為有在 AG101 上看過 Huli 解這題，所以有點印象。
看完題目後，思考如何拆解步驟：
1. **判斷取得的數字是幾位數**：
  利用迴圈跑該數字可以被 10 整除幾次。
2. **取得該數字每個位數上的數字**：
  利用迴圈跑該數字每次被 10 整除的餘數。
   
### hw3：判斷質數
解題思路：
1. 數字先用迴圈跑可以被整除(餘數為零)的次數為多少，也就是因數有幾個。
2. 最後判斷如果因數個數等於 2，就是質數，其餘都是合數(包含1)。

### hw4：判斷迴文
這題用到之前練習過要把字串反轉的技巧。
解題思路：
1. 先用迴圈獲得反轉字串
2. 最後判斷兩個字串是否相等。

### hw5：聯誼順序比大小
魔王題，原本很順利地解出來，在自己電腦上測試 ok，但在 LidemyOJ 上就是不通過。當我正在困惑時，剛好看到 Huli 在 slack 上的發文，就跑去 spectrum 上看，才知道問題出在哪裡。於是回去看 \[ALG101] Unit3.2：最重要的小事：輸入範圍，發現 Huli 在這支影片中已經有先提醒這題要特別注意的地方了，但自己看過卻沒有特別留意。這就是所謂的魔鬼藏在細節裡吧！果然還是實際解題踩到痛點，才會印象深刻。原來在 Js，當數字大於 `2¹⁰²⁴` 或是 `1.7976931348623157E+10308` 就會變成 `Infinity`，這個時候再怎麼比大小也沒用。
這裡感謝當時發問的同學，以及 Huli 在下面給的提示，不然真的不會想到可以用字串去比大小。
解題思路：
1. 比較兩個字串長度來判斷大小，分成三種情況：
   (1). a.length > b.length
   (2). a.length < b.length
   (3). a.length === b.length
2. 又當兩者長度一樣時，跑迴圈從最前面的位數一個個比較

### 那些我與 ESLint 相處的規則

~~ESLint 真是讓人又愛又恨的朋友~~
在此記錄在 commit 作業後，曾出現的 ESLint Error：

1.  `prefer-const`: 'number' is never reassigned. Use 'const' instead
2.  `keyword-spacing`: Expected space(s) after "while" / "if" / "for"
3.  `operator-assignment`: Assignment can be replaced with operator assignment
4.  `no-plusplus`: Unary operator '++' used
5.  `no-restricted-properties`: 'Math.pow' is restricted from being used. Use the exponentiation operator (**) instead
6.  `no-mixed-operators`: Unexpected mix of '+' and '**'
7.  `quotes`: Strings must use singlequote
8.  `semi`: Missing semicolon
9.  `space-before-function-paren`: Missing space before function parentheses
10. `prefer-arrow-callback`: Unexpected function expression
11. `comma-dangle`: Missing trailing comma
12. `no-var`: Unexpected var, use let or const instead
13. `space-infix-ops`: Operator '=' must be spaced
14. `no-use-before-define`: 'printStars' was used before it was defined -> disable
15. `no-shadow`: 'lines' is already declared in the upper scope -> disable
16. `eol-last`: Newline required at end of file but not found
17. `no-else-return`: Unnecessary 'else' after 'return'
18. `eqeqeq`: Expected '=\==' and instead saw '=='
19. `consistent-return`: Expected to return a value at the end of function 'compareStr'

在這些錯誤中，我對於 `no-use-before-define`, `no-shadow`, 以及 `no-plusplus` 這三個 rule 做了一些修改。因為還是習慣把 function 寫在一起；有時寫 function 內的參數時，會用與變數相同的名稱（例如作業中的 `function solve(lines)`），以及還是習慣在迴圈中使用 `i++` 或 `i--`，但又不想每次都在每個作業中加上 eslint disable 的註解，於是就到 `.eslintrc.js` 中做了一些修改。
以下是新增的 rule :

```
 rules: {
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-use-before-define": ["error", { "functions": false }],
    "no-shadow": ["error", { "allow": ["lines"] }],
  },
```

除了這三個 error，我最常犯的錯誤就是 `prefer-const`，我宣告變數時經常使用 `let`，之前認為只有不變的常數，例如：圓周率 3.14 等才會使用 `const`，不過根據解釋：If a variable is only assigned to once when it is declared, it should be declared using ‘const’。所以只要在我宣告時被賦值一次，其後都沒有再對此變數賦值的話，就可以使用 `const`。

第二個犯最多錯的就是 `keyword-spacing`，我之前寫 if, while 或 for 時後面直接接括號，沒有空格。這真的寫習慣了，所以會常常忘記。

此外，看到 `no-else-return` 這個 rule，才知道自己之前這樣寫是很多餘的：
``` javascript
function compareStr() {
  if () {
    ...
    return ...
  } else {
    return ...
  }
}
```
直接這樣寫就好：
``` javascript
function compareStr() {
  if () {
    ...
    return ...
  }
  return ...
}
```

另外，讓我覺得比較特別的就是 `consistent-return`。在 hw5.js 中我比較字串大小的 function compareStr 是下了三種情況下 (a.length >, <, === b.length)又 k === 1 的判斷，分別 return 'A', 'B', 或 'DRAW'，而根據 eslint error 建議，是希望我在 function 的最後要 return 值，但因為想不到除了這三種情況外，我還能 return 什麼值，最後我嘗試多寫了 `return undefied`，沒想到就通過了。雖然可以猜想他的用意是 function 一定要有 return 值，但我想不到除了這三種情況外，什麼情況下會 `return undefied`。

ESLint 不只是一種 JavaScript 風格規範，他也同時讓你避免了潛在可能的錯誤。我認為在多人協作的專案底下，還滿需要這種能統一風格的規範。我現在在公司接觸過早期沒有風格規範的專案，發現每個人寫得都不太一樣，在看程式碼時會覺得有些痛苦，不知道依循什麼樣的方式寫會比較好。而在修改 ESLint Error 時，雖然有覺得不習慣的地方，但也學習到不少知識。

### 後記：在看了自我檢測後
在要 push 作業之前，想起要先去看自我檢測，原本以為答案在 LidemyOJ 上都是 Accepted，也通過 ESLint 了，應該沒什麼問題。沒想到看了自我檢測之後，發現自己的程式碼還有很多可以改進的地方。

後來主要修改的部分有兩個：
1. 把 `return` 和 `console.log` 分開來
2. 使用 `三元運算子` 與 `return`，讓程式碼更簡潔

除此之外，在解法上也有些許不同。其中 hw5 是差異最多的。在一開始比大還是比小的判斷上，讓兩個數可以互換，就能減少後面還要寫比大或是小的判斷式。
在看了老師提供的參考答案時，除了會有：「啊！原來可以這樣寫」的驚奇感，也讓我學習到了不同的解題思路。
