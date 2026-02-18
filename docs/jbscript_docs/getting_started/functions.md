---
title: 関数
sidebar_position: 6
---

# 関数

## 目的

- JBScriptの「関数（メソッド）」の考え方に慣れる
- void関数（戻り値なし）と、戻り値ありの関数を使い分けられるようになる
- 引数（ひきすう）と戻り値の基本を理解する

## 関数とは？

関数は、**機能をひとまとめにしたもの** です。

- 何度も同じ処理を書く代わりに、1回だけ書いて名前で呼び出せる
- 長い処理を小さく分けて、読みやすくできる

JBScriptはC#風の書き方なので、関数の見た目もC#に近いです。

## 用語

- **関数**: 処理のかたまり
- **引数（パラメータ）**: 関数に渡す材料
- **戻り値**: 関数が返す結果
- **メンバ関数**: クラス（オブジェクト）の中にある関数の正式名称

このドキュメントでは、初心者向けに「関数」と呼びます。
ただし厳密には、`Layer.SetActive(...)` のように **オブジェクトにくっついている関数**は「メンバ関数」と呼びます。

## 関数の基本形

```csharp
戻り値の型 関数名(引数1, 引数2, ...) {
    // 関数の中身のコード
}
```

例：引数を受け取って、足し算して返す

```csharp
int Add(int a, int b) {
    return a + b;
}
```

## void関数（戻り値なし）

`void` は「何も返さない」という意味です。

```csharp
void ShowHello() {
    JString s = new JString("Hello!");
    VMC.Print(s);
    s.Destroy();
}
```

呼び出し側：

```csharp
ShowHello();
```

### いつ使う？

- 画面に表示する
- 音を鳴らす
- 設定を変更する

など、**結果の数値を返す必要がない処理**に向いています。


## 戻り値ありの関数

関数は計算結果などを「戻り値」として返せます。
戻り値を返すときは `return` を使います。

戻り値にはルールがあります。

- 関数の先頭に書いた「戻り値の型」と、`return` で返す値の型は同じである必要があります
  - `int ...` の関数は `return 123;` のように `int` を返します
  - `float ...` の関数は `return 1.0f;` のように `float` を返します
  - `bool ...` の関数は `return true;` / `return false;` のように `bool` を返します
- `void` 関数は「返すものがない」ので、基本的に `return` は不要です
  - もし途中で処理を終えたい場合だけ `return;` と書けます（値は書けません）


```csharp
int GetDamage(int baseDamage) {
    return baseDamage + 3;
}
```

呼び出し側：

```csharp
int dmg = GetDamage(10);
```

### boolを返す例（判定）

```csharp
bool IsDead(int hp) {
    return (hp <= 0);
}
```

```csharp
int hp = 10;
if(IsDead(hp)) {
    // HPが0以下のとき
}
```

## 引数（ひきすう）

引数は、関数に渡す「材料」です。

関数を作るときに書く `int a` や `int b` は、**関数の中だけで使える変数**です。
この変数に、呼び出し側から渡した値が入ります。

```csharp
int Multiply(int a, int b) {
    // a と b は、この関数の中で使える変数
    return a * b;
}

int x = Multiply(3, 5); // a=3, b=5 が渡される → x = 15
```

ポイント：

- 引数は「関数の入口にある変数」
- 引数の名前（a, b など）は関数の中だけの名前
- 何個でも増やせます（増やしすぎると読みにくいので注意）

## メンバ関数（オブジェクトにくっついた関数）

オブジェクトとは、複数の機能や状態をまとめている「もの（物）」です。

```csharp
Layer layer = new Layer();
layer.SetAlpha(1.0f);
```

ポイントはこれだけ：

- `layer` という「もの（オブジェクト）」があって
- その「もの」が持っている機能が `SetAlpha(...)`

オブジェクト指向の詳しい話は、ここでは一旦置いてOKです。
「**オブジェクトに命令する書き方がある**」くらいで十分です。

## 例：よくあるゲーム処理を関数にする

同じ表示処理を何度も書くのは大変なので、関数にします。

```csharp
void ShowResult(bool isDead) {
	JString result = null;
	if(isDead) {
			result = new JString("DEAD");
			VMC.Print(result);
			result.Destroy();
	} else {
			result = new JString("ALIVE");
			VMC.Print(result);
			result.Destroy();
	}
}
```

呼び出し側：

```csharp
int hp = 10;
bool isDead = (hp <= 0);
ShowResult(isDead);
```

## まとめ

- 関数は「処理に名前を付けたもの」
- `void` は戻り値なし、`return` があると戻り値あり
- 引数は材料、戻り値は結果
- `obj.Func()` の形は「メンバ関数」（正式名称）

次は、関数を使う上でよく出てくる **条件分岐（if）** や **繰り返し（for/while）** と組み合わせた書き方を増やしていきます。

