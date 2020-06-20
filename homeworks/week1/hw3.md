# 教你朋友 CLI
## 情境
學了一項東西之後若是想驗證自己是不是真的懂，教別人是最快的方法。

有天，你的麻吉 h0w 哥跑來找你說：「欸！能不能教我 command line 到底是什麼，然後怎麼用啊？我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。就交給你了，教學寫好記得傳給我，ㄅㄅ」

可...可惡，居然這樣子就跑走了。但因為他是你的麻吉，所以你也沒辦法拒絕。

因此這個作業要請你寫一篇簡短的文章，試圖教會 h0w 哥什麼是 command line 以及如何使用，並且要教他如何達成他想要的功能。

## 教學
h0w 哥，command line 就是用文字的方式跟電腦溝通。我們要打開電腦裡面的 Command-Line-Interface，來對電腦下指令，讓它達成我們要做的事。例如：在 Windows 就打開『命令提示字元』(cmd.exe)；在 Mac 就打開『終端機』(terminal) 來操作。
h0w 哥，我知道你是政X大學經X系畢業，英文一定很好，尤其裸考指考英文都難不倒你了對不對～ 你會這些指令的英文的話，記 command line 就會容易得多！
首先，先確認你想在哪裡建資料夾？假設你想在電腦裡面的文件中建這個資料夾。那我們就必須先知道我們現在在電腦的哪裡。
要知道我們現在的位置，就是輸入 `pwd`，意思就是 Print Working Directory，印出從根目錄到現在的所在位置路徑，而要知道我們現在所在位置有哪些資料夾和檔案的話，輸入 `ls`，就是 LiSt，印出現在資料夾下的資料夾與檔案。要切換到不同地方的話，就輸入 `cd 路徑`，Change Directory，切換資料夾」

```
$pwd
/Users/h0w
```
我們現在在起始目錄

```
$ls
Applications Documents    Library      Music        Pictures     Public       hello-world
Desktop      Downloads    Movies       MyApp
```
起始目錄下有這些資料夾

```
$cd Documents
```
我們現在來到文件中啦

再來我們要新建一個叫 wifi 的資料夾。建立資料夾的指令是 `mkdir 資料夾名稱`，MaKe DIRectory

```
$mkdir wifi
```
這樣就建好 wifi 資料夾囉，接著讓我們移動到 wifi 資料夾內。

```
$cd wifi
```
最後就是建立檔案啦。新建檔案很簡單，就是去『碰』一下。輸入 `touch 檔案名稱` 就可以了！

```
$touch afu.js
```
大功告成！h0w 哥，剛開始你可能會有些不熟悉，但多練習幾遍就 ok 了。相信你可以的！就這樣啦，ㄅㄅ ~