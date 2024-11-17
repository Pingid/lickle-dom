/**
 * Type overloads for dom event emitters.
 * Generated from the lib.dom.d.ts file in the typescript package.
 */
export type On = {
  /** listen for events on target of @type { AbortSignal } */
  <T extends AbortSignal>(
    target: T,
  ): <K extends keyof AbortSignalEventMap>(
    event: K,
    listener: (this: T, ev: AbortSignalEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Animation | CSSAnimation | CSSTransition } */
  <T extends Animation | CSSAnimation | CSSTransition>(
    target: T,
  ): <K extends keyof AnimationEventMap>(
    event: K,
    listener: (this: T, ev: AnimationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode } */
  <T extends AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode>(
    target: T,
  ): <K extends keyof AudioScheduledSourceNodeEventMap>(
    event: K,
    listener: (this: T, ev: AudioScheduledSourceNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioContext | BaseAudioContext } */
  <T extends AudioContext | BaseAudioContext>(
    target: T,
  ): <K extends keyof BaseAudioContextEventMap>(
    event: K,
    listener: (this: T, ev: BaseAudioContextEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode } */
  <T extends AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode>(
    target: T,
  ): <K extends keyof AudioScheduledSourceNodeEventMap>(
    event: K,
    listener: (this: T, ev: AudioScheduledSourceNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioWorkletNode } */
  <T extends AudioWorkletNode>(
    target: T,
  ): <K extends keyof AudioWorkletNodeEventMap>(
    event: K,
    listener: (this: T, ev: AudioWorkletNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioContext | BaseAudioContext } */
  <T extends AudioContext | BaseAudioContext>(
    target: T,
  ): <K extends keyof BaseAudioContextEventMap>(
    event: K,
    listener: (this: T, ev: BaseAudioContextEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { BroadcastChannel } */
  <T extends BroadcastChannel>(
    target: T,
  ): <K extends keyof BroadcastChannelEventMap>(
    event: K,
    listener: (this: T, ev: BroadcastChannelEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Animation | CSSAnimation | CSSTransition } */
  <T extends Animation | CSSAnimation | CSSTransition>(
    target: T,
  ): <K extends keyof AnimationEventMap>(
    event: K,
    listener: (this: T, ev: AnimationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Animation | CSSAnimation | CSSTransition } */
  <T extends Animation | CSSAnimation | CSSTransition>(
    target: T,
  ): <K extends keyof AnimationEventMap>(
    event: K,
    listener: (this: T, ev: AnimationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { CanvasCaptureMediaStreamTrack | MediaStreamTrack } */
  <T extends CanvasCaptureMediaStreamTrack | MediaStreamTrack>(
    target: T,
  ): <K extends keyof MediaStreamTrackEventMap>(
    event: K,
    listener: (this: T, ev: MediaStreamTrackEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode } */
  <T extends AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode>(
    target: T,
  ): <K extends keyof AudioScheduledSourceNodeEventMap>(
    event: K,
    listener: (this: T, ev: AudioScheduledSourceNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Document | HTMLDocument | XMLDocument } */
  <T extends Document | HTMLDocument | XMLDocument>(
    target: T,
  ): <K extends keyof DocumentEventMap>(
    event: K,
    listener: (this: T, ev: DocumentEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { EventSource } */
  <T extends EventSource>(
    target: T,
  ): <K extends keyof EventSourceEventMap>(
    event: K,
    listener: (this: T, ev: EventSourceEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { FileReader } */
  <T extends FileReader>(
    target: T,
  ): <K extends keyof FileReaderEventMap>(
    event: K,
    listener: (this: T, ev: FileReaderEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { FontFaceSet } */
  <T extends FontFaceSet>(
    target: T,
  ): <K extends keyof FontFaceSetEventMap>(
    event: K,
    listener: (this: T, ev: FontFaceSetEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLAudioElement | HTMLMediaElement } */
  <T extends HTMLAudioElement | HTMLMediaElement>(
    target: T,
  ): <K extends keyof HTMLMediaElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLMediaElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLBodyElement } */
  <T extends HTMLBodyElement>(
    target: T,
  ): <K extends keyof HTMLBodyElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLBodyElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Document | HTMLDocument | XMLDocument } */
  <T extends Document | HTMLDocument | XMLDocument>(
    target: T,
  ): <K extends keyof DocumentEventMap>(
    event: K,
    listener: (this: T, ev: DocumentEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLFrameSetElement } */
  <T extends HTMLFrameSetElement>(
    target: T,
  ): <K extends keyof HTMLFrameSetElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLFrameSetElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLAudioElement | HTMLMediaElement } */
  <T extends HTMLAudioElement | HTMLMediaElement>(
    target: T,
  ): <K extends keyof HTMLMediaElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLMediaElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLElement } */
  <T extends HTMLElement>(
    target: T,
  ): <K extends keyof HTMLElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { HTMLVideoElement } */
  <T extends HTMLVideoElement>(
    target: T,
  ): <K extends keyof HTMLVideoElementEventMap>(
    event: K,
    listener: (this: T, ev: HTMLVideoElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { IDBDatabase } */
  <T extends IDBDatabase>(
    target: T,
  ): <K extends keyof IDBDatabaseEventMap>(
    event: K,
    listener: (this: T, ev: IDBDatabaseEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { IDBOpenDBRequest } */
  <T extends IDBOpenDBRequest>(
    target: T,
  ): <K extends keyof IDBOpenDBRequestEventMap>(
    event: K,
    listener: (this: T, ev: IDBOpenDBRequestEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { IDBRequest<any> } */
  <T extends IDBRequest<any>>(
    target: T,
  ): <K extends keyof IDBRequestEventMap>(
    event: K,
    listener: (this: T, ev: IDBRequestEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { IDBTransaction } */
  <T extends IDBTransaction>(
    target: T,
  ): <K extends keyof IDBTransactionEventMap>(
    event: K,
    listener: (this: T, ev: IDBTransactionEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MIDIAccess } */
  <T extends MIDIAccess>(
    target: T,
  ): <K extends keyof MIDIAccessEventMap>(
    event: K,
    listener: (this: T, ev: MIDIAccessEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MIDIInput } */
  <T extends MIDIInput>(
    target: T,
  ): <K extends keyof MIDIInputEventMap>(
    event: K,
    listener: (this: T, ev: MIDIInputEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MIDIOutput | MIDIPort } */
  <T extends MIDIOutput | MIDIPort>(
    target: T,
  ): <K extends keyof MIDIPortEventMap>(
    event: K,
    listener: (this: T, ev: MIDIPortEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MIDIOutput | MIDIPort } */
  <T extends MIDIOutput | MIDIPort>(
    target: T,
  ): <K extends keyof MIDIPortEventMap>(
    event: K,
    listener: (this: T, ev: MIDIPortEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MathMLElement } */
  <T extends MathMLElement>(
    target: T,
  ): <K extends keyof MathMLElementEventMap>(
    event: K,
    listener: (this: T, ev: MathMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaDevices } */
  <T extends MediaDevices>(
    target: T,
  ): <K extends keyof MediaDevicesEventMap>(
    event: K,
    listener: (this: T, ev: MediaDevicesEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaKeySession } */
  <T extends MediaKeySession>(
    target: T,
  ): <K extends keyof MediaKeySessionEventMap>(
    event: K,
    listener: (this: T, ev: MediaKeySessionEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaQueryList } */
  <T extends MediaQueryList>(
    target: T,
  ): <K extends keyof MediaQueryListEventMap>(
    event: K,
    listener: (this: T, ev: MediaQueryListEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaRecorder } */
  <T extends MediaRecorder>(
    target: T,
  ): <K extends keyof MediaRecorderEventMap>(
    event: K,
    listener: (this: T, ev: MediaRecorderEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaSource } */
  <T extends MediaSource>(
    target: T,
  ): <K extends keyof MediaSourceEventMap>(
    event: K,
    listener: (this: T, ev: MediaSourceEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MediaStream } */
  <T extends MediaStream>(
    target: T,
  ): <K extends keyof MediaStreamEventMap>(
    event: K,
    listener: (this: T, ev: MediaStreamEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { CanvasCaptureMediaStreamTrack | MediaStreamTrack } */
  <T extends CanvasCaptureMediaStreamTrack | MediaStreamTrack>(
    target: T,
  ): <K extends keyof MediaStreamTrackEventMap>(
    event: K,
    listener: (this: T, ev: MediaStreamTrackEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { MessagePort } */
  <T extends MessagePort>(
    target: T,
  ): <K extends keyof MessagePortEventMap>(
    event: K,
    listener: (this: T, ev: MessagePortEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Notification } */
  <T extends Notification>(
    target: T,
  ): <K extends keyof NotificationEventMap>(
    event: K,
    listener: (this: T, ev: NotificationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { OfflineAudioContext } */
  <T extends OfflineAudioContext>(
    target: T,
  ): <K extends keyof OfflineAudioContextEventMap>(
    event: K,
    listener: (this: T, ev: OfflineAudioContextEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { OffscreenCanvas } */
  <T extends OffscreenCanvas>(
    target: T,
  ): <K extends keyof OffscreenCanvasEventMap>(
    event: K,
    listener: (this: T, ev: OffscreenCanvasEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode } */
  <T extends AudioBufferSourceNode | AudioScheduledSourceNode | ConstantSourceNode | OscillatorNode>(
    target: T,
  ): <K extends keyof AudioScheduledSourceNodeEventMap>(
    event: K,
    listener: (this: T, ev: AudioScheduledSourceNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { PaymentRequest } */
  <T extends PaymentRequest>(
    target: T,
  ): <K extends keyof PaymentRequestEventMap>(
    event: K,
    listener: (this: T, ev: PaymentRequestEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Performance } */
  <T extends Performance>(
    target: T,
  ): <K extends keyof PerformanceEventMap>(
    event: K,
    listener: (this: T, ev: PerformanceEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { PermissionStatus } */
  <T extends PermissionStatus>(
    target: T,
  ): <K extends keyof PermissionStatusEventMap>(
    event: K,
    listener: (this: T, ev: PermissionStatusEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { PictureInPictureWindow } */
  <T extends PictureInPictureWindow>(
    target: T,
  ): <K extends keyof PictureInPictureWindowEventMap>(
    event: K,
    listener: (this: T, ev: PictureInPictureWindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCDTMFSender } */
  <T extends RTCDTMFSender>(
    target: T,
  ): <K extends keyof RTCDTMFSenderEventMap>(
    event: K,
    listener: (this: T, ev: RTCDTMFSenderEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCDataChannel } */
  <T extends RTCDataChannel>(
    target: T,
  ): <K extends keyof RTCDataChannelEventMap>(
    event: K,
    listener: (this: T, ev: RTCDataChannelEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCDtlsTransport } */
  <T extends RTCDtlsTransport>(
    target: T,
  ): <K extends keyof RTCDtlsTransportEventMap>(
    event: K,
    listener: (this: T, ev: RTCDtlsTransportEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCIceTransport } */
  <T extends RTCIceTransport>(
    target: T,
  ): <K extends keyof RTCIceTransportEventMap>(
    event: K,
    listener: (this: T, ev: RTCIceTransportEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCPeerConnection } */
  <T extends RTCPeerConnection>(
    target: T,
  ): <K extends keyof RTCPeerConnectionEventMap>(
    event: K,
    listener: (this: T, ev: RTCPeerConnectionEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RTCSctpTransport } */
  <T extends RTCSctpTransport>(
    target: T,
  ): <K extends keyof RTCSctpTransportEventMap>(
    event: K,
    listener: (this: T, ev: RTCSctpTransportEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { RemotePlayback } */
  <T extends RemotePlayback>(
    target: T,
  ): <K extends keyof RemotePlaybackEventMap>(
    event: K,
    listener: (this: T, ev: RemotePlaybackEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGSVGElement } */
  <T extends SVGSVGElement>(
    target: T,
  ): <K extends keyof SVGSVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGSVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SVGElement } */
  <T extends SVGElement>(
    target: T,
  ): <K extends keyof SVGElementEventMap>(
    event: K,
    listener: (this: T, ev: SVGElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ScreenOrientation } */
  <T extends ScreenOrientation>(
    target: T,
  ): <K extends keyof ScreenOrientationEventMap>(
    event: K,
    listener: (this: T, ev: ScreenOrientationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ScriptProcessorNode } */
  <T extends ScriptProcessorNode>(
    target: T,
  ): <K extends keyof ScriptProcessorNodeEventMap>(
    event: K,
    listener: (this: T, ev: ScriptProcessorNodeEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ServiceWorker } */
  <T extends ServiceWorker>(
    target: T,
  ): <K extends keyof ServiceWorkerEventMap>(
    event: K,
    listener: (this: T, ev: ServiceWorkerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ServiceWorkerContainer } */
  <T extends ServiceWorkerContainer>(
    target: T,
  ): <K extends keyof ServiceWorkerContainerEventMap>(
    event: K,
    listener: (this: T, ev: ServiceWorkerContainerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ServiceWorkerRegistration } */
  <T extends ServiceWorkerRegistration>(
    target: T,
  ): <K extends keyof ServiceWorkerRegistrationEventMap>(
    event: K,
    listener: (this: T, ev: ServiceWorkerRegistrationEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { ShadowRoot } */
  <T extends ShadowRoot>(
    target: T,
  ): <K extends keyof ShadowRootEventMap>(
    event: K,
    listener: (this: T, ev: ShadowRootEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SourceBuffer } */
  <T extends SourceBuffer>(
    target: T,
  ): <K extends keyof SourceBufferEventMap>(
    event: K,
    listener: (this: T, ev: SourceBufferEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SourceBufferList } */
  <T extends SourceBufferList>(
    target: T,
  ): <K extends keyof SourceBufferListEventMap>(
    event: K,
    listener: (this: T, ev: SourceBufferListEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SpeechSynthesis } */
  <T extends SpeechSynthesis>(
    target: T,
  ): <K extends keyof SpeechSynthesisEventMap>(
    event: K,
    listener: (this: T, ev: SpeechSynthesisEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { SpeechSynthesisUtterance } */
  <T extends SpeechSynthesisUtterance>(
    target: T,
  ): <K extends keyof SpeechSynthesisUtteranceEventMap>(
    event: K,
    listener: (this: T, ev: SpeechSynthesisUtteranceEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { TextTrack } */
  <T extends TextTrack>(
    target: T,
  ): <K extends keyof TextTrackEventMap>(
    event: K,
    listener: (this: T, ev: TextTrackEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { TextTrackCue | VTTCue } */
  <T extends TextTrackCue | VTTCue>(
    target: T,
  ): <K extends keyof TextTrackCueEventMap>(
    event: K,
    listener: (this: T, ev: TextTrackCueEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { TextTrackList } */
  <T extends TextTrackList>(
    target: T,
  ): <K extends keyof TextTrackListEventMap>(
    event: K,
    listener: (this: T, ev: TextTrackListEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { TextTrackCue | VTTCue } */
  <T extends TextTrackCue | VTTCue>(
    target: T,
  ): <K extends keyof TextTrackCueEventMap>(
    event: K,
    listener: (this: T, ev: TextTrackCueEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { VideoDecoder } */
  <T extends VideoDecoder>(
    target: T,
  ): <K extends keyof VideoDecoderEventMap>(
    event: K,
    listener: (this: T, ev: VideoDecoderEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { VideoEncoder } */
  <T extends VideoEncoder>(
    target: T,
  ): <K extends keyof VideoEncoderEventMap>(
    event: K,
    listener: (this: T, ev: VideoEncoderEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { VisualViewport } */
  <T extends VisualViewport>(
    target: T,
  ): <K extends keyof VisualViewportEventMap>(
    event: K,
    listener: (this: T, ev: VisualViewportEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { WakeLockSentinel } */
  <T extends WakeLockSentinel>(
    target: T,
  ): <K extends keyof WakeLockSentinelEventMap>(
    event: K,
    listener: (this: T, ev: WakeLockSentinelEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { WebSocket } */
  <T extends WebSocket>(
    target: T,
  ): <K extends keyof WebSocketEventMap>(
    event: K,
    listener: (this: T, ev: WebSocketEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Window } */
  <T extends Window>(
    target: T,
  ): <K extends keyof WindowEventMap>(
    event: K,
    listener: (this: T, ev: WindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { WindowEventHandlers } */
  <T extends WindowEventHandlers>(
    target: T,
  ): <K extends keyof WindowEventHandlersEventMap>(
    event: K,
    listener: (this: T, ev: WindowEventHandlersEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Worker } */
  <T extends Worker>(
    target: T,
  ): <K extends keyof WorkerEventMap>(
    event: K,
    listener: (this: T, ev: WorkerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Document | HTMLDocument | XMLDocument } */
  <T extends Document | HTMLDocument | XMLDocument>(
    target: T,
  ): <K extends keyof DocumentEventMap>(
    event: K,
    listener: (this: T, ev: DocumentEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { XMLHttpRequest } */
  <T extends XMLHttpRequest>(
    target: T,
  ): <K extends keyof XMLHttpRequestEventMap>(
    event: K,
    listener: (this: T, ev: XMLHttpRequestEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { XMLHttpRequestEventTarget | XMLHttpRequestUpload } */
  <T extends XMLHttpRequestEventTarget | XMLHttpRequestUpload>(
    target: T,
  ): <K extends keyof XMLHttpRequestEventTargetEventMap>(
    event: K,
    listener: (this: T, ev: XMLHttpRequestEventTargetEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { XMLHttpRequestEventTarget | XMLHttpRequestUpload } */
  <T extends XMLHttpRequestEventTarget | XMLHttpRequestUpload>(
    target: T,
  ): <K extends keyof XMLHttpRequestEventTargetEventMap>(
    event: K,
    listener: (this: T, ev: XMLHttpRequestEventTargetEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Window } */
  <T extends Window>(
    target: T,
  ): <K extends keyof WindowEventMap>(
    event: K,
    listener: (this: T, ev: WindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { Element } */
  <T extends Element>(
    target: T,
  ): <K extends keyof ElementEventMap>(
    event: K,
    listener: (this: T, ev: ElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { GlobalEventHandlers } */
  <T extends GlobalEventHandlers>(
    target: T,
  ): <K extends keyof GlobalEventHandlersEventMap>(
    event: K,
    listener: (this: T, ev: GlobalEventHandlersEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AbstractWorker | SharedWorker } */
  <T extends AbstractWorker | SharedWorker>(
    target: T,
  ): <K extends keyof AbstractWorkerEventMap>(
    event: K,
    listener: (this: T, ev: AbstractWorkerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void

  /** listen for events on target of @type { AbstractWorker | SharedWorker } */
  <T extends AbstractWorker | SharedWorker>(
    target: T,
  ): <K extends keyof AbstractWorkerEventMap>(
    event: K,
    listener: (this: T, ev: AbstractWorkerEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ) => () => void
}

/** listen for events on dom event emitters */
export const on: On = (target: any) => (event: any, listener: any, options?: any) => {
  target.addEventListener(event, listener, options)
  return () => target.removeEventListener(event, listener, options)
}
