# 跟你朋友介紹 Git
## 題目
因為你的人實在是太好，時不時就會有朋友跑來找你來幫忙。

這次來的是一個叫做菜哥的朋友，會叫做菜哥是因為家裡賣菜，跟你認識的其他人同名的話純屬巧合。

菜哥：「就是啊，我最近有一個煩惱。因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」

『好吧，我試試看』

菜哥：「謝啦，話說你來參加這個計畫學程式真的選對了欸，之後就不會有貧血的困擾了」

『為什麼』

「因為你會寫程式」

『...』

「喔...原來是血乘四的部分啊（拍手）」

就是這樣，在一陣尬聊之中你答應了菜哥的要求，要教他怎麼使用 Git 來管理他的笑話。

因此，你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講，菜哥能不能順利成為電視笑話冠軍，就靠你了！

## 答案
菜哥，Git 就是一種版本控制的系統。版本控制簡單來說就是進階版的檔案管理。不只是基本的新增、複製與刪除檔案，還能詳細紀錄檔案內容是誰以及什麼時候寫的，保留所有歷史紀錄。在不小心刪掉檔案後，還能找回來！總之，使用 Git 超方便的！
在開始使用 Git 前，我們要先了解在 Git 裡，檔案有不同的工作區域。
1. 工作目錄（Working Directory）： 就是你電腦裡的工作區，現在正在編輯檔案的地方。
2. 暫存區（Staging Area）： 在你要把檔案交給 Git 留下記錄前，先把檔案暫時存放的地方。
3. 儲存庫（Repository）： 就是正式把檔案存放在 Git 的地方。放在這裡，才會在 Git 裡留有記錄喔！
   
假設今天早上你想到了一個棒的笑話，你把他記下來存成 joke1，存在 Documents 底下的 jokesAll 這個資料夾內。有了檔案後，你就可以用 Git 做版本控制了！

1. 打開你的終端機，將目前所在位置移到 jokesAll 這個資料夾

p.s. 若不清楚早怎麼使用 CLI，你可以問 h0w哥，我將武功秘訣都告訴他了～
```
$ pwd  # 目前所在位置 
/Users/tsai

$ ls  # 列出目前所在位置底下的所有資料夾與檔案
Applications Documents    Library      Music        Pictures     Public       hello-world
Desktop      Downloads    Movies

$ cd Documents/jokesAll  # 移動到 jokesAll 這個資料夾
```

2. 對你的資料夾進行 Git 的初始化
   
```
$ git init
Initialized empty Git repository in /Users/tsai/Documents/jokesAll/.git/
```
使用 `git init` 才能讓 Git 對這個資料夾進行版本控制。
這時你會發現在你的 jokesAll 這個資料夾內，多了一個 `.git` 的隱藏檔。有了這個隱藏檔，就表示你的 Git 初始化成功啦！

3. 知道目前 Git 的狀態

首先，教你一個好用的指令 `git status`，他可以呈現目前 jokesAll 資料夾下，所有檔案的 Git 狀態。告訴你許多有用的資訊喔！

```
$ git status
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	joke1
nothing added to commit but untracked files present (use "git add" to track)
```

4. 把檔案放到暫存區
```
$ git add joke1  ＃或是
$ git add .
```
使用 `git add 檔案名稱` 指令，可以把檔案從本地端移到 Git 的暫存區，一次移動一個檔案，或是使用 `git add .` 一次移動全部檔案。

5. 把檔案正式提交到 Git 的儲存庫
```
$ git commit -m "訊息內容"
```
使用 `git commit` 把檔案從暫存區移動到儲存庫，並留下這次提交的一些訊息內容，例如："This is my first joke!"，
唯有把檔案放到儲存庫中，才能在 Git 中留下紀錄喔！

6. 檢視 commit 的紀錄

在這之後，若你想到什麼新的點子想放進 joke1，或是想到另一個全新的笑話，寫在 joke2，都可以用 `git add`, `git commit`，把檔案提交給 Git。若你想看歷史紀錄，使用 `git log` 指令就能查看。
```
$ git log
commit fb6232b78f5db742e2da3a7e2e4a00d96fa65e43 (HEAD -> master)
Author: 禦寒 <taiwansmile@gmail.com>
Date:   Sun Jun 21 00:57:23 2020 +0800

    create joke2

commit 8794f2c6b534156f0672ffc319a3546ef764aa18
Author: 禦寒 <taiwansmile@gmail.com>
Date:   Sun Jun 21 00:24:15 2020 +0800

    first commit
(END)
```
使用 `git log` 指令，可以檢視你所有 commit 的紀錄，包含：版本號碼、是誰以及什麼時間提交的。

7. 回到某個版本

有了 commit 留下的紀錄，我們就能用其獨特的識別碼，讓我們的工作區回復到某個特定的版本。
```
$ git checkout {版本號}
```
假設今天你覺得第二次 commit 的內容不喜歡，想回到第一個版本時，就可以利用 `git checkout` 加上第一次的版本號，就能回到過去啦。

8. 開分支開發新功能

```
$ git branch {分支名稱}
```
如果今天你想找你的朋友 h0w 哥一起幫你想更好笑的笑話。那就可以另開分支，意思就是複製一份現在的工作區域內容。這樣你們可以分頭進行而不會相互影響了。   

9. 合併分支

```
$ git merge {new-feature}
```

今天 h0w 哥想出了不錯的點子，記錄在他分支上。你想把他的檔案合併進來，就可以使用 `git merge` 加上他的分支名稱，就能讓你的工作區包含他寫的新內容了。

菜哥，你會的差不多了。而目前這些版本控制都是放在電腦內，若你想要讓更多人看見你的笑話。就可以使用 GitHub。GitHub 就像是雲端的 Git repository。

10. 推上 GitHub

```
$ git remote add origin {網址}   # 建立遠端的連線
$ git push -u origin master
```
利用 `git push` 指令，就可以把電腦裡的檔案上傳到 GitHub

11. 獲得最新異動

```
$ git pull origin master
```
假設今天跟你一起合作工作的 h0w 哥，修改了一份檔案並上傳到 GitHub，若你想要獲得這份新的更動資料，就可以使用 `git pull` 指令，把遠端 master 分支的檔案拉下來到你的電腦裡。

以上就是基本的 Git 操作啦，多練習相信你很快就能得心應手，更能做好你的笑話大全檔案的版本控制，成為一個說笑話的大師吧！
