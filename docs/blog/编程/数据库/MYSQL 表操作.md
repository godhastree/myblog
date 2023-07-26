# mysql 表操作

## 创建表

### 字段类型表

| 字段类型                          | 描述                                                |
| ----------------------------- | ------------------------------------------------- |
| INT                           | 整数类型，范围为-2147483648到2147483647                    |
| BIGINT                        | 大整数类型，范围为-9223372036854775808到9223372036854775807 |
| FLOAT(M, D)                   | 单精度浮点数，M表示总位数，D表示小数点后的位数                          |
| DOUBLE(M, D)                  | 双精度浮点数，M表示总位数，D表示小数点后的位数                          |
| DECIMAL(M, D)                 | 定点小数，M表示总位数，D表示小数点后的位数，用于精确计算                     |
| CHAR(N)                       | 固定长度字符串，最大长度为255个字符                               |
| VARCHAR(N)                    | 可变长度字符串，最大长度为N个字符                                 |
| TEXT                          | 长文本类型，可存储大量文本数据                                   |
| DATE                          | 日期，格式为'YYYY-MM-DD'                                |
| TIME                          | 时间，格式为'HH:MM:SS'                                  |
| DATETIME                      | 日期和时间，格式为'YYYY-MM-DD HH:MM:SS'                    |
| TIMESTAMP                     | 自动记录记录插入或修改的时间戳                                   |
| BOOL 或 BOOLEAN                | 布尔值，取值为TRUE或FALSE                                 |
| ENUM('value1', 'value2', ...) | 枚举类型，可从指定的值列表中选择一个                                |
| BINARY(N)                     | 固定长度二进制字符串，最大长度为N个字节                              |
| VARBINARY(N)                  | 可变长度二进制字符串，最大长度为N个字节                              |
| BLOB                          | 二进制大对象，可存储大量二进制数据                                 |
| JSON                          | JSON数据类型，可存储和操作JSON格式数据                           |

### 字段约束表

| 约束名称           | 描述                                                                            |
| -------------- | ----------------------------------------------------------------------------- |
| PRIMARY KEY    | 指定列为主键，唯一标识表中的每一行                                                             |
| UNIQUE         | 指定列的值必须是唯一的，可以允许空值（NULL）                                                      |
| NOT NULL       | 指定列的值不能为空，不允许插入或更新为空值（NULL）                                                   |
| DEFAULT        | 指定列的默认值                                                                       |
| CHECK          | 定义列的值必须满足的条件或规则                                                               |
| AUTO_INCREMENT | 指定列的值自动递增，通常用于主键字段                                                            |
| FOREIGN KEY    | 创建外键约束，确保表中的列与其他表的列之间存在引用关系                                                   |
| ON UPDATE      | 在字段更新时执行 用于updated_at字段 DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |



```sql
-- 常用字段写法
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constrain
    ...
    INDEX index_name (column_name)  -- 索引
    ...
);
```

## 创建修改索引

```mysql
-- 创建索引
CREATE INDEX index_name ON table_name (column_name);
-- 修改索引
CREATE INDEX index_name ON table_name (column1, column2, ...);
-- 修改索引
ALTER TABLE table_name ADD INDEX index_name (column_name);
```



## 修改表

```sql
-- 添加字段
ALTER TABLE table_name ADD column_name datatype;
-- 删除字段
ALTER TABLE table_name DROP column_name;
-- 修改字段
ALTER TABLE table_name MODIFY column_name new_datatype;
-- 修改表名
ALTER TABLE old_table_name RENAME TO new_table_name;
-- 修改表注释
ALTER TABLE table_name COMMENT 'new_table_comment';
-- 修改字段注释
ALTER TABLE table_name MODIFY COLUMN column_name datatype COMMENT 'new_column_comment';
```



## 删除表

```sql
-- 删除字段
ALTER TABLE table_name DROP COLUMN column_name;
-- 删除表
DROP TABLE table_name;
-- 清空表
DELETE FROM table_name;
-- 截断表
TRUNCATE TABLE table_name;


```


