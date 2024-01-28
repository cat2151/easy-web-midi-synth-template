import * as Tone from 'tone';
import { initSynthSimple } from './simple';
import { initSynthSaw } from './saw';

/////////////////////
// WebMidi
WebMidi
  .enable()
  .then(initAtLoad)
  .catch(err => alert(err));

const button = document.querySelector('button');
button.onclick = function () {
  setupMidiIn();
  initToneJs();
};

// 開発中のホットリロード時のみアンコメントする、自動再生できて開発効率up。なおホットリロード以外のリロードでは、鳴らなくなり、対策方法も不明、Shared Pianoはそのときも動いているが方法不明、むしろ自動再生ポリシー的にはShared Pianoがスーパーリロード時すら自動再生できているほうが原因不明。
function initAtLoad() {
  setupMidiIn();
  initToneJs();
}

function setupMidiIn() {
  document.body.innerHTML = "";
  // Shared Piano同様、デフォルトは全MIDI INからの受信とした
  WebMidi.inputs.forEach(midiIn => addListener(midiIn));

  function addListener(midiIn) {
    document.body.innerHTML += `MIDI IN : [${midiIn.name}]<br>`;
    midiIn.addListener("noteon", e => {
      noteOn(e.note.number);
    })
    midiIn.addListener("noteoff", e => {
      noteOff(e.note.number);
    })
  }
}

/////////////////////
// Tone.js
// 備忘、Tone.js共通部分はここに集約、Synth個別部分は各jsに切り出し、とした
function initToneJs() {
  async () => {
    await Tone.start();
  };
}
function noteOn(noteNum) {
  mySynth.noteOn(noteNum);
}
function noteOff(noteNum) {
  mySynth.noteOff(noteNum);
}
let mySynth = { noteOn: null, noteOff: null, isNoteOn: false };

// 使いたいsynthをアンコメントしてください
initSynthSimple(mySynth);
// initSynthSaw(mySynth);
