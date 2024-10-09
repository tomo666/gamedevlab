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

# シーンの概要
作成日: `2024年10月9日`

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
## GB Studio のシーン

<div className={styles.tips_no_size_limits}>
:::tip[シーンについて]
<br/>
GB Studio を起動すると、ワールドエディタ画面が表示されます。この画面では、複数の「**シーン**」と呼ばれるステージごとの個別のゲームの画面を組み合わせてゲーム全体を組み立ていきます。各シーンにはアクターやトリガーを配置したり、イベントスクリプトを追加してゲームの機能そのものを実装していきます。

<br/><center><img src={scene_and_triggers} class="zoomImg" style={{width: 600}} alt="scene_and_triggers" /></center><br/>

通常、それぞれのシーンは互いに「**トリガー**」と `シーンの切り替え` イベントによって接続されます。トリガーは、画面のオレンジ色の矩形で表され、プレイヤーが接触すると特定のイベントを実行します。トリガーに接触した時に `シーンの切り替え` イベントを設定することで、他のシーンに場面を移すことができます。

この例では、各シーンのドアや入り口にトリガーを設置して、プレイヤーの接触時に該当する他の部屋に移動するようにイベントを設定しています。
:::
</div>

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

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>なにはともあれ、まずはシーンを作ってみようかのう。<br/>ワールドエディタのツールバーで `＋` ボタンをクリックして<br/>`シーン` を選択すると新しいシーンを作成するモードになるゾ。<br/>この状態でステージの好きなところをクリックして<br/>新しいシーンを配置するんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={create_scene} style={{width: 400}} alt="create_scene" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>これがなにもない空っぽのシーンじゃ。<br/>試しに草原の背景にしてみようかのう。<br/>ワシの作った草原のグラフィックファイルを<br/>ここからダウンロードできるぞ。<br/><hr/>![草原.png](/img/tutorials/草原.png)<hr/>（右クリック &gt; `名前を付けて画像を保存…` &gt;<br/>`草原.png` として保存）</span>
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

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>それでは、さっそく読み込んだ背景画像を<br/>シーンの背景として適用してみるゾ。<br/>背景を適用したいシーンをクリックして<br/>エディタの右側にあるシーンの設定項目の<br/>`背景` ドロップダウンをクリック。<br/>さきほど読み込んだファイル名「草原」<br/>を選択したら、適用完了じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={apply_scene_background} style={{width: 550}} alt="apply_scene_background" /></center><br/>

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
  <span className={styles.balloonDottonRight}>そうじゃろ、そうじゃろ！<br/>では、次回の講座でプレイヤー画像と<br/>アクターについて説明しようかの！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ワクワク！ドキドキ！</span>
</div>
<p className={styles.clearLine}></p>