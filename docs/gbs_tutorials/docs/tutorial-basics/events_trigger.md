---
description: トリガーとイベントを使用したシーン間の移動
sidebar_position: 5
---

import styles from '../styles.module.css';

import triggers_explained from './img/triggers/triggers_explained.png';
import trigger_add from './img/triggers/trigger_add.png';
import trigger_add2 from './img/triggers/trigger_add2.png';
import trigger_click from './img/triggers/trigger_click.png';
import trigger_add_event from './img/triggers/trigger_add_event.png';
import trigger_scene_warp from './img/triggers/trigger_scene_warp.png';
import trigger_event_in_action from './img/triggers/trigger_event_in_action.gif';

# トリガーとシーン間の移動
作成日: `2024年10月19日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、夜、ドットン研究所・研究室</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ひが　しずんできたねぇ。<br/>でも　あと　ノーミソ１ ビットンほどの<br/>がくしゅうは　できるきがするの。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そうじゃな。<br/>1 日にあまり詰め込み過ぎても<br/>覚えられんからな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>でも　ビットン　がんばる！<br/>やるきだけは　いっちょまえなの。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>それでは、いま作ったものを<br/>応用してシーンからシーンへの<br/>移動をやってみようかのう！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリが　ほかのばしょに<br/>いどうできるようになるの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム。<br/>「**トリガー**」と「**イベント**」を使って<br/>シーン間の移動を実現できるゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリの　トリガーイベント・・・<br/>カブトリガーイベントなの！</span>
</div>
<p className={styles.clearLine}></p>

## トリガーについて
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>まずは「トリガー」について教えよう。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={triggers_explained} style={{width: 400}} alt="triggers_explained" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>トリガーは、シーン上ではオレンジ色の<br/>矩形（ボックス）で表示されとるゾ。<br/>トリガーにプレイヤーが接触または離れた<br/>ときに何かしらのイベントが実行可能じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>イベントっていうのは<br/>シーンのいどうのこと？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>シーン移動はもちろん、触れたりしたときに<br/>罠を作動させたり、移動式の床にしたり、<br/>ワープゾーンなどもイベントとして作れるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>トリガーを追加するには、ワールドエディタ上で<br/>シーンを選択して、ツールバーの `+` ボタンから<br/>`トリガー` を選択すれば追加するモードになるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={trigger_add} style={{width: 200}} alt="trigger_add" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>トリガーの追加モードになったら<br/>シーン上の好きな場所でドラッグ<br/>すれば配置完了じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={trigger_add2} style={{width: 300}} alt="trigger_add2" /></center><br/>

## トリガーにイベントを追加
<br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>トリガーには　どうやって<br/>イベントを　ついかするの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>まずは、イベントを追加したい<br/>トリガーをクリックするんじゃ。<br/>すると、エディタの右側にトリガー<br/>の情報編集パネルが開くじゃろ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={trigger_click} style={{width: 450}} alt="trigger_click" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>このパネルの下にある `イベントの追加`<br/>ボタンを押すと、追加できるイベントの<br/>一覧が `イベントの追加` ダイアログとして<br/>表示されるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={trigger_add_event} style={{width: 450}} alt="trigger_add_event" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>シーンをきりかえるって<br/>イベントがあるねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そうじゃ！<br/>この `シーンを切り替える` というイベントを<br/>クリックしてトリガーにイベントとして追加<br/>してみるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>


<br/><center><img src={trigger_scene_warp} style={{width: 800}} alt="trigger_scene_warp" /></center><br/>


<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>トリガーから　あおい　てんてんの　<br/>せんがのびてるね。これ　なぁに？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>これは、`シーンを切り替える` イベントを<br/>追加したときに表示されるシーン間の<br/>遷移線で、シーンの移動先を示すものじゃ。<br/>この線の末端の矢印をドラッグ＆ドロップ<br/>して、異なるシーン間を自由に移動したり<br/>移動先を指定することができるゾ。<br/>もちろん、`シーンを切り替える` イベントの<br/>プロパティにある `シーン` や `X`、`Y`から<br/>入力して指定することも可能じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>さらに・・・<br/>移動先のプレイヤーの方向を指定するには<br/>`方向` で向きを設定するゾ。<br/>シーンの切り替え時に画面をフェードイン<br/>またはフェードアウトするんじゃが、<br/>そのときのフェードの速度は `フェード速度`<br/>ドロップダウンから設定可能じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットンが　ひとこと　きいただけで<br/>ハカセは　ひゃくばいくらいで<br/>かえしてくるけど　ビットン<br/>がんばって　せっていしたよ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウ・・・ウム。<br/>どうしても説明的になってしまうのは<br/>情報量の多さゆえじゃから勘弁して<br/>ほしいんだナ！<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>では早速、実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={trigger_event_in_action} style={{width: 300}} alt="trigger_event_in_action" /></center><br/>
<br/>
<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリが　ひとのいえに<br/>かってに　はいってくよぉ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>こんな感じで、トリガーだけでなく<br/>アクターやプレイヤー自身、さらに<br/>シーンそのものにもイベントを追加<br/>することができるんじゃ。<!--<br/>発生対象や条件に応じてさまざまな<br/>イベントを組み合わせれば、工夫<br/>次第で面白いゲームが作れるゾ！--></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>なんだか　すっごく<br/>ゲーム！　ってかんじに<br/>なってきたねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>次はさらに別の機能を追加<br/>してみるといいかもしれんナ！<br/>とまぁ、今日はこのくらいに<br/>しておくかのう。<br/>ビットンの頭から、うっすら<br/>煙が出始めておるし・・・。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>うん！<br/>ハカセ　きょうも　ありがとう！<br/>ビットン　おうちに　かえるねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウムウム。<br/>またいつでも来るといいゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセの　けんきゅうじょに<br/>トリガーをはいちして<br/>シーンきりかえをして・・・<br/>いどうさきを　ビットンの<br/>おうちの　げんかんまえに<br/>せってい・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ん・・・？<br/>しっぽをブンブンまわしながら<br/>ブツブツ言ってどうしたんじゃ<br/>ビットン？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>そして　ビットンが　この<br/>トリガーのうえに　のると・・・</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>シュイーン！</div><br/>

<div>
  <span className={styles.avatarDottonRight_Exclamation}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>き・・・消えおった・・・</span>
</div>
<p className={styles.clearLine}></p>