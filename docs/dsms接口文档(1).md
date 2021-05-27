# 定义

## 关于Http状态码

+ http状态码将返回标准状态码 如 200 404 500等

## 业务数据返回格式

+ 均为Json字符串，解析后格式如下:

```json
{
    "code": 0, 			// 正常返回0 其他代表异常
    "msg": "ok", 		// 信息 正常ok 异常返回错误描述
    "data": null 		// 业务参数 void返回null
}
```

## 默认约定

+ 除特殊标明外 本文档定义的接口参数均为: GET 问号参数，其它方法: requesst-payload中的Json格式数据
+ 当接口404时，业务数据将返回

```json
{
    "code": 404,
    "msg": "Not Found",
    "data": null
}
```



# 消息接口

## 发送消息

+ /dsms/t-message/
+ POST

+ 入参

| 参数名   | 类型 | 必传 | 含义         |
| -------- | ---- | ---- | ------------ |
| receiver | int  | 是   | 信息接收者id |
|msg|string|是|信息体|

+ 返回值

```json
{
    "code": 0, // 正常返回0 其他代表异常
    "msg": "ok", // 信息 正常ok 异常返回错误描述
    "data": null // 业务参数 void返回null
}
```



## 查询发给我的消息 

+ 入参 

无

+ 返回值

```json
{

"msgList" : [
        {
            "id":1,"sender":"hushunhang", "msg":"test", "sendTime":"时间戳"
        },
        {
            "id":2, sender":"hushunhang", "msg":"test", "sendTime":"时间戳"
        }
	]
}
```



## 消息已读

+ 入参 

| 参数名 | 类型 | 必传 | 含义   |
| ------ | ---- | ---- | ------ |
| id     | int  | 是   | 消息id |

+ 返回值

```json
{
    "code" : 0, // 其余代表异常
    "msg" : "ok", // 异常时返回错误信息
    "data" : null
}
```



# 学生相关接口 @TODO

## 查询学生列表 

## 查询学生流程

## 教练查询学生列表

## 查询教练列表

##  查看教练评价



# 核心流程接口

## 新增学员学习记录

+ `/dsms/t-user-licence`
+ POST
+ 入参

| 参数名 | 类型 | 必传 | 含义   |
| ------ | ---- | ---- | ------ |
| uid    | int  | 是   | 学员id |
|lid|int|是|驾驶证模板id|

+ 返回值

```json
{
    "code" : 0, // 其余代表异常
    "msg" : "ok", // 异常时返回错误信息
    "data" : null
}
```



## 查询当前用户曾经学习过的驾考列表

+ `/dsms/t-user-licence`
+ GET
+ 入参

无

+ 返回值

```json
{
	"code": 0,
	"msg": "ok",
	"data": [{
		"id": 13,
		"uid": 14, 					// 用户id
		"lid": 1, 					// 驾考流程模板id
		"licenceName": "小型机动车",
		"licenceEnName": "C1",
		"createTime": 1620727329,
		"activeFlag": 1 			// 当前驾考流程是否可用
	}]
}
```



## 根据驾考流程拷贝id查找主状态拷贝列表

+ `/dsms/t-user-process`
+ GET
+ 入参

| 参数名 | 类型 | 必传 | 含义             |
| ------ | ---- | ---- | ---------------- |
| id     | int  | 是   | 驾考流程拷贝的id |

+ 返回值

```json
{
	"code": 0,
	"msg": "ok",
	"data": [{
		"id": 33,
		"processName": "科目一",
		"processType": "0", 		// 0理论 1实操
		"ulid": 13, 				// 用户驾考模板拷贝id
		"order": 0, 				// 顺序
		"next": 2, 					// 下一主状态的顺序 -1代表已经是最后一个状态
		"last": -1 					// 上一主状态的顺序 -1代表已经是第一个状态
	}
}
```



## 根据主流程id查询子状态列表

+ `/dsms/t-user-process-list`
+ GET
+ 入参

| 参数名 | 类型 | 必传 | 含义     |
| ------ | ---- | ---- | -------- |
| id     | int  | 是   | 主流程id |

+ 返回值

```json
{
	"code": 0,
	"msg": "ok",
	"data": [{
		"id": 1,
		"stuId": 14,
		"prcId": 33, 				// 当前驾考流程中当前主状态拷贝记录的id
		"order": 0, 				// 当前用户驾考流程全局顺序
		"parent": 0, 				// 暂时无用
		"coachId": 1, 				// 教练id
		"prcStatus": 0, 			// 当前主状态中小状态的顺序
		"createTime": 20210511180210,
		"prcName": "科目一",
		"prcType": "0", 			// 当前大状态属于理论或实操  0理论 1实操
		"activeFlag": 1, 			// 当前状态是否为激活状态，一个进行中的驾考流程有且仅有一个激活状态
		"next": 1, 					// 下一主状态的order -1代表已经是最后一个状态
		"last": -1, 				// 上一主状态的order -1代表已经是第一个状态
		"checked": 1, 				// 当前状态流转时是否需要管理员审核
		"nextFlag": 1, 				// 当前状态是否允许用户流转至下一步
		"backFlag": 0, 				// 当前状态是否允许用户流转至下一步
		"stateName": "学习中"	  	  // 状态名
	}]
}
```



# 核心流程-状态流转接口

## 学员自行流转状态

+ `/dsms/t-user-process-list`

+ POST
+ 入参

| 参数名 | 类型    | 必传 | 含义                        |
| ------ | ------- | ---- | --------------------------- |
| flag   | boolean | 是   | true: 下一步, false: 上一步 |

+ 返回值

```json
{
    "code" : 0, // 其余代表异常
    "msg" : "ok", // 异常时返回错误信息
    "data" : null
}
```



## 教师流转学员状态

+ `/dsms/t-user-process-list/teacher`

+ POST
+ 入参

| 参数名 | 类型    | 必传 | 含义                        |
| ------ | ------- | ---- | --------------------------- |
| uid    | int     | 是   | 学员id                      |
| flag   | boolean | 是   | true: 下一步, false: 上一步 |

+ 返回值

```json
{
    "code" : 0, // 其余代表异常
    "msg" : "ok", // 异常时返回错误信息
    "data" : null
}
```

## 