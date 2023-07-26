## MYSQL 数据查询

``` sql
条件查询
SELECT column1, column2, ... 
FROM table_name 
WHERE condition 
ORDER BY column_name;

分组查询
SELECT customer_id, SUM(order_amount) AS total_amount
FROM orders
GROUP BY customer_id;


分组排序窗口查询
SELECT stu_name, stu_class, stu_score,
       RANK() OVER (PARTITION BY stu_class ORDER BY stu_score DESC) AS rank
FROM students;


查询转置
+---------+-----------+-------+
| stu_name|  subject  | score |
+---------+-----------+-------+
| Alice   | Math      | 90    |
| Alice   | English   | 85    |
| Alice   | Science   | 92    |
| Bob     | Math      | 78    |
| Bob     | English   | 80    |
| Bob     | Science   | 88    |
+---------+-----------+-------+

+---------+--------+-----------+-------+
| stu_name| Math   | English   | Science |
+---------+--------+-----------+-------+
| Alice   | 90     | 85        | 92      |
| Bob     | 78     | 80        | 88      |
+---------+--------+-----------+-------+

SELECT 
    stu_name,
    MAX(CASE WHEN subject = 'Math' THEN score END) AS Math,
    MAX(CASE WHEN subject = 'English' THEN score END) AS English,
    MAX(CASE WHEN subject = 'Science' THEN score END) AS Science
FROM scores
GROUP BY stu_name;

反之

SELECT stu_name, 'Math' AS subject, Math AS score FROM scores
UNION ALL
SELECT stu_name, 'English' AS subject, English AS score FROM scores
UNION ALL
SELECT stu_name, 'Science' AS subject, Science AS score FROM scores;



SELECT stu_name, score,
    CASE 
        WHEN score >= 90 THEN '优秀'
        WHEN score >= 80 THEN '良好'
        WHEN score >= 60 THEN '及格'
        ELSE '不及格'
    END AS grade
FROM students;

多列合并
SELECT CONCAT(column1, ' ', column2, ' ', column3) AS merged_column
FROM table_name;


拆分一列
SELECT 
    SUBSTRING(date_column, 1, 4) AS year,
    SUBSTRING(date_column, 6, 2) AS month,
    SUBSTRING(date_column, 9, 2) AS day
FROM table_name;
```
