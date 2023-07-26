# SQL DDL 数据库管理

> DDL（Data Definition Language）：
> DDL用于定义和管理数据库的结构，即表的创建、修改和删除等操作。DDL语句是用于数据库和表的元数据管理

常见的DDL语句包括：

- CREATE: 用于创建数据库对象，如表、索引、视图等。
- ALTER: 用于修改数据库对象的结构，如修改表结构、添加字段等。
- DROP: 用于删除数据库对象，如删除表、索引等。
- TRUNCATE: 用于清空表中的所有数据，但保留表结构。
- COMMENT: 用于为数据库对象添加注释。

```sql
-- 创建表
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- 修改表结构
ALTER TABLE students
ADD email VARCHAR(100);

-- 删除表
DROP TABLE students;
```
