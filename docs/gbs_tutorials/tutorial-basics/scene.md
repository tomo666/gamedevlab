---
description: シーンの概要と使い方の説明
sidebar_position: 3
---

import styles from '../styles.module.css';

import scene_and_triggers from './img/scene/scene_and_triggers.png';
import create_scene from './img/scene/create_scene.gif';
import add_background from './img/scene/add_background.gif';
import assets_background_folder from './img/scene/assets_background_folder.png';
import apply_scene_background from './img/scene/apply_scene_background.gif';
import scene_test_run from './img/scene/scene_test_run.gif';
import scene_test_run_button from './img/scene/scene_test_run_button.png';
import tile_description from './img/scene/tile_description.png';
import gbs_doc_site_palette_swatches from './img/scene/gbs_doc_site_palette_swatches.png';
import scene_types from './img/scene/scene_types.png';
import vram_tile_area_explained from './img/scene/vram_tile_area_explained.png';
import unique_tile_explained from './img/scene/unique_tile_explained.png';
import unique_tile_count_check from './img/scene/unique_tile_count_check.png';

# シーンの概要
作成日: `2024年10月9日`　更新日: `2024年10月19日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、朝、ドットン研究所・研究室</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビビビットン。<br/>あまぐもが　やってくる　よかんがする。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight_Exclamation}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>雨の日は集中力が高まるから<br/>ワシも実は雨が降る日は好きなんじゃ。<br/>レトロ星はよく雨が降るからええのう。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　まいにち　ねるまえに<br/>あまごいの　ぎしきを　してるんだよぉ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ほう、ビットンには<br/>そんな日課があるんじゃナ・・・。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセ　あめがふるまで　まだじかんがあるよ<br/>ビットン　まだまだ　やるきいっぱいなの。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>やるきいっぱいなんじゃな？<br/>では、さっそく GB Studio の続きを<br/>やっていこうかの！<br/>「**シーン**」について教えるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## シーンについて

<div className={styles.tips_no_size_limits}>
:::tip[GB Studio のシーンについての説明]
<br/>
### シーンとは
<br/>
GB Studio を起動すると、ワールドエディタ画面が表示されます。この画面では、複数の「**シーン**」と呼ばれるステージごとの個別のゲームの画面を組み合わせてゲーム全体を組み立ていきます。各シーンにはアクターやトリガーを配置したり、イベントスクリプトを追加してゲームの機能そのものを実装していきます。

<br/><img src={scene_and_triggers} class="zoomImg" style={{width: 600}} alt="scene_and_triggers" /><br/><br/>

通常、それぞれのシーンは互いに「**トリガー**」と `シーンの切り替え` イベントによって接続されます。トリガーは、画面のオレンジ色の矩形で表され、プレイヤーが接触すると特定のイベントを実行します。トリガーに接触した時に `シーンの切り替え` イベントを設定することで、他のシーンに場面を移すことができます。

この例では、各シーンのドアや入り口にトリガーを設置して、プレイヤーの接触時に該当する他の部屋に移動するようにイベントを設定しています。

### シーンの種類
シーンにはいくつかのタイプ（種類）があります。デフォルトは「トップダウン 2D」というシーンのタイプが適用されています。シーンのタイプを変更するには、シーンを選択したときに表示される右側の情報のパネルの `シーンのタイプ` から設定することができます。
<br/><img src={scene_types} class="zoomImg" style={{width: 600}} alt="scene_types" /><br/><br/>

#### `トップダウン 2D`
キャラクターやフィールドを上から俯瞰して見た視点で操作するゲームを作る時にはこのシーンのタイプを選びます。RPG、アクション、シミュレーション、ストラテジー、ノベル系、アドベンチャー、など幅広いゲームのシーンを作る際にオススメです。<br/>本講座では基本的に、このトップダウン 2D シーンを用いたチュートリアルで進めていきます。

#### `プラットフォーマー`
横方向など一方向にスクロールするフィールドでキャラクターが移動したりするゲームなどを作る時にはこのシーンのタイプを選びます。2D スクロールアクションを作る際にオススメです。

#### `アドベンチャー`
トップダウン 2D と似ていますが、キャラを上下左右方向だけでなく、斜め移動も含めた 8 方向に動かすことができます。<br/>アドベンチャーを作る際にオススメですが、このシーンはまだ発展途中で不具合も多いです。

#### `シューティング`
スクロール型シューティング系（Shmup とも言われます）ゲーム用のシーンです。

#### `ポイント & クリック`
擬似マウスカーソルで画面内をポイント、クリックして謎解きをするようなゲーム用のシーンです。

#### `ロゴ`
主にゲームのロゴや一枚絵を表示するのに使用されるシーンです。後述するタイル数制限を超えた固有タイルを配置することができますが、使用できるスプライト数が激減します。

:::
</div>


<!--
<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ワクワク。<br/>これは　いえのなか・・・かな？<br/>ビットンのおうちとは　ちょっと<br/>ちがうけど　すてきなおうち。</span>
</div>
<p className={styles.clearLine}></p>


<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>この例では、家の中の各パーツを<br/>それぞれのゲーム画面に分割しておる。<br/>このゲーム画面のことを「**シーン**」と呼ぶんじゃ。<br/>シーンは好きなように配置できるから<br/>ワシなら部屋の配置順に並べるゾ。</span>
</div>
<p className={styles.clearLine}></p>
-->

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>わぁ〜〜〜<br/>シーンのタイプが　いっぱい。<br/>どれにすれば　いいのかなぁ？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>このチュートリアルでは、<br/>幅広いゲームジャンルをカバーできる`トップダウン 2D` の<br/>シーンタイプで進めていくゾ。<br/><br/>では、さっそくシーンを作ってみようかのう。</span>
</div>
<p className={styles.clearLine}></p>

## シーンの作成と画像の読み込み

<br/>
<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>新しいシーンを作るには、エディタのツールバーで<br/>`＋` ボタンをクリックして `シーン` を選択すると<br/>新しいシーンを作成するモードになるゾ。<br/>この状態でステージの好きなところをクリックして<br/>新しいシーンを配置するんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={create_scene} style={{width: 400}} alt="create_scene" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>これがなにもない空っぽのシーンじゃ。<br/>試しに草原の背景にしてみようかのう。<br/>ワシの作った草原のグラフィックファイルを<br/>ここからダウンロードできるゾ。<br/><hr/>![草原.png](/img/tutorials/草原.png)<hr/>（右クリック &gt; `名前を付けて画像を保存…` &gt;<br/>`草原.png` として保存）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>**使用可能な画像ファイルは .PNG ファイル形式のみ**だから注意が必要だゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>このファイルはどうやって<br/>ジービースタジオにいれるの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ダウンロードしたファイルを GB Studio に<br/>ドラッグ＆ドロップするだけじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={add_background} style={{width: 400}} alt="add_background" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>これで、ファイルがプロジェクトフォルダの<br/>`assets/backgrounds` フォルダに自動的に入るんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={assets_background_folder} style={{width: 250}} alt="assets_background_folder" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ただし、ここで注意が必要じゃ！<br/>背景画像として読み込みたいファイルは<br/>**透過されている箇所があってはならん**。<br/>透過された箇所がひとつでもあると、<br/>スプライト用の画像として判別され<br/>スプライト画像用の `assets/sprites`<br/>フォルダに入ってしまうんじゃ。<br/><br/>また、もうひとつ重要な点があるゾ。<br/>それは、画像ファイルの解像度は<br/>**必ず 8 ピクセルの倍数**であることじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>かいぞーど・・・<br/>8 ピクセルのばいすう？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>つまり、8 で割り切れるサイズである必要があるのじゃ。<br/>幅 256px 高さ 256px の画像サイズは大丈夫じゃが<br/>幅 250px 高さ 199px は幅・高さのそれぞれのピクセル数が<br/>8 で割り切れないからダメなんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん。</span>
</div>
<p className={styles.clearLine}></p>

## シーンに背景画像を適用
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>それでは、さっそく読み込んだ背景画像を<br/>シーンの背景として適用してみるゾ。<br/>背景を適用したいシーンをクリックして<br/>エディタの右側にあるシーンの設定項目の<br/>`背景` ドロップダウンをクリック。<br/>さきほど読み込んだファイル名「草原」<br/>を選択したら、適用完了じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={apply_scene_background} style={{width: 550}} alt="apply_scene_background" /></center><br/>

## 背景画像の作成について

<div className={styles.tips_no_size_limits}>
:::tip[背景画像の作成についてのアドバイスと注意点]
<br/>
### 画像の作成ソフトウェア
背景画像は一般的なグラフィック制作ソフトであれば作成することができます。本サイトでは [aesprite](https://www.aseprite.org/) というドット絵の制作に特化したソフトウェア（有料/USD 19.99）を使って説明します。もちろん、Photoshop や [EDGE](https://takabosoft.com/edge) など、使い慣れているソフトウェアがあれば、そちらを使用しても問題ありません。

### 背景画像のタイルについて
<!--ドットン博士が前述したように、背景画像のピクセルサイズは幅と高さ共に 8px の倍数である必要があります。そして、この背景画像の全体サイズを 8 で割った時に構成される各 8x8 ピクセルの画像パーツを「**タイル**」といいます。-->
GB Studioでは、画像の最小サイズは「横 8px 縦 8px 」になります。そしてこの最小サイズの画像パーツの事を「**タイル**」といいます。GB Studio では**タイル**を基本単位として扱いますので、今後はこの単位を使って説明していきます。
<br/><img src={tile_description} style={{width: 550}} alt="tile_description" /><br/><br/>

### 画像を構成する 4 色
ゲームボーイの場合は 4 段階の濃淡で 4 色を表します。<br/>スーパーゲームボーイやゲームボーイカラーの場合はこの 4 段階の濃淡にパレットを割り当てる事で色を表現します（パレットについては別の講座で説明します）。<br/>つまり、単色表示のゲームボーイ風（グリーン調）でゲームを作りたい場合でも、カラー表示のゲームボーイ風でゲームを作りたい場合であっても、画像素材はすべて 4 段階の濃淡（4 つのカラーコード）で作成する必要があります。以下のカラーコード（16進数カラーコード）を使用して背景画像を作成しなくてはいけません。<!--したがって、背景画像も 4 段階の濃淡（4 つのカラーコード）で作成する必要があります。以下のカラーコード（16進数カラーコード）を使用して背景画像を作成してください。-->

<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#071821'}}>■</span><span>#071821</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#306850'}}>■</span><span>#306850</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#86c06c'}}>■</span><span>#86c06c</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#e0f8cf'}}>■</span><span>#e0f8cf</span></div>

<br/>
[GB Studio の公式ドキュメントページ](https://www.gbstudio.dev/docs/assets/backgrounds#manual-palettes) から、お使いの画像編集ソフトウェア（Aesprite、Photoshop、Piskel）用のパレットスウォッチをダウンロードすることも可能です。

<br/><img src={gbs_doc_site_palette_swatches} style={{width: 500}} alt="gbs_doc_site_palette_swatches" /><br/><br/>

<hr/>
※ GB Studio 4.x からは、自動パレット機能が追加されましたので、上記の 4 色以外を用いた画像だったとしても、プロジェクトへの読み込み時に自動的に近似色のパレットを生成してくれます。ただし、精度は完璧ではないため予期せぬ色に変換されてしまうことがありますので、なるべく基本の 4 段階のカラーコードを使用して自分で作成したパレットを割り当てた方が狙った色を出しやすいです。
<hr/>

### 背景画像のサイズ制限
背景画像は、最小で 160px x 144px（ゲームボーイの液晶画面サイズ）のサイズに設定できます。これは 20 x 18 タイルに相当します。また、最大サイズは、幅と高さを合わせて 2,040px 以内にする必要があり、幅と高さを掛けた数が 1,048,320 ピクセル以内にする必要があります。例えば、2,016px の幅をもつ背景画像は、高さを 520px にする必要があります（2,016 x 520 = 1,048,320 ピクセルとなるからです）。

### 背景画像の固有タイル数の制限
固有タイル（ユニークタイルとも呼ばれます）とは、個別のパターンを持つタイルの事を指します。次の画像の例を見てみましょう。草が生えていたり生えていなかったり様々なタイルがあります。このタイル 1 つ 1 つを見て、同じ画像のタイルがある場合はそれらを除いて見てみましょう。残ったタイルが固有タイル（ユニークタイル）です。画像の全体のタイル数 8 タイル中、固有タイル数は 4 タイルある事がわかります。
<!--固有タイル（ユニークタイルとも呼ばれます）とは、重複しない一意のタイルのことです。例えば次の例では、全体のタイル数は 8 タイルですが、固有タイル数は 4 タイルになります。-->

<br/><img src={unique_tile_explained} style={{width: 350}} alt="unique_tile_explained" /><br/><br/>

各シーンの背景画像は固有タイルを最大 192 個まで設置できます（`カラーのみ` モードでは 384 個まで）。現在のシーンがどのくらいの固有タイルを使用しているかは、エディタ右側のシーン情報パネルの `背景` セクションで確認することができます。

<br/><img src={unique_tile_count_check} style={{width: 650}} alt="unique_tile_count_check" /><br/><br/>


<!--ただし、128 個の固有タイルを超えた場合は、スプライト / 背景用に確保されたタイル領域を消費し始めるので、スプライト用タイルの使用可能数が減ってしまうことに注意が必要です。
<br/><img src={vram_tile_area_explained} style={{width: 600}} alt="vram_tile_area_explained" /><br/>
-->
:::
</div>

## ゲームの起動とプレイヤー操作
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>どれ、ここまででいったん<br/>ゲームとして起動してみようかの？<br/>GB Studio の画面右上にある<br/>再生ボタンをクリックじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={scene_test_run_button} style={{width: 200}} alt="scene_test_run_button" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>わぁい！<br/>ビットンのゲームが　きどうしたよ！！</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={scene_test_run} style={{width: 400}} alt="scene_test_run" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>このやじるしは　プレイヤーなのかなぁ？<br/>キーボードの `↑←↓→` キーで　うごかせるね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム。<br/>キーボードの矢印キーで移動する他に<br/>`Z` キーが (A) ボタン、`X` キーが (B) ボタン<br/>`Shift` が SELECT、`Enter` が START<br/>といった感じで入力操作ができるゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ねぇねぇ！<br/>ビットン　このヘンテコな　やじるしを<br/>じぶんでつくった　キャラクターにしたいよ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そうじゃろ、そうじゃろ！<br/>ではお昼ごはんを食べた後にプレイヤー画像と<br/>アクターについて説明しようかの！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>わぁい！おひるごはん！</span>
</div>
<p className={styles.clearLine}></p>