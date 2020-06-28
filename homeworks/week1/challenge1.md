# 挑戰題
## 題目
現在請你寫一個 shell script，可以傳入一個數字 n，然後會產生 1~n 個檔案，檔名是 {number}.js

## 答案
```
#!/bin/bash
for((i=1;i<=$1;i++))
do
  touch "${i}.js"
done
```