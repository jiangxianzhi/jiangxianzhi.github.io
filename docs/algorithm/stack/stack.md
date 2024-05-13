# Stack

## 描述
请你实现一个栈。\
操作：\
push x：将加x 入栈，保证\
x 为 int 型整数。\
pop：输出栈顶，并让栈顶出栈\
top：输出栈顶，栈顶不出栈
## 思路
利用一个array+一个top指针作为栈使用（先进后出）\
循环处理所有输入内容
## 答案
``` c
#include <stdio.h>
#include <malloc.h>
#include <string.h>
int main() {
int operation;
scanf("%d",&operation);
int array[100000];
int point = -1;
for(int i = 0;i<operation;i++){
 char* str = (char*)malloc(sizeof(char)*6);
 scanf("%s",str);
    if(!strcmp(str, "push")){
      int tmp ;
      scanf("%d",&tmp);
      point++;
      array[point]=tmp;
    }
    if(!strcmp(str,"pop")){
        if(point<0){
            printf("error\n");
        }else{
              printf("%d\n",array[point]);
        point--;
        }

    }
    if(!strcmp(str,"top")){
        if(point<0){
            printf("error\n");
        }else{
            printf("%d\n",array[point]);
        }

    }
}
return 0;
}
```

## [题目网站](https://www.nowcoder.com/practice/104ce248c2f04cfb986b92d0548cccbf?tpId=308&tqId=2111163&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308)
答案排名第101