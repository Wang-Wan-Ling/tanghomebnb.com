class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private padOsc1: OscillatorNode | null = null;
  private padOsc2: OscillatorNode | null = null;
  private padGain: GainNode | null = null;
  private timer: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // 1. Warm harmonic Zen Pad (tuned to high-luxury pentatonic calm: F3 & C4 frequencies)
      this.padOsc1 = this.ctx.createOscillator();
      this.padOsc1.type = 'sine';
      this.padOsc1.frequency.setValueAtTime(174.61, this.ctx.currentTime); // F3

      this.padOsc2 = this.ctx.createOscillator();
      this.padOsc2.type = 'sine';
      this.padOsc2.frequency.setValueAtTime(261.63, this.ctx.currentTime); // C4

      const padFilter = this.ctx.createBiquadFilter();
      padFilter.type = 'lowpass';
      padFilter.frequency.setValueAtTime(400, this.ctx.currentTime);

      this.padGain = this.ctx.createGain();
      this.padGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

      this.padOsc1.connect(padFilter);
      this.padOsc2.connect(padFilter);
      padFilter.connect(this.padGain);
      this.padGain.connect(this.masterGain);

      this.padOsc1.start();
      this.padOsc2.start();

      // 2. Gentle ocean swell / air noise
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(280, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, this.ctx.currentTime);

      this.noiseNode.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      this.noiseNode.start();

      // Slow periodic breath modulation
      let swell = false;
      this.timer = window.setInterval(() => {
        if (!this.ctx || !this.padGain) return;
        swell = !swell;
        const target = swell ? 0.6 : 0.25;
        this.padGain.gain.setTargetAtTime(target, this.ctx.currentTime, 4.0);
      }, 7000);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.8);
      setTimeout(() => {
        this.padOsc1?.stop();
        this.padOsc2?.stop();
        this.noiseNode?.stop();
        this.padOsc1?.disconnect();
        this.padOsc2?.disconnect();
        this.noiseNode?.disconnect();
        this.isPlaying = false;
      }, 1000);
    } else {
      this.isPlaying = false;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientAudioEngine();
