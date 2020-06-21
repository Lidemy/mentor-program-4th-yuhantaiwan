# 交作業流程
## 本地端                                                
1. 把專案複製到本地端：`git clone ${git clone 網址}`
2. 新建一個 week1 分支：`git branch week1`
3. 切換到該分支：`git checkout week1`
4. 打開檔案：`open hw1.md`
5. 寫作業
6. 寫完後確認狀態：`git status`
7. * 將檔案交給 git 管控：[把檔案放進暫存區 staging area]
     * 提交單一檔案：`git add hw1.md`
     * 提交全部檔案：`git add .`
   * 捨棄此次寫的內容：[此時檔案還是在工作區 working area]
     * 捨棄單一檔案：`git checkout --hw1.md`
     *  捨棄全部檔案：`git checkout .`
   
8. 將檔案儲存進 git：`git commit -m "${要提交的訊息內容}"`
   [此時檔案放進儲存庫 repository 了]
9. * 想修改最後一次 commit message：`git commit --amend -m "${要修改的訊息}"`
   * 想修改之前歷史紀錄的 commit message：`git rebase `
     (1) 查看歷史紀錄：`git log --oneline`
     (2) `git rebase -i ${要回去的版本}`
     (3) 把 `pick` 改成 `reword`
     (4) 修改訊息內容，存檔離開

## 推到遠端 GitHub
10. 確認與遠端的連線 `git remote`
11. 把檔案推到遠端 `git push origin week1`
12. 到 GitHub 發起 `pull request`
13. 把 PR 的網址貼在學習系統上給助教
14. 待助教看過後，他會在 GitHub 上按下 `Merge pull request` 的按鈕
15. 刪掉遠端 week1 分支
    
## 將遠端狀態與本地端同步
16. 切換到 master 分支：`git checkout master`
17. 把遠端 master 最新異動拉進來：`git pull origin master`
18. 把本地端 week1 分支刪掉：`git branch -d week1`








































































