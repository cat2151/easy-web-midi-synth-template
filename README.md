# easy-web-midi-synth-template

# Demo
- [Demo](https://cat2151.github.io/easy-web-midi-synth-template/dist/)
- 音を鳴らすには、Usageを参照ください

# Features
- webpageを開くだけでソフトシンセを鳴らせます
- Tone.jsにより、リッチな音色を簡単に実装できます
- ソースコードをテンプレートとして利用しやすい、小規模、シンプル、easyな構成

# Requirement
- Windows + loopMIDI + ブラウザ
    - 物理`MIDIキーボード`や`シーケンサ`があれば、loopMIDIなしでもOK
    - Chromeで動作確認しています

# Usage
- [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)のinstallと、port設定
    - portは一つ `+` ボタンで登録すれば十分です。
    - うまくいかない場合はOS再起動もお試しください。
- `MIDIシーケンサ`の接続
    - [Easy Web MIDI Sequencer](https://cat2151.github.io/easy-web-midi-sequencer-template/) など、`Web MIDI` を送信できるアプリを開いておきます
- 演奏
    - あとは[当アプリ](https://cat2151.github.io/easy-web-midi-synth-template/dist/)を開いて `playボタン` をクリックすれば演奏されます

# Installation
- 開発するには：
    - `Node.js` をinstallしてください
    - 当アプリのinstallは `npm -i`
    - 開発は `npm run dev`

# Note
## webpageを開くだけでソフトシンセを鳴らせます
- `Web MIDI` のすべてのportから `Note On` を受信します

## ソースコードをテンプレートとして利用しやすい、小規模、シンプル、easyな構成
- テンプレートとしてのソースコード利用を楽にすることを優先しています。
- ですので、最低限のシンプルなシンセのソースコードを用意しています。

## MIDI INを受信するだけなので、シーケンサ部分は別アプリ
- 逆を言えば、
    - `MIDI OUT` できるwebpageがあれば、なんでもOK、当アプリを鳴らせます
        - 例えば：[Easy Web MIDI Sequencer](https://cat2151.github.io/easy-web-midi-sequencer-template/)
    - `物理MIDI鍵盤`や、`DAWのMIDI OUT`などもOK

## 複数 `Midi Device` すべてからNote Onを受信する
- 以下は今後の課題です
    - ドロップダウンリストで選択（[Shared Piano](https://musiclab.chromeexperiments.com/Shared-Piano/)の `Midi Device` 設定のように）
    - 自動サジェスト
        - Shared Pianoを踏襲する。なので、自動設定まではしない。
            - かわりに、サジェストにとどめる。
        - 例えば当アプリを `synth_in` という識別子で識別として、それを含むportをわかりやすくドロップダウンリストの上位に表示する。
        - ドロップダウンリストのメニューとしては、
            - 先頭とデフォルトはShared Pianoを踏襲して `All inputs` とする
            - 次に `Auto : ～`、例えば `Auto : seq_out ___ synth_in`
            - その次に、今あるportを列挙
            - 末尾はShared Piano同様 `None`
                - MIDI IN以外に入力のない当アプリの場合は鳴らす手段がなくなる。Shared Piano踏襲を優先する。

## 当projectが目指すこと
- `MIDI IN` から`Note On`を受信する
- シーケンサ演奏開始し、webpageを開き、`playボタン`を押すだけで、音が鳴る
- シンプルで利用しやすいソースコードにする
    - 例えばシンプルな`Sine Wave`
- 鳴らなくなったら、できるだけ鳴るように行動することを優先します
    - 鳴らすための調査をしやすくするためにも、シンプルで小規模なソースコードにします

## 当projectが目指さないこと
- `Web MIDI` 未対応ブラウザや、`Midi Device`を検出しなかった場合に、代替の入力を得る方法の検討と実装と提供
- `Web MIDI` 未対応ブラウザの調査と対応
- `Note On` `Note Off` 以外の `MIDIメッセージ` の受信サンプル
    - 今後、`Control Change 74` （カットオフ周波数）は対応予定
        - 用途は、`Easy Web MIDI Knob` からのCC74受信のサンプル用
- `和音`を鳴らす、ch.1だけでなくch.2～ch.16を識別して別の音色を鳴らす、複数MIDI portを利用して`32ch.演奏`する、その他
- `豊富なプリセット音色`、別の音色にする、音色を洗練する、その他
- 音色データをtextarea等から`edit`可能にする
- `スタンダードMIDIファイル`や`MML`ほか各種音色データを音色ライブラリとして利用可能に
