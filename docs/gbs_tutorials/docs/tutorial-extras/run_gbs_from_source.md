---
description: 開発中の GB Studio をソースからビルドして実行する手順
sidebar_position: 1
---

import styles from '../styles.module.css';
import github_gbstudio from './img/run_gbs_from_source/github_gbstudio.png';
import github_develop_branch from './img/run_gbs_from_source/github_develop_branch.png';

import github_signup from './img/run_gbs_from_source/github_signup.png';
import github_signup2 from './img/run_gbs_from_source/github_signup2.png';
import github_signup3 from './img/run_gbs_from_source/github_signup3.png';
import github_signup4 from './img/run_gbs_from_source/github_signup4.png';
import github_signup5 from './img/run_gbs_from_source/github_signup5.png';
import github_signup6 from './img/run_gbs_from_source/github_signup6.png';
import github_signup7 from './img/run_gbs_from_source/github_signup7.png';
import github_signup8 from './img/run_gbs_from_source/github_signup8.png';
import github_signup9 from './img/run_gbs_from_source/github_signup9.png';

import github_fork from './img/run_gbs_from_source/github_fork.png';
import github_fork2 from './img/run_gbs_from_source/github_fork2.png';
import github_fork3 from './img/run_gbs_from_source/github_fork3.png';
import github_fork4 from './img/run_gbs_from_source/github_fork4.png';

import github_desktop from './img/run_gbs_from_source/github_desktop.png';
import github_desktop2 from './img/run_gbs_from_source/github_desktop2.png';
import github_desktop3 from './img/run_gbs_from_source/github_desktop3.png';
import github_desktop4 from './img/run_gbs_from_source/github_desktop4.png';
import github_desktop5 from './img/run_gbs_from_source/github_desktop5.png';
import github_desktop6 from './img/run_gbs_from_source/github_desktop6.png';
import github_desktop7 from './img/run_gbs_from_source/github_desktop7.png';
import github_desktop8 from './img/run_gbs_from_source/github_desktop8.png';
import github_desktop9 from './img/run_gbs_from_source/github_desktop9.png';
import github_desktop10 from './img/run_gbs_from_source/github_desktop10.png';
import github_desktop11 from './img/run_gbs_from_source/github_desktop11.png';
import github_desktop12 from './img/run_gbs_from_source/github_desktop12.png';


import git_for_windows_install from './img/run_gbs_from_source/git_for_windows_install.png';
import electron_setup from './img/run_gbs_from_source/electron_setup.png';
import electron_setup2 from './img/run_gbs_from_source/electron_setup2.png';
import electron_setup3 from './img/run_gbs_from_source/electron_setup3.png';
import electron_setup4 from './img/run_gbs_from_source/electron_setup4.png';
import electron_setup5 from './img/run_gbs_from_source/electron_setup5.png';
import electron_setup6 from './img/run_gbs_from_source/electron_setup6.png';

# GB Studio をソースから実行
作成日: `2024年10月4日`

<br/><div className={styles.baloon}>レトロ西暦 20XX 年 10 月 XX 日、ドットン研究所</div><br/>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハカセ〜！！<br/>ハーカーセー！</span>
</div>

<br/><div className={styles.baloon}>ガチャガチャガチャ！ピンポーンピンポーン！！</div><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>（ビットンか！　ちょ・・・ちょっと待っておれ。<br/>コーヒーをこぼしてしもうた）</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビッグニュースだよぉ〜！</span>
</div>

<br/><div className={styles.baloon}>ガチャガチャガチャ！ドンドンドン！ピンポピンポポピンポーン！！</div><br/>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ビットン、そんなにインターホンを鳴らさずとも、ドアは開いとるぞ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_OpenMouth}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ほんとだ！<br/>ねぇねぇ　きいてよハカセ。<br/>こんど　ジービースタジオの　アップデートで<br/>あたらしいキノウが　ついかされるんだって！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ほうほう、ビットンは耳が早いんだナ！<br/>ワシもつい先ほど量子通信ネットでチキュウの<br/>GB Studio の最新情報を仕入れていたところじゃ。<br/>はて、ビットンはどうやって情報をゲットしたんじゃ？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ツイックスだよ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ツイックス？　どれどれ、レトロぺディアを見てみよう。<br/><br/>SNN（ソーシャルニューラルネットワーク）の<br/>TwiX というものがあるんじゃな。<br/>ブレインマシン・インターフェースを介して<br/>ソーシャルネットワークを構築するシステムか・・・<br/>レトロ星も、なかなか最先端の技術が存在するんだナ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>でも　まだ　こうしきサイトに<br/>さいしんの　バージョンがアップロードされてないの。<br/>いつ　こうかいされるかなぁ？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ウ〜ム・・・<br/>普通は公式がアップロードするまで待つもんじゃからのぅ・・・<br/>公開前のGB Studio の開発計画は一般公開されていないから<br/>いつ公開されるかは製作者以外、誰にもわからんのじゃ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　あたらしいキノウ<br/>はやくつかってみたいなぁ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>よし、ビットンよ。<br/>常に最新の GB Studio を使うことができる方法を<br/>この機会に伝授してあげるゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>そんなことが　できるの〜！？<br/>おしえて　おしえて！！</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## GB Studio のソースコード

<div className={styles.tips_no_size_limits}>
:::tip[GB Studio をソースコードから実行するには ①]
<br/>
GB Studio は GitHub というプログラムを管理するサイトに最新のソースコードがアップロードされています。まずは、GB Studio 本家の GitHub サイトにアクセスして見てみましょう。
https://github.com/chrismaltby/gb-studio

<center><img src={github_gbstudio} style={{width: 400}} alt="github_gbstudio" /></center>
<br/>
GitHub には、過去のバージョンから現在の最新バージョンまでのすべてのソースコードが年代ごとのタイムカプセルのように保管されています。このタイムカプセルのことを「ブランチ」と呼び、いつでも過去の情報を取り出すことができるようになっています。GB Studio にもいくつかのブランチがありますが、最新版のソースコードは常に「develop」というブランチにアップロードされるようになっています。

<center><img src={github_develop_branch} style={{width: 300}} alt="github_develop_branch" /></center>
<br/>

私たちが GB Studio の最新版（アルファ版やベータ版）を使ってみたいときには、この「develop」ブランチにあるソースコードを使って、**GB Studio そのものをアプリとして構築する（ビルドする、と言います）**　することで起動できる形式（EXE や APP ファイル）に変換します。
:::
</div>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>なんだか　ムズカシソウだよぉ。<br/>ビットンに　できるかなぁ・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>心配無用じゃ！<br/>ワシの言う手順通りに進めれば<br/>きっとうまくいくハズじゃゾ。<br/>ハッカーになった気分でやってみるとよい！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Excited}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ハッカー！？　なんだかカッコイイかも！<br/>じゃあ　もうちょっと　がんばってみるね。</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## GitHub アカウントの作成

<div className={styles.tips_no_size_limits}>
:::tip[GB Studio をソースコードから実行するには ②]
<br/>
GB Studio をアプリとして構築するには、いくつか方法がありますが、いつでも最新版をビルドできる環境をパソコンに構築しておくと便利なので、その方法を紹介します。


<br/><center><img src={github_signup} style={{width: 400}} alt="github_signup" /></center><br/>
<p>まずは、あなた自身の GitHub アカウントを作っておきましょう（アカウントをお持ちでない場合）。現在表示されている GitHub ページの右上にある `Sign up` をクリックします。</p>

<br/><center><img src={github_signup2} style={{width: 400}} alt="github_signup2" /></center><br/>
<p>新規アカウントの E-Mail アドレスとパスワードを入力して、`Continue` をクリックします。</p>

<br/><center><img src={github_signup3} style={{width: 400}} alt="github_signup3" /></center><br/>
<p>続いて、ユーザー名（ニックネームのようなもの）を入力して `Continue` をクリックします。</p>

<br/><center><img src={github_signup4} style={{width: 400}} alt="github_signup4" /></center><br/>
<p>GitHub からのお知らせを受け取りたい場合はチェックボックスを有効にして `Continue` をクリックします。今回は受け取らないのでチェックを外しています。</p>

<br/><center><img src={github_signup5} style={{width: 400}} alt="github_signup5" /></center><br/>
<p>アカウントを検証するために、`検証する` をクリックします。</p>

<br/><center><img src={github_signup6} style={{width: 400}} alt="github_signup6" /></center><br/>
<p>画面の検証方法の指示に従い（検証の質問はランダムです）`送信` をクリックします。</p>

<br/><center><img src={github_signup7} style={{width: 400}} alt="github_signup7" /></center><br/>
<p>しばらくすると、登録したメールアドレス宛に認証コードが届くので・・・</p>

<br/><center><img src={github_signup8} style={{width: 400}} alt="github_signup8" /></center><br/>
<p>この認証コードを GitHub のアカウント認証ページに戻り入力します。</p>

<br/><center><img src={github_signup9} style={{width: 300}} alt="github_signup9" /></center><br/>
<p>このサインイン画面が出たら、ひとまずアカウント作成は完了です。アカウントの情報を入力して `Sign in` をクリックして、サインインしておきましょう。</p>

:::
</div>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>う〜〜〜ん。う〜〜〜ん。<br/>なんとか　ギットハブ　アカウントを<br/>つくったよぉ・・・。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>おつかれじゃ、ビットン！<br/>自分の GitHub アカウントがあれば<br/>GB Studio アプリのビルドだけでなく<br/>GB Studio の GitHub サイトで<br/>バグを報告したり、新機能の提案をしたり、<br/>腕に自信があれば、GB Studio の開発<br/>そのものに貢献することもできるんだゾ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　エイゴはよくわかんないから<br/>ムリゲー。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ま・・・まあ、そうじゃナ。<br/>他にできることは後で考えるとして<br/>まずは GB Studio のビルド手順を<br/>進めていくゾ！</span>
</div>
<p className={styles.clearLine}></p>


<br/>
## GB Studio リポジトリのフォーク

<div className={styles.tips_no_size_limits}>
:::tip[GB Studio をソースコードから実行するには ③]
<br/>
GB Studio のソースコードをビルドするには、一度、自分の GitHub アカウントにソースコードを複製する必要があります。この複製する手順のことを「フォーク」する、と言います。複製されたソースコードは本家のソースコードと切り離されて、完全に自分の所有物になるので、本家のソースコードに一切影響を与えることなく好きなように改変することができます。

それでは、ふたたび [GB Studio の GitHub ページ](https://github.com/chrismaltby/gb-studio) にアクセスします。
※ご自身のアカウントでサインインしていない場合は、ページ右上の `Sign In` より再びサインインしてください。

<br/><center><img src={github_fork} style={{width: 500}} alt="github_fork" /></center><br/>
<p>GB Studio の GitHub のメニューにある `Fork` をクリックします。</p>

<br/><center><img src={github_fork2} style={{width: 500}} alt="github_fork2" /></center><br/>
<p>GB Studio の GitHub のメニューにある `Create fork` をクリックします。</p>

<br/><center><img src={github_fork3} style={{width: 500}} alt="github_fork3" /></center><br/>
<p>自分の GitHub アカウントに、GB Studio のソースコードがコピーされました！</p>

<br/><center><img src={github_fork4} style={{width: 400}} alt="github_fork4" /></center><br/>
<p>なお、複製されたコードは、本家のソースコードと切り離されているため、本家のコードに更新があったとしても自分のコピーには更新が反映されません。本家のコードの更新を自分のコピーにも適用したい場合はメニューの `Sync fork` ボタンから、`Update branch` をクリックして本家のコードを反映させます（今回は複製してきたばかりなので、特に更新はありませんでした。そのため、このスクリーンショットには Update branch ボタンは表示されていません）。</p>

:::
</div>

<div>
  <span className={styles.avatarBittonLeft_Eye_Cross}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　のーみそ３ビットンしかないから<br/>あたまから　ケムリが　でそうだよぉ。<br/>ビルドがフォークでパルシのファルシの<br/>ルシがパージでコクーン・・・<br/>う〜〜〜んう〜〜〜ん。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ビットン、限界が近づいておるようじゃナ。<br/>簡単に言うと、開発中の GB Studio を<br/>使うためには、一度自分の手元で<br/>GB Studio そのものを作る必要があるんじゃ。<br/>そのための儀式みたいなモンじゃ！</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ふぅん。フォークをつかった　ぎしきかぁ。</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>（たぶん、なんも解っとらんな、コイツ）</span>
</div>
<p className={styles.clearLine}></p>

<br/>
## GB Studio ソースコードのクローン

<div className={styles.tips_no_size_limits}>
:::tip[GB Studio をソースコードから実行するには ④]
<br/>
次に、自分の GitHub アカウントに複製されたコードを、自分のパソコンにダウンロードします。この複製操作のことを「クローン」と言います。
クローン操作を簡略化するために、GitHub Desktop というアプリを使用します。まずはこの GitHub Desktop をダウンロードしてインストールしてください。
ダウンロード URL → https://github.com/apps/desktop


<br/><center><img src={github_desktop} style={{width: 400}} alt="github_desktop" /></center><br/>
<p>`Download Now` をクリックします。</p>

<br/><center><img src={github_desktop2} style={{width: 400}} alt="github_desktop2" /></center><br/>
<p>ご自身が使用している OS 用のダウンロードボタンが表示されるので、これをクリックして GitHub Desktop をダウンロードしてインストールします。</p>

<br/><center><img src={github_desktop3} style={{width: 500}} alt="github_desktop3" /></center><br/>
<p>GitHub Desktop を最初に起動すると、このような画面が表示されます。`Sign in to GitHub.com` をクリックすると、GitHub のサインインページへ誘導されるので、先ほど作成した GitHub アカウントでサインインしてください。</p>

<br/><center><img src={github_desktop4} style={{width: 400}} alt="github_desktop4" /></center><br/>
<p>サインインした後、アクセス認証のページが開きますので、`Authorize desktop` をクリックします。</p>

<br/><center><img src={github_desktop5} style={{width: 400}} alt="github_desktop5" /></center><br/>
<p>ブラウザから警告が出た場合は、常に許可するチェックボックスを有効にして、`開く` をクリックします。</p>

<br/><center><img src={github_desktop6} style={{width: 500}} alt="github_desktop6" /></center><br/>
<p>GitHub Desktop の画面に戻るので、`Finish` をクリックします。</p>

<br/><center><img src={github_desktop7} style={{width: 600}} alt="github_desktop7" /></center><br/>
<p>続いて、`Clone a repository from the Internet...` をクリックします。</p>

<br/><center><img src={github_desktop8} style={{width: 400}} alt="github_desktop8" /></center><br/>
<p>ソースコードのダウンロード先を `Local path` に指定します（例：C¥GitHub）。そして、再読み込みボタンをクリックして、自分の GitHub アカウントにある GB Studio のコード保管場所を表示させます。</p>

<br/><center><img src={github_desktop9} style={{width: 400}} alt="github_desktop9" /></center><br/>
<p>gb-studio という名前のついた項目を選択して（例では Bitton666/gb-studio）、`Clone` をクリックします。</p>

<br/><center><img src={github_desktop10} style={{width: 400}} alt="github_desktop10" /></center><br/>
<p>自分のパソコンに、GB Studio のコードのダウンロードが開始します。この作業には少し時間がかかることがあります。</p>

<br/><center><img src={github_desktop11} style={{width: 400}} alt="github_desktop11" /></center><br/>
<p>ダウンロードが完了すると、このような画面が表示されます。とりあえずは一番上の項目を選択して `Continue` を選択します。</p>

<br/><center><img src={github_desktop12} style={{width: 400}} alt="github_desktop12" /></center><br/>
<p>これで、GB Studio のソースコードがパソコン（C:¥GitHub¥gb-studio フォルダ）にダウンロードされました。</p>

:::
</div>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>ビットン、頭からケムリが出ているが<br/>大丈夫かの？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonLeft_Explode}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>ビットン　もう　いまのバージョンのままでいいよ</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>がんばれ、ビットン！<br/>次が最後の儀式じゃ！</span>
</div>
<p className={styles.clearLine}></p>


<br/>
## GB Studio ソースのビルド

<div className={styles.tips_no_size_limits}>
::::tip[GB Studio をソースコードから実行するには ⑤]
<br/>
GB Studio は Electron というソフトウェアを使用して作られています（厳密にはソフトウェアを作るための機能を集約させたフレームワークと呼ばれています）。したがって、GB Studio をビルドするためには Electron でソフトウェアを作るための環境をパソコンに構築する必要があります。

インストールする必要があるソフトウェアは以下の 2 つです。

- NodeJS
- Git

次の URL より NodeJS をダウンロードして、インストールします：https://nodejs.org/en/download/prebuilt-installer

<br/><center><img src={electron_setup} style={{width: 600}} alt="electron_setup" /></center><br/>
<p>GB Studio は 最新の NodeJS ではなく、**Node 21.7.1** を使用していますので、ダウンロードする際には必ず近いバージョン（v21.7.3）を選択してください。Windows の場合は、OS に Windows を指定して、アーキテクチャ（通常は 64 bit なので、x64）を指定します。選択した後に、ダウンロードボタンをクリックします。</p>

NodeJS インストーラーがダウンロードできたら、インストールします。すべてデフォルトの設定で次に進み、インストールを完了させてください。
続いては、OS によって少し導入手順が異なりますので、お使いの OS に沿った手順を確認してください。

:::note[Windows の場合]

<br/><center><img src={git_for_windows_install} style={{width: 400}} alt="git_for_windows_install" /></center><br/>
<p>次に、Git をインストールします。Windows の場合は Git for Windows が扱いやすいので、https://gitforwindows.org/ からインストーラーをダウンロードして、すべてデフォルトの設定でインストールを完了させてください。</p>

各ソフトウェアがインストールできたら、最後に GB Studio をビルドします。ここから先の手順では、コマンドプロンプト（Windows の場合）や Terminal アプリ（Mac の場合）を使用しますので、管理者権限で起動させてください。

<br/><center><img src={electron_setup2} style={{width: 600}} alt="electron_setup2" /></center><br/>
<p>キーボードの Windows キーを押して、"cmd" と入力します。コマンドプロンプトが検索一覧に表示されるので、`管理者として実行` をクリックします。</p>

<p>コマンドプロンプトで、以下のように入力をしていきます（GB Studio のソースコードを C:¥GitHub¥gb-studio にクローンしていることを想定しています）：</p>

```bash
C:\Windows\System32>cd C:\GitHub\gb-studio
```

```bash
C:\GitHub\gb-studio>corepack enable
```

```bash title="注：yarn と入力して Enter を押した後に y キーを押します"
C:\GitHub\gb-studio>yarn
Corepack is about to download ...
Do you want to continue? [Y/n] y
```

<br/><center><img src={electron_setup4} style={{width: 400}} alt="electron_setup4" /></center><br/>
<p>途中で、このような警告が出た場合は、`許可` をクリックしてアクセスを許可してください。</p>

```bash
C:\GitHub\gb-studio>npm start
```


<br/><center><img src={electron_setup5} style={{width: 400}} alt="electron_setup5" /></center><br/>
<p>これで無事 GB Studio が起動したら、成功です！</p>

<p>なお、次回以降 GB Studio をソースから起動したい時は、以下のコマンドを入力するだけで起動します（現在の作業ディレクトリがすでに C:\GitHub\gb-studio に設定されていると想定）。ソースコードに変更などあった場合は、最初に説明したコマンドを順に入力してください。</p>

```bash
C:\GitHub\gb-studio>npm start
```

:::


:::note[Mac の場合]

<p>次に、Git をインストールします。Mac OS の場合は、 すでに Xcode をインストールしているのであれば Git もインストールされている可能性があります。確認するには、以下のコマンドをターミナルアプリで実行してください。</p>

```bash
% git -v

git version 2.39.3 (Apple Git-145)
```

Git のバージョンが表示されていれば、すでにインストールされていますので、Git に関しては何も追加作業は必要ありません。Git がインストールされていない場合は、homebrew を介してインストールするのがオススメです。

homebrew がインストールされていない場合は、下記のコマンドを実行して先にインストールしておいてください（管理者パスワードが求められますので、入力してください）。
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Git をインストールします（インストールされていない場合）。
```bash
% brew install git
```

<p>最後に、GB Studio をビルドします。ターミナルで、以下のように入力をしていきます（GB Studio のソースコードを /Users/`ユーザー名`/GitHub/gb-studio にクローンしていることを想定しています）：</p>

```bash
% cd /Users/{ユーザー名}/GitHub/gb-studio
```

```bash
% corepack enable
```

```bash title="注：yarn と入力して Enter を押した後に y キーを押します"
% yarn
Corepack is about to download ...
Do you want to continue? [Y/n] y
```

```bash
% npm start
```

<br/><center><img src={electron_setup6} style={{width: 400}} alt="electron_setup6" /></center><br/>
<p>これで無事 GB Studio が起動したら、成功です！</p>

<p>なお、次回以降 GB Studio をソースから起動したい時は、以下のコマンドを入力するだけで起動します（現在の作業ディレクトリがすでに /Users/`ユーザー名`/GitHub/gb-studio に設定されていると想定）。ソースコードに変更などあった場合は、最初に説明したコマンドを順に入力してください。</p>

```bash
% cd /Users/{ユーザー名}/GitHub/gb-studio
% npm start
```
:::

::::
</div>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>こんな感じで GB Studio を<br/>ソースコードから実行できるんじゃゾ。<br/><br/>・・・ん？</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarBittonLeft_Sleep}><div className={styles.characterName}>ビットン</div></span>
  <span className={styles.balloonBittonLeft}>すやピー・・・</span>
</div>
<p className={styles.clearLine}></p>

<div>
  <span className={styles.avatarDottonRight}><div className={styles.characterName}>ドットン</div></span>
  <span className={styles.balloonDottonRight}>疲れ果てて寝てしもうたか。<br/>ちと手順が多かったかもしれんのう。<br/>ビットンにしては頑張ったほうじゃゾ！</span>
</div>
<p className={styles.clearLine}></p>

<br/><div className={styles.baloon}>こうして、ビットンは開発中のバージョンを使うことなく<br/>いままでどおり、公開された正式バージョンを使うことにしたのであった。</div><br/>