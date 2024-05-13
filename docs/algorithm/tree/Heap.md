# 拓扑排序

## 描述
请你实现一个堆(大根堆)。
操作：
push x：将
x加入堆。保证
x为int型整数。不输出任何内容。
top：输出堆顶元素。若堆为空，输出"empty"(不含引号)。
pop：输出堆顶元素，且弹出堆顶。若堆为空，输出"empty"(不含引号)。

## 思路
关键：大根堆插入，插入的数字进行上升排序一次 \
      大根堆弹出最顶上数字，那么把最后一个数字放入顶上，对其进行一次下降排序

## 答案
``` c
#include <stdio.h>

void Heapfiy(int *array, int size, int index){
    int left = 2*index+1;
    while(left<size){
        if(left+1<size&&array[left]<array[left+1]){
            left = left+1;
        }
        if(array[left]>array[index]){
            int tmp = array[index];
        array[index] = array[left];
        array[left] = tmp;
        index = left;
        left = 2*left+1;
        }else{
            break;
        }
    }
}
void HeapInsert(int*array,int size, int index){
    while(array[index]>array[(index-1)/2]){
        int tmp = array[index];
        array[index] = array[(index-1)/2];
        array[(index-1)/2] = tmp;
        index = (index-1)/2;
    }
}

int main() {
int times;
scanf("%d",&times);
  int array[1024*100] = {0};
  int size =0;
for(int i = 0;i<times;i++){
    char operation[5];
    int tmp;
scanf("%s ", operation);

if(strcmp(operation,"push")==0){
      scanf("%d", &tmp);
          array[size++] = tmp;
          HeapInsert(array,size,size-1);
}else if(strcmp(operation,"top")==0){
    if(size>0){
        printf("%d\n",array[0]);
    }else{
        printf("empty\n");
    }
}else {
    if(size>0){
   printf("%d\n",array[0]);
   array[0] = array[size-1];
   Heapfiy(array,  size, 0);
   size--;

    }else{
        printf("empty\n");
    }
}

}

    return 0;
}
```

## [题目网站](https://www.nowcoder.com/practice/13f61c8c92404f5ea5d6fa4c692869fb?tpId=308&tqId=2373261&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308)
