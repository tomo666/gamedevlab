---
title: クラス
sidebar_position: 13
---


# クラス

## 目的

- クラスについて理解する
- インスタンス、メンバ変数、メンバ関数について知る
- JBScriptのオブジェクト指向プログラミングの制限について知る

---


クラスは、**データ（変数）**と**動き（関数）** をひとまとめにした「設計図」です。

- 設計図（クラス）から
- 実体（インスタンス）を作り
- その実体が持つデータや動きを使う

…という流れで、プログラムを整理して書けるようになります。

---

## JBScriptのオブジェクト指向プログラミング

JBScriptは、完全なオブジェクト指向プログラミング（OOP）言語ではありませんが、ある程度C#のような書き方で「オブジェクト指向のような」コードが書けます。
一般的なC#のオブジェクト指向と**同じではありません** ので注意してください。

### できること

- `new` でインスタンス化できる（C#と同じ書き方）
- `namespace` が使える（ネストもできる）
- 継承ができる（`class A : B`）
- `this` が使える（自分自身のメンバ変数、または親クラスのメンバ変数にアクセス）
	- 重要：JBScriptでは「親クラスのメンバ変数」にアクセスするときは `this` が必要です（後述）

### できないこと・制限

- **クラスの中にクラスは作れません**（ネストクラス不可）
- **コンストラクタを省略することはできません**
- **関数のオーバーロードはできません**（同じ名前で引数が違う関数は作れません）
- **コンストラクタは必ず書く必要があります**（使わない場合でも空のコンストラクタが必須です）
- **ポリモーフィズムがありません**
  - `virtual` / `override` を使って「同じ名前の関数を入れ替える」ような仕組みは使えません

---

## 重要：コンストラクタは必須

JBScriptでは、**クラスを定義するときにコンストラクタを必ず1つ書く必要があります**。

- 使わない場合でも、空のコンストラクタが必要です
- コンストラクタは1つだけ書けます

### なぜ「必須」なの？

JBScriptでは、インスタンス生成（`new`）の仕組みが「必ずコンストラクタを呼ぶ」前提で作られています。
そのため、何も初期化しないクラスでも **空のコンストラクタを1つ置く** ルールになっています。

### コンストラクタとは？

**コンストラクタ**は、`new` でインスタンスを作るときに最初に一度だけ呼ばれる特別な関数です。

- クラス名と同じ名前の関数になります（`Actor` クラスなら `Actor()`）
- 戻り値の型を関数名の冒頭に定義・指定することはできません（void Actor() や int Actor() など）
- ここでメンバ変数の初期値を決めたり、最初の準備をします
- 何も準備が要らなくても、JBScriptでは **空のコンストラクタを1つ書く必要があります**

例：空のコンストラクタ

```csharp
public class Actor {
    public Actor() {
    }
}
```

---

## クラスとインスタンス

クラスは設計図、インスタンスは実体です。

```csharp
public class Player {
    public int Hp;

    public Player() {
    }
}

Player p = new Player();
p.Hp = 10;
```

- `Player` がクラス（設計図）
- `new Player()` でインスタンス（実体）を作ります
- `p.Hp` のように「.（ドット）」でメンバ（後述）にアクセスします

---

## メンバ変数とメンバ関数

クラスの中にある変数を**メンバ変数**、関数を**メンバ関数**と呼びます。

```csharp
public class Player {
    private int hp;

    public Player() {
    }

    public void SetHp(int value) {
        this.hp = value;
    }

    public int GetHp() {
        return this.hp;
    }
}
```

- `hp` がメンバ変数
- `SetHp` / `GetHp` がメンバ関数
- `this.hp` の `this` は「このインスタンス自身のメンバ変数」を意味します
	- なお、メンバ関数に `this.` を付ける書き方は基本的に不要です（必要になったらその時点でルールとして追記します）

### this はいつ必要？

JBScriptでは少しクセがあり、**子クラスから親クラスのメンバ変数に触るときは `this` が必須**です。
（親のメンバ関数は `GetHp()` のように `this` なしでも呼べます）

迷ったら「**親のメンバを参照する場合は `this` を付ける**」で覚えておくと安全です。

---

## 継承

**継承（けいしょう）** は、すでにあるクラスを「土台」にして、似たクラスを作るしくみです。
JBScriptでは、継承元（親）のメンバ変数とメンバ関数を継承先（子）から利用できます（アクセス修飾子は実質的に挙動へ影響しません）。

- たとえば「すべてのキャラに共通する動き」を親クラスにまとめる
- それを引き継いで、敵キャラやプレイヤー用のクラスを作る

…という感じで、コードをスッキリさせられます。

### 書き方

`class 子 : 親` の形で書きます。

```csharp
public class Actor {
    private int hp;

    public Actor() {
    }

    public void SetHp(int value) {
        this.hp = value;
    }

    public int GetHp() {
        return this.hp;
    }
}

// Enemy は Actor を引き継ぐ（Actor のメンバ変数や関数をそのまま使える）
public class Enemy : Actor {
    private int attack;

    public Enemy() {
    }

    public void SetAttack(int value) {
        this.attack = value;
    }

    public int GetAttack() {
        return this.attack;
    }

    public void SetDamage(int value) {
        // 親クラスのメンバ変数に触る場合、JBScriptでは this が必要です
        // （可読性のため、親の変数に触る箇所は this. を付けて統一するのがおすすめ）
        this.hp -= value;
        if(GetHp() <= 0) this.hp = 0;
    }
}

// 使い方
public static class Game {
	[JBScript_Start]
	public static void Start() {
		Enemy e = new Enemy();
		e.SetHp(10);        // 親（Actor）の関数を使える
		int hp = e.GetHp();

		e.SetAttack(3);     // 子（Enemy）で追加した関数
		int atk = e.GetAttack();
	}
}
```

### 注意点（JBScriptの制限）

- JBScriptは**ポリモーフィズムの仕組みがない**ので、C# のように `virtual` / `override` で「同じ名前の関数を差し替える」設計はできません。

つまり、JBScriptの継承は「共通の部品をまとめるための箱」くらいの気持ちで使うのが安全です。

---

## 重要：アクセス修飾子は“飾り”

JBScriptでは、`private/public/protected/static/const/virtual/override` などのキーワードは
**C#互換のために存在するだけ**で、基本的に**意味のない装飾**です。
※どのように書いても、JBScriptの内部的な扱いとしては **すべて public static** として処理されます。
つまり、これらのキーワードは **アクセス制御のための意味をほぼ持ちません**。
（ただし後述のとおり、**インスタンス化されたメンバ変数**だけは外部から直接触れない、という別ルールがあります）

ただし、ここで一つだけ大事な例外があります。

---

## 重要：インスタンスのメンバ変数は外部から直接触れない

JBScriptでは、メンバ変数は `public` や `static` の有無に関わらず、
**インスタンス化された後は、外部から直接アクセスできなくなります**。

そのため、メンバ変数を操作したい場合は、**getter/setter（取得/設定の関数）** を用意して使います。

### NG（外部から直接触ろうとしている）

```csharp
Player p = new Player();
p.hp = 10; // NG（JBScriptでは直接メンバ変数を参照できません）
```

### OK（メンバ関数経由で操作する）

```csharp
Player p = new Player();
p.SetHp(10);
int hp = p.GetHp();
```

:::tip 互換性を維持するなら

将来的に JBScript コードを Unity/Godot など他のゲームエンジンに移植する可能性がある場合、すべてのメンバ変数は private / protected で宣言すると意味的な整合性が保てます。

:::

---

## ポリモーフィズムがないとは？

C#では「同じ関数名でも、中身を子クラス側で差し替える」ことができます。
JBScriptではこの仕組みがありません。

なので、
- `virtual` / `override` を使って設計する
- 親クラス型の変数に子クラスを入れて、呼び出し先を自動で切り替える

…といった“王道OOPテク”は使えない、と覚えておけばOKです。

---

## 最小テンプレ

「とりあえずクラスを書いて動かす」ための最小形です。

```csharp
namespace MyGame {
    public class Actor {
        private int hp;

        // 空でも必須
        public Actor() {}

        public void SetHp(int value) { this.hp = value; }
        public int GetHp() { return this.hp; }
    }
}
```

---

## まとめ

- クラスは「データ」と「動き」をまとめる設計図
- `new` でインスタンスを作れる（C#と同じ見た目）
- `this` / 継承は使える（※ `this` はメンバ変数での利用を想定）
- ただし **コンストラクタは1つ**、**ネストクラス不可**、**ポリモーフィズムなし**
- そして重要：**インスタンスのメンバ変数は外から直接触れないので、getter/setter を使う**
