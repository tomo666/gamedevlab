---
title: コードの分割
sidebar_position: 12
---

# コードの分割

## 目的

- JBScriptのコード分割方法（usingとnamespace）について理解する 

## usingとは

`using`は別のスクリプトファイルを読み込むための仕組みです。これにより、複数のファイルに分けてコードを書くことができます。

### ルール：using の後ろは「拡張子を除いたファイル名」

- `using JBScript;` と書くと、コンパイラは `JBScript.cs` を探します。  
- `using JBGE.GameEngine;` と書くと、 `JBGE.GameEngine.cs` を探します。  
- これらのファイルは、基本的にエントリースクリプトと同じディレクトリツリー（フォルダ階層）内に存在している必要があります。

### 別フォルダに置く場合（互換性の注意）

- 例えば、`Lib` フォルダ内にファイルがある場合は、  
  `using Lib/JBScript;` や `using Lib/JBGE.GameEngine;` と書くこともできます。  
  - ただし、これはC#との互換性を壊すため、VSCodeなどのエディタのIntelliSense（補完機能）が使えなくなりますので注意してください。

## namespaceとは

`namespace`は名前の衝突を避けるための「名前の箱」のようなものです。関連するコードをグループ化して整理する役割もあります。  
JBScriptでは、ネストした（入れ子の）namespaceも使うことができます。

## using と namespace の関係

### ケースA: ファイル名 `JBGE.GameEngine.cs`

```csharp
// JBGE.GameEngine.cs
namespace JBGE {
    namespace GameEngine {
        public enum VerticalAlignment { Top, Middle, Bottom }
        // ...
    }
}


// Game.cs
using JBGE.GameEngine;

public static class Game {
    [JBScript_Start]
    public static void Start() {
        int top = VerticalAlignment.Top;
    }
}
```

この場合、`using JBGE.GameEngine;` と書くと、コード内で `VerticalAlignment.Top` のように直接書けます。

---

### ケースB: ファイル名 `JBGE.cs`

```csharp
// JBGE.cs
namespace JBGE {
    namespace GameEngine {
        public enum VerticalAlignment { Top, Middle, Bottom }
        // ...
    }
}


// Game.cs
using JBGE;

public static class Game {
    [JBScript_Start]
    public static void Start() {
        int top = GameEngine.VerticalAlignment.Top;
    }
}
```

この場合、`using JBGE;` と書いても、`GameEngine.VerticalAlignment.Top` のように、ネストされたnamespace名も含めて書く必要があります。

## まとめ

- `using` は拡張子を除いたファイル名でファイルを読み込みます。  
- `namespace` はコード内で使う名前のフルネームを決めます。  
- ファイル名とnamespaceは一致している必要はありませんが、合わせると書くコードが少なくなり便利です。
