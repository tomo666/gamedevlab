---
title: 文字と文字列
sidebar_position: 4
---

# 文字と文字列

## 目的

- JBScriptの文字列の考え方を理解する
- JStringの基本的な使い方（作る、表示する、片付ける）を理解する

## 文字列とは？

文字列は、`"HELLO"` のような「文字のならび」です。
ゲームだと、メッセージ、名前、UIのラベル、ファイルパスなどで使います。

ただしJBScriptでは、文字列の扱いが少し特殊です。

## JBScriptでの文字列の扱い方

JBScriptには、C#のように便利に使える「文字列型」はありません。
string / char は使えますが、どちらも少し特殊です。
なので、JBScriptでは通常、**`JString`** オブジェクトを使用して文字列操作をします。

理由はシンプルで、JBScriptは内部で「仮想メモリ」を使って動くため、
文字列を安全に扱うための道具として **JString** が用意されているからです。

### JStringは「自分で片付ける」文字列オブジェクト

JStringは `new` で作ったら、最後に `Destroy()` で片付けます。
この「片付け」を忘れると、メモリが増え続けてゲームが重くなったり、落ちたりします。

覚え方はこれだけでOKです。

- 作る: `JString s = new JString("...");`
- 使う: `VMC.Print(s);` など
- 片付ける: `s.Destroy();`

## 最小サンプル

### if の中で文字列を作って表示する

```csharp
int hp = 10;
bool isDead = (hp <= 0);

if(isDead) {
    JString result = new JString("DEAD");
    VMC.Print(result);
    result.Destroy();
} else {
    JString result = new JString("ALIVE");
    VMC.Print(result);
    result.Destroy();
}
```

ポイント:

- `new JString("DEAD")` で文字列を作る
- `VMC.Print(result)` で表示する
- `result.Destroy()` で必ず片付ける

## よくある使い方

### 1) メッセージをつなげる（Append）

JStringは「文字列の箱（バッファ）」を持っています。
そこに文字を追加していくのが `Append()` です。

```csharp
JString s = new JString("HP:");
s.Append("10");
VMC.Print(s);
s.Destroy();
```


### 2) 中身を空にする（ClearBuffer）

同じJStringを使い回したいときは、`ClearBuffer()` で中身だけ空にできます。

```csharp
JString s = new JString("");

s.Append("HELLO");
VMC.Print(s);

s.ClearBuffer();
s.Append("BYE");
VMC.Print(s);

s.Destroy();
```

## char / string（上級者向け）

ここから先は上級者向けです。
普段のゲーム制作では **JStringを使う**のがおすすめですが、
「仕組みを理解したい」「低レベルに触りたい」場合は `char` や `string` も使えます。

### char とは？

`char` は「1文字」を表す型です。

- 文字: `'A'` や `'e'` のように **1つだけ**
- 文字列: `"HELLO"` のように **文字がたくさん並んだもの**

見た目で覚えると簡単です。

- `char` は **シングルクォート**: `'A'`
- `string` は **ダブルクォート**: `"A"`（これは文字が1つでも「文字列」）

```csharp
char c = 'A';

// 例：文字で分岐する
if(c == 'A') {
    // Aのときの処理
}
```

### 文字列の終わり（\0）って何？

JBScriptの文字列（正確には `char` 配列）は、文字列の最後に **終わり印**として `\0` を置きます。

- `\0` は「文字のゼロ番」ではなく、**文字列の終端（おしまい）** を表す特別な文字
- これがあると、VMは「どこまでが文字列か」を知ることができます

たとえば、`"Test"` はメモリ上では次の並びになります。

- `'T' 'e' 's' 't' '\0'`

この `\0` がないと、VMは「どこまで読めばいいの？」が分からず、
関係ないメモリまで読んでしまって事故になります。

### char[] は「文字の配列」

`char[]` は `char` が並んだ配列です。
なので、インデックス（番号）で1文字ずつ取得・代入することができます。

```csharp
char[] chars = new char[5];
chars[0] = 'T';
chars[1] = 'e';
chars[2] = 's';
chars[3] = 't';
chars[4] = '\0';

// 1文字ずつ読める
if(chars[1] == 'e') {
    // ここに処理
}
```

### char配列（文字列）はメモリにどう置かれる？

JBScriptでは、`new` オペレータで動的に作成された配列はJBVMの仮想メモリ上に置かれます。
イメージとしては、次のように「並んで」入っています。

例：`char[] chars = {'T','e','s','t','\0'}`

- 先頭アドレス → `'T'`
- その次 → `'e'`
- その次 → `'s'`
- その次 → `'t'`
- その次 → `'\0'`

つまり、`chars` という変数そのものは、
この並びが置かれた **先頭アドレス**を指している（覚えている）と考えると分かりやすいです。

```
chars  ──▶  [ 'T' ][ 'e' ][ 's' ][ 't' ][ '\0' ]
            ^先頭
```

※ さらに厳密には、JBScriptの配列には先頭に管理用のヘッダが付くことがあります。
（でも、今はまず「文字が連続して並び、最後に\0がある」だけ覚えればOKです）

### JBScriptの string は「文字列型」ではありません

JBScriptの `string` は「char配列に変換せよ」という命令のようなものです。
つまり、実際には `string` という便利な型があるわけではありません。

- コンパイル時に `"Test"` という文字列は **char配列**に変換されます
- string として宣言された変数（実際はchar配列）には、その配列が置かれた **仮想メモリ上の先頭アドレス**が入ります

そのため、`string` は **char配列として**文字を扱えます。

```csharp
// 以下のコードは、コンパイル時にchar配列に変換されます
string mystring = "Test";

// char配列として文字を読めます
if(mystring[1] == 'e') {
    // 取得した文字によって何かの処理をする
}
```

### 「stringは実質、char配列を作る」例

`string` として宣言された変数は、イメージとしては次と同じことをしています。

```csharp
// string mystring = "Test";
char[] mystring = new char[5];
mystring[0] = 'T';
mystring[1] = 'e';
mystring[2] = 's';
mystring[3] = 't';
mystring[4] = '\0';
// string（char配列）の変数は仮想マシン側のPrintString命令で標準出力に表示できます
VMC.PrintString(mystring);
```

## ちょっとだけ内部の話（上級者向け）

- JStringは内部で `char[] Buffer` を持っています
- `GetBuffer()` は、その `char[]` を取り出します
- `VMC.Print(JString)` は内部で `GetBuffer()` を使い、VM側に渡して表示します

つまり、JStringは「VMが扱いやすい形」に整えた文字列、と考えると分かりやすいです。

## 注意点

### Destroy忘れは事故の元

`new JString(...)` をしたら、最後に `Destroy()` を必ず書きます。

### バッファサイズには限界がある

JStringは内部にバッファを持ちます。
長い文章を何度も `Append()` すると、バッファ不足で壊れる可能性があります。
その場合は、最初から十分なサイズのバッファを用意する必要があります。
（現状のJBScriptでは、まずは「長文をAppendしすぎない」でOKです）

### ファイルパスの指定でもJStringを使う

JBVMは基本的にJStringで文字列を処理します。なので、ゲームエンジンにファイルパスなどを指定する場合は、JStringを渡します。

```csharp
JString texturePath = new JString("Assets/Background/map.png");
Texture MapTexture = new Texture(texturePath);
Image image = new Image(MapTexture, Layer_UI, 0, 0, -1, -1, 1, 0);
texturePath.Destroy();
```
