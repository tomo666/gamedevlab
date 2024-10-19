---
description: アクターとスプライトの概要
sidebar_position: 4
---

import styles from '../styles.module.css';

import scene_test_run from './img/scene/scene_test_run.gif';
import stage_and_actor_explained from './img/actor/stage_and_actor_explained.png';
import actor_limits_10_tiles from './img/actor/actor_limits_10_tiles.png';
import actor_limits_10_tiles_play from './img/actor/actor_limits_10_tiles_play.png';
import actor_limits_12_tiles from './img/actor/actor_limits_12_tiles.png';
import actor_limits_12_tiles_play from './img/actor/actor_limits_12_tiles_play.png';
import actor_row_limit_example from './img/actor/actor_row_limit_example.gif';
import editor_selection_dropdown from './img/overview/editor_selection_dropdown.png';
import sprite_editor from './img/actor/sprite_editor.png';
import gbs_doc_site_palette_swatches_sprites from './img/actor/gbs_doc_site_palette_swatches_sprites.png';
import sprite_tiles_explained from './img/actor/sprite_tiles_explained.png';
import vram_tile_area_explained from './img/scene/vram_tile_area_explained.png';
import unique_tile_explained from './img/scene/unique_tile_explained.png';
import sprite_unique_tile_explained from './img/actor/sprite_unique_tile_explained.png';
import drag_and_drop_sprite from './img/actor/drag_and_drop_sprite.gif';
import kabutori_sprite_loaded from './img/actor/kabutori_sprite_loaded.png';
import sprite_kabutori_explained from './img/actor/sprite_kabutori_explained.png';
import animation_type_auto_explained from './img/actor/animation_type_auto_explained.png';
import sprite_set_width_height from './img/actor/sprite_set_width_height.png';
import set_animation_patterns_720p from './img/actor/set_animation_patterns_720p.gif';
import reverse_animation from './img/actor/reverse_animation.png';
import set_player_sprite_sheet from './img/actor/set_player_sprite_sheet.png';
import play_player_moving from './img/actor/play_player_moving.gif';
import actor_sprite_explained_comic from './img/actor/actor_sprite_explained_comic.png';


# アクターとスプライトの概要
作成日: `2024年10月19日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、昼、ドットン研究所・研究室</div><br/>

<!--
<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビビット　ビットン　ビビビットン<br/>ビビット　ビットン　ビビビットン！</span>
</div>
<p className={styles.clearLine}></p>
-->
<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>けっぷり。<br/>ビットン　おなかいっぱい。<br/>しゅーちゅーりょくが<br/>もどってきたの。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ワシもコーヒーチャージ完了じゃ！<br/>ビットンはコーヒーいらないんじゃったな？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>コーヒー　にがぁいもん。<br/>ビットン　あまぁいのがすきなの。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>(ビットン用に、通販サイトの<br/>「あまゾーン」で茶菓子でも<br/>取り寄せておこうかのぅ・・・)</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセ！　ビットンね　さっき<br/>ちゃちゃっとかいた　ドットえを<br/>プレイヤーとして　うごかしてみたい！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>おお、そうじゃった。<br/>前回はシーンについて説明したから<br/>今回はアクターとスプライトについて<br/>説明していこうかのう。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>やったぁ〜　ワクワク！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>前回はシーンに背景画像を適用して、<br/>プレイヤーキャラを動かしてみたんじゃったな。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={scene_test_run} style={{width: 300}} alt="scene_test_run" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>このやじるしが　プレイヤーなんだよね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム。<br/>プレイヤーはまたの名をアクターというゾ。<br/>まずはアクターについて説明しようかの。</span>
</div>
<p className={styles.clearLine}></p>

## アクターについて
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>プレイヤーや、他のモブキャラたちは<br/>「**アクター**」と呼ばれとるゾ。<br/>シーンが演劇のステージじゃとすると、<br/>アクターはそのステージ上の演者なんじゃ。<br/><br/>ただし、プレイヤー（主人公）だけは<br/>特別な「操作できるアクター」なんじゃ。<br/>プレイヤーアクターはシーンのエディタ上の<br/>ステージではオレンジ色の矢印アイコンで<br/>表示されるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={stage_and_actor_explained} style={{width: 400}} alt="stage_and_actor_explained" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>プレイヤーアクターは 1 つのシーンにつき<br/>1 体だけ配置できるが、それ以外のアクターは<br/>最大 20 体まで配置可能じゃ。<br/>ただし、最小シーンである 20 x 18 タイルでは<br/>最大 10 体までしか配置できない制限があるゾ。<br/>制限を超えて配置することも可能じゃが・・・。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>それいじょう　はいちすると<br/>どうなっちゃうの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>どれかのアクターが消えてしまうんじゃ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>かわいそうに。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>もうひとつ、重要な制約があるゾ。それは・・・<br/>**画面の横 1 列に表示できるアクターは 10 タイルまで**<br/>じゃ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>例で見せたほうがわかりやすいかの。<br/>たとえば、次のようなシーンでアクターを<br/>5 体ほどシーンに横一列で並べたとしよう。<br/>この例では、1 体のアクターは 4 タイルで<br/>分割されておる。<br/>つまり、画面の横一列には 10 個のタイルが<br/>上下 2 つに分かれて配置されておるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_limits_10_tiles} style={{width: 800}} alt="actor_limits_10_tiles" /></center><br/><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_limits_10_tiles_play} style={{width: 300}} alt="actor_limits_10_tiles_play" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>なにも　へんかが　ないね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>では、次に 10 タイルよりも多い量の<br/>アクターをこのように配置するゾ。<br/>つまり全部で画面 1 列に 12 タイルじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_limits_12_tiles} style={{width: 300}} alt="actor_limits_12_tiles" /></center><br/>
<br/>
<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_limits_12_tiles_play} style={{width: 300}} alt="actor_limits_12_tiles_play" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>あ！<br/>いちばん　ひだりのアクターが<br/>きえちゃったよぉ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そのとおりじゃ！<br/>このように、表示されている画面の<br/>横 1 列には 10 タイル分のアクターしか<br/>表示できない仕組みになっとるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>じゃあ　アクターをはいち<br/>するときは 10 タイルぶんに<br/>するように　きをつけるね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム。<br/>じゃがもう 1 つ、落とし穴があるんじゃ。<br/>それは、プレイヤーアクターも実は・・・<br/>アクターだということじゃ。<br/>つまり、プレイヤーも含めて 10 タイル以上が<br/>横 1 列に配置されてしまうと、他のアクターが<br/>消えてしまうゾ！</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_row_limit_example} style={{width: 300}} alt="actor_row_limit_example" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>また　いちばん　ひだりの<br/>アクターが　きえちゃうねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>アクターを配置する時はプレイヤーの<br/>移動範囲も考慮しながらうまく配置<br/>する必要があるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>よこ　いちれつは　わかったけど<br/>たてに　いちれつは　だいじょぶなの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウム。実はこの制約は横一列の場合だけで<br/>縦に一列の場合はいくつアクターがあっても<br/>大丈夫なんじゃ。<br/>これはゲームボーイの描画の仕組みが<br/>関係してくるんじゃが、ちと難しい話なので<br/>また機会があるときにでも説明しようかの。</span>
</div>
<p className={styles.clearLine}></p>

<br/>

## アクターとスプライトの違い
<br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ところで　ハカセー。<br/>ビットン　いまいち<br/>アクターと　スプライトの<br/>ちがいが　わからないよぉ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そうじゃな・・・どう説明しようかのう。<br/>アクターは演者のようなもの、と<br/>冒頭で説明したが、演者は衣装を着るじゃろ？<br/>その衣装がスプライトなんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふんふん。ふん？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>演者はステージ上で同じ衣装を着続けることもあれば、<br/>一人二役の演者などは衣装を変えたりもするじゃろ？<br/>アクターも同じで、スプライトを着せ替えたりできるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふんふん。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>つまり、スプライトエディタというのは<br/>衣装を編集するエディターのようなものじゃ。<br/>まあ、ちとわかりにくい例えだったかもしれんが<br/>とにかくアクターをシーン上で活躍させるには<br/>スプライトを割り当ててやる必要がある、<br/>ということじゃな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonLeft_Explode}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん・・・？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>しかたないのぅ・・・ちょっと待っとれ。<br/>たしかこの変に漫画があったような・・・。<br/>あぁこれじゃ。この４コマ漫画でも読んで<br/>みるといいゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={actor_sprite_explained_comic} style={{width: 450}} alt="actor_sprite_explained_comic" /></center><br/><br/>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　かんぜんにりかいしたよぉ！<br/>ビットンの　ちゃちゃっとかいた<br/>ドットえは　スプライトっていうんだねぇ。<br/>それで　そのスプライトを　アクターに<br/>はっつけるんだね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そのとおりじゃ！<br/>では早速アクターの矢印の画像を<br/>ビットンが書いた画像に変えてみようかの。<br/>スプライトエディタに切り替えてエディタの<br/>構成要素をひとつずつみていくゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={editor_selection_dropdown} style={{width: 250}} alt="editor_selection_dropdown" /></center><br/>

<br/>

## スプライトエディタ

<br/><center><img src={sprite_editor} style={{width: 800}} alt="sprite_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>さっきまで　うごかしてた<br/>やじるしが　ひょうじ　されてるねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<br/>
### スプライト画像の読み込み
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>まずはスプライトの元画像をプロジェクトに読み込むゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>シーンのときと　おなじで<br/>ドラッグ＆ドロップするのかな？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そのとおりじゃ！<br/>ドラッグ＆ドロップは、スプライトエディタ以外の<br/>エディタを表示していたとしても、できるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Close}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>それだと　はいけいの　ファイルなのか<br/>スプライトなのか　ジービースタジオが<br/>わからなくなっちゃわないの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>安心せい！<br/>GB Studio は、**透明色が含まれている<br/>.PNG ファイルをスプライトとしてみなす**んじゃ。<br/>逆にいうと、**透明色の含まれていないファイルは<br/>背景画像としてみなされる**んじゃ。<br/>もし、背景画像をドラッグ＆ドロップしたのに<br/>プロジェクトフォルダに入っていない場合は<br/>スプライトフォルダに入っている可能性があるゾ。<br/>そのときは画像に透明色が含まれていないか確認ダ！</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={drag_and_drop_sprite} style={{width: 400}} alt="drag_and_drop_sprite" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットンが　かいた　スプライトが<br/>よみこまれたよぉ！</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={kabutori_sprite_loaded} style={{width: 600}} alt="kabutori_sprite_loaded" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ほほう。これはどういうキャラクターじゃ？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリ。<br/>はたけのカブにぎたいして<br/>カブをぬすむ　トリだよぉ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>な・・・なるほど。<br/>カブ盗り・・・だから、カブトリじゃな！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>そのト〜リ！</span>
</div>
<p className={styles.clearLine}></p>


## スプライト画像の作成について

<div className={styles.tips_no_size_limits}>
:::tip[スプライト画像の作成についてのアドバイスと注意点]
<br/>
<!--
### スプライト画像の作成ソフトウェア
スプライト画像は一般的なグラフィック制作ソフトであれば作成することができます。本サイトでは [aesprite](https://www.aseprite.org/) というドット絵の制作に特化したソフトウェア（有料/USD 19.99）を使って説明します。もちろん、Photoshop や [EDGE](https://takabosoft.com/edge) など、使い慣れているソフトウェアがあれば、そちらを使用しても問題ありません。
-->
### スプライトのタイルについて
スプライト画像のピクセルサイズは、幅が 8px の倍数、高さが 16px の倍数である必要があります。
<br/><img src={sprite_tiles_explained} style={{width: 450}} alt="sprite_tiles_explained" /><br/><br/>

### スプライトを構成する 4 色
[シーン用の背景画像の作り方](./scene.md#%E7%94%BB%E5%83%8F%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B-4-%E8%89%B2)では、画像は 4 段階の濃淡で描くと説明しました。
スプライトも同様に 4 色のカラーコードを使用しますが、スプライトには透明部分があるため、1 色分は透過用のカラーコード（#65ff00）として使用する必要があります。なので、実質的にスプライトは 3 色しか使用できないことになります。以下のカラーコード（16進数カラーコード）を使用してスプライト画像を作成してください。

<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#071821'}}>■</span><span>#071821</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#86c06c'}}>■</span><span>#86c06c</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#e0f8cf'}}>■</span><span>#e0f8cf</span></div>
<div className={styles.divColorPaletteSwatchBG}><span className={styles.divColorPaletteSwatch} style={{color: '#65ff00'}}>■</span><span>#65ff00</span></div>
↑ #65ff00 は透明色として扱われる（画像編集ソフトによっては、実際にこの色を透過色として割り当てて色が付かないようにしています）

<br/>
[GB Studio の公式ドキュメントページ](https://www.gbstudio.dev/docs/assets/sprites#image-requirements) から、お使いの画像編集ソフトウェア（Aesprite、Photoshop、Piskel）用のパレットスウォッチをダウンロードすることも可能です。

<br/><img src={gbs_doc_site_palette_swatches_sprites} style={{width: 500}} alt="gbs_doc_site_palette_swatches_sprites" /><br/><br/>

<!--
### スプライト画像の固有タイル数の制限
固有タイル（ユニークタイルとも呼ばれます）とは、重複しない一意のタイルのことです。例えば次の例では、全体のタイル数は 8 タイルですが、固有タイル数は 6 タイルになります。

<br/><img src={sprite_unique_tile_explained} style={{width: 350}} alt="sprite_unique_tile_explained" /><br/><br/>

各シーンのスプライト画像は固有タイルを最大 96 個まで設置できます（`カラーのみ` モードでは 192 個まで）。ただし、背景のタイルが 128 個の固有タイルを超えた場合は、スプライト / 背景用に確保されたタイル領域を消費し始めるので、スプライト用タイルの使用可能数が減ってしまうことに注意が必要です。

<br/><img src={vram_tile_area_explained} style={{width: 600}} alt="vram_tile_area_explained" /><br/><br/>
-->
### アニメーションシートについて
スプライト画像は、単一の画像として作成することもできますが、複数のコマ送りアニメーションを 1 つの画像に統合したファイルとして読み込むこともできます。このようなアニメーションパターンを統合した画像ファイルのことを「**アニメーションシート**」と呼びます。

例えば、次のスプライト画像には、下向き、上向き、右向きのアニメーションパターン（静止状態を含め、それぞれ 3 パターンずつ）を並べています。

<br/><img src={sprite_kabutori_explained} style={{width: 400}} alt="sprite_kabutori_explained" /><br/><br/>

ちなみに、左向きのパターンは、スプライトエディタ内で右向きの画像を横反転させて作ることができるので、今回はあえて作成していません。横反転させる場合は `アニメーション設定` の `「右」を反転して「左」向きフレームを自動生成` オプションを有効にします。

<br/><img src={reverse_animation} style={{width: 300}} alt="reverse_animation" /><br/><br/>

### アニメーションタイプの自動判別
GB Studio は、読み込まれたスプライト画像をもとに、自動的に**アニメーションタイプ**を適用しようと試みます。

例えば、読み込まれたカブトリは、4 方向に移動できるアニメーション可能なスプライトとして判別され、自動的にアニメーションパターン（画面左の `アニメーション` セクション）が生成されています。
<br/><img src={animation_type_auto_explained} style={{width: 700}} alt="animation_type_auto_explained" /><br/><br/>

もちろん、`アニメーションタイプ` のドロップダウンから、目的に応じてアニメーションタイプを設定することも可能です。

:::
</div>


## スプライトのアニメーション作成
<br/>
<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>それでは、このカブトリの移動モーションを<br/>作成していくゾ！<br/><br/>まずは、スプライトのサイズを決めるんじゃ。<br/>エディタ右側のキャンバスサイズを<br/>幅（W）: 16px、高さ（H）: 24px、に設定するゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={sprite_set_width_height} style={{width: 300}} alt="sprite_set_width_height" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブトリの　じっさいの　サイズだね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>次に、左側の `アニメーション` のそれぞれの<br/>アニメーションパターンの種類に合わせて、<br/>アニメーションのフレームをパラパラ漫画<br/>のように設定していくんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={set_animation_patterns_720p} style={{width: 800}} alt="set_animation_patterns_720p" /></center><br/>
※ この例では、移動（上）と移動（下）のアニメーションフレーム設定は省いていますので、適宜設定してください。

## プレイヤーアクターにスプライトを設定
<br/>
<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>設定できたら、ワールドエディタに戻り<br/>シーンを選択して、`プレイヤースプライトシート`<br/>ドロップダウンリストから、先ほど作成した<br/>スプライトを選択するんじゃ。<br/></span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={set_player_sprite_sheet} style={{width: 450}} alt="set_player_sprite_sheet" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={play_player_moving} style={{width: 300}} alt="play_player_moving" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>すごい　すごい！<br/>ついに　カブトリが！<br/>うごいてるよぉ〜！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>キャラを動かすのにはひと手間かかるが<br/>ゲーム画面上で動いたときは感動モンじゃろ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　うれしさいっぱいで<br/>かんむりょう。<br/>もっといろんな　ばしょを<br/>つくって　カブトリの<br/>あるけるばしょ　つくりたい！<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>じゃあ次はトリガーとシーン間の<br/>移動について教えてやるかのぅ。</span>
</div>
<p className={styles.clearLine}></p>