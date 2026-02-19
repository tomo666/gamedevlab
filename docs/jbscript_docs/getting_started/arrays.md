---
title: 配列
sidebar_position: 11
---


# 配列

## 目的

- 配列の使い方を理解する
- JBScriptの配列の制限を知る
- 多次元配列の実現について知る

---

## 配列とは？
配列（はいれつ）は、**同じ型の値をたくさんまとめて持てる箱**です。

- 例：HPを10人のキャラクター分、まとめて持つ（intの配列）
- 例：座標のリストをまとめて持つ（floatの配列）

配列の中の値には、`[0]` のように四角括弧の中に **番号（インデックス）** を指定してアクセスします。

インデックスは **0 から始まります**（最初の要素番号は `0` となります）。

---

## 配列の作り方（1次元）

JBScriptの配列は、C#と同じ書き方で作れます。

```csharp
int[] num = new int[10];
float[] fnum = new float[10];
```

- `new int[10]` は「intを10個ぶん入れる箱を作る」という意味です。
- `new int[10]` で配列を宣言すると、 `num[0]` 〜 `num[9]` （合計10個）まで使えるようになります。

### 値の代入と取得

```csharp
int[] num = new int[10];

num[0] = 123;      // 0番目に入れる
num[1] = num[0]+1; // 1番目に入れる

int a = num[0];    // 0番目を取り出す
```

### forで全部を初期化する

```csharp
int[] num = new int[10];

for(int i = 0; i < 10; i++) {
    num[i] = 0;
}
```

---

## 重要な制限（JBScriptの配列）

JBScriptの配列には、**いくつか強いルール（制限）** があります。

### 1) 1次元配列のみ対応

JBScriptは **1次元配列のみ**扱えます。多次元配列は扱えません。

- OK: `int[]`, `float[]`, `char[]` など
- NG: `int[,]` や `int[][]` などの多次元配列

2次元（マス目）を使いたい場合は、**1次元配列 + 計算**で実現します。

---

### 2) 配列要素に対して `++` / `--` が使えない

配列は計算式に含めることができますが、**インクリメント / デクリメントができません**。

- NG: `num[i]++`
- NG: `++num[i]`
- NG: `num[i]--`
- NG: `--num[i]`

#### 回避策（いったん変数に取り出してから戻す）

```csharp
int[] num = new int[10];
int i = 3;

// num[i]++ の代わり
int tmp = num[i];
tmp = tmp + 1;
num[i] = tmp;
```

`+=` を使ってもOKです。

```csharp
int tmp = num[i];
tmp += 1;
num[i] = tmp;
```

---

### 3) 「関数が返した配列」をその場で配列として使えない

配列を返す関数を、**そのまま `[]` でアクセスする書き方**はできません。

以下のような書き方はできません。

```csharp
char c = js.GetBuffer()[0];
```

#### 回避策（いったん変数に受ける）

```csharp
char[] buf = js.GetBuffer();
char c = buf[0];
```

---

## 2次元配列を作りたいとき（クラスで実現）

JBScriptは2次元配列を直接扱えないので、**1次元配列を中身として持つクラス**を作る必要があります。

次の例は、`(x, y)` を `index = y * width + x` に変換して、
1次元配列に保存しています。

```csharp
// 2次元配列を実現する例
public class IntArray2D {
    private int[] array = null;
    private int arraySizeX;
    private int arraySizeY;

    public IntArray2D(int arraySizeX, int arraySizeY) {
        this.arraySizeX = arraySizeX;
        this.arraySizeY = arraySizeY;
        int arraySize = arraySizeX * arraySizeY;
        // 配列のメモリ確保
        array = new int[arraySize];
        // 0 で初期化
        for(int i = 0; i < arraySize; i++) array[i] = 0;
    }
    public void SetValue(int x, int y, int value) {
        int index = y * arraySizeX + x;
        array[index] = value;
    }
    public int GetValue(int x, int y) {
        int index = y * arraySizeX + x;
        return array[index];
    }
}
```

### 使い方の例

```csharp
IntArray2D map = new IntArray2D(16, 16);
map.SetValue(2, 3, 99);

int v = map.GetValue(2, 3); // 99
```

---

## まとめ

- JBScriptの配列はC#と同じ書き方で作れる
- ただし **1次元配列のみ**（2次元はクラスで作る）
- `num[i]++` のような **配列要素のインクリメントは不可**（一度変数に取り出して更新する）
- `js.GetBuffer()[0]` のような **関数戻り値配列の即アクセスは不可**（一度変数に受ける）
