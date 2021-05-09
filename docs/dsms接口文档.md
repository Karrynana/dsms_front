# 接口文档

## 发送消息

+ 入参

receiver, msg

+ 出参 void

## 查询消息

+ 入参 null
+ 出参

{

​	"msgList" : [{"id":1,"sender":"lina", "msg":"test", "sendTime":时间戳}, {"id":2, sender":"lina", "msg":"test", "sendTime":时间戳}]

}

## 消息已读

+ 入参 id
+ 出参 void

## 查询学生列表

+ 入参 null
+ 出参

{

​	"userLIst":[]

}

## 查询学生流程 TODO

## 修改学生流程信息 TODO

## 教练查询学生列表

+ 入参 null
+ 出参 userList

## 查询教练列表

+ 入参 null
+ 出参 非敏感信息 教练列表

##  查看教练评价

+ 入参 null
+ 出参 评价列表 匿名