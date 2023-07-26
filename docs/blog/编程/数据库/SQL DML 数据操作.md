# SQL DML 数据操作

> DML（Data Manipulation Language）：
> DML用于在数据库表中执行数据的查询、插入、更新和删除等操作。它允许您操作数据库中的实际数据。



常见的DML语句包括：

- SELECT: 用于从数据库中查询数据。
- INSERT: 用于向表中插入新数据。
- UPDATE: 用于更新表中现有数据。
- DELETE: 用于删除表中的数据。



```sql
-- 查询数据
SELECT id, name, age FROM students WHERE age > 18;

-- 插入数据
INSERT INTO students (id, name, age) VALUES (1, 'John', 20);

-- 更新数据
UPDATE students SET age = 21 WHERE name = 'John';

-- 删除数据
DELETE FROM students WHERE age > 30;
```
