/** Options accepted by the underlying `addEventListener` overloads. */
export type ListenerOptions = boolean | AddEventListenerOptions

/** listen for events on dom event emitters */
export function on<T extends EventTarget, K extends EventNameFor<T>>(
  target: T,
  event: K,
  listener: (this: T, ev: EventFor<T, K>) => void,
  options?: ListenerOptions,
): () => void
export function on(target: any, event: any, listener: any, options?: any) {
  target.addEventListener(event, listener, options)
  return () => target.removeEventListener(event, listener, options)
}

export type EventNameFor<T> = keyof EventMapFor<T> & string

export type EventFor<T, K extends EventNameFor<T>> = EventMapFor<T>[K]

/**
 * Resolves the event map for a DOM event target type.
 * Generated from the lib.dom.d.ts file.
 */
// prettier-ignore
export type EventMapFor<T> =
  T extends HTMLBodyElement ? HTMLBodyElementEventMap :
  T extends HTMLFrameSetElement ? HTMLFrameSetElementEventMap :
  T extends HTMLVideoElement ? HTMLVideoElementEventMap :
  T extends SVGSVGElement ? SVGSVGElementEventMap :
  T extends HTMLMediaElement ? HTMLMediaElementEventMap :
  T extends MathMLElement ? MathMLElementEventMap :
  T extends Window ? WindowEventMap :
  T extends Worker ? WorkerEventMap :
  T extends SVGElement ? SVGElementEventMap :
  T extends HTMLElement ? HTMLElementEventMap :
  T extends Document ? DocumentEventMap :
  T extends IDBOpenDBRequest ? IDBOpenDBRequestEventMap :
  T extends MIDIInput ? MIDIInputEventMap :
  T extends MessagePort ? MessagePortEventMap :
  T extends OfflineAudioContext ? OfflineAudioContextEventMap :
  T extends ServiceWorker ? ServiceWorkerEventMap :
  T extends TaskSignal ? TaskSignalEventMap :
  T extends XMLHttpRequest ? XMLHttpRequestEventMap :
  T extends Animation ? AnimationEventMap :
  T extends AudioScheduledSourceNode ? AudioScheduledSourceNodeEventMap :
  T extends AudioDecoder ? AudioDecoderEventMap :
  T extends AudioEncoder ? AudioEncoderEventMap :
  T extends AudioWorkletNode ? AudioWorkletNodeEventMap :
  T extends BroadcastChannel ? BroadcastChannelEventMap :
  T extends MediaStreamTrack ? MediaStreamTrackEventMap :
  T extends CookieStore ? CookieStoreEventMap :
  T extends EventSource ? EventSourceEventMap :
  T extends FileReader ? FileReaderEventMap :
  T extends FontFaceSet ? FontFaceSetEventMap :
  T extends GPUDevice ? GPUDeviceEventMap :
  T extends IDBDatabase ? IDBDatabaseEventMap :
  T extends IDBTransaction ? IDBTransactionEventMap :
  T extends MIDIAccess ? MIDIAccessEventMap :
  T extends MediaDevices ? MediaDevicesEventMap :
  T extends MediaKeySession ? MediaKeySessionEventMap :
  T extends MediaQueryList ? MediaQueryListEventMap :
  T extends MediaRecorder ? MediaRecorderEventMap :
  T extends MediaSource ? MediaSourceEventMap :
  T extends MediaStream ? MediaStreamEventMap :
  T extends Navigation ? NavigationEventMap :
  T extends NavigationHistoryEntry ? NavigationHistoryEntryEventMap :
  T extends Notification ? NotificationEventMap :
  T extends OffscreenCanvas ? OffscreenCanvasEventMap :
  T extends PaymentRequest ? PaymentRequestEventMap :
  T extends PaymentResponse ? PaymentResponseEventMap :
  T extends Performance ? PerformanceEventMap :
  T extends PermissionStatus ? PermissionStatusEventMap :
  T extends PictureInPictureWindow ? PictureInPictureWindowEventMap :
  T extends RTCDTMFSender ? RTCDTMFSenderEventMap :
  T extends RTCDataChannel ? RTCDataChannelEventMap :
  T extends RTCDtlsTransport ? RTCDtlsTransportEventMap :
  T extends RTCIceTransport ? RTCIceTransportEventMap :
  T extends RTCPeerConnection ? RTCPeerConnectionEventMap :
  T extends RTCSctpTransport ? RTCSctpTransportEventMap :
  T extends RemotePlayback ? RemotePlaybackEventMap :
  T extends ScreenOrientation ? ScreenOrientationEventMap :
  T extends ScriptProcessorNode ? ScriptProcessorNodeEventMap :
  T extends ServiceWorkerContainer ? ServiceWorkerContainerEventMap :
  T extends ServiceWorkerRegistration ? ServiceWorkerRegistrationEventMap :
  T extends ShadowRoot ? ShadowRootEventMap :
  T extends SourceBuffer ? SourceBufferEventMap :
  T extends SourceBufferList ? SourceBufferListEventMap :
  T extends SpeechSynthesis ? SpeechSynthesisEventMap :
  T extends SpeechSynthesisUtterance ? SpeechSynthesisUtteranceEventMap :
  T extends TextTrack ? TextTrackEventMap :
  T extends TextTrackCue ? TextTrackCueEventMap :
  T extends TextTrackList ? TextTrackListEventMap :
  T extends VideoDecoder ? VideoDecoderEventMap :
  T extends VideoEncoder ? VideoEncoderEventMap :
  T extends VisualViewport ? VisualViewportEventMap :
  T extends WakeLockSentinel ? WakeLockSentinelEventMap :
  T extends WebSocket ? WebSocketEventMap :
  T extends AbortSignal ? AbortSignalEventMap :
  T extends BaseAudioContext ? BaseAudioContextEventMap :
  T extends IDBRequest ? IDBRequestEventMap :
  T extends MIDIPort ? MIDIPortEventMap :
  T extends SharedWorker ? AbstractWorkerEventMap :
  T extends XMLHttpRequestEventTarget ? XMLHttpRequestEventTargetEventMap :
  T extends Element ? ElementEventMap :
  T extends EventTarget ? Record<string, Event> :
  never
