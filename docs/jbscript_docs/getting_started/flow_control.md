---
title: フロー制御
sidebar_position: 9
---


# フロー制御

## 目的

このページでは、プログラムの「進み方（実行する順番）」を変える命令をまとめます。

- 途中でループをやめる
- 次の繰り返しに進む
- 関数を終わらせる
- 指定した場所へジャンプする（goto）

といった操作を扱います。

## フロー制御ってなに？

ふつうプログラムは、上から下へ順番に実行されます。

でも、ゲームの処理では「条件によって分岐したい」「繰り返したい」「途中でやめたい」がよくあります。
それを行うのが **フロー制御** です。

## break

`break;` は **いま実行中のループをその場で終わらせる** 命令です。

```csharp
int i = 0;
while(i < 10) {
    if(i == 5) break;   // 5になったらループをやめる
    i++;
}
```

よくある使いどころ：

- 「見つけたらもう探さない」
- 「条件を満たしたら繰り返し終了」

## continue

`continue;` は **残りの処理を飛ばして、次の繰り返しへ進む** 命令です。

```csharp
int i = 0;
while(i < 5) {
    i++;
    if(i == 3) continue;   // 3のときだけ下を実行しない
    VMC.Print(new JString("OK"));
}
```

よくある使いどころ：

- 「この回だけスキップしたい」
- 「条件に合わないときは何もしない」

## return

`return;` は **関数の処理を終えて、呼び出し元に戻る** 命令です。

### void の場合

```csharp
public void DoSomething() {
    VMC.Print(new JString("Start"));
    return; // ここで関数が終わる
    VMC.Print(new JString("End")); // 実行されない
}
```

### 戻り値がある場合

戻り値の型（int / float / bool など）に合わせて値を返します。

```csharp
public int Add(int a, int b) {
    return a + b;
}
```

## goto

`goto` は **指定したラベル（目印）へジャンプする** 命令です。

### 基本形

```csharp
goto test;

VMC.Print(new JString("ここは飛ばされる")); // 実行されない

test:
VMC.Print(new JString("ここに飛んできた"));
```

- ラベルは `名前:` の形で書きます
- `goto 名前;` でそこへ飛びます

### 使いどころ：二重ループを一気に抜ける

`break;` は「1つのループ」しか抜けられません。
二重ループをまとめて抜けたいときに `goto` が便利なことがあります。

```csharp
int x = 0;
while(x < 10) {
    int y = 0;
    while(y < 10) {
        if(x * y == 42) goto found;
        y++;
    }
    x++;
}

found:
VMC.Print(new JString("見つけた！"));
```

## 注意：goto は使いすぎ注意

`goto` は強力ですが、増えると「どこからどこへ飛ぶのか」が分かりにくくなります。

基本は次の順で使うのがおすすめです。

1. if / for / while（ふつうの書き方）
2. break / continue（ループ内の制御）
3. return（関数を終わらせる）
4. goto（どうしても必要なときだけ）