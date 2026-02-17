---
title: はじめてのJBScript
sidebar_position: 2
---

# はじめてのJBScript

## 目的

- JBScriptの基本的な形（Start / Update）がわかる  
- どこに処理を書けばいいか迷わなくなる  

## JBScriptの基本の形

JBScriptでは、ゲームの動きを作るために記述すべき「お作法」があります。まずは、プログラム本体を記述するために2つの関数を実装する必要があります。

- `Start()`：ゲーム開始時に**一度だけ**呼ばれます。初期設定や準備を書く場所です。
- `Update()`：毎フレーム（例：1秒間に約60回）呼ばれます。ゲームの動き（ループ）を書く場所です。

これらの関数は `[JBScript_Start]` と `[JBScript_Update]` という「目印」を付けて書きます。ゲームエンジンが目印を見て、ゲーム開始時ならStart()関数を、ゲームループならUpdate()関数を自動で呼び出してくれます。

## 最小サンプル

まずはこの基本的な形を、そのままコピーして使えばOKです。

```csharp
using JBScript;
using JBGE.GameEngine;

namespace MyGame {
  public static class Program {

    [JBScript_Start]
    public static void Start() {
      // ゲームが開始した時に一度だけ呼ばれる
    }

    [JBScript_Update]
    public static void Update() {
      // 毎フレームのゲームループ処理を書く
    }
  }
}
```

今後はこの中に少しずつコードを追加してJBScriptのイロハを学んでいきます。
