# Django ORM (增改删)

> ObjectModel():django.db.models.Model
> ObjectSerializer:serializers.ModelSerializer

## 增加1

```python
# 增加数据的对象
add_object = ObjectModel()

add_object.field1 = 0
add_object.field2 = ""
add_object.field3 = ('1','2')[0]

add_object.save()

# with serializers
add_object_data = {}
add_object_serializer = ObjectSerializer(data=add_object_data)
add_object_serializer.save() # 调用 ModelSerializer.create(self, validated_data)
```

## 增加n

```python
# 增加数据的对象列表
add_object_list = [ObjectModel() for xx in list]
# 批量存储
ObjectModel.objects.bulk_create(add_object_list)
```

## 增加 1-n

## 增加 n-1

## 增加 n-n

## 修改1

```python
object = ObjectModel.objects.filter().update(field1=0)
object.field2 = '8848'
object.save()
```

## 删除1

```python
ObjectModel.objects.filter().delete()
```