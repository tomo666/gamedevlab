---
description: ダイアログボックスの概要とその種類の紹介
sidebar_position: 6
---

import styles from '../styles.module.css';

import add_dialogue_flow from './img/dialogue/add_dialogue_flow.png';
import show_dialogue_text from './img/dialogue/show_dialogue_text.png';
import dialogue_show_text_run from './img/dialogue/dialogue_show_text_run.gif';
import avatar_assets_folder from './img/dialogue/avatar_assets_folder.png';
import avatar_chicken_example from './img/dialogue/avatar_chicken_example.png';
import avatar_chicken_select from './img/dialogue/avatar_chicken_select.png';
import show_dialogue_layout_style_ui from './img/dialogue/show_dialogue_layout_style_ui.png';
import show_dialogue_action_ui from './img/dialogue/show_dialogue_action_ui.png';
import show_dialogue_preset_create from './img/dialogue/show_dialogue_preset_create.png';
import show_dialogue_preset_create2 from './img/dialogue/show_dialogue_preset_create2.png';
import show_dialogue_preset_edit from './img/dialogue/show_dialogue_preset_edit.png';
import selection_dialogue_ui from './img/dialogue/selection_dialogue_ui.png';
import selection_dialogue_yes_no_sample from './img/dialogue/selection_dialogue_yes_no_sample.png';
import selection_dialogue_yes_no_cancel_sample from './img/dialogue/selection_dialogue_yes_no_cancel_sample.png';
import menu_dialogue_ui from './img/dialogue/menu_dialogue_ui.png';
import menu_dialogue_yes_no_cancel_sample from './img/dialogue/menu_dialogue_yes_no_cancel_sample.png';
import menu_dialogue_items_sample from './img/dialogue/menu_dialogue_items_sample.png';
import menu_dialogue_menu_layout_style_sample from './img/dialogue/menu_dialogue_menu_layout_style_sample.png';
import dialogue_cmd_variable_sample from './img/dialogue/dialogue_cmd_variable_sample.gif';
import cursor_position_change_sample from './img/dialogue/cursor_position_change_sample.png';
import cursor_position_change_sample2 from './img/dialogue/cursor_position_change_sample2.png';
import bitton_dialogue_message from './img/dialogue/bitton_dialogue_message.gif';
import frame_png from './img/dialogue/frame.png';
import cursor_png from './img/dialogue/cursor.png';
import frame_parts_sample from './img/dialogue/frame_parts_sample.png';
import frame_changed_sample from './img/dialogue/frame_changed_sample.png';

# ダイアログの概要
作成日: `2024年10月24日`

<br/><div className={styles.baloon}>レトロ西暦 2024 年 10 月 XX 日、昼、ビットンの家</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>クゥ〜・・・　スピ〜・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ムニャリ・・・　ムニャムニャ・・・</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>ビットンは、なにやらうなされているようです。</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ムニャ・・・ムニャリ・・・<br/>（からだが　おもいよぉ）<br/>グゥスピ・・・<br/>（ふわふわする・・・）</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>これは間違いなく金縛りにあっていますね。<br/>昨日は 1 日中、ハカセに GB Studio の使い方を教えてもらって<br/>さすがのビットンも心身ともに疲れ果ててしまったようです。<br/>家まで帰ってこれたものの、入り口の扉も閉めずに<br/>そのまま床でチカラ尽きてしまったのでした。</div><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ここがビットンの家か。<br/>ずいぶん立派な巨木のようじゃが<br/>家と呼んでよいのかわからんのう。<br/>そしてビットンが言っていた通り<br/>いたるところに傘がいっぱいじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ここが入り口なんじゃろうか？<br/>この鈴みたいなものがドアベルかの。</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>チリン・・・　チリリン・・・</div><br/>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>カブ！（このカブトリ！）<br/>オヤチ！（ビットンのオヤツかえせぇ！）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウーム、なにやら家の奥から<br/>声は聞こえるんじゃがのう。<br/><br/>ん？あれ、扉が少し開いてるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>ガチャリ</div><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>おーい、ビットンはおるかのー？<br/>今日は GB Studio をやりに<br/>こないんかのー？<br/>・・・って、なんじゃ！<br/>なんで床で寝とるんじゃ！？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>フム・・・こんなところで、<br/>しかも昼過ぎまで寝とるとは。<br/>昨日は相当疲れとったんじゃのう。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ムニャップ・・・（ハカセ・・・）<br/>グゥスカピッピ・・・（ジービースタジオで）<br/>ムニャピ・・・（メッセージウィンドウをだすには）<br/>グゥ〜〜？・・・（どうしたらいいのかなぁ？）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>なにをムニャムニャいっとるんじゃ？<br/>え・・・なになに？<br/>GB Studio でメッセージウィンドウ<br/>を出すにはどうしたらええかって？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>グゥ（うん）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>グゥ（うん）<br/>・・・と言っておるのか？<br/>フム、今日は睡眠学習を<br/>するということじゃな。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>おにゃが・・・しゃす・・・<br/>（よろしくおねがいしまぁす）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>なかなか勉強熱心でよろしい！<br/>では今日はダイアログについて<br/>教えてあげようかのう。</span>
</div>
<p className={styles.clearLine}></p>

## ダイアログとは？
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>「ダイアログ」というのは、メッセージを<br/>表示するウィンドウのことじゃ。<br/>ダイアログには、いくつか種類があるから<br/>実際に使ってみながら順にみていこうかの！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>まずは、もっとも基本的な「メッセージダイアログ」じゃ。<br/>プレイヤーが話しかけたアクターがメッセージを表示する<br/>イメージで、イベントを追加するゾ。手順は次のとおりじゃ！</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={add_dialogue_flow} style={{width: 700}} alt="add_dialogue_flow" /></center><br/>
<br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>追加されたメッセージダイアログイベントの<br/>`テキスト` タブ内のテキスト入力エリアに<br/>なにか好きな文字を入力するのじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={show_dialogue_text} style={{width: 400}} alt="show_dialogue_text" /></center><br/>
<br/>
<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>実行してみるゾ。</span>
</div>
<p className={styles.clearLine}></p>

<br/><center><img src={dialogue_show_text_run} style={{width: 300}} alt="dialogue_show_text_run" /></center><br/>
<br/>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ゲームみたい！（ゲームみたい！）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ん？起きている・・・のか？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ムニャリ・・・クゥクゥ・・・スピピー・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>グッスリじゃのう。</span>
</div>
<p className={styles.clearLine}></p>

<!--## ダイアログの種類-->

<div className={styles.tips_no_size_limits}>
:::tip[イベントの説明]
<br/>
## メッセージダイアログ

`イベントの追加` &gt; `ダイアログとメニュー` &gt; `メッセージダイアログを表示する`

キャラクターにセリフを喋らせたいときや、一般的なメッセージをゲームプレイヤーに向けて表示したい場合に使用します。単純に「ダイアログ」とだけ呼ばれることもあります。

### テキスト
ダイアログに表示したいテキストを入力します。GB Studio はデフォルトの状態だと英語のフォントしかサポートしていません。日本語のフォントを使えるようにするためには日本語フォントの導入と環境設定が必要になります。日本語フォントの使用については、次のチュートリアル [日本語フォントを使う](./using_jp_font.md) で説明していますので、参照してください。

<img src={show_dialogue_text} style={{width: 400}} alt="show_dialogue_text" /><br/><br/>

### テキスト &gt; 制御コマンド
テキストには、さまざまな種類の制御コマンドが使用できますが、ここでは、最も良く使用されるであろう制御コマンドを紹介します。

制御コマンドは、テキスト入力中に半角英数で "!" や "$" と入力し、続けて入力した文字によって制御コマンドの詳細な選択肢が表示されます。例えば、"$" と入力した後に、変数名を入力すると、メッセージとして表示させたい変数の候補の一覧が表示され、選択することができます。変数については、今後のチュートリアルで説明します。

<img src={dialogue_cmd_variable_sample} style={{width: 400}} alt="dialogue_cmd_variable_sample" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| !Font（または !F） | ダイアログで表示するテキストのフォントを変更することができます。 |
| !Speed（または !S） | テキストの表示速度を変更することができます。 |
| !Instant（または !I） | 文字送りを無効にして、テキストを瞬時に表示することができます。 |
| !Cursor（または !C） | 現在のテキスト描画位置を変更することができます。<br/>使いどころは少し限定されますが、キャラの名前を<br/>ダイアログの上部に表示させたり、<br/>テキストの位置揃えなどに活用できます。<br/><br/>`カーソル位置を次に設定` を選択した場合、描画位置を設定する項目<br/>`P(X,Y)` がダイアログテキスト内に表示されます。<br/>これをクリックして位置設定を行います。<br/><br/>（例）<br/> I am a KABUTORI.Ｐ(0,2)<br/>And you?<br/><br/>（結果）<br/><img src={cursor_position_change_sample} style={{width: 200}} alt="cursor_position_change_sample" /><br/><br/>`カーソル位置を次の値で移動` を選択した場合も、上記と挙動は<br/>似ていますが、`M(X,Y)` がダイアログテキスト内に表示されます。<br/>これは絶対位置ではなく相対的な位置を設定します。<br/>（つまり、X,Y の値を「移動量」で指定します）<br/><br/>（例）<br/>Ｍ(+0,-1)KABUTORI<br/><br/> I am a KABUTORI.Ｐ(0,2)<br/>And you?<br/><br/>（結果）<br/><img src={cursor_position_change_sample2} style={{width: 200}} alt="cursor_position_change_sample2" /><br/>※ メッセージテキストの最後が一行空いてしまう場合は、後述する `レイアウトスタイル` の設定で `高さ（最大）` の行数を調整してください。 |

その他の制御コマンドについてより詳しく知りたい場合は [GB Studio 公式サイトのドキュメント](https://www.gbstudio.dev/docs/scripting/dialogue-variables) を参照してください。


<br/>
### テキスト &gt; アバターの追加

メッセージダイアログの左側に 16px x 16px のアバター画像を表示させることができます。
<img src={avatar_chicken_example} style={{width: 250}} alt="avatar_chicken_example" /><br/><br/>
使用するアバター画像は PNG 形式でプロジェクトフォルダの `assets` &gt; `avatars` フォルダに入れておく必要があります。なお、この画像はスプライトと同じ画像フォーマットとなりますので、パレットもスプライト用のルールが適用されます。スプライトのパレットについては、[アクターとスプライトの概要 &gt; スプライトを構成する 4 色](./actor.md#スプライトを構成する-4-色) を参照してください。

<img src={avatar_assets_folder} style={{width: 250}} alt="avatar_assets_folder" /><br/><br/>

フォルダに画像が存在すれば、`アバターの追加` リンクをクリックしたときに表示されるドロップダウンから、適用したいアバターを選択することができます。

<img src={avatar_chicken_select} style={{width: 800}} alt="avatar_chicken_select" /><br/><br/>


### レイアウトスタイル
ダイアログの見た目を設定できる項目です。

<img src={show_dialogue_layout_style_ui} style={{width: 400}} alt="show_dialogue_layout_style_ui" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| 高さ（最小） | ダイアログの高さの最小サイズ（タイル単位）。<br/>表示するテキストの行数が少なくても、<br/>ダイアログの高さは必ずこの最小のサイズで表示されます。 |
| 高さ（最大） | ダイアログの高さの最大サイズ（タイル単位）。<br/>表示するテキストの行数が、この高さを超えるとスクロールします。 |
| テキスト（X） | テキストの描画が開始する X 軸方向の位置です（タイル単位）。<br/>たとえば、アバターとテキストの間にマージンが欲しい場合などに設定します。 |
| テキスト（Y） | テキストの描画が開始する Y 軸方向の位置です（タイル単位）。 |
| スクロール行数 | テキストをスクロールさせる行数です。 |
| 位置 | ダイアログを画面の上または下の位置に表示させるかを選択できます。 |
| 前の描画をクリア | 前に描画されているダイアログの内容を消去するかどうかを指定します。<br/>消去しない場合は、前の描画の上から新しい描画が上書きされます。<br/>通常はチェックを有効にしておきます。 |
| フレームの表示 | ダイアログのフレーム（枠）を表示するかどうかを指定します。 |

<br/>

### 動作
ダイアログの動作に関する設定が行えます。

<img src={show_dialogue_action_ui} style={{width: 400}} alt="show_dialogue_action_ui" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| 開く速度 | ダイアログが表示される間のスライドアニメーション速度。 |
| 閉じる速度 | ダイアログが非表示になるまでの間のスライドアニメーション速度。 |
| 閉じる条件 | ダイアログをどのように閉じるかの条件設定。<br/><br/>`ボタンの押下時` は、下のフィールドで設定したいずれかのボタンが押されたときに<br/>ダイアログが閉じます。<br/><br/>`テキスト描画の完了時` は、テキストがすべて表示し終わった後に閉じます。<br/>（このオプションを選択すると、ダイアログが閉じるまでの時間が設定できる<br/>`閉じるまでのウェイト` フィールドが表示されます）<br/><br/>`閉じない（非モーダル）` は、ダイアログの処理が完了し終わっても閉じません。<br/>ダイアログを閉じたい場合は、別途 `非モーダルダイアログを閉じる` イベントを使います。 |

<br/>

### プリセット
ここで設定したダイアログの設定をテンプレート化して、他のイベントでも同じ設定を呼び出すことができます。例えば、RPG の宿屋の受付など決まって同じセリフ（お泊まりで？）を喋るキャラクター用のプリセット作成しておけば、ゲーム中のすべての宿屋の受付キャラクターに対して毎回おなじメッセージを書かなくともプリセットを適用するだけで、同じセリフを喋らせることができます。さらに、プリセットの内容を変更した場合は、**このプリセットが設定されたすべてのダイアログに変更内容が反映される**ので、ひとつひとつ手直しする手間が減ります。

新たにプリセットを作成する場合は `プリセット` ドロップダウンから `プリセットの作成` を選択します。すでに作成されたプリセットを設定するときは、ドロップダウンから既存のプリセットを選択します。

<img src={show_dialogue_preset_create} style={{width: 400}} alt="show_dialogue_preset_create" /><br/><br/>

プリセットの作成を選択すると、次の設定項目が表示されます。`プリセットの保存` をクリックするとプリセットが保存されます。

<img src={show_dialogue_preset_create2} style={{width: 400}} alt="show_dialogue_preset_create2" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| 名前 | 新たに作成するプリセット名です（例：宿屋の受付）。 |
| プリセットに含める内容 | テンプレート化したい内容を選択します。<br/>ここで選択した項目のみがプリセットとして保存されます。 |

<br/>

作成されたプリセットを `プリセット` ドロップダウンから選択すると、次のような項目が表示されます。

<img src={show_dialogue_preset_edit} style={{width: 400}} alt="show_dialogue_preset_edit" /><br/><br/>

テキスト、レイアウトスタイル、動作のいずれかを変更したあとに `変更の適用` ボタンで変更内容を選択しているプリセットに上書き保存できます。 なお、`変更の適用` をクリックした後に、再度プリセットの作成時と同じ設定項目が表示されます。このときに `プリセットの保存` を改めてクリックしないとプリセットの変更は適用されませんので注意してください。

`デフォルトとして設定` をクリックすると、現在選択されているプリセットがデフォルトの設定として適用されます。つまり、次に `メッセージダイアログを表示する` イベントを追加したときに、このプリセットが自動的に適用された状態になります。デフォルト設定されたプリセットを解除するには、`デフォルトから削除` をクリックします。 

`プリセットの削除` をクリックすると、現在選択されているプリセットが削除されます。このプリセットを使用しているすべてのダイアログイベントからプリセットが解除されます。
:::
</div>



<div className={styles.tips_no_size_limits}>
:::tip[イベントの説明]
<br/>
## 選択肢ダイアログ

`イベントの追加` &gt; `ダイアログとメニュー` &gt; `選択肢ダイアログを表示する`

主に 2 選の選択肢（はい、いいえ、など）をプレイヤーに選択させたい場合に使用します。

<img src={selection_dialogue_yes_no_sample} style={{width: 250}} alt="selection_dialogue_yes_no_sample" /><br/><br/>


<img src={selection_dialogue_ui} style={{width: 400}} alt="selection_dialogue_ui" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| 格納変数 | 選択肢の結果を保存する変数です。<br/>最初の項目が選択されると、この変数の値に True<br/>（または整数値 1）が入ります。<br/>2 番目の項目が選択されると、この変数の値に False<br/>（または整数値 0）が入ります。 |
| 選択された場合「True」に設定 | 最初の項目のテキストラベルを指定します。 |
| 選択された場合「False」に設定 | 2 番目の項目のテキストラベルを指定します。 |

:::
</div>



<div className={styles.tips_no_size_limits}>
:::tip[イベントの説明]
<br/>
## メニューダイアログ

`イベントの追加` &gt; `ダイアログとメニュー` &gt; `メニューダイアログを表示する`

2 項目以上、8 項目以下の選択肢をプレイヤーに選択させたい場合に使用します。複数選択肢のあるイベントや、アイテムの売買リストの一覧などに用いることができます。

<img src={menu_dialogue_yes_no_cancel_sample} style={{width: 250}} alt="menu_dialogue_yes_no_cancel_sample" /><br/><br/>

項目数が 4 つを超えると、自動的に 2 列表示になります。

<img src={menu_dialogue_items_sample} style={{width: 250}} alt="menu_dialogue_items_sample" /><br/><br/>

<img src={menu_dialogue_ui} style={{width: 400}} alt="menu_dialogue_ui" /><br/><br/>

| フィールド | 説明 |
| --- | --- |
| 格納変数 | 選択肢の結果を保存する変数です。<br/>いずれかの項目が選択されると、この変数の値として<br/>選択された項目のインデックス（1, 2, …） が入ります。 |
| 項目数 | 表示させたい項目数を指定します。 |
| 選択された場合「X」に設定 | `X` の値が格納変数として設定された変数に入ります。 |
| 最後の項目が選択された場合「0」を代入 | このオプションが有効の場合、最後の選択項目<br/>（スクショの例では「CANCEL」）<br/>が選択された場合、格納変数として設定された<br/>変数に整数値 0 が入ります。 |
| 「B」ボタンが押された場合「0」を代入 | このオプションが有効の場合、「B」ボタンの押下時に<br/>格納変数として設定された変数に整数値 0 が入ります。 |
| レイアウトスタイル | ダイアログの見た目を設定できます。<br/><br/>`ダイアログ` スタイルの場合は、ダイアログの横幅が<br/>画面の幅いっぱいに表示されるスタイルです。<br/>4 項目以降の選択項目は 2 列で表示されます。<br/><br/>`メニュー` スタイルの場合は、ダイアログの横幅が短縮され、<br/>画面の右側に表示されます。また、このスタイルはすべての<br/>選択項目が 1 列に（最大 8 項目まで）表示されます。<br/><br/><img src={menu_dialogue_menu_layout_style_sample} style={{width: 200}} alt="menu_dialogue_menu_layout_style_sample" /><br/>メニュースタイルの例|

:::
</div>

<div className={styles.tips_no_size_limits}>
:::tip
<br/>
## ダイアログのフレーム画像の変更
ダイアログのフレームは、プロジェクトフォルダ内の `assets` &gt; `ui` &gt; `frame.png` の画像ファイルを描き変えて変更することができます。透過色は使えませんので、背景画像と同じパレットを使用します。背景画像のパレットについては、[シーンの概要 &gt; 背景画像を構成する 4 色](./scene.md#背景画像を構成する-4-色) を参照してください。

<img src={frame_png} style={{width: 64}} alt="frame_png" /><br/><br/>

フレーム画像は、フレームを構成する 9 つの画像パーツ（フレームの左上、真上、右上、真左、中央、真右、左下、真下、右下）からできています。これらのパーツはそれぞれ 8x8 ピクセルのサイズです。

<img src={frame_parts_sample} style={{width: 300}} alt="frame_parts_sample" /><br/><br/>

フレーム画像を変更すると、グッとオリジナリティがあがります。

<img src={frame_changed_sample} style={{width: 300}} alt="frame_changed_sample" /><br/><br/>


## カーソル画像の変更
ダイアログのフレームと同様に、カーソルの画像もプロジェクトフォルダ内の `assets` &gt; `ui` &gt; `cursor.png` の画像ファイルを描き変えて変更することができます。ただし、こちらは 8x8 ピクセル限定です。透過色は使えませんので、背景画像と同じパレットを使用します。背景画像のパレットについては、[シーンの概要 &gt; 背景画像を構成する 4 色](./scene.md#背景画像を構成する-4-色) を参照してください。

<img src={cursor_png} style={{width: 32}} alt="cursor_png" /><br/><br/>

:::
</div>

<br/>
<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ムニャ〜ムニャップスヤピピ・・・！<br/>グググゥ・・・ムニャ〜リ<br/>エイゴ・・・イヤイヤなの・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ん・・・なんじゃ　ビットン？<br/>なにが言いたいのか、よくわからないゾ。<br/>どれ、ワシのつくった「夢見マシン」で<br/>夢の中を覗いてみよう。<br/></span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>ビットンの頭にナゾの装置がつけられる・・・</div><br/>

<br/><center><img src={bitton_dialogue_message} style={{width: 400}} alt="bitton_dialogue_message" /></center><br/>
<br/>



<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ほほう！さっそく夢の中でダイアログを<br/>使いこなしておるな。感心感心。<br/>言いたいことはわかるぞ、ビットン。<br/>ダイアログのテキストを日本語で<br/>表示できないとモチベーションが<br/>あがらんのじゃろ！<br/>安心せい、次回は日本語フォントの<br/>使用について解説するゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ム〜ニャ〜！（やったぁ〜！）</span>
</div>
<p className={styles.clearLine}></p>

