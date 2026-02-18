---
title: スコープ
sidebar_position: 8
---


# スコープ

## 目的

- スコープ（変数が使える範囲）を理解する
- 「スコープを省略した書き方」（クラス内の変数をそのまま使う）を覚える
- JBScriptの特殊なスコープ範囲を理解する

## スコープとは

スコープは、かんたんに言うと **「その変数が使える場所」** のことで、ブロック括弧 `{` `}` で表されます。変数を使うことができるのはこのブロック括弧で囲われた範囲の中だけです。

- スコープの外では、その変数は使えません（存在しない扱い）
- スコープを抜けると、その変数は基本的に役目を終えます

JBScriptでは、関数の中で宣言した変数名は **関数内で一意** です。
つまり、`if` や `else`、`while`、`for` などのブロック内で同じ名前の変数を宣言することはできません。


### 1) スコープブロック `{` `}` について

`{ }` は制御フローのためのブロックですが、JBScriptではブロック内で宣言した変数も **関数スコープに属します**。

そのため、`if` や `else` の中で同じ名前の変数を別々に宣言することはできません。関数内で変数名は一意である必要があります。

### 2) 関数（メソッド）スコープ

関数の中で作った変数は、その関数の中だけで使えます。

```csharp
public static void Heal() {
    int amount = 5;
    // amount は Heal() の中だけ
}
```

JBScriptではこの「関数スコープ」が基本単位です。

### 3) クラススコープ（クラスのフィールド）

クラスの直下で宣言した変数（フィールド）は、そのクラス内のいろいろな場所で使えます。

```csharp
public static class Player {
  // クラススコープ内で変数（メンバ変数という）を宣言
  public static int hp = 10;

  public static void Damage(int d) {
      // クラススコープ内で宣言されたメンバ変数は、クラス内の関数で使える
      hp = hp - d;
  }
}
```

---

## サンプル

### 例1: ifの中で宣言した変数は「関数の中」で使える

JBScriptでは、`if` ブロックの中で宣言した変数も **関数スコープ** に属します。
つまり、`if` の外でも変数自体は使えます。

ただし、`if` の中でしか代入していない場合、条件によっては **値が入っていない（未初期化）** ままになるので注意が必要です。

```csharp
public static void MainLoop() {
    bool isDead = true;

    // ここで宣言した変数は、関数の最後まで使えます
    JString msg = null;

    if(isDead) {
        msg = new JString("DEAD");
    }

    // if が false のとき msg は null のままなので、使う前にチェックするのが安全
    if(msg != null) {
        VMC.Print(msg);
        msg.Destroy();
    }
}
```

### 例2: 変数を外側で作ると、内側でも使える

JBScriptでは、分岐ごとに同名で宣言せず、外側で1回だけ宣言して使い回すのが基本です。

```csharp
public static void MainLoop() {
    JString msg = null;

    int hp = 10;
    if(hp <= 0) {
        msg = new JString("DEAD");
    } else {
        msg = new JString("ALIVE");
    }

    // ここなら msg を使える
    VMC.Print(msg);
    msg.Destroy();
}
```

### 例3: 同じ名前を2回宣言するとコンパイルエラーになる

```csharp
public static void MainLoop() {
    int hp = 10;

    if(hp > 0) {
        int tmp = 1; // OK（別名なら宣言できる）
    }

    if(hp > 5) {
        int result = 1;
    } else {
        int result = 2; // エラー：同じ関数内で同じ名前の変数を2回宣言できません
    }

    // この行もコンパイルエラーになります
}
```

---

## スコープの省略した書き方

スコープには省略した書き方があります。例えば、次のような、クラス内で宣言された変数があったとします。

```csharp
namespace MyGame {
  public static class Game {
    public static Layer BackgroundLayer;
  }
}
```

この変数にアクセスするにはドット（.）でスコープ名同士を連結させて、以下のように書きます。

```csharp
using JBScript;
using JBGE.GameEngine;

namespace MyGame {
  public static class Game {
    public static Layer BackgroundLayer;

    [JBScript_Start]
    public static void Start() {
      MyGame.Game.BackgroundLayer = new Layer();
      MyGame.Game.BackgroundLayer.SetAlpha(1.0f);
    }
  }
}
```

これを同じクラスの中なら、次のように **そのまま名前だけで** 書くことができます。

例：

```csharp
using JBScript;
using JBGE.GameEngine;

namespace MyGame {
  public static class Game {
    public static Layer BackgroundLayer;

    [JBScript_Start]
    public static void Start() {
      BackgroundLayer = new Layer();
      BackgroundLayer.SetAlpha(1.0f);
    }
  }
}
```

### 1行だけなら `{ }` を省略できる

`if` / `for` / `while` の中身が **1行だけ** の場合は、`{ }` を省略できます。

```csharp
if(hp <= 0) VMC.Print(new JString("DEAD"));
```

同じことを複数行に書くときは、必ず `{ }` が必要です。

```csharp
if(hp <= 0) {
    JString msg = new JString("DEAD");
    VMC.Print(msg);
    msg.Destroy();
}
```

`for(...)` や `while(...)` も同じルールです。

```csharp
for(int i = 0; i < 3; i++) VMC.PrintInt(i);
while(hp > 0) hp -= 1;
```

ただし、上記以外の `namespace` / `class` / `enum` / 関数（メンバ関数）などの定義では、`{ }` は省略できません。

---

## 同じ名前の変数は作れません！

JBScriptでは、C#のような言語と異なり、同じ関数の中で同じ名前の変数を2回宣言することはできません。たとえ別々の `{ }` ブロックの中であっても、同じ名前の変数を重複して宣言するとエラーになります。

```csharp
if(isDead) {
    JString result = new JString("DEAD");
} else {
    JString result = new JString("ALIVE"); // エラー（同じ名前を2回宣言）
}
```

正しい書き方は、関数の外側で1回だけ変数を宣言し、各分岐の中で値を代入して使う方法です。

```csharp
JString result = null;
if(isDead) {
    result = new JString("DEAD");
} else {
    result = new JString("ALIVE");
}
VMC.Print(result);
result.Destroy();
```

:::info 上級者向け：なぜこうなっているの？

JBScriptはJBVMで実行される中間言語として設計されており、またVMC.__iasmと呼ばれる仕組みでも変数を完全修飾名で参照しています。そのため、ブロックスコープごとに同じ名前の変数を使い分けることができると、変数名の解決や参照が複雑化し、正しく動作しなくなる恐れがあります。  
そのため、ブロックごとに同名変数を許すと、変数参照の解決が複雑になりやすく、実装コストとバグの温床が増えます。そこで、言語仕様として「関数単位で変数名を一意にする」ルールを採用しています。
:::



## まとめ

- `{ }` の中で宣言した変数も、関数スコープに属する（関数内で使える）
- 関数の中で作った変数は、その関数の中だけ
- クラス直下の変数は、クラス内のいろいろな場所から使える
- 同じ名前の変数は関数内で重複できないので、分岐ごとに同じ名前を作らないこと
