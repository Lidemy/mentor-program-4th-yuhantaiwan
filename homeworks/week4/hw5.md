## 請以自己的話解釋 API 是什麼
當我(使用者端)要跟伺服器端有互動(例如：獲得、新增、更新、刪除資料)時，API 是我們兩個之間的溝通介面。根據對方制定好的規則，我發出符合格式的需求，就能拿到我所想要的回應。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. `401 Unauthorized` : 未獲得認證。表示需要憑證，符合身份認定，才能獲得想要的回應。
2. `504 Gateway Timeout` ： 未能即時從伺服器端獲得回應。
3. `415 Unsupported Media Type` : 希望提交的媒體類型，不被伺服器端所接受。
  
＊ `418 I'm a teapot` : 我只是一個茶壺，無法煮你所要求的咖啡。當初在查找資料，看到這個狀態碼覺得很有趣，進一步搜尋後，發現 Huli 老師已經針對這個狀態碼寫了詳盡的[文章](https://blog.techbridge.cc/2019/06/15/iam-a-teapot-418/)。感謝老師的這篇文章，讓我弄清楚 `418` 其實並不是真正的 Http 狀態碼。另外，也在這篇文章－
[常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)中，看到有自定義的 `7xx-rfc` 覺得還滿有趣的！


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### Base URL
`https://taiwansmile-restaurant.com/DataAPI/v1`

### 獲得所有餐廳資訊
#### Method: `GET`
#### Path: `/api/restaurants`
#### Parameters

| Parameter | Description | Parameter Type | Data Type | Required |
|-----------|-------------|----------------|-----------|---------|
| limit     | 限制回傳資料數量 | query  | number | No |
Parameter content type: `application/json`

#### Response
**Success**
HTTP Status Code: 200
Example Value:
```
[
  {
    "Name": "string",
    "Id": "number",
    "Address": "string",
    "Tel": "string",
    "OpenTime": "string",
    "Feature": "string",
    "CreditCard": "boolean"
  }
]
```
**Fail**

| HTTP Status Code | Error Message |
|------------------|-------------|
| 404      | 找不到路徑    |
| 500      | 系統內部錯誤  |


### 獲得單一餐廳資訊
#### Method: `GET`
#### Path: `/api/restaurants/{id}`
#### Parameters

| Parameter | Description | Parameter Type | Data Type | Required |
|-----------|-------------|----------------|-----------|---------|
| id    | 餐廳編號 | path  | number | Yes |

Parameter content type: `application/json`

#### Response
**Success**
HTTP Status Code: 200
Example Value:
```
{
  "Name": "string",
  "Id": "number",
  "Address": "string",
  "Tel": "string",
  "OpenTime": "string",
  "Feature": "string",
  "CreditCard": "boolean"
}
```
**Fail**

| HTTP Status Code | Error Message |
|------------------|-------------|
| 404      | 找不到路徑    |
| 500      | 系統內部錯誤  |



### 新增餐廳資訊
#### Method: `POST`
#### Path: `/api/restaurants`
#### Parameters

| Parameter | Description | Parameter Type | Data Type | Required |
|-----------|-------------|----------------|-----------|---------|
| Name    | 餐廳名稱    | body | string | Yes |
| Address | 餐廳地址    | body | string | Yes |
| Tel     | 餐廳電話    | body | string | Yes |
| Feature | 餐廳特色介紹 | body | string | Yes |
| OpeningTime | 餐廳營業時間 | body | string | No |
| CreditCard | 餐廳是否接受刷卡消費 | body | boolean | No |

Parameter content type: `application/json`
Example Value:

```
{
  "Name": "Lidemy",
  "Address": "Taiwan",
  "Tel": "123456789",
  "OpenTime": "Mon-Sun 24hr",
  "Feature": "yoyoyo",
  "CreditCard": "True"
}
```

#### Response
**Success**
| HTTP Status Code | Description |
|------------------|-------------|
| 200      |  Success   |

**Fail**

| HTTP Status Code | Error Message |
|------------------|-------------|
| 404      | 找不到路徑    |
| 500      | 系統內部錯誤  |


### 更新餐廳資訊
#### Method: `PUT`
#### Path: `/api/restaurants/{Id}`
#### Parameters

| Parameter | Description | Parameter Type | Data Type | Required |
|-----------|-------------|----------------|-----------|---------|
| Id      | 餐廳編號    | path | number | Yes |
| Name    | 餐廳名稱    | body | string | Yes |
| Address | 餐廳地址    | body | string | Yes |
| Tel     | 餐廳電話    | body | string | Yes |
| Feature | 餐廳特色介紹 | body | string | Yes |
| OpeningTime | 餐廳營業時間 | body | string | No |
| CreditCard | 餐廳是否接受刷卡消費 | body | boolean | No |

Parameter content type: `application/json`
Example Value:

```
/api/restaurants/1

{
  "Name": "Lidemy",
  "Address": "Taiwan",
  "Tel": "987654321",
  "OpenTime": "Mon-Sun 24hr",
  "Feature": "yoyoyo 123",
  "CreditCard": "True"
}
```

#### Response
**Success**
| HTTP Status Code | Description |
|------------------|-------------|
| 200      |  Success   |

**Fail**

| HTTP Status Code | Error Message |
|------------------|-------------|
| 404      | 找不到路徑    |
| 500      | 系統內部錯誤  |


### 刪除餐廳資訊
#### Method: `DELETE`
#### Path: `/api/restaurants/{Id}`
#### Parameters

| Parameter | Description | Parameter Type | Data Type | Required |
|-----------|-------------|----------------|-----------|---------|
| Id      | 餐廳編號    | path | number | Yes |

Parameter content type: `application/json`

#### Response
**Success**
| HTTP Status Code | Description |
|------------------|-------------|
| 200      |  Success   |

**Fail**

| HTTP Status Code | Error Message |
|------------------|-------------|
| 404      | 找不到路徑    |
| 500      | 系統內部錯誤  |
