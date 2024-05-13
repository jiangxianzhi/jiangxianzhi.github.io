# 哈夫曼编码

## 描述
给出一个有
n种字符组成的字符串，其中第
i种字符出现的次数为。请你对该字符串应用哈夫曼编码，使得该字符串的长度尽可能短，求编码后的字符串的最短长度。

## 思路
哈夫曼编码是最短表达数据的编码，\
1.利用数组HT表示每个节点的关系\
2.更新数组\
3.通过数组的具体节点有多少个父节点多少计算编码长度，储存到相应数组CodeLength中 \
详见 \
 [哈夫曼讲解](https://blog.csdn.net/chenlong_cxy/article/details/117929139)

## 答案
``` c
// 此方法通过5/10
#include <stdio.h>
#include<stdlib.h>
#include<string.h>
typedef struct HTNode {
    int weight;
    int parent;
    int lc, rc;
} HTNode;
//
void Select(HTNode* HT, int quality, int* s1, int* s2) {
    int min;
    for (int i = 1; i <= quality; i++) {
        if (HT[i].parent == 0) {
            min = i;
            break;
        }
    }
    for (int i = min + 1; i <= quality; i++) {
        if (HT[i].parent == 0 && HT[i].weight < HT[min].weight) {
            min = i;
        }
    }
    s1[0] = min;
    for (int i = 1; i <= quality; i++) {
        if (HT[i].parent == 0 && i != s1[0]) {
            min = i;
            break;
        }
    }
    for (int i = min + 1; i <= quality; i++) {
        if (HT[i].parent == 0 && HT[i].weight < HT[min].weight && i != s1[0]) {
            min = i;
        }
    }
    s2[0] = min;
}
void CreateHuff(HTNode* HT, int* array, int quality) {
    int m = 2 * quality - 1;

    for (int i = 1; i <= quality; i++) {
        HT[i].weight = array[i - 1];
        HT[i].parent = 0;
        HT[i].lc = 0;
        HT[i].rc = 0;
    }
    for (int i = quality + 1; i <= m; i++) {
        int s1[1], s2[1];
        Select(HT, i - 1, s1, s2);
        HT[i].weight = HT[s1[0]].weight + HT[s2[0]].weight;
        HT[i].lc = s1[0];
        HT[i].rc = s2[0];
        HT[s1[0]].parent = i; //s1的父亲是i
        HT[s2[0]].parent = i; //s2的父亲是i
    }

    //打印哈夫曼树中各结点之间的关系
    // printf("哈夫曼树为:>\n");
    // printf("下标   权值     父结点   左孩子   右孩子\n");

    // for (int i = 0; i <= m; i++) {
    //     printf("%d   %d   %d   %d   %d\n", i, HT[i].weight, HT[i].parent, HT[i].lc,
    //            HT[i].rc);
    // }
    // printf("\n");

}

void HuffCoding(HTNode* HT, int* CodeLength, int quality) {
    for (int i = 1; i <= quality; i++) {
        int c = i; //i不能被改变
        int p = HT[c].parent;
        while (p != 0) {
            CodeLength[i]++;
            c = p;
            p = HT[c].parent;
        }
    }

    // for (int i = 1; i <= quality; i++) {
    //     printf("%d ", CodeLength[i]);
    // }
}
int main() {
    int quality;
    scanf("%d", &quality);
    int array[quality];
    for (int i = 0; i < quality; i++) {
        int tmp ;
        scanf("%d", &tmp);
        array[i] = tmp;
    }
    HTNode* HT = (HTNode*) malloc((2 * quality - 1 + 1) * sizeof(HTNode));
    CreateHuff(HT, array, quality);
    int CodeLength[quality + 1];
    for (int i = 0; i < quality + 1; i++) {
        CodeLength[i] = 0;
    }
    //    for (int i = 1; i <= quality; i++) {
    //     printf("%d ", CodeLength[i]);
    // }
    HuffCoding(HT, CodeLength, quality );
    int sum = 0;
    for (int i = 1; i <= quality; i++) {
        sum = CodeLength[i] * HT[i].weight + sum;
    }
    printf("%d", sum);
    return 0;
}

```

## [题目网站](https://www.nowcoder.com/practice/4c0419eb07c840ca8402e4f2a52cfd49?tpId=308&tqId=2371724&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308)
