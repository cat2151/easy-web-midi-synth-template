// import * as Tone from 'tone'; // コメントアウトする。index.htmlでTone.jsをsrcする。そうしないとバンドラーを使わない別projectにおいてソースをそのまま利用できず不便だったので。

function initSynthSimple(s) {
  const synth = new Tone.Synth({oscillator: {type: 'sine'}});
  const vol = new Tone.Volume(-3);

  synth.connect(vol);
  vol.toDestination();

  s.noteOn = noteOn;
  s.noteOff = noteOff;

  function noteOn(noteNum) {
    synth.triggerAttack(Tone.Midi(noteNum).toFrequency());
    s.isNoteOn = true;
  };

  function noteOff(noteNum) {
    if (!s.isNoteOn) return;
    synth.triggerRelease();
  };
}

export { initSynthSimple };
