<template><div><h1 id="mysql-表操作" tabindex="-1"><a class="header-anchor" href="#mysql-表操作" aria-hidden="true">#</a> mysql 表操作</h1>
<h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2>
<h3 id="字段类型表" tabindex="-1"><a class="header-anchor" href="#字段类型表" aria-hidden="true">#</a> 字段类型表</h3>
<table>
<thead>
<tr>
<th>字段类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>INT</td>
<td>整数类型，范围为-2147483648到2147483647</td>
</tr>
<tr>
<td>BIGINT</td>
<td>大整数类型，范围为-9223372036854775808到9223372036854775807</td>
</tr>
<tr>
<td>FLOAT(M, D)</td>
<td>单精度浮点数，M表示总位数，D表示小数点后的位数</td>
</tr>
<tr>
<td>DOUBLE(M, D)</td>
<td>双精度浮点数，M表示总位数，D表示小数点后的位数</td>
</tr>
<tr>
<td>DECIMAL(M, D)</td>
<td>定点小数，M表示总位数，D表示小数点后的位数，用于精确计算</td>
</tr>
<tr>
<td>CHAR(N)</td>
<td>固定长度字符串，最大长度为255个字符</td>
</tr>
<tr>
<td>VARCHAR(N)</td>
<td>可变长度字符串，最大长度为N个字符</td>
</tr>
<tr>
<td>TEXT</td>
<td>长文本类型，可存储大量文本数据</td>
</tr>
<tr>
<td>DATE</td>
<td>日期，格式为'YYYY-MM-DD'</td>
</tr>
<tr>
<td>TIME</td>
<td>时间，格式为'HH:MM:SS'</td>
</tr>
<tr>
<td>DATETIME</td>
<td>日期和时间，格式为'YYYY-MM-DD HH:MM:SS'</td>
</tr>
<tr>
<td>TIMESTAMP</td>
<td>自动记录记录插入或修改的时间戳</td>
</tr>
<tr>
<td>BOOL 或 BOOLEAN</td>
<td>布尔值，取值为TRUE或FALSE</td>
</tr>
<tr>
<td>ENUM('value1', 'value2', ...)</td>
<td>枚举类型，可从指定的值列表中选择一个</td>
</tr>
<tr>
<td>BINARY(N)</td>
<td>固定长度二进制字符串，最大长度为N个字节</td>
</tr>
<tr>
<td>VARBINARY(N)</td>
<td>可变长度二进制字符串，最大长度为N个字节</td>
</tr>
<tr>
<td>BLOB</td>
<td>二进制大对象，可存储大量二进制数据</td>
</tr>
<tr>
<td>JSON</td>
<td>JSON数据类型，可存储和操作JSON格式数据</td>
</tr>
</tbody>
</table>
<h3 id="字段约束表" tabindex="-1"><a class="header-anchor" href="#字段约束表" aria-hidden="true">#</a> 字段约束表</h3>
<table>
<thead>
<tr>
<th>约束名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>PRIMARY KEY</td>
<td>指定列为主键，唯一标识表中的每一行</td>
</tr>
<tr>
<td>UNIQUE</td>
<td>指定列的值必须是唯一的，可以允许空值（NULL）</td>
</tr>
<tr>
<td>NOT NULL</td>
<td>指定列的值不能为空，不允许插入或更新为空值（NULL）</td>
</tr>
<tr>
<td>DEFAULT</td>
<td>指定列的默认值</td>
</tr>
<tr>
<td>CHECK</td>
<td>定义列的值必须满足的条件或规则</td>
</tr>
<tr>
<td>AUTO_INCREMENT</td>
<td>指定列的值自动递增，通常用于主键字段</td>
</tr>
<tr>
<td>FOREIGN KEY</td>
<td>创建外键约束，确保表中的列与其他表的列之间存在引用关系</td>
</tr>
<tr>
<td>ON UPDATE</td>
<td>在字段更新时执行 用于updated_at字段 DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</td>
</tr>
</tbody>
</table>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 常用字段写法</span>
<span class="token comment">-- id INT PRIMARY KEY AUTO_INCREMENT,</span>
<span class="token comment">-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,</span>
<span class="token comment">-- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_name <span class="token punctuation">(</span>
    column1 datatype <span class="token keyword">constraint</span><span class="token punctuation">,</span>
    column2 datatype constrain
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">INDEX</span> index_name <span class="token punctuation">(</span>column_name<span class="token punctuation">)</span>  <span class="token comment">-- 索引</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建修改索引" tabindex="-1"><a class="header-anchor" href="#创建修改索引" aria-hidden="true">#</a> 创建修改索引</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>-- 创建索引
CREATE INDEX index_name ON table_name (column_name);
-- 修改索引
CREATE INDEX index_name ON table_name (column1, column2, ...);
-- 修改索引
ALTER TABLE table_name ADD INDEX index_name (column_name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 添加字段</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">ADD</span> column_name datatype<span class="token punctuation">;</span>
<span class="token comment">-- 删除字段</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">DROP</span> column_name<span class="token punctuation">;</span>
<span class="token comment">-- 修改字段</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">MODIFY</span> column_name new_datatype<span class="token punctuation">;</span>
<span class="token comment">-- 修改表名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> old_table_name <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> new_table_name<span class="token punctuation">;</span>
<span class="token comment">-- 修改表注释</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">COMMENT</span> <span class="token string">'new_table_comment'</span><span class="token punctuation">;</span>
<span class="token comment">-- 修改字段注释</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">MODIFY</span> <span class="token keyword">COLUMN</span> column_name datatype <span class="token keyword">COMMENT</span> <span class="token string">'new_column_comment'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 删除字段</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> column_name<span class="token punctuation">;</span>
<span class="token comment">-- 删除表</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> table_name<span class="token punctuation">;</span>
<span class="token comment">-- 清空表</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
<span class="token comment">-- 截断表</span>
<span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> table_name<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


