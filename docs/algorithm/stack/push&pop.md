# 栈的压入、弹出序列

## 描述
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
1. 0<=pushV.length == popV.length <=1000
2. -1000<=pushV[i]<=1000
3. pushV 的所有数字均不相同
## 思路
这是一个利用入栈顺序，判断出栈顺序是否合理的题目。
我们干脆模拟这个过程，设置一个栈，同时利用在出入栈顺序各设置一个指针来模拟整个情况。
## 答案
``` c
#include <stdio.h>
bool IsPopOrder(int* pushV, int pushVLen, int* popV, int popVLen ) {
int stack[pushVLen];//栈
int point = -1;//栈指针
int in = 0;//pushV 指针
int out = 0;//popV指针
while(in<pushVLen&&out<popVLen){
    // 不相同就入栈，直到相同或超出范围
    while(in<pushVLen&&pushV[in]!=popV[out]){
        stack[++point] = pushV[in++];
    }
    // 相同情况，碰到先入栈
    stack[++point] = pushV[in++];
    // 出栈，直到不同为止
    while(point>-1&&stack[point]==popV[out]){
        out++;
        point--;
    }
}

if(point<0){
    return true;
}else {
return false;
}


}
```

## [题目网站](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=308&tqId=23290&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308)
