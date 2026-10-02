---
description: JBASICの概要
sidebar_position: 1
---

# JBASIC

本ドキュメントでは、JBASICの言語仕様や使い方について説明します。下位レイヤー言語のJB Scriptについては、**[JBScript](../jbscript_docs/intro.md)** のページを参照してください。また、JB Studioの操作APIの詳細については、**[JB Studio API](../jbstudio_api_docs/intro.md)** のページを参照してください。

## JBASICとは？

JBASICはBASIC（Beginner's All-purpose Symbolic Instruction Code）（初心者向け汎用記号命令コード）というプログラミング言語からインスパイアを受けて開発されたオリジナルのプログラミング言語です。少ない命令セットで構造化された分かりやすいプログラムが書けることや、インタプリタ（機械語に翻訳せずにコードを実行できる仕組み）という性質を利用して手軽にコードを実行できることから、1970〜80年代にパソコンの一般普及と共に大流行しました。

JBASICは当時のBASICの手軽さを継承しつつ、現代の技術に合わせるために少しだけチューニングをした新しい形のBASIC言語です。
JBASICは汎用的な言語として設計されていますが、主な使用用途としては、複雑な機能を持つシステムを扱いやすくするためのAPIレイヤーの抽象化です。
この抽象化の仕組みにより、人間やLLMアシスタントが複雑なシステムの呼び出しを容易に行えるようになります。

JBASIC言語は特に以下の点に重点を置いています。


### 最小限の命令セット

JBASIC言語自体の命令セットは非常に少なくしているので、覚える（参照する）労力が最小限です。また、BASICならではの構造化プログラミングを主とし、オブジェクト指向パラダイムを言語仕様として取り入れていません。※ただし、オブジェクト指向ライクな実装方法が無いわけではありません（後述）。

### 一度書けば、どこでも動く

Write once, run anywhere（一度書けば、どこでも動く）というスローガンはJava言語ではお馴染みです。JBASICはこの理念をBASIC言語でも実現するため、JBASICで書かれたプログラムコードはJBVM（仮想マシン）が実装された環境では、同じように動作します。

### 言語自体の抽象化

JBASICは、JBASIC → JBScript → オプコード（iASM）→ バイトコード（バイナリコード）の順に変換されて仮想マシン上で実行されます。つまり、言語自体が抽象化されているため、少ない手数で機能の実装が可能になります。より高度な機能を実現したい場合でも、下位レイヤー言語の **[JBScript](../jbscript_docs/intro.md)** というC#ライクな言語をJBASICコードと混ぜて実装することも可能です。

<br/>

```vb title="テキストファイルを読み書きするコード例"
' ファイルの読み書きに必要なライブラリのインクルード
INCLUDE JBScript.IO

' 読み書きするファイルへのパス
DIM path AS STRING = "/Users/tomo/GitHub/jb-script/Test/jbasic-output.txt"
' ファイルに書き込むテキスト内容
DIM contents AS STRING = "hello from JBASIC"
' ファイルから読み込んだテキスト内容を格納する文字列変数
DIM loaded AS STRING

' ファイルが存在しない場合は作成し、それ以外は上書きする
File.WriteAllText(path, contents)

' ファイルを読み込み、内容を変数に保存する
File.ReadAllText(path, loaded)

' ファイルから読み込んだ内容をコンソールに出力する
PRINT loaded
```
