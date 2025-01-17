---
title: Basic Programming Examples in C, JavaScript, Python, and R
date: 2025-01-17 10:12:00 +0900
categories: [STUDY]
tags: [CS,JS,C,R,Python]
---

These scripts take a number from the user and checks if it's between 1 and 9.
If valid, the function prints the multiplication table for that number using a loop.
If not, it shows a warning message.

These scripts demonstrate basic programming concepts:
- **Input/Output**
- **Functions**
- **Loops**
- **Conditional Statements**

``` C
#include <stdio.h>

void gugudan(int n) {
    for (int i = 1; i <= 9; i++) {
        printf("%d x %d = %d\n", n, i, n * i);
    }
}

int main() {
    int n;
    scanf("%d", &n);
    if (n >= 1 && n <= 9) {
        gugudan(n);
    } else {
        printf("Please enter a number between 1 and 9.\n");
    }
    return 0;
}
```

``` JavaScript
function gugudan(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

const n = parseInt(prompt());
if (n >= 1 && n <= 9) {
    gugudan(n);
} else {
    console.log("Please enter a number between 1 and 9.\n");
}
```

```Python
def gugudan(n):
    for i in range(1, 10):
        print(f"{n} x {i} = {n * i}")

n = int(input())
if 1 <= n <= 9:
    gugudan(n)
else:
    print("Please enter a number between 1 and 9.\n")

```

```R
gugudan <- function(n) {
    for (i in 1:9) {
        cat(n, "x", i, "=", n * i, "\n")
    }
}

n <- as.integer(readline())
if (n >= 1 && n <= 9) {
    gugudan(n)
} else {
    cat("Please enter a number between 1 and 9.\n")
}
```
