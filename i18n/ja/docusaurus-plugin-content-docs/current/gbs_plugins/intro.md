---
description: Plugin overview
sidebar_position: 1
---

# 概要

このドキュメントでは GB Studio 4 用の自作プラグイン: [GB Studio XV Plugins](https://github.com/tomo666/gb-studio-xv-plugins) の説明をします。

`GB Studio XV Plugins` は GB Studio で著者（Tomo）が開発中のゲーム「XV」の副産物です。現行バージョン（4.x）の既存イベントでは実現できない機能をプラグインとして実装しています。

クセの強いプラグイン集なので万人向けではないかもしれませんが、役に立つ人もいるかもしれません。 商用・非商用問わずご自由にお使いください。ただし、これらのプラグイン集は実験的な制作物なので、将来予告なく改変・削除する可能性があります。また、バグや追加機能の追加は著者自身が必要としない場合は原則いたしませんので、利用はくれぐれも自己責任でお願いします。

クレジット記載などは不要ですが、クレジットいただける場合はこちらをお使いください：[Tomo@indiegdevstdio](https://x.com/indiegdevstdio) または Tomo。

## プラグイン集

### カーソルコントローラー

_`UI_Manager: Cursor_Controller`_

簡易的なカーソル操作をスプライトとアニメーションで実現します。

### 配列マネージャー（値の代入）

_`Array_Factory: Array_Manager_Set`_

複数のグローバル変数を統合させて配列として扱います（配列への値を代入）。

### 配列マネージャー（値の取得）

_`Array_Factory: Array_Manager_Get`_

複数のグローバル変数を統合させて配列として扱います（配列からの値を取得）。

### アクターの進行方向の障害物を取得する

_`Obstacle_Detector: Actor_Walkability_Checker`_

アクターの進行方向の障害物を取得します。

### タイルの障害物の情報を取得する

_`Obstacle_Detector: Obstacle_Checker`_

タイルの障害物の情報を取得します。

### 指定のスプライトタイルを置き換える

_`Sprite_Tile_Replacer`_

指定のスプライトタイルを置き換えます（VRAM バンク切り替え可能）。

