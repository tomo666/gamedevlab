---
description: コリジョン（当たり判定）の設定の仕方
sidebar_position: 8
---

import styles from '../styles.module.css';

import grass_fences from './img/collisions/grass_fences.png';
import collision_tools from './img/collisions/collision_tools.png';
import set_collisions_in_action from './img/collisions/set_collisions_in_action.gif';
import platformer_smaple_collision from './img/collisions/platformer_smaple_collision.png';
import sample_collision_in_action from './img/collisions/sample_collision_in_action.gif';

# コリジョンの設定
作成日: `2024年10月24日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、夜、ビットンの家</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>あと　ノーミソ１ ビットンほどの<br/>がくしゅうが　できそうだなぁ。<br/>ハカセのチカラを　かりないで<br/>ビットンひとりで　なにか<br/>やってみようかなぁ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>そうだ！<br/>カブトリが　あるかせるように<br/>なったから　こんどは　あるけない<br/>ばしょを　つくってみようかな？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>たしか　まえに　アールピージーツクール<br/>では　しょうとつはんてい　っていう<br/>とおれない　マップチップを　つくった<br/>きがするなぁ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>とりあえず　サクでも　つくろうかな。<br/>プレイヤーが　サクを　つうかできない<br/>ようにしたいなぁ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={grass_fences} style={{width: 300}} alt="grass_fences" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>はいけいの　がぞうが　できた！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>あれ？　でも　ジービースタジオで<br/>しょうとつはんていの　マップって<br/>どうやって　つくるんだろう？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>すやぁ・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>睡眠学習の時間だゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>あ・・・ユメセカイの　ハカセ！<br/>こんばんわ〜　こんやも<br/>よろしくおながしゃす！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセ〜　ジービースタジオで<br/>しょうとつはんていって<br/>どうやるの？</span>
</div>
<p className={styles.clearLine}></p>


<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム、GB Studio は、シーンの<br/>コリジョン設定を行うことで<br/>アクターが通れないタイルを<br/>指定することができるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ワールドエディタ上で、左のツールパネルから<br/>コリジョン設定モードのボタンをクリックして<br/>コリジョン設定モードに切り替えるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## コリジョン設定ツール
<br/><center><img src={collision_tools} class="zoomImg" style={{width: 980}} alt="collision_tools" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>基本的には、全面タイル（赤アイコン）<br/>を選択して、8px ブラシでアクターを<br/>通らせたくないタイルを塗るんじゃ。<br/>早速、コリジョンブラシで塗ってみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={set_collisions_in_action} style={{width: 400}} alt="set_collisions_in_action" /></center><br/>

<br/>
<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>シーンのはいけいは　いちまいの<br/>がぞうとして　つくったんだけど<br/>アクターのしょうとつはんていは<br/>マップチップに　せっていする<br/>わけじゃ　ないんだねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム、RPG ツクールなどでは<br/>専用のマップエディタがあって、<br/>マップチップに直接コリジョン<br/>を設定できるんじゃが、現行の<br/>GB Studio には専用のエディタ<br/>がないので、直接マップに<br/>コリジョンを設定する仕組みを<br/>採用しとるんじゃな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>この講座では、ビットンの作りたいものが<br/>見下ろし型のゲームじゃから基本的には<br/>トップダウンビューを主体に使い方を伝授<br/>していくつもりじゃが、サンプル程度に<br/>プラットフォーマータイプのシーンで<br/>コリジョン設定してみると、こうなるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={platformer_smaple_collision} style={{width: 350}} alt="platformer_smaple_collision" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ツタは登れるようにはしご、<br/>スロープには斜面コリジョンを<br/>それぞれ塗ってあるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>では早速、ビットンがさきほど設定した<br/>シーンを実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={sample_collision_in_action} style={{width: 300}} alt="sample_collision_in_action" /></center><br/>
<br/>
<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリが　サクのまわりを<br/>あるけるように　なったよぉ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>障害物があることで<br/>ゲームがよりいっそう<br/>豊かになったんだナ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　だいまんじょき。<br/>もう　つかれちゃったから<br/>おねんねの　じかんなのねん。<br/>おやすみスピー。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight_Exclamation}><div className={styles.characterName}>夢世界<br/>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ゆ・・・夢の中で寝るんじゃな。<br/>夢の中だったとしても、いつでも<br/>ワシを呼び寄せるとよいゾ。</span>
</div>
<p className={styles.clearLine}></p>