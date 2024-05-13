# string出现最多的char

## 描述
查找字符串中出现最多的字符和个数

## 思路
1.一个循环遍历字符串\
2.用一个数组times[]装每个字符出现的次数，比如times[97] 是a出现的次数，101，是e出现的次数\
3.用一个三元符 tmp = times[i]>tmp?times[i]:tmp得到最大值
## 答案
``` c
#include <stdio.h>

void main()
{
    char array[10] = "aabbccdeee";

    int times[1000] = {0};
    for (int i = 0; i < 10; i++)
    {
        times[array[i] + 0]++;
    }
    int tmp = 0;
    int position = 0;
    for (int i = 0; i < 1000; i++)
    {
        if (times[i] > tmp)
        {
            tmp = times[i];
            position = i;
        }
    }

    printf("%d", tmp);
    char ascii_to_char = position;
    printf("%c", ascii_to_char);
}

```

