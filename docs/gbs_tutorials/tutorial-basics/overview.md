---
description: GB Studio を構成するエディタと概要
sidebar_position: 2
---

import styles from '../styles.module.css';
import overview_world_editor from './img/overview/overview_world_editor.png';
import overview_sprite_editor from './img/overview/overview_sprite_editor.png';
import overview_image_editor from './img/overview/overview_image_editor.png';
import overview_music_editor from './img/overview/overview_music_editor.png';
import overview_sfx_editor from './img/overview/overview_sfx_editor.png';
import overview_palette_editor from './img/overview/overview_palette_editor.png';
import overview_message_editor from './img/overview/overview_message_editor.png';
import overview_settings_editor from './img/overview/overview_settings_editor.png';

import scene_overview from './img/overview/scene_overview.png';
import editor_selection_dropdown from './img/overview/editor_selection_dropdown.png';
import image_editor_context_menu from './img/overview/image_editor_context_menu.png';
import tracker_view from './img/overview/tracker_view.png';
import change_to_tracker_view from './img/overview/change_to_tracker_view.png';
import overview_dropdown_images from './img/overview/overview_dropdown_images.png';
import overview_dropdown_music from './img/overview/overview_dropdown_music.png';
import overview_dropdown_sfx from './img/overview/overview_dropdown_sfx.png';
import overview_dropdown_palette from './img/overview/overview_dropdown_palette.png';
import overview_dropdown_messages from './img/overview/overview_dropdown_messages.png';
import overview_dropdown_settings from './img/overview/overview_dropdown_settings.png';

# GB Studio の画面構成
作成日: `2024年10月7日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、早朝、ドットン研究所前</div><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>まだ　おひさまも　のぼってないけど<br/>ハカセ　おきてるかなぁ？</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>ガチャガチャガチャ！ピンポーンピンポーン！！</div><br/>

<div>
  <span className={styles.avatarDottonRight_Exclamation}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>・・・ん！？　誰じゃ、こんな早朝から？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>おはよう　ハカセ！ ビットンだよ！<br/>きのう　いつでも　けんきゅうじょに<br/>きていいゾって　いってたから<br/>さっそく　ジービースタジオを<br/>おそわりにきたよぉ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>お・・・おぉ・・・<br/>早朝からやる気満々だな、ビットン！<br/>ちょいとコーヒーを淹れてくるから<br/>その間に、この画面でも見ていたらいいゾ。</span>
</div>
<p className={styles.clearLine}></p>
<hr/>

## ワールドエディタ
<br/><center><img src={overview_world_editor} class="zoomImg" style={{width: 980}} alt="overview_world_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>これは　ジービースタジオの<br/>さいしょのがめん！<br/>やじるしが　いっぱ〜い！</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>ゴポゴポゴポ…（ドットン博士の頭に直接コーヒーが注がれる音）</div><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>朝はやっぱり脳に染み渡るカフェイン、<br/>こりゃ、キクのー！<br/>・・・さて、今日は GB Studio でできることを<br/>おおざっぱに紹介するゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>GB Studio のプロジェクトを開いたときに<br/>最初に表示されるこの画面は<br/>「**ワールドエディタ**」というゾ。<br/>ゲーム内の世界の全体像を確認できるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={scene_overview} style={{width: 600}} alt="scene_overview" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>このワールドエディタには、「**ステージ**」<br/>というエリアがあり、その中に「**シーン**」<br/>と呼ばれるゲーム画面を配置していき<br/>ゲームの中身を作っていくんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>さて、ワールドエディタの他にも<br/>いくつかのエディタがあるから<br/>順に見ていくことにしようかの。<br/>左上にあるエディタを切り替える<br/>ドロップダウンメニューから、<br/>他のエディタを選択できるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={editor_selection_dropdown} style={{width: 250}} alt="editor_selection_dropdown" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ドロップダウンメニューから`スプライト` を選択し、<br/>「**スプライトエディタ**」をひらいてみるんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## スプライトエディタ
<br/><center><img src={overview_sprite_editor} class="zoomImg" style={{width: 980}} alt="overview_sprite_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセ　スプライトってなぁに？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>「**スプライト**」というのは、簡単にいうと<br/>画面上で動き回れる画像のことじゃな。<br/>反対に、動き回らない背景などの画像は<br/>「**バックグラウンド**」と呼ぶゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>じゃあ　もし　ビットンがゲームのなかで<br/>テクテクうごきまわれるとしたら・・・<br/>ビットンは　スプライト？<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そのとおりじゃ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>おうちは　バックグラウンド？<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウムウム！<br/>ビットンは飲み込みがはやいのう！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>エヘ・・・エヘヘエヘ・・・！<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>お次は、「**背景画像エディタ**」じゃ。<br/>先ほどと同じようにドロップダウンメニューから<br/>`画像` を選択するんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_images} style={{width: 250}} alt="overview_dropdown_images" /></center><br/>

<br/>
## 背景画像エディタ
<br/><center><img src={overview_image_editor} class="zoomImg" style={{width: 980}} alt="overview_image_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん。<br/>なにに　つかうのか　よくわかんないけど<br/>ふぅん。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>「**背景画像エディタ**」では、<br/>背景画像やタイルセットの<br/>名前を変更や削除、確認が行えるゾ。<br/>それくらいしか使わない場所じゃから、<br/>ワシはほとんどつかっておらんがナ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={image_editor_context_menu} style={{width: 250}} alt="image_editor_context_menu" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>なにか背景画像を追加したりすると、左上の場所に<br/>背景画像のファイル名が一覧で表示される。<br/>変更したいファイル名を右クリックすることで<br/>名前を変えたり削除できるんじゃ。<br/>タイルセットも同じ要領でできるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>タイルセットって　なぁに？<br/></span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>タイルセットについては、また今後教えていくゾ。<br/>いまはこの画面で背景画像やタイルセットとやらの<br/>管理ができるということを、おぼろげに覚えておけばよい。<br/>さて、続いては「**ミュージックエディタ**」じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ゲームにつかう　おんがくも　つくれちゃうのぉ〜？！<br/>ビットン　おんがく　だいすき！<br/>ワクワク。ドキドキ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_music} style={{width: 250}} alt="overview_dropdown_music" /></center><br/>

<br/>
## ミュージックエディタ
<br/><center><img src={overview_music_editor} class="zoomImg" style={{width: 980}} alt="overview_music_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ここで　おんがくが　つくれちゃうんだね！<br/>てんをうつと　おとがなるのかな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そのとおりじゃ。<br/>そして、音楽を作る方法は 2 種類あるゾ。<br/>1 つめは「**ピアノロール**」。<br/>ピアノの譜面のような形式で<br/>音符を打つ感覚で曲を作るのじゃ。<br/>もうひとつは「**トラッカー**」というもので<br/>表の中に音の記号を入力して<br/>曲を作る方法じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={tracker_view} class="zoomImg" style={{width: 500}} alt="tracker_view" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>むずかしそう・・・</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={change_to_tracker_view} style={{width: 300}} alt="change_to_tracker_view" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>トラッカーは少し特殊な使い方をするから<br/>直感的な操作をしたい場合は<br/>ピアノロールがオススメじゃ！<br/><br/>ちなみに、ピアノロールとトラッカーを<br/>切り替えるためには、`トラッカー表示に切り替え`<br/>または `ピアノロールに切り替え` ボタンでできるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　ピアノロールでつくろうかなぁ。<br/>こうかおんも　つくれちゃうの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>効果音については、すこしややこしくてのぅ。<br/>のちのち教えていくつもりじゃ。<br/>ひとまずお次は「**効果音エディタ**」を見てみるのじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_sfx} style={{width: 250}} alt="overview_dropdown_sfx" /></center><br/>

<br/>
## 効果音エディタ
<br/><center><img src={overview_sfx_editor} class="zoomImg" style={{width: 980}} alt="overview_sfx_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　これくらいの　かんたんな　がめんが　すき！<br/>ミュージックエディタと　ぜんぜんちがうねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>そうじゃな、この画面も背景画像エディタと同じで<br/>効果音としてプロジェクトに読み込まれた<br/>WAV、VGM、SAV ファイルの一覧が表示されとる。<br/>名称変更や削除、効果音の再生が行えるゾ。<br/>ミュージックエディタと違い、効果音が作れる<br/>というわけではなく、効果音のファイルの<br/>管理をする場所じゃナ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>お次は、「**パレットエディタ**」じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_palette} style={{width: 250}} alt="overview_dropdown_palette" /></center><br/>

<br/>
## パレットエディタ
<br/><center><img src={overview_palette_editor} class="zoomImg" style={{width: 980}} alt="overview_palette_editor" /></center><br/>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カラフルだねぇ。<br/>パレットってなぁに？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>GB Studio のゲームは、<br/>外部ソフトで作ったカラー画像を<br/>そのままゲームに使うことはできんのじゃ。<br/>その代わりにパレットという 4 色で構成された
  <br/>色のセットを使って背景画像やスプライトに<br/>色をつけていくんじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　よくわかんないけど、<br/>がぞうに　いろを　つけたくなったら<br/>パレットエディタで　ぬるんだね。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ちょいと特殊な仕組みじゃからのぅ。<br/>じゃが理解できれば簡単じゃから安心せい。<br/>これものちのち、詳しく説明することにするゾ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>お次は、「**メッセージ一覧**」じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_messages} style={{width: 250}} alt="overview_dropdown_messages" /></center><br/>

<br/>
## メッセージ一覧
<br/><center><img src={overview_message_editor} class="zoomImg" style={{width: 980}} alt="overview_message_editor" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>メッセージの一覧は、その名のとおり<br/>ゲームのシーンごとに表示される<br/>すべてのメッセージの一覧じゃ。<br/>もちろん、ここでメッセージの編集もできるゾ。<br/>ま、ワシはあまり使わんが<br/>あのメッセージどこで使ってたかのう？<br/>という時の確認には便利じゃな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>たくさん　ぶんしょうがふえると<br/>さがすのたいへんだから　べんりだねぇ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>最後に、「**設定画面**」じゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={overview_dropdown_settings} style={{width: 250}} alt="overview_dropdown_settings" /></center><br/>

<br/>
## 設定画面
<br/><center><img src={overview_settings_editor} class="zoomImg" style={{width: 980}} alt="overview_settings_editor" /></center><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ゲーム内要素の設定をこの画面で<br/>行うことができるゾ。<br/>項目が多いのですべては説明できん。<br/>必要になった時にまたあらためて<br/>説明することにするゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>なんだか　いっぱいエディタがあって<br/>むずかしそ〜で　ビットン　びっくりだよぉ。<br/>ほんとに　ゲームつくれるか　いまからしんぱい。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>最初は難しそうと思ってしまうのも無理はない。じゃが、<br/>ビットンでもわかるように一つ一つ教えるから安心せい。<br/>使っていくうちに自然に覚えていくもんじゃから、<br/>いまは全部覚えようとしなくて大丈夫じゃ。<br/>次回からはいよいよ、実際に手を動かして<br/>ゲームの画面を作っていこうかのう！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ありがとう　ハカセ！　ビットン　がんばって<br/>ビットンのかんがえた　サイキョーのゲームを<br/>つくってみせるねぇ。</span>
</div>
<p className={styles.clearLine}></p>