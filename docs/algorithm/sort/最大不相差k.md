# 拓扑排序

## 描述
给定一个数组，选择一些数，要求选择的数中任意两数差的绝对值不超过 kk 。问最多能选择多少个数

## 思路
1 先排序，从小到大
2 使用双指针，left，right都在array[0]位置上，如果array[right]-array[left]<=k,那么right就一直移动直到遍历所有点，否则left往right方向移动一格，方便后续right移动
## 答案
``` c
#include <stdio.h>
#include<malloc.h>

#include <stdlib.h>

void QuickSort(int* arr, int low, int high) {
    if (low < high) {
        int i = low;
        int j = high;
        int k = arr[low];
        while (i < j) {
            while (i < j && arr[j] >= k) {  // 从右向左找第一个小于k的数
                j--;
            }

            if (i < j) {
                arr[i++] = arr[j];
            }

            while (i < j && arr[i] < k) {   // 从左向右找第一个大于等于k的数
                i++;
            }

            if (i < j) {
                arr[j--] = arr[i];
            }
        }

        arr[i] = k;

        // 递归调用
        QuickSort(arr, low, i - 1);     // 排序k左边
        QuickSort(arr, i + 1, high);    // 排序k右边
    }
}


    int main() {
        int n;
        int k;
        scanf("%d", &n);
        scanf("%d", &k);

        int* array = (int*)malloc(sizeof(int ) * n);
        for (int i = 0; i < n; i++) {
            scanf("%d", &array[i]);
        }

// for(int i = 0;i<n;i++){
//     printf("%d",array[i]);
// }
        // for (int i = 0; i < n; i++) {
        //     for (int j = 0; j + 1 < n - i; j++) {
        //         if (array[j] > array[j + 1]) {
        //             int tmp = array[j];
        //             array[j] = array[j + 1];
        //             array[j + 1] = tmp;
        //         }
        //     }
        // }
// for(int i = 0;i<n;i++){
//     printf("%d",array[i]);
// }

QuickSort(array,0,n-1);
        int r = 0;
        int l = 0;
        int max = 1;
        while (r < n) {
            if (array[r] - array[l] > k) {
                l++;
            }
            max = max > r - l + 1 ? max : r - l + 1;
            ++r;
        }
        printf("%d", max);

        return 0;
    }

```

## [题目网站](https://www.nowcoder.com/practice/562630ca90ac40ce89443c91060574c6?tpId=308&tqId=2403293&ru=%2Fpractice%2F237ae40ea1e84d8980c1d5666d1c53bc&qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308)
