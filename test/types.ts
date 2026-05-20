import type { EventNameFor, EventFor } from '../src/on.js'

type Eq<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
type Asserts<T extends true[]> = T

type Names<T, K> = Eq<EventNameFor<T>, K>
type EventT<T, K extends EventNameFor<T>, E> = Eq<EventFor<T, K>, E>

export type AssertedNames = Asserts<
  [
    Names<
      HTMLBodyElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'afterprint'
      | 'beforeprint'
      | 'beforeunload'
      | 'gamepadconnected'
      | 'gamepaddisconnected'
      | 'hashchange'
      | 'languagechange'
      | 'message'
      | 'messageerror'
      | 'offline'
      | 'online'
      | 'pagehide'
      | 'pagereveal'
      | 'pageshow'
      | 'pageswap'
      | 'popstate'
      | 'rejectionhandled'
      | 'storage'
      | 'unhandledrejection'
      | 'unload'
    >,
    Names<
      HTMLFrameSetElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'afterprint'
      | 'beforeprint'
      | 'beforeunload'
      | 'gamepadconnected'
      | 'gamepaddisconnected'
      | 'hashchange'
      | 'languagechange'
      | 'message'
      | 'messageerror'
      | 'offline'
      | 'online'
      | 'pagehide'
      | 'pagereveal'
      | 'pageshow'
      | 'pageswap'
      | 'popstate'
      | 'rejectionhandled'
      | 'storage'
      | 'unhandledrejection'
      | 'unload'
    >,
    Names<
      HTMLVideoElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'encrypted'
      | 'waitingforkey'
      | 'enterpictureinpicture'
      | 'leavepictureinpicture'
    >,
    Names<
      SVGSVGElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'afterprint'
      | 'beforeprint'
      | 'beforeunload'
      | 'gamepadconnected'
      | 'gamepaddisconnected'
      | 'hashchange'
      | 'languagechange'
      | 'message'
      | 'messageerror'
      | 'offline'
      | 'online'
      | 'pagehide'
      | 'pagereveal'
      | 'pageshow'
      | 'pageswap'
      | 'popstate'
      | 'rejectionhandled'
      | 'storage'
      | 'unhandledrejection'
      | 'unload'
    >,
    Names<
      HTMLMediaElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'encrypted'
      | 'waitingforkey'
    >,
    Names<
      MathMLElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
    >,
    Names<
      Window,
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'afterprint'
      | 'beforeprint'
      | 'beforeunload'
      | 'gamepadconnected'
      | 'gamepaddisconnected'
      | 'hashchange'
      | 'languagechange'
      | 'message'
      | 'messageerror'
      | 'offline'
      | 'online'
      | 'pagehide'
      | 'pagereveal'
      | 'pageshow'
      | 'pageswap'
      | 'popstate'
      | 'rejectionhandled'
      | 'storage'
      | 'unhandledrejection'
      | 'unload'
      | 'DOMContentLoaded'
      | 'devicemotion'
      | 'deviceorientation'
      | 'deviceorientationabsolute'
      | 'orientationchange'
    >,
    Names<Worker, 'error' | 'message' | 'messageerror'>,
    Names<
      SVGElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
    >,
    Names<
      HTMLElement,
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
    >,
    Names<
      Document,
      | 'abort'
      | 'animationcancel'
      | 'animationend'
      | 'animationiteration'
      | 'animationstart'
      | 'auxclick'
      | 'beforeinput'
      | 'beforematch'
      | 'beforetoggle'
      | 'blur'
      | 'cancel'
      | 'canplay'
      | 'canplaythrough'
      | 'change'
      | 'click'
      | 'close'
      | 'command'
      | 'compositionend'
      | 'compositionstart'
      | 'compositionupdate'
      | 'contextlost'
      | 'contextmenu'
      | 'contextrestored'
      | 'copy'
      | 'cuechange'
      | 'cut'
      | 'dblclick'
      | 'drag'
      | 'dragend'
      | 'dragenter'
      | 'dragleave'
      | 'dragover'
      | 'dragstart'
      | 'drop'
      | 'durationchange'
      | 'emptied'
      | 'ended'
      | 'error'
      | 'focus'
      | 'focusin'
      | 'focusout'
      | 'formdata'
      | 'gotpointercapture'
      | 'input'
      | 'invalid'
      | 'keydown'
      | 'keypress'
      | 'keyup'
      | 'load'
      | 'loadeddata'
      | 'loadedmetadata'
      | 'loadstart'
      | 'lostpointercapture'
      | 'mousedown'
      | 'mouseenter'
      | 'mouseleave'
      | 'mousemove'
      | 'mouseout'
      | 'mouseover'
      | 'mouseup'
      | 'paste'
      | 'pause'
      | 'play'
      | 'playing'
      | 'pointercancel'
      | 'pointerdown'
      | 'pointerenter'
      | 'pointerleave'
      | 'pointermove'
      | 'pointerout'
      | 'pointerover'
      | 'pointerrawupdate'
      | 'pointerup'
      | 'progress'
      | 'ratechange'
      | 'reset'
      | 'resize'
      | 'scroll'
      | 'scrollend'
      | 'securitypolicyviolation'
      | 'seeked'
      | 'seeking'
      | 'select'
      | 'selectionchange'
      | 'selectstart'
      | 'slotchange'
      | 'stalled'
      | 'submit'
      | 'suspend'
      | 'timeupdate'
      | 'toggle'
      | 'touchcancel'
      | 'touchend'
      | 'touchmove'
      | 'touchstart'
      | 'transitioncancel'
      | 'transitionend'
      | 'transitionrun'
      | 'transitionstart'
      | 'volumechange'
      | 'waiting'
      | 'webkitanimationend'
      | 'webkitanimationiteration'
      | 'webkitanimationstart'
      | 'webkittransitionend'
      | 'wheel'
      | 'DOMContentLoaded'
      | 'fullscreenchange'
      | 'fullscreenerror'
      | 'pointerlockchange'
      | 'pointerlockerror'
      | 'readystatechange'
      | 'visibilitychange'
    >,
    Names<IDBOpenDBRequest, 'error' | 'success' | 'blocked' | 'upgradeneeded'>,
    Names<MIDIInput, 'statechange' | 'midimessage'>,
    Names<MessagePort, 'message' | 'messageerror'>,
    Names<OfflineAudioContext, 'statechange' | 'complete'>,
    Names<ServiceWorker, 'error' | 'statechange'>,
    Names<TaskSignal, 'abort' | 'prioritychange'>,
    Names<
      XMLHttpRequest,
      'abort' | 'error' | 'load' | 'loadend' | 'loadstart' | 'progress' | 'timeout' | 'readystatechange'
    >,
    Names<Animation, 'cancel' | 'finish' | 'remove'>,
    Names<AudioScheduledSourceNode, 'ended'>,
    Names<AudioDecoder, 'dequeue'>,
    Names<AudioEncoder, 'dequeue'>,
    Names<AudioWorkletNode, 'processorerror'>,
    Names<BroadcastChannel, 'message' | 'messageerror'>,
    Names<MediaStreamTrack, 'ended' | 'mute' | 'unmute'>,
    Names<CookieStore, 'change'>,
    Names<EventSource, 'error' | 'message' | 'open'>,
    Names<FileReader, 'abort' | 'error' | 'load' | 'loadend' | 'loadstart' | 'progress'>,
    Names<FontFaceSet, 'loading' | 'loadingdone' | 'loadingerror'>,
    Names<GPUDevice, 'uncapturederror'>,
    Names<IDBDatabase, 'abort' | 'close' | 'error' | 'versionchange'>,
    Names<IDBTransaction, 'abort' | 'complete' | 'error'>,
    Names<MIDIAccess, 'statechange'>,
    Names<MediaDevices, 'devicechange'>,
    Names<MediaKeySession, 'keystatuseschange' | 'message'>,
    Names<MediaQueryList, 'change'>,
    Names<MediaRecorder, 'dataavailable' | 'error' | 'pause' | 'resume' | 'start' | 'stop'>,
    Names<MediaSource, 'sourceclose' | 'sourceended' | 'sourceopen'>,
    Names<MediaStream, 'addtrack' | 'removetrack'>,
    Names<Navigation, 'currententrychange' | 'navigate' | 'navigateerror' | 'navigatesuccess'>,
    Names<NavigationHistoryEntry, 'dispose'>,
    Names<Notification, 'click' | 'close' | 'error' | 'show'>,
    Names<OffscreenCanvas, 'contextlost' | 'contextrestored'>,
    Names<PaymentRequest, 'paymentmethodchange' | 'shippingaddresschange' | 'shippingoptionchange'>,
    Names<PaymentResponse, 'payerdetailchange'>,
    Names<Performance, 'resourcetimingbufferfull'>,
    Names<PermissionStatus, 'change'>,
    Names<PictureInPictureWindow, 'resize'>,
    Names<RTCDTMFSender, 'tonechange'>,
    Names<RTCDataChannel, 'bufferedamountlow' | 'close' | 'closing' | 'error' | 'message' | 'open'>,
    Names<RTCDtlsTransport, 'error' | 'statechange'>,
    Names<RTCIceTransport, 'gatheringstatechange' | 'selectedcandidatepairchange' | 'statechange'>,
    Names<
      RTCPeerConnection,
      | 'connectionstatechange'
      | 'datachannel'
      | 'icecandidate'
      | 'icecandidateerror'
      | 'iceconnectionstatechange'
      | 'icegatheringstatechange'
      | 'negotiationneeded'
      | 'signalingstatechange'
      | 'track'
    >,
    Names<RTCSctpTransport, 'statechange'>,
    Names<RemotePlayback, 'connect' | 'connecting' | 'disconnect'>,
    Names<ScreenOrientation, 'change'>,
    Names<ScriptProcessorNode, 'audioprocess'>,
    Names<ServiceWorkerContainer, 'controllerchange' | 'message' | 'messageerror'>,
    Names<ServiceWorkerRegistration, 'updatefound'>,
    Names<ShadowRoot, 'slotchange'>,
    Names<SourceBuffer, 'abort' | 'error' | 'update' | 'updateend' | 'updatestart'>,
    Names<SourceBufferList, 'addsourcebuffer' | 'removesourcebuffer'>,
    Names<SpeechSynthesis, 'voiceschanged'>,
    Names<SpeechSynthesisUtterance, 'boundary' | 'end' | 'error' | 'mark' | 'pause' | 'resume' | 'start'>,
    Names<TextTrack, 'cuechange'>,
    Names<TextTrackCue, 'enter' | 'exit'>,
    Names<TextTrackList, 'addtrack' | 'change' | 'removetrack'>,
    Names<VideoDecoder, 'dequeue'>,
    Names<VideoEncoder, 'dequeue'>,
    Names<VisualViewport, 'resize' | 'scroll'>,
    Names<WakeLockSentinel, 'release'>,
    Names<WebSocket, 'close' | 'error' | 'message' | 'open'>,
    Names<AbortSignal, 'abort'>,
    Names<BaseAudioContext, 'statechange'>,
    Names<IDBRequest, 'error' | 'success'>,
    Names<MIDIPort, 'statechange'>,
    Names<SharedWorker, 'error'>,
    Names<XMLHttpRequestEventTarget, 'abort' | 'error' | 'load' | 'loadend' | 'loadstart' | 'progress' | 'timeout'>,
    Names<Element, 'fullscreenchange' | 'fullscreenerror'>,
  ]
>

export type AssertedEvents = Asserts<
  [
    EventT<HTMLBodyElement, 'fullscreenchange', Event>,
    EventT<HTMLBodyElement, 'fullscreenerror', Event>,
    EventT<HTMLBodyElement, 'abort', UIEvent>,
    EventT<HTMLBodyElement, 'animationcancel', AnimationEvent>,
    EventT<HTMLBodyElement, 'animationend', AnimationEvent>,
    EventT<HTMLBodyElement, 'animationiteration', AnimationEvent>,
    EventT<HTMLBodyElement, 'animationstart', AnimationEvent>,
    EventT<HTMLBodyElement, 'auxclick', PointerEvent>,
    EventT<HTMLBodyElement, 'beforeinput', InputEvent>,
    EventT<HTMLBodyElement, 'beforematch', Event>,
    EventT<HTMLBodyElement, 'beforetoggle', ToggleEvent>,
    EventT<HTMLBodyElement, 'blur', FocusEvent>,
    EventT<HTMLBodyElement, 'cancel', Event>,
    EventT<HTMLBodyElement, 'canplay', Event>,
    EventT<HTMLBodyElement, 'canplaythrough', Event>,
    EventT<HTMLBodyElement, 'change', Event>,
    EventT<HTMLBodyElement, 'click', PointerEvent>,
    EventT<HTMLBodyElement, 'close', Event>,
    EventT<HTMLBodyElement, 'command', Event>,
    EventT<HTMLBodyElement, 'compositionend', CompositionEvent>,
    EventT<HTMLBodyElement, 'compositionstart', CompositionEvent>,
    EventT<HTMLBodyElement, 'compositionupdate', CompositionEvent>,
    EventT<HTMLBodyElement, 'contextlost', Event>,
    EventT<HTMLBodyElement, 'contextmenu', PointerEvent>,
    EventT<HTMLBodyElement, 'contextrestored', Event>,
    EventT<HTMLBodyElement, 'copy', ClipboardEvent>,
    EventT<HTMLBodyElement, 'cuechange', Event>,
    EventT<HTMLBodyElement, 'cut', ClipboardEvent>,
    EventT<HTMLBodyElement, 'dblclick', MouseEvent>,
    EventT<HTMLBodyElement, 'drag', DragEvent>,
    EventT<HTMLBodyElement, 'dragend', DragEvent>,
    EventT<HTMLBodyElement, 'dragenter', DragEvent>,
    EventT<HTMLBodyElement, 'dragleave', DragEvent>,
    EventT<HTMLBodyElement, 'dragover', DragEvent>,
    EventT<HTMLBodyElement, 'dragstart', DragEvent>,
    EventT<HTMLBodyElement, 'drop', DragEvent>,
    EventT<HTMLBodyElement, 'durationchange', Event>,
    EventT<HTMLBodyElement, 'emptied', Event>,
    EventT<HTMLBodyElement, 'ended', Event>,
    EventT<HTMLBodyElement, 'error', ErrorEvent>,
    EventT<HTMLBodyElement, 'focus', FocusEvent>,
    EventT<HTMLBodyElement, 'focusin', FocusEvent>,
    EventT<HTMLBodyElement, 'focusout', FocusEvent>,
    EventT<HTMLBodyElement, 'formdata', FormDataEvent>,
    EventT<HTMLBodyElement, 'gotpointercapture', PointerEvent>,
    EventT<HTMLBodyElement, 'input', InputEvent>,
    EventT<HTMLBodyElement, 'invalid', Event>,
    EventT<HTMLBodyElement, 'keydown', KeyboardEvent>,
    EventT<HTMLBodyElement, 'keypress', KeyboardEvent>,
    EventT<HTMLBodyElement, 'keyup', KeyboardEvent>,
    EventT<HTMLBodyElement, 'load', Event>,
    EventT<HTMLBodyElement, 'loadeddata', Event>,
    EventT<HTMLBodyElement, 'loadedmetadata', Event>,
    EventT<HTMLBodyElement, 'loadstart', Event>,
    EventT<HTMLBodyElement, 'lostpointercapture', PointerEvent>,
    EventT<HTMLBodyElement, 'mousedown', MouseEvent>,
    EventT<HTMLBodyElement, 'mouseenter', MouseEvent>,
    EventT<HTMLBodyElement, 'mouseleave', MouseEvent>,
    EventT<HTMLBodyElement, 'mousemove', MouseEvent>,
    EventT<HTMLBodyElement, 'mouseout', MouseEvent>,
    EventT<HTMLBodyElement, 'mouseover', MouseEvent>,
    EventT<HTMLBodyElement, 'mouseup', MouseEvent>,
    EventT<HTMLBodyElement, 'paste', ClipboardEvent>,
    EventT<HTMLBodyElement, 'pause', Event>,
    EventT<HTMLBodyElement, 'play', Event>,
    EventT<HTMLBodyElement, 'playing', Event>,
    EventT<HTMLBodyElement, 'pointercancel', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerdown', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerenter', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerleave', PointerEvent>,
    EventT<HTMLBodyElement, 'pointermove', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerout', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerover', PointerEvent>,
    EventT<HTMLBodyElement, 'pointerrawupdate', Event>,
    EventT<HTMLBodyElement, 'pointerup', PointerEvent>,
    EventT<HTMLBodyElement, 'progress', ProgressEvent>,
    EventT<HTMLBodyElement, 'ratechange', Event>,
    EventT<HTMLBodyElement, 'reset', Event>,
    EventT<HTMLBodyElement, 'resize', UIEvent>,
    EventT<HTMLBodyElement, 'scroll', Event>,
    EventT<HTMLBodyElement, 'scrollend', Event>,
    EventT<HTMLBodyElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<HTMLBodyElement, 'seeked', Event>,
    EventT<HTMLBodyElement, 'seeking', Event>,
    EventT<HTMLBodyElement, 'select', Event>,
    EventT<HTMLBodyElement, 'selectionchange', Event>,
    EventT<HTMLBodyElement, 'selectstart', Event>,
    EventT<HTMLBodyElement, 'slotchange', Event>,
    EventT<HTMLBodyElement, 'stalled', Event>,
    EventT<HTMLBodyElement, 'submit', SubmitEvent>,
    EventT<HTMLBodyElement, 'suspend', Event>,
    EventT<HTMLBodyElement, 'timeupdate', Event>,
    EventT<HTMLBodyElement, 'toggle', ToggleEvent>,
    EventT<HTMLBodyElement, 'touchcancel', TouchEvent>,
    EventT<HTMLBodyElement, 'touchend', TouchEvent>,
    EventT<HTMLBodyElement, 'touchmove', TouchEvent>,
    EventT<HTMLBodyElement, 'touchstart', TouchEvent>,
    EventT<HTMLBodyElement, 'transitioncancel', TransitionEvent>,
    EventT<HTMLBodyElement, 'transitionend', TransitionEvent>,
    EventT<HTMLBodyElement, 'transitionrun', TransitionEvent>,
    EventT<HTMLBodyElement, 'transitionstart', TransitionEvent>,
    EventT<HTMLBodyElement, 'volumechange', Event>,
    EventT<HTMLBodyElement, 'waiting', Event>,
    EventT<HTMLBodyElement, 'webkitanimationend', Event>,
    EventT<HTMLBodyElement, 'webkitanimationiteration', Event>,
    EventT<HTMLBodyElement, 'webkitanimationstart', Event>,
    EventT<HTMLBodyElement, 'webkittransitionend', Event>,
    EventT<HTMLBodyElement, 'wheel', WheelEvent>,
    EventT<HTMLBodyElement, 'afterprint', Event>,
    EventT<HTMLBodyElement, 'beforeprint', Event>,
    EventT<HTMLBodyElement, 'beforeunload', BeforeUnloadEvent>,
    EventT<HTMLBodyElement, 'gamepadconnected', GamepadEvent>,
    EventT<HTMLBodyElement, 'gamepaddisconnected', GamepadEvent>,
    EventT<HTMLBodyElement, 'hashchange', HashChangeEvent>,
    EventT<HTMLBodyElement, 'languagechange', Event>,
    EventT<HTMLBodyElement, 'message', MessageEvent>,
    EventT<HTMLBodyElement, 'messageerror', MessageEvent>,
    EventT<HTMLBodyElement, 'offline', Event>,
    EventT<HTMLBodyElement, 'online', Event>,
    EventT<HTMLBodyElement, 'pagehide', PageTransitionEvent>,
    EventT<HTMLBodyElement, 'pagereveal', PageRevealEvent>,
    EventT<HTMLBodyElement, 'pageshow', PageTransitionEvent>,
    EventT<HTMLBodyElement, 'pageswap', PageSwapEvent>,
    EventT<HTMLBodyElement, 'popstate', PopStateEvent>,
    EventT<HTMLBodyElement, 'rejectionhandled', PromiseRejectionEvent>,
    EventT<HTMLBodyElement, 'storage', StorageEvent>,
    EventT<HTMLBodyElement, 'unhandledrejection', PromiseRejectionEvent>,
    EventT<HTMLBodyElement, 'unload', Event>,
    EventT<HTMLFrameSetElement, 'fullscreenchange', Event>,
    EventT<HTMLFrameSetElement, 'fullscreenerror', Event>,
    EventT<HTMLFrameSetElement, 'abort', UIEvent>,
    EventT<HTMLFrameSetElement, 'animationcancel', AnimationEvent>,
    EventT<HTMLFrameSetElement, 'animationend', AnimationEvent>,
    EventT<HTMLFrameSetElement, 'animationiteration', AnimationEvent>,
    EventT<HTMLFrameSetElement, 'animationstart', AnimationEvent>,
    EventT<HTMLFrameSetElement, 'auxclick', PointerEvent>,
    EventT<HTMLFrameSetElement, 'beforeinput', InputEvent>,
    EventT<HTMLFrameSetElement, 'beforematch', Event>,
    EventT<HTMLFrameSetElement, 'beforetoggle', ToggleEvent>,
    EventT<HTMLFrameSetElement, 'blur', FocusEvent>,
    EventT<HTMLFrameSetElement, 'cancel', Event>,
    EventT<HTMLFrameSetElement, 'canplay', Event>,
    EventT<HTMLFrameSetElement, 'canplaythrough', Event>,
    EventT<HTMLFrameSetElement, 'change', Event>,
    EventT<HTMLFrameSetElement, 'click', PointerEvent>,
    EventT<HTMLFrameSetElement, 'close', Event>,
    EventT<HTMLFrameSetElement, 'command', Event>,
    EventT<HTMLFrameSetElement, 'compositionend', CompositionEvent>,
    EventT<HTMLFrameSetElement, 'compositionstart', CompositionEvent>,
    EventT<HTMLFrameSetElement, 'compositionupdate', CompositionEvent>,
    EventT<HTMLFrameSetElement, 'contextlost', Event>,
    EventT<HTMLFrameSetElement, 'contextmenu', PointerEvent>,
    EventT<HTMLFrameSetElement, 'contextrestored', Event>,
    EventT<HTMLFrameSetElement, 'copy', ClipboardEvent>,
    EventT<HTMLFrameSetElement, 'cuechange', Event>,
    EventT<HTMLFrameSetElement, 'cut', ClipboardEvent>,
    EventT<HTMLFrameSetElement, 'dblclick', MouseEvent>,
    EventT<HTMLFrameSetElement, 'drag', DragEvent>,
    EventT<HTMLFrameSetElement, 'dragend', DragEvent>,
    EventT<HTMLFrameSetElement, 'dragenter', DragEvent>,
    EventT<HTMLFrameSetElement, 'dragleave', DragEvent>,
    EventT<HTMLFrameSetElement, 'dragover', DragEvent>,
    EventT<HTMLFrameSetElement, 'dragstart', DragEvent>,
    EventT<HTMLFrameSetElement, 'drop', DragEvent>,
    EventT<HTMLFrameSetElement, 'durationchange', Event>,
    EventT<HTMLFrameSetElement, 'emptied', Event>,
    EventT<HTMLFrameSetElement, 'ended', Event>,
    EventT<HTMLFrameSetElement, 'error', ErrorEvent>,
    EventT<HTMLFrameSetElement, 'focus', FocusEvent>,
    EventT<HTMLFrameSetElement, 'focusin', FocusEvent>,
    EventT<HTMLFrameSetElement, 'focusout', FocusEvent>,
    EventT<HTMLFrameSetElement, 'formdata', FormDataEvent>,
    EventT<HTMLFrameSetElement, 'gotpointercapture', PointerEvent>,
    EventT<HTMLFrameSetElement, 'input', InputEvent>,
    EventT<HTMLFrameSetElement, 'invalid', Event>,
    EventT<HTMLFrameSetElement, 'keydown', KeyboardEvent>,
    EventT<HTMLFrameSetElement, 'keypress', KeyboardEvent>,
    EventT<HTMLFrameSetElement, 'keyup', KeyboardEvent>,
    EventT<HTMLFrameSetElement, 'load', Event>,
    EventT<HTMLFrameSetElement, 'loadeddata', Event>,
    EventT<HTMLFrameSetElement, 'loadedmetadata', Event>,
    EventT<HTMLFrameSetElement, 'loadstart', Event>,
    EventT<HTMLFrameSetElement, 'lostpointercapture', PointerEvent>,
    EventT<HTMLFrameSetElement, 'mousedown', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mouseenter', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mouseleave', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mousemove', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mouseout', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mouseover', MouseEvent>,
    EventT<HTMLFrameSetElement, 'mouseup', MouseEvent>,
    EventT<HTMLFrameSetElement, 'paste', ClipboardEvent>,
    EventT<HTMLFrameSetElement, 'pause', Event>,
    EventT<HTMLFrameSetElement, 'play', Event>,
    EventT<HTMLFrameSetElement, 'playing', Event>,
    EventT<HTMLFrameSetElement, 'pointercancel', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerdown', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerenter', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerleave', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointermove', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerout', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerover', PointerEvent>,
    EventT<HTMLFrameSetElement, 'pointerrawupdate', Event>,
    EventT<HTMLFrameSetElement, 'pointerup', PointerEvent>,
    EventT<HTMLFrameSetElement, 'progress', ProgressEvent>,
    EventT<HTMLFrameSetElement, 'ratechange', Event>,
    EventT<HTMLFrameSetElement, 'reset', Event>,
    EventT<HTMLFrameSetElement, 'resize', UIEvent>,
    EventT<HTMLFrameSetElement, 'scroll', Event>,
    EventT<HTMLFrameSetElement, 'scrollend', Event>,
    EventT<HTMLFrameSetElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<HTMLFrameSetElement, 'seeked', Event>,
    EventT<HTMLFrameSetElement, 'seeking', Event>,
    EventT<HTMLFrameSetElement, 'select', Event>,
    EventT<HTMLFrameSetElement, 'selectionchange', Event>,
    EventT<HTMLFrameSetElement, 'selectstart', Event>,
    EventT<HTMLFrameSetElement, 'slotchange', Event>,
    EventT<HTMLFrameSetElement, 'stalled', Event>,
    EventT<HTMLFrameSetElement, 'submit', SubmitEvent>,
    EventT<HTMLFrameSetElement, 'suspend', Event>,
    EventT<HTMLFrameSetElement, 'timeupdate', Event>,
    EventT<HTMLFrameSetElement, 'toggle', ToggleEvent>,
    EventT<HTMLFrameSetElement, 'touchcancel', TouchEvent>,
    EventT<HTMLFrameSetElement, 'touchend', TouchEvent>,
    EventT<HTMLFrameSetElement, 'touchmove', TouchEvent>,
    EventT<HTMLFrameSetElement, 'touchstart', TouchEvent>,
    EventT<HTMLFrameSetElement, 'transitioncancel', TransitionEvent>,
    EventT<HTMLFrameSetElement, 'transitionend', TransitionEvent>,
    EventT<HTMLFrameSetElement, 'transitionrun', TransitionEvent>,
    EventT<HTMLFrameSetElement, 'transitionstart', TransitionEvent>,
    EventT<HTMLFrameSetElement, 'volumechange', Event>,
    EventT<HTMLFrameSetElement, 'waiting', Event>,
    EventT<HTMLFrameSetElement, 'webkitanimationend', Event>,
    EventT<HTMLFrameSetElement, 'webkitanimationiteration', Event>,
    EventT<HTMLFrameSetElement, 'webkitanimationstart', Event>,
    EventT<HTMLFrameSetElement, 'webkittransitionend', Event>,
    EventT<HTMLFrameSetElement, 'wheel', WheelEvent>,
    EventT<HTMLFrameSetElement, 'afterprint', Event>,
    EventT<HTMLFrameSetElement, 'beforeprint', Event>,
    EventT<HTMLFrameSetElement, 'beforeunload', BeforeUnloadEvent>,
    EventT<HTMLFrameSetElement, 'gamepadconnected', GamepadEvent>,
    EventT<HTMLFrameSetElement, 'gamepaddisconnected', GamepadEvent>,
    EventT<HTMLFrameSetElement, 'hashchange', HashChangeEvent>,
    EventT<HTMLFrameSetElement, 'languagechange', Event>,
    EventT<HTMLFrameSetElement, 'message', MessageEvent>,
    EventT<HTMLFrameSetElement, 'messageerror', MessageEvent>,
    EventT<HTMLFrameSetElement, 'offline', Event>,
    EventT<HTMLFrameSetElement, 'online', Event>,
    EventT<HTMLFrameSetElement, 'pagehide', PageTransitionEvent>,
    EventT<HTMLFrameSetElement, 'pagereveal', PageRevealEvent>,
    EventT<HTMLFrameSetElement, 'pageshow', PageTransitionEvent>,
    EventT<HTMLFrameSetElement, 'pageswap', PageSwapEvent>,
    EventT<HTMLFrameSetElement, 'popstate', PopStateEvent>,
    EventT<HTMLFrameSetElement, 'rejectionhandled', PromiseRejectionEvent>,
    EventT<HTMLFrameSetElement, 'storage', StorageEvent>,
    EventT<HTMLFrameSetElement, 'unhandledrejection', PromiseRejectionEvent>,
    EventT<HTMLFrameSetElement, 'unload', Event>,
    EventT<HTMLVideoElement, 'fullscreenchange', Event>,
    EventT<HTMLVideoElement, 'fullscreenerror', Event>,
    EventT<HTMLVideoElement, 'abort', UIEvent>,
    EventT<HTMLVideoElement, 'animationcancel', AnimationEvent>,
    EventT<HTMLVideoElement, 'animationend', AnimationEvent>,
    EventT<HTMLVideoElement, 'animationiteration', AnimationEvent>,
    EventT<HTMLVideoElement, 'animationstart', AnimationEvent>,
    EventT<HTMLVideoElement, 'auxclick', PointerEvent>,
    EventT<HTMLVideoElement, 'beforeinput', InputEvent>,
    EventT<HTMLVideoElement, 'beforematch', Event>,
    EventT<HTMLVideoElement, 'beforetoggle', ToggleEvent>,
    EventT<HTMLVideoElement, 'blur', FocusEvent>,
    EventT<HTMLVideoElement, 'cancel', Event>,
    EventT<HTMLVideoElement, 'canplay', Event>,
    EventT<HTMLVideoElement, 'canplaythrough', Event>,
    EventT<HTMLVideoElement, 'change', Event>,
    EventT<HTMLVideoElement, 'click', PointerEvent>,
    EventT<HTMLVideoElement, 'close', Event>,
    EventT<HTMLVideoElement, 'command', Event>,
    EventT<HTMLVideoElement, 'compositionend', CompositionEvent>,
    EventT<HTMLVideoElement, 'compositionstart', CompositionEvent>,
    EventT<HTMLVideoElement, 'compositionupdate', CompositionEvent>,
    EventT<HTMLVideoElement, 'contextlost', Event>,
    EventT<HTMLVideoElement, 'contextmenu', PointerEvent>,
    EventT<HTMLVideoElement, 'contextrestored', Event>,
    EventT<HTMLVideoElement, 'copy', ClipboardEvent>,
    EventT<HTMLVideoElement, 'cuechange', Event>,
    EventT<HTMLVideoElement, 'cut', ClipboardEvent>,
    EventT<HTMLVideoElement, 'dblclick', MouseEvent>,
    EventT<HTMLVideoElement, 'drag', DragEvent>,
    EventT<HTMLVideoElement, 'dragend', DragEvent>,
    EventT<HTMLVideoElement, 'dragenter', DragEvent>,
    EventT<HTMLVideoElement, 'dragleave', DragEvent>,
    EventT<HTMLVideoElement, 'dragover', DragEvent>,
    EventT<HTMLVideoElement, 'dragstart', DragEvent>,
    EventT<HTMLVideoElement, 'drop', DragEvent>,
    EventT<HTMLVideoElement, 'durationchange', Event>,
    EventT<HTMLVideoElement, 'emptied', Event>,
    EventT<HTMLVideoElement, 'ended', Event>,
    EventT<HTMLVideoElement, 'error', ErrorEvent>,
    EventT<HTMLVideoElement, 'focus', FocusEvent>,
    EventT<HTMLVideoElement, 'focusin', FocusEvent>,
    EventT<HTMLVideoElement, 'focusout', FocusEvent>,
    EventT<HTMLVideoElement, 'formdata', FormDataEvent>,
    EventT<HTMLVideoElement, 'gotpointercapture', PointerEvent>,
    EventT<HTMLVideoElement, 'input', InputEvent>,
    EventT<HTMLVideoElement, 'invalid', Event>,
    EventT<HTMLVideoElement, 'keydown', KeyboardEvent>,
    EventT<HTMLVideoElement, 'keypress', KeyboardEvent>,
    EventT<HTMLVideoElement, 'keyup', KeyboardEvent>,
    EventT<HTMLVideoElement, 'load', Event>,
    EventT<HTMLVideoElement, 'loadeddata', Event>,
    EventT<HTMLVideoElement, 'loadedmetadata', Event>,
    EventT<HTMLVideoElement, 'loadstart', Event>,
    EventT<HTMLVideoElement, 'lostpointercapture', PointerEvent>,
    EventT<HTMLVideoElement, 'mousedown', MouseEvent>,
    EventT<HTMLVideoElement, 'mouseenter', MouseEvent>,
    EventT<HTMLVideoElement, 'mouseleave', MouseEvent>,
    EventT<HTMLVideoElement, 'mousemove', MouseEvent>,
    EventT<HTMLVideoElement, 'mouseout', MouseEvent>,
    EventT<HTMLVideoElement, 'mouseover', MouseEvent>,
    EventT<HTMLVideoElement, 'mouseup', MouseEvent>,
    EventT<HTMLVideoElement, 'paste', ClipboardEvent>,
    EventT<HTMLVideoElement, 'pause', Event>,
    EventT<HTMLVideoElement, 'play', Event>,
    EventT<HTMLVideoElement, 'playing', Event>,
    EventT<HTMLVideoElement, 'pointercancel', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerdown', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerenter', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerleave', PointerEvent>,
    EventT<HTMLVideoElement, 'pointermove', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerout', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerover', PointerEvent>,
    EventT<HTMLVideoElement, 'pointerrawupdate', Event>,
    EventT<HTMLVideoElement, 'pointerup', PointerEvent>,
    EventT<HTMLVideoElement, 'progress', ProgressEvent>,
    EventT<HTMLVideoElement, 'ratechange', Event>,
    EventT<HTMLVideoElement, 'reset', Event>,
    EventT<HTMLVideoElement, 'resize', UIEvent>,
    EventT<HTMLVideoElement, 'scroll', Event>,
    EventT<HTMLVideoElement, 'scrollend', Event>,
    EventT<HTMLVideoElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<HTMLVideoElement, 'seeked', Event>,
    EventT<HTMLVideoElement, 'seeking', Event>,
    EventT<HTMLVideoElement, 'select', Event>,
    EventT<HTMLVideoElement, 'selectionchange', Event>,
    EventT<HTMLVideoElement, 'selectstart', Event>,
    EventT<HTMLVideoElement, 'slotchange', Event>,
    EventT<HTMLVideoElement, 'stalled', Event>,
    EventT<HTMLVideoElement, 'submit', SubmitEvent>,
    EventT<HTMLVideoElement, 'suspend', Event>,
    EventT<HTMLVideoElement, 'timeupdate', Event>,
    EventT<HTMLVideoElement, 'toggle', ToggleEvent>,
    EventT<HTMLVideoElement, 'touchcancel', TouchEvent>,
    EventT<HTMLVideoElement, 'touchend', TouchEvent>,
    EventT<HTMLVideoElement, 'touchmove', TouchEvent>,
    EventT<HTMLVideoElement, 'touchstart', TouchEvent>,
    EventT<HTMLVideoElement, 'transitioncancel', TransitionEvent>,
    EventT<HTMLVideoElement, 'transitionend', TransitionEvent>,
    EventT<HTMLVideoElement, 'transitionrun', TransitionEvent>,
    EventT<HTMLVideoElement, 'transitionstart', TransitionEvent>,
    EventT<HTMLVideoElement, 'volumechange', Event>,
    EventT<HTMLVideoElement, 'waiting', Event>,
    EventT<HTMLVideoElement, 'webkitanimationend', Event>,
    EventT<HTMLVideoElement, 'webkitanimationiteration', Event>,
    EventT<HTMLVideoElement, 'webkitanimationstart', Event>,
    EventT<HTMLVideoElement, 'webkittransitionend', Event>,
    EventT<HTMLVideoElement, 'wheel', WheelEvent>,
    EventT<HTMLVideoElement, 'encrypted', MediaEncryptedEvent>,
    EventT<HTMLVideoElement, 'waitingforkey', Event>,
    EventT<HTMLVideoElement, 'enterpictureinpicture', PictureInPictureEvent>,
    EventT<HTMLVideoElement, 'leavepictureinpicture', PictureInPictureEvent>,
    EventT<SVGSVGElement, 'fullscreenchange', Event>,
    EventT<SVGSVGElement, 'fullscreenerror', Event>,
    EventT<SVGSVGElement, 'abort', UIEvent>,
    EventT<SVGSVGElement, 'animationcancel', AnimationEvent>,
    EventT<SVGSVGElement, 'animationend', AnimationEvent>,
    EventT<SVGSVGElement, 'animationiteration', AnimationEvent>,
    EventT<SVGSVGElement, 'animationstart', AnimationEvent>,
    EventT<SVGSVGElement, 'auxclick', PointerEvent>,
    EventT<SVGSVGElement, 'beforeinput', InputEvent>,
    EventT<SVGSVGElement, 'beforematch', Event>,
    EventT<SVGSVGElement, 'beforetoggle', ToggleEvent>,
    EventT<SVGSVGElement, 'blur', FocusEvent>,
    EventT<SVGSVGElement, 'cancel', Event>,
    EventT<SVGSVGElement, 'canplay', Event>,
    EventT<SVGSVGElement, 'canplaythrough', Event>,
    EventT<SVGSVGElement, 'change', Event>,
    EventT<SVGSVGElement, 'click', PointerEvent>,
    EventT<SVGSVGElement, 'close', Event>,
    EventT<SVGSVGElement, 'command', Event>,
    EventT<SVGSVGElement, 'compositionend', CompositionEvent>,
    EventT<SVGSVGElement, 'compositionstart', CompositionEvent>,
    EventT<SVGSVGElement, 'compositionupdate', CompositionEvent>,
    EventT<SVGSVGElement, 'contextlost', Event>,
    EventT<SVGSVGElement, 'contextmenu', PointerEvent>,
    EventT<SVGSVGElement, 'contextrestored', Event>,
    EventT<SVGSVGElement, 'copy', ClipboardEvent>,
    EventT<SVGSVGElement, 'cuechange', Event>,
    EventT<SVGSVGElement, 'cut', ClipboardEvent>,
    EventT<SVGSVGElement, 'dblclick', MouseEvent>,
    EventT<SVGSVGElement, 'drag', DragEvent>,
    EventT<SVGSVGElement, 'dragend', DragEvent>,
    EventT<SVGSVGElement, 'dragenter', DragEvent>,
    EventT<SVGSVGElement, 'dragleave', DragEvent>,
    EventT<SVGSVGElement, 'dragover', DragEvent>,
    EventT<SVGSVGElement, 'dragstart', DragEvent>,
    EventT<SVGSVGElement, 'drop', DragEvent>,
    EventT<SVGSVGElement, 'durationchange', Event>,
    EventT<SVGSVGElement, 'emptied', Event>,
    EventT<SVGSVGElement, 'ended', Event>,
    EventT<SVGSVGElement, 'error', ErrorEvent>,
    EventT<SVGSVGElement, 'focus', FocusEvent>,
    EventT<SVGSVGElement, 'focusin', FocusEvent>,
    EventT<SVGSVGElement, 'focusout', FocusEvent>,
    EventT<SVGSVGElement, 'formdata', FormDataEvent>,
    EventT<SVGSVGElement, 'gotpointercapture', PointerEvent>,
    EventT<SVGSVGElement, 'input', InputEvent>,
    EventT<SVGSVGElement, 'invalid', Event>,
    EventT<SVGSVGElement, 'keydown', KeyboardEvent>,
    EventT<SVGSVGElement, 'keypress', KeyboardEvent>,
    EventT<SVGSVGElement, 'keyup', KeyboardEvent>,
    EventT<SVGSVGElement, 'load', Event>,
    EventT<SVGSVGElement, 'loadeddata', Event>,
    EventT<SVGSVGElement, 'loadedmetadata', Event>,
    EventT<SVGSVGElement, 'loadstart', Event>,
    EventT<SVGSVGElement, 'lostpointercapture', PointerEvent>,
    EventT<SVGSVGElement, 'mousedown', MouseEvent>,
    EventT<SVGSVGElement, 'mouseenter', MouseEvent>,
    EventT<SVGSVGElement, 'mouseleave', MouseEvent>,
    EventT<SVGSVGElement, 'mousemove', MouseEvent>,
    EventT<SVGSVGElement, 'mouseout', MouseEvent>,
    EventT<SVGSVGElement, 'mouseover', MouseEvent>,
    EventT<SVGSVGElement, 'mouseup', MouseEvent>,
    EventT<SVGSVGElement, 'paste', ClipboardEvent>,
    EventT<SVGSVGElement, 'pause', Event>,
    EventT<SVGSVGElement, 'play', Event>,
    EventT<SVGSVGElement, 'playing', Event>,
    EventT<SVGSVGElement, 'pointercancel', PointerEvent>,
    EventT<SVGSVGElement, 'pointerdown', PointerEvent>,
    EventT<SVGSVGElement, 'pointerenter', PointerEvent>,
    EventT<SVGSVGElement, 'pointerleave', PointerEvent>,
    EventT<SVGSVGElement, 'pointermove', PointerEvent>,
    EventT<SVGSVGElement, 'pointerout', PointerEvent>,
    EventT<SVGSVGElement, 'pointerover', PointerEvent>,
    EventT<SVGSVGElement, 'pointerrawupdate', Event>,
    EventT<SVGSVGElement, 'pointerup', PointerEvent>,
    EventT<SVGSVGElement, 'progress', ProgressEvent>,
    EventT<SVGSVGElement, 'ratechange', Event>,
    EventT<SVGSVGElement, 'reset', Event>,
    EventT<SVGSVGElement, 'resize', UIEvent>,
    EventT<SVGSVGElement, 'scroll', Event>,
    EventT<SVGSVGElement, 'scrollend', Event>,
    EventT<SVGSVGElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<SVGSVGElement, 'seeked', Event>,
    EventT<SVGSVGElement, 'seeking', Event>,
    EventT<SVGSVGElement, 'select', Event>,
    EventT<SVGSVGElement, 'selectionchange', Event>,
    EventT<SVGSVGElement, 'selectstart', Event>,
    EventT<SVGSVGElement, 'slotchange', Event>,
    EventT<SVGSVGElement, 'stalled', Event>,
    EventT<SVGSVGElement, 'submit', SubmitEvent>,
    EventT<SVGSVGElement, 'suspend', Event>,
    EventT<SVGSVGElement, 'timeupdate', Event>,
    EventT<SVGSVGElement, 'toggle', ToggleEvent>,
    EventT<SVGSVGElement, 'touchcancel', TouchEvent>,
    EventT<SVGSVGElement, 'touchend', TouchEvent>,
    EventT<SVGSVGElement, 'touchmove', TouchEvent>,
    EventT<SVGSVGElement, 'touchstart', TouchEvent>,
    EventT<SVGSVGElement, 'transitioncancel', TransitionEvent>,
    EventT<SVGSVGElement, 'transitionend', TransitionEvent>,
    EventT<SVGSVGElement, 'transitionrun', TransitionEvent>,
    EventT<SVGSVGElement, 'transitionstart', TransitionEvent>,
    EventT<SVGSVGElement, 'volumechange', Event>,
    EventT<SVGSVGElement, 'waiting', Event>,
    EventT<SVGSVGElement, 'webkitanimationend', Event>,
    EventT<SVGSVGElement, 'webkitanimationiteration', Event>,
    EventT<SVGSVGElement, 'webkitanimationstart', Event>,
    EventT<SVGSVGElement, 'webkittransitionend', Event>,
    EventT<SVGSVGElement, 'wheel', WheelEvent>,
    EventT<SVGSVGElement, 'afterprint', Event>,
    EventT<SVGSVGElement, 'beforeprint', Event>,
    EventT<SVGSVGElement, 'beforeunload', BeforeUnloadEvent>,
    EventT<SVGSVGElement, 'gamepadconnected', GamepadEvent>,
    EventT<SVGSVGElement, 'gamepaddisconnected', GamepadEvent>,
    EventT<SVGSVGElement, 'hashchange', HashChangeEvent>,
    EventT<SVGSVGElement, 'languagechange', Event>,
    EventT<SVGSVGElement, 'message', MessageEvent>,
    EventT<SVGSVGElement, 'messageerror', MessageEvent>,
    EventT<SVGSVGElement, 'offline', Event>,
    EventT<SVGSVGElement, 'online', Event>,
    EventT<SVGSVGElement, 'pagehide', PageTransitionEvent>,
    EventT<SVGSVGElement, 'pagereveal', PageRevealEvent>,
    EventT<SVGSVGElement, 'pageshow', PageTransitionEvent>,
    EventT<SVGSVGElement, 'pageswap', PageSwapEvent>,
    EventT<SVGSVGElement, 'popstate', PopStateEvent>,
    EventT<SVGSVGElement, 'rejectionhandled', PromiseRejectionEvent>,
    EventT<SVGSVGElement, 'storage', StorageEvent>,
    EventT<SVGSVGElement, 'unhandledrejection', PromiseRejectionEvent>,
    EventT<SVGSVGElement, 'unload', Event>,
    EventT<HTMLMediaElement, 'fullscreenchange', Event>,
    EventT<HTMLMediaElement, 'fullscreenerror', Event>,
    EventT<HTMLMediaElement, 'abort', UIEvent>,
    EventT<HTMLMediaElement, 'animationcancel', AnimationEvent>,
    EventT<HTMLMediaElement, 'animationend', AnimationEvent>,
    EventT<HTMLMediaElement, 'animationiteration', AnimationEvent>,
    EventT<HTMLMediaElement, 'animationstart', AnimationEvent>,
    EventT<HTMLMediaElement, 'auxclick', PointerEvent>,
    EventT<HTMLMediaElement, 'beforeinput', InputEvent>,
    EventT<HTMLMediaElement, 'beforematch', Event>,
    EventT<HTMLMediaElement, 'beforetoggle', ToggleEvent>,
    EventT<HTMLMediaElement, 'blur', FocusEvent>,
    EventT<HTMLMediaElement, 'cancel', Event>,
    EventT<HTMLMediaElement, 'canplay', Event>,
    EventT<HTMLMediaElement, 'canplaythrough', Event>,
    EventT<HTMLMediaElement, 'change', Event>,
    EventT<HTMLMediaElement, 'click', PointerEvent>,
    EventT<HTMLMediaElement, 'close', Event>,
    EventT<HTMLMediaElement, 'command', Event>,
    EventT<HTMLMediaElement, 'compositionend', CompositionEvent>,
    EventT<HTMLMediaElement, 'compositionstart', CompositionEvent>,
    EventT<HTMLMediaElement, 'compositionupdate', CompositionEvent>,
    EventT<HTMLMediaElement, 'contextlost', Event>,
    EventT<HTMLMediaElement, 'contextmenu', PointerEvent>,
    EventT<HTMLMediaElement, 'contextrestored', Event>,
    EventT<HTMLMediaElement, 'copy', ClipboardEvent>,
    EventT<HTMLMediaElement, 'cuechange', Event>,
    EventT<HTMLMediaElement, 'cut', ClipboardEvent>,
    EventT<HTMLMediaElement, 'dblclick', MouseEvent>,
    EventT<HTMLMediaElement, 'drag', DragEvent>,
    EventT<HTMLMediaElement, 'dragend', DragEvent>,
    EventT<HTMLMediaElement, 'dragenter', DragEvent>,
    EventT<HTMLMediaElement, 'dragleave', DragEvent>,
    EventT<HTMLMediaElement, 'dragover', DragEvent>,
    EventT<HTMLMediaElement, 'dragstart', DragEvent>,
    EventT<HTMLMediaElement, 'drop', DragEvent>,
    EventT<HTMLMediaElement, 'durationchange', Event>,
    EventT<HTMLMediaElement, 'emptied', Event>,
    EventT<HTMLMediaElement, 'ended', Event>,
    EventT<HTMLMediaElement, 'error', ErrorEvent>,
    EventT<HTMLMediaElement, 'focus', FocusEvent>,
    EventT<HTMLMediaElement, 'focusin', FocusEvent>,
    EventT<HTMLMediaElement, 'focusout', FocusEvent>,
    EventT<HTMLMediaElement, 'formdata', FormDataEvent>,
    EventT<HTMLMediaElement, 'gotpointercapture', PointerEvent>,
    EventT<HTMLMediaElement, 'input', InputEvent>,
    EventT<HTMLMediaElement, 'invalid', Event>,
    EventT<HTMLMediaElement, 'keydown', KeyboardEvent>,
    EventT<HTMLMediaElement, 'keypress', KeyboardEvent>,
    EventT<HTMLMediaElement, 'keyup', KeyboardEvent>,
    EventT<HTMLMediaElement, 'load', Event>,
    EventT<HTMLMediaElement, 'loadeddata', Event>,
    EventT<HTMLMediaElement, 'loadedmetadata', Event>,
    EventT<HTMLMediaElement, 'loadstart', Event>,
    EventT<HTMLMediaElement, 'lostpointercapture', PointerEvent>,
    EventT<HTMLMediaElement, 'mousedown', MouseEvent>,
    EventT<HTMLMediaElement, 'mouseenter', MouseEvent>,
    EventT<HTMLMediaElement, 'mouseleave', MouseEvent>,
    EventT<HTMLMediaElement, 'mousemove', MouseEvent>,
    EventT<HTMLMediaElement, 'mouseout', MouseEvent>,
    EventT<HTMLMediaElement, 'mouseover', MouseEvent>,
    EventT<HTMLMediaElement, 'mouseup', MouseEvent>,
    EventT<HTMLMediaElement, 'paste', ClipboardEvent>,
    EventT<HTMLMediaElement, 'pause', Event>,
    EventT<HTMLMediaElement, 'play', Event>,
    EventT<HTMLMediaElement, 'playing', Event>,
    EventT<HTMLMediaElement, 'pointercancel', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerdown', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerenter', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerleave', PointerEvent>,
    EventT<HTMLMediaElement, 'pointermove', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerout', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerover', PointerEvent>,
    EventT<HTMLMediaElement, 'pointerrawupdate', Event>,
    EventT<HTMLMediaElement, 'pointerup', PointerEvent>,
    EventT<HTMLMediaElement, 'progress', ProgressEvent>,
    EventT<HTMLMediaElement, 'ratechange', Event>,
    EventT<HTMLMediaElement, 'reset', Event>,
    EventT<HTMLMediaElement, 'resize', UIEvent>,
    EventT<HTMLMediaElement, 'scroll', Event>,
    EventT<HTMLMediaElement, 'scrollend', Event>,
    EventT<HTMLMediaElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<HTMLMediaElement, 'seeked', Event>,
    EventT<HTMLMediaElement, 'seeking', Event>,
    EventT<HTMLMediaElement, 'select', Event>,
    EventT<HTMLMediaElement, 'selectionchange', Event>,
    EventT<HTMLMediaElement, 'selectstart', Event>,
    EventT<HTMLMediaElement, 'slotchange', Event>,
    EventT<HTMLMediaElement, 'stalled', Event>,
    EventT<HTMLMediaElement, 'submit', SubmitEvent>,
    EventT<HTMLMediaElement, 'suspend', Event>,
    EventT<HTMLMediaElement, 'timeupdate', Event>,
    EventT<HTMLMediaElement, 'toggle', ToggleEvent>,
    EventT<HTMLMediaElement, 'touchcancel', TouchEvent>,
    EventT<HTMLMediaElement, 'touchend', TouchEvent>,
    EventT<HTMLMediaElement, 'touchmove', TouchEvent>,
    EventT<HTMLMediaElement, 'touchstart', TouchEvent>,
    EventT<HTMLMediaElement, 'transitioncancel', TransitionEvent>,
    EventT<HTMLMediaElement, 'transitionend', TransitionEvent>,
    EventT<HTMLMediaElement, 'transitionrun', TransitionEvent>,
    EventT<HTMLMediaElement, 'transitionstart', TransitionEvent>,
    EventT<HTMLMediaElement, 'volumechange', Event>,
    EventT<HTMLMediaElement, 'waiting', Event>,
    EventT<HTMLMediaElement, 'webkitanimationend', Event>,
    EventT<HTMLMediaElement, 'webkitanimationiteration', Event>,
    EventT<HTMLMediaElement, 'webkitanimationstart', Event>,
    EventT<HTMLMediaElement, 'webkittransitionend', Event>,
    EventT<HTMLMediaElement, 'wheel', WheelEvent>,
    EventT<HTMLMediaElement, 'encrypted', MediaEncryptedEvent>,
    EventT<HTMLMediaElement, 'waitingforkey', Event>,
    EventT<MathMLElement, 'fullscreenchange', Event>,
    EventT<MathMLElement, 'fullscreenerror', Event>,
    EventT<MathMLElement, 'abort', UIEvent>,
    EventT<MathMLElement, 'animationcancel', AnimationEvent>,
    EventT<MathMLElement, 'animationend', AnimationEvent>,
    EventT<MathMLElement, 'animationiteration', AnimationEvent>,
    EventT<MathMLElement, 'animationstart', AnimationEvent>,
    EventT<MathMLElement, 'auxclick', PointerEvent>,
    EventT<MathMLElement, 'beforeinput', InputEvent>,
    EventT<MathMLElement, 'beforematch', Event>,
    EventT<MathMLElement, 'beforetoggle', ToggleEvent>,
    EventT<MathMLElement, 'blur', FocusEvent>,
    EventT<MathMLElement, 'cancel', Event>,
    EventT<MathMLElement, 'canplay', Event>,
    EventT<MathMLElement, 'canplaythrough', Event>,
    EventT<MathMLElement, 'change', Event>,
    EventT<MathMLElement, 'click', PointerEvent>,
    EventT<MathMLElement, 'close', Event>,
    EventT<MathMLElement, 'command', Event>,
    EventT<MathMLElement, 'compositionend', CompositionEvent>,
    EventT<MathMLElement, 'compositionstart', CompositionEvent>,
    EventT<MathMLElement, 'compositionupdate', CompositionEvent>,
    EventT<MathMLElement, 'contextlost', Event>,
    EventT<MathMLElement, 'contextmenu', PointerEvent>,
    EventT<MathMLElement, 'contextrestored', Event>,
    EventT<MathMLElement, 'copy', ClipboardEvent>,
    EventT<MathMLElement, 'cuechange', Event>,
    EventT<MathMLElement, 'cut', ClipboardEvent>,
    EventT<MathMLElement, 'dblclick', MouseEvent>,
    EventT<MathMLElement, 'drag', DragEvent>,
    EventT<MathMLElement, 'dragend', DragEvent>,
    EventT<MathMLElement, 'dragenter', DragEvent>,
    EventT<MathMLElement, 'dragleave', DragEvent>,
    EventT<MathMLElement, 'dragover', DragEvent>,
    EventT<MathMLElement, 'dragstart', DragEvent>,
    EventT<MathMLElement, 'drop', DragEvent>,
    EventT<MathMLElement, 'durationchange', Event>,
    EventT<MathMLElement, 'emptied', Event>,
    EventT<MathMLElement, 'ended', Event>,
    EventT<MathMLElement, 'error', ErrorEvent>,
    EventT<MathMLElement, 'focus', FocusEvent>,
    EventT<MathMLElement, 'focusin', FocusEvent>,
    EventT<MathMLElement, 'focusout', FocusEvent>,
    EventT<MathMLElement, 'formdata', FormDataEvent>,
    EventT<MathMLElement, 'gotpointercapture', PointerEvent>,
    EventT<MathMLElement, 'input', InputEvent>,
    EventT<MathMLElement, 'invalid', Event>,
    EventT<MathMLElement, 'keydown', KeyboardEvent>,
    EventT<MathMLElement, 'keypress', KeyboardEvent>,
    EventT<MathMLElement, 'keyup', KeyboardEvent>,
    EventT<MathMLElement, 'load', Event>,
    EventT<MathMLElement, 'loadeddata', Event>,
    EventT<MathMLElement, 'loadedmetadata', Event>,
    EventT<MathMLElement, 'loadstart', Event>,
    EventT<MathMLElement, 'lostpointercapture', PointerEvent>,
    EventT<MathMLElement, 'mousedown', MouseEvent>,
    EventT<MathMLElement, 'mouseenter', MouseEvent>,
    EventT<MathMLElement, 'mouseleave', MouseEvent>,
    EventT<MathMLElement, 'mousemove', MouseEvent>,
    EventT<MathMLElement, 'mouseout', MouseEvent>,
    EventT<MathMLElement, 'mouseover', MouseEvent>,
    EventT<MathMLElement, 'mouseup', MouseEvent>,
    EventT<MathMLElement, 'paste', ClipboardEvent>,
    EventT<MathMLElement, 'pause', Event>,
    EventT<MathMLElement, 'play', Event>,
    EventT<MathMLElement, 'playing', Event>,
    EventT<MathMLElement, 'pointercancel', PointerEvent>,
    EventT<MathMLElement, 'pointerdown', PointerEvent>,
    EventT<MathMLElement, 'pointerenter', PointerEvent>,
    EventT<MathMLElement, 'pointerleave', PointerEvent>,
    EventT<MathMLElement, 'pointermove', PointerEvent>,
    EventT<MathMLElement, 'pointerout', PointerEvent>,
    EventT<MathMLElement, 'pointerover', PointerEvent>,
    EventT<MathMLElement, 'pointerrawupdate', Event>,
    EventT<MathMLElement, 'pointerup', PointerEvent>,
    EventT<MathMLElement, 'progress', ProgressEvent>,
    EventT<MathMLElement, 'ratechange', Event>,
    EventT<MathMLElement, 'reset', Event>,
    EventT<MathMLElement, 'resize', UIEvent>,
    EventT<MathMLElement, 'scroll', Event>,
    EventT<MathMLElement, 'scrollend', Event>,
    EventT<MathMLElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<MathMLElement, 'seeked', Event>,
    EventT<MathMLElement, 'seeking', Event>,
    EventT<MathMLElement, 'select', Event>,
    EventT<MathMLElement, 'selectionchange', Event>,
    EventT<MathMLElement, 'selectstart', Event>,
    EventT<MathMLElement, 'slotchange', Event>,
    EventT<MathMLElement, 'stalled', Event>,
    EventT<MathMLElement, 'submit', SubmitEvent>,
    EventT<MathMLElement, 'suspend', Event>,
    EventT<MathMLElement, 'timeupdate', Event>,
    EventT<MathMLElement, 'toggle', ToggleEvent>,
    EventT<MathMLElement, 'touchcancel', TouchEvent>,
    EventT<MathMLElement, 'touchend', TouchEvent>,
    EventT<MathMLElement, 'touchmove', TouchEvent>,
    EventT<MathMLElement, 'touchstart', TouchEvent>,
    EventT<MathMLElement, 'transitioncancel', TransitionEvent>,
    EventT<MathMLElement, 'transitionend', TransitionEvent>,
    EventT<MathMLElement, 'transitionrun', TransitionEvent>,
    EventT<MathMLElement, 'transitionstart', TransitionEvent>,
    EventT<MathMLElement, 'volumechange', Event>,
    EventT<MathMLElement, 'waiting', Event>,
    EventT<MathMLElement, 'webkitanimationend', Event>,
    EventT<MathMLElement, 'webkitanimationiteration', Event>,
    EventT<MathMLElement, 'webkitanimationstart', Event>,
    EventT<MathMLElement, 'webkittransitionend', Event>,
    EventT<MathMLElement, 'wheel', WheelEvent>,
    EventT<Window, 'abort', UIEvent>,
    EventT<Window, 'animationcancel', AnimationEvent>,
    EventT<Window, 'animationend', AnimationEvent>,
    EventT<Window, 'animationiteration', AnimationEvent>,
    EventT<Window, 'animationstart', AnimationEvent>,
    EventT<Window, 'auxclick', PointerEvent>,
    EventT<Window, 'beforeinput', InputEvent>,
    EventT<Window, 'beforematch', Event>,
    EventT<Window, 'beforetoggle', ToggleEvent>,
    EventT<Window, 'blur', FocusEvent>,
    EventT<Window, 'cancel', Event>,
    EventT<Window, 'canplay', Event>,
    EventT<Window, 'canplaythrough', Event>,
    EventT<Window, 'change', Event>,
    EventT<Window, 'click', PointerEvent>,
    EventT<Window, 'close', Event>,
    EventT<Window, 'command', Event>,
    EventT<Window, 'compositionend', CompositionEvent>,
    EventT<Window, 'compositionstart', CompositionEvent>,
    EventT<Window, 'compositionupdate', CompositionEvent>,
    EventT<Window, 'contextlost', Event>,
    EventT<Window, 'contextmenu', PointerEvent>,
    EventT<Window, 'contextrestored', Event>,
    EventT<Window, 'copy', ClipboardEvent>,
    EventT<Window, 'cuechange', Event>,
    EventT<Window, 'cut', ClipboardEvent>,
    EventT<Window, 'dblclick', MouseEvent>,
    EventT<Window, 'drag', DragEvent>,
    EventT<Window, 'dragend', DragEvent>,
    EventT<Window, 'dragenter', DragEvent>,
    EventT<Window, 'dragleave', DragEvent>,
    EventT<Window, 'dragover', DragEvent>,
    EventT<Window, 'dragstart', DragEvent>,
    EventT<Window, 'drop', DragEvent>,
    EventT<Window, 'durationchange', Event>,
    EventT<Window, 'emptied', Event>,
    EventT<Window, 'ended', Event>,
    EventT<Window, 'error', ErrorEvent>,
    EventT<Window, 'focus', FocusEvent>,
    EventT<Window, 'focusin', FocusEvent>,
    EventT<Window, 'focusout', FocusEvent>,
    EventT<Window, 'formdata', FormDataEvent>,
    EventT<Window, 'gotpointercapture', PointerEvent>,
    EventT<Window, 'input', InputEvent>,
    EventT<Window, 'invalid', Event>,
    EventT<Window, 'keydown', KeyboardEvent>,
    EventT<Window, 'keypress', KeyboardEvent>,
    EventT<Window, 'keyup', KeyboardEvent>,
    EventT<Window, 'load', Event>,
    EventT<Window, 'loadeddata', Event>,
    EventT<Window, 'loadedmetadata', Event>,
    EventT<Window, 'loadstart', Event>,
    EventT<Window, 'lostpointercapture', PointerEvent>,
    EventT<Window, 'mousedown', MouseEvent>,
    EventT<Window, 'mouseenter', MouseEvent>,
    EventT<Window, 'mouseleave', MouseEvent>,
    EventT<Window, 'mousemove', MouseEvent>,
    EventT<Window, 'mouseout', MouseEvent>,
    EventT<Window, 'mouseover', MouseEvent>,
    EventT<Window, 'mouseup', MouseEvent>,
    EventT<Window, 'paste', ClipboardEvent>,
    EventT<Window, 'pause', Event>,
    EventT<Window, 'play', Event>,
    EventT<Window, 'playing', Event>,
    EventT<Window, 'pointercancel', PointerEvent>,
    EventT<Window, 'pointerdown', PointerEvent>,
    EventT<Window, 'pointerenter', PointerEvent>,
    EventT<Window, 'pointerleave', PointerEvent>,
    EventT<Window, 'pointermove', PointerEvent>,
    EventT<Window, 'pointerout', PointerEvent>,
    EventT<Window, 'pointerover', PointerEvent>,
    EventT<Window, 'pointerrawupdate', Event>,
    EventT<Window, 'pointerup', PointerEvent>,
    EventT<Window, 'progress', ProgressEvent>,
    EventT<Window, 'ratechange', Event>,
    EventT<Window, 'reset', Event>,
    EventT<Window, 'resize', UIEvent>,
    EventT<Window, 'scroll', Event>,
    EventT<Window, 'scrollend', Event>,
    EventT<Window, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<Window, 'seeked', Event>,
    EventT<Window, 'seeking', Event>,
    EventT<Window, 'select', Event>,
    EventT<Window, 'selectionchange', Event>,
    EventT<Window, 'selectstart', Event>,
    EventT<Window, 'slotchange', Event>,
    EventT<Window, 'stalled', Event>,
    EventT<Window, 'submit', SubmitEvent>,
    EventT<Window, 'suspend', Event>,
    EventT<Window, 'timeupdate', Event>,
    EventT<Window, 'toggle', ToggleEvent>,
    EventT<Window, 'touchcancel', TouchEvent>,
    EventT<Window, 'touchend', TouchEvent>,
    EventT<Window, 'touchmove', TouchEvent>,
    EventT<Window, 'touchstart', TouchEvent>,
    EventT<Window, 'transitioncancel', TransitionEvent>,
    EventT<Window, 'transitionend', TransitionEvent>,
    EventT<Window, 'transitionrun', TransitionEvent>,
    EventT<Window, 'transitionstart', TransitionEvent>,
    EventT<Window, 'volumechange', Event>,
    EventT<Window, 'waiting', Event>,
    EventT<Window, 'webkitanimationend', Event>,
    EventT<Window, 'webkitanimationiteration', Event>,
    EventT<Window, 'webkitanimationstart', Event>,
    EventT<Window, 'webkittransitionend', Event>,
    EventT<Window, 'wheel', WheelEvent>,
    EventT<Window, 'afterprint', Event>,
    EventT<Window, 'beforeprint', Event>,
    EventT<Window, 'beforeunload', BeforeUnloadEvent>,
    EventT<Window, 'gamepadconnected', GamepadEvent>,
    EventT<Window, 'gamepaddisconnected', GamepadEvent>,
    EventT<Window, 'hashchange', HashChangeEvent>,
    EventT<Window, 'languagechange', Event>,
    EventT<Window, 'message', MessageEvent>,
    EventT<Window, 'messageerror', MessageEvent>,
    EventT<Window, 'offline', Event>,
    EventT<Window, 'online', Event>,
    EventT<Window, 'pagehide', PageTransitionEvent>,
    EventT<Window, 'pagereveal', PageRevealEvent>,
    EventT<Window, 'pageshow', PageTransitionEvent>,
    EventT<Window, 'pageswap', PageSwapEvent>,
    EventT<Window, 'popstate', PopStateEvent>,
    EventT<Window, 'rejectionhandled', PromiseRejectionEvent>,
    EventT<Window, 'storage', StorageEvent>,
    EventT<Window, 'unhandledrejection', PromiseRejectionEvent>,
    EventT<Window, 'unload', Event>,
    EventT<Window, 'DOMContentLoaded', Event>,
    EventT<Window, 'devicemotion', DeviceMotionEvent>,
    EventT<Window, 'deviceorientation', DeviceOrientationEvent>,
    EventT<Window, 'deviceorientationabsolute', DeviceOrientationEvent>,
    EventT<Window, 'orientationchange', Event>,
    EventT<Worker, 'error', ErrorEvent>,
    EventT<Worker, 'message', MessageEvent>,
    EventT<Worker, 'messageerror', MessageEvent>,
    EventT<SVGElement, 'fullscreenchange', Event>,
    EventT<SVGElement, 'fullscreenerror', Event>,
    EventT<SVGElement, 'abort', UIEvent>,
    EventT<SVGElement, 'animationcancel', AnimationEvent>,
    EventT<SVGElement, 'animationend', AnimationEvent>,
    EventT<SVGElement, 'animationiteration', AnimationEvent>,
    EventT<SVGElement, 'animationstart', AnimationEvent>,
    EventT<SVGElement, 'auxclick', PointerEvent>,
    EventT<SVGElement, 'beforeinput', InputEvent>,
    EventT<SVGElement, 'beforematch', Event>,
    EventT<SVGElement, 'beforetoggle', ToggleEvent>,
    EventT<SVGElement, 'blur', FocusEvent>,
    EventT<SVGElement, 'cancel', Event>,
    EventT<SVGElement, 'canplay', Event>,
    EventT<SVGElement, 'canplaythrough', Event>,
    EventT<SVGElement, 'change', Event>,
    EventT<SVGElement, 'click', PointerEvent>,
    EventT<SVGElement, 'close', Event>,
    EventT<SVGElement, 'command', Event>,
    EventT<SVGElement, 'compositionend', CompositionEvent>,
    EventT<SVGElement, 'compositionstart', CompositionEvent>,
    EventT<SVGElement, 'compositionupdate', CompositionEvent>,
    EventT<SVGElement, 'contextlost', Event>,
    EventT<SVGElement, 'contextmenu', PointerEvent>,
    EventT<SVGElement, 'contextrestored', Event>,
    EventT<SVGElement, 'copy', ClipboardEvent>,
    EventT<SVGElement, 'cuechange', Event>,
    EventT<SVGElement, 'cut', ClipboardEvent>,
    EventT<SVGElement, 'dblclick', MouseEvent>,
    EventT<SVGElement, 'drag', DragEvent>,
    EventT<SVGElement, 'dragend', DragEvent>,
    EventT<SVGElement, 'dragenter', DragEvent>,
    EventT<SVGElement, 'dragleave', DragEvent>,
    EventT<SVGElement, 'dragover', DragEvent>,
    EventT<SVGElement, 'dragstart', DragEvent>,
    EventT<SVGElement, 'drop', DragEvent>,
    EventT<SVGElement, 'durationchange', Event>,
    EventT<SVGElement, 'emptied', Event>,
    EventT<SVGElement, 'ended', Event>,
    EventT<SVGElement, 'error', ErrorEvent>,
    EventT<SVGElement, 'focus', FocusEvent>,
    EventT<SVGElement, 'focusin', FocusEvent>,
    EventT<SVGElement, 'focusout', FocusEvent>,
    EventT<SVGElement, 'formdata', FormDataEvent>,
    EventT<SVGElement, 'gotpointercapture', PointerEvent>,
    EventT<SVGElement, 'input', InputEvent>,
    EventT<SVGElement, 'invalid', Event>,
    EventT<SVGElement, 'keydown', KeyboardEvent>,
    EventT<SVGElement, 'keypress', KeyboardEvent>,
    EventT<SVGElement, 'keyup', KeyboardEvent>,
    EventT<SVGElement, 'load', Event>,
    EventT<SVGElement, 'loadeddata', Event>,
    EventT<SVGElement, 'loadedmetadata', Event>,
    EventT<SVGElement, 'loadstart', Event>,
    EventT<SVGElement, 'lostpointercapture', PointerEvent>,
    EventT<SVGElement, 'mousedown', MouseEvent>,
    EventT<SVGElement, 'mouseenter', MouseEvent>,
    EventT<SVGElement, 'mouseleave', MouseEvent>,
    EventT<SVGElement, 'mousemove', MouseEvent>,
    EventT<SVGElement, 'mouseout', MouseEvent>,
    EventT<SVGElement, 'mouseover', MouseEvent>,
    EventT<SVGElement, 'mouseup', MouseEvent>,
    EventT<SVGElement, 'paste', ClipboardEvent>,
    EventT<SVGElement, 'pause', Event>,
    EventT<SVGElement, 'play', Event>,
    EventT<SVGElement, 'playing', Event>,
    EventT<SVGElement, 'pointercancel', PointerEvent>,
    EventT<SVGElement, 'pointerdown', PointerEvent>,
    EventT<SVGElement, 'pointerenter', PointerEvent>,
    EventT<SVGElement, 'pointerleave', PointerEvent>,
    EventT<SVGElement, 'pointermove', PointerEvent>,
    EventT<SVGElement, 'pointerout', PointerEvent>,
    EventT<SVGElement, 'pointerover', PointerEvent>,
    EventT<SVGElement, 'pointerrawupdate', Event>,
    EventT<SVGElement, 'pointerup', PointerEvent>,
    EventT<SVGElement, 'progress', ProgressEvent>,
    EventT<SVGElement, 'ratechange', Event>,
    EventT<SVGElement, 'reset', Event>,
    EventT<SVGElement, 'resize', UIEvent>,
    EventT<SVGElement, 'scroll', Event>,
    EventT<SVGElement, 'scrollend', Event>,
    EventT<SVGElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<SVGElement, 'seeked', Event>,
    EventT<SVGElement, 'seeking', Event>,
    EventT<SVGElement, 'select', Event>,
    EventT<SVGElement, 'selectionchange', Event>,
    EventT<SVGElement, 'selectstart', Event>,
    EventT<SVGElement, 'slotchange', Event>,
    EventT<SVGElement, 'stalled', Event>,
    EventT<SVGElement, 'submit', SubmitEvent>,
    EventT<SVGElement, 'suspend', Event>,
    EventT<SVGElement, 'timeupdate', Event>,
    EventT<SVGElement, 'toggle', ToggleEvent>,
    EventT<SVGElement, 'touchcancel', TouchEvent>,
    EventT<SVGElement, 'touchend', TouchEvent>,
    EventT<SVGElement, 'touchmove', TouchEvent>,
    EventT<SVGElement, 'touchstart', TouchEvent>,
    EventT<SVGElement, 'transitioncancel', TransitionEvent>,
    EventT<SVGElement, 'transitionend', TransitionEvent>,
    EventT<SVGElement, 'transitionrun', TransitionEvent>,
    EventT<SVGElement, 'transitionstart', TransitionEvent>,
    EventT<SVGElement, 'volumechange', Event>,
    EventT<SVGElement, 'waiting', Event>,
    EventT<SVGElement, 'webkitanimationend', Event>,
    EventT<SVGElement, 'webkitanimationiteration', Event>,
    EventT<SVGElement, 'webkitanimationstart', Event>,
    EventT<SVGElement, 'webkittransitionend', Event>,
    EventT<SVGElement, 'wheel', WheelEvent>,
    EventT<HTMLElement, 'fullscreenchange', Event>,
    EventT<HTMLElement, 'fullscreenerror', Event>,
    EventT<HTMLElement, 'abort', UIEvent>,
    EventT<HTMLElement, 'animationcancel', AnimationEvent>,
    EventT<HTMLElement, 'animationend', AnimationEvent>,
    EventT<HTMLElement, 'animationiteration', AnimationEvent>,
    EventT<HTMLElement, 'animationstart', AnimationEvent>,
    EventT<HTMLElement, 'auxclick', PointerEvent>,
    EventT<HTMLElement, 'beforeinput', InputEvent>,
    EventT<HTMLElement, 'beforematch', Event>,
    EventT<HTMLElement, 'beforetoggle', ToggleEvent>,
    EventT<HTMLElement, 'blur', FocusEvent>,
    EventT<HTMLElement, 'cancel', Event>,
    EventT<HTMLElement, 'canplay', Event>,
    EventT<HTMLElement, 'canplaythrough', Event>,
    EventT<HTMLElement, 'change', Event>,
    EventT<HTMLElement, 'click', PointerEvent>,
    EventT<HTMLElement, 'close', Event>,
    EventT<HTMLElement, 'command', Event>,
    EventT<HTMLElement, 'compositionend', CompositionEvent>,
    EventT<HTMLElement, 'compositionstart', CompositionEvent>,
    EventT<HTMLElement, 'compositionupdate', CompositionEvent>,
    EventT<HTMLElement, 'contextlost', Event>,
    EventT<HTMLElement, 'contextmenu', PointerEvent>,
    EventT<HTMLElement, 'contextrestored', Event>,
    EventT<HTMLElement, 'copy', ClipboardEvent>,
    EventT<HTMLElement, 'cuechange', Event>,
    EventT<HTMLElement, 'cut', ClipboardEvent>,
    EventT<HTMLElement, 'dblclick', MouseEvent>,
    EventT<HTMLElement, 'drag', DragEvent>,
    EventT<HTMLElement, 'dragend', DragEvent>,
    EventT<HTMLElement, 'dragenter', DragEvent>,
    EventT<HTMLElement, 'dragleave', DragEvent>,
    EventT<HTMLElement, 'dragover', DragEvent>,
    EventT<HTMLElement, 'dragstart', DragEvent>,
    EventT<HTMLElement, 'drop', DragEvent>,
    EventT<HTMLElement, 'durationchange', Event>,
    EventT<HTMLElement, 'emptied', Event>,
    EventT<HTMLElement, 'ended', Event>,
    EventT<HTMLElement, 'error', ErrorEvent>,
    EventT<HTMLElement, 'focus', FocusEvent>,
    EventT<HTMLElement, 'focusin', FocusEvent>,
    EventT<HTMLElement, 'focusout', FocusEvent>,
    EventT<HTMLElement, 'formdata', FormDataEvent>,
    EventT<HTMLElement, 'gotpointercapture', PointerEvent>,
    EventT<HTMLElement, 'input', InputEvent>,
    EventT<HTMLElement, 'invalid', Event>,
    EventT<HTMLElement, 'keydown', KeyboardEvent>,
    EventT<HTMLElement, 'keypress', KeyboardEvent>,
    EventT<HTMLElement, 'keyup', KeyboardEvent>,
    EventT<HTMLElement, 'load', Event>,
    EventT<HTMLElement, 'loadeddata', Event>,
    EventT<HTMLElement, 'loadedmetadata', Event>,
    EventT<HTMLElement, 'loadstart', Event>,
    EventT<HTMLElement, 'lostpointercapture', PointerEvent>,
    EventT<HTMLElement, 'mousedown', MouseEvent>,
    EventT<HTMLElement, 'mouseenter', MouseEvent>,
    EventT<HTMLElement, 'mouseleave', MouseEvent>,
    EventT<HTMLElement, 'mousemove', MouseEvent>,
    EventT<HTMLElement, 'mouseout', MouseEvent>,
    EventT<HTMLElement, 'mouseover', MouseEvent>,
    EventT<HTMLElement, 'mouseup', MouseEvent>,
    EventT<HTMLElement, 'paste', ClipboardEvent>,
    EventT<HTMLElement, 'pause', Event>,
    EventT<HTMLElement, 'play', Event>,
    EventT<HTMLElement, 'playing', Event>,
    EventT<HTMLElement, 'pointercancel', PointerEvent>,
    EventT<HTMLElement, 'pointerdown', PointerEvent>,
    EventT<HTMLElement, 'pointerenter', PointerEvent>,
    EventT<HTMLElement, 'pointerleave', PointerEvent>,
    EventT<HTMLElement, 'pointermove', PointerEvent>,
    EventT<HTMLElement, 'pointerout', PointerEvent>,
    EventT<HTMLElement, 'pointerover', PointerEvent>,
    EventT<HTMLElement, 'pointerrawupdate', Event>,
    EventT<HTMLElement, 'pointerup', PointerEvent>,
    EventT<HTMLElement, 'progress', ProgressEvent>,
    EventT<HTMLElement, 'ratechange', Event>,
    EventT<HTMLElement, 'reset', Event>,
    EventT<HTMLElement, 'resize', UIEvent>,
    EventT<HTMLElement, 'scroll', Event>,
    EventT<HTMLElement, 'scrollend', Event>,
    EventT<HTMLElement, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<HTMLElement, 'seeked', Event>,
    EventT<HTMLElement, 'seeking', Event>,
    EventT<HTMLElement, 'select', Event>,
    EventT<HTMLElement, 'selectionchange', Event>,
    EventT<HTMLElement, 'selectstart', Event>,
    EventT<HTMLElement, 'slotchange', Event>,
    EventT<HTMLElement, 'stalled', Event>,
    EventT<HTMLElement, 'submit', SubmitEvent>,
    EventT<HTMLElement, 'suspend', Event>,
    EventT<HTMLElement, 'timeupdate', Event>,
    EventT<HTMLElement, 'toggle', ToggleEvent>,
    EventT<HTMLElement, 'touchcancel', TouchEvent>,
    EventT<HTMLElement, 'touchend', TouchEvent>,
    EventT<HTMLElement, 'touchmove', TouchEvent>,
    EventT<HTMLElement, 'touchstart', TouchEvent>,
    EventT<HTMLElement, 'transitioncancel', TransitionEvent>,
    EventT<HTMLElement, 'transitionend', TransitionEvent>,
    EventT<HTMLElement, 'transitionrun', TransitionEvent>,
    EventT<HTMLElement, 'transitionstart', TransitionEvent>,
    EventT<HTMLElement, 'volumechange', Event>,
    EventT<HTMLElement, 'waiting', Event>,
    EventT<HTMLElement, 'webkitanimationend', Event>,
    EventT<HTMLElement, 'webkitanimationiteration', Event>,
    EventT<HTMLElement, 'webkitanimationstart', Event>,
    EventT<HTMLElement, 'webkittransitionend', Event>,
    EventT<HTMLElement, 'wheel', WheelEvent>,
    EventT<Document, 'abort', UIEvent>,
    EventT<Document, 'animationcancel', AnimationEvent>,
    EventT<Document, 'animationend', AnimationEvent>,
    EventT<Document, 'animationiteration', AnimationEvent>,
    EventT<Document, 'animationstart', AnimationEvent>,
    EventT<Document, 'auxclick', PointerEvent>,
    EventT<Document, 'beforeinput', InputEvent>,
    EventT<Document, 'beforematch', Event>,
    EventT<Document, 'beforetoggle', ToggleEvent>,
    EventT<Document, 'blur', FocusEvent>,
    EventT<Document, 'cancel', Event>,
    EventT<Document, 'canplay', Event>,
    EventT<Document, 'canplaythrough', Event>,
    EventT<Document, 'change', Event>,
    EventT<Document, 'click', PointerEvent>,
    EventT<Document, 'close', Event>,
    EventT<Document, 'command', Event>,
    EventT<Document, 'compositionend', CompositionEvent>,
    EventT<Document, 'compositionstart', CompositionEvent>,
    EventT<Document, 'compositionupdate', CompositionEvent>,
    EventT<Document, 'contextlost', Event>,
    EventT<Document, 'contextmenu', PointerEvent>,
    EventT<Document, 'contextrestored', Event>,
    EventT<Document, 'copy', ClipboardEvent>,
    EventT<Document, 'cuechange', Event>,
    EventT<Document, 'cut', ClipboardEvent>,
    EventT<Document, 'dblclick', MouseEvent>,
    EventT<Document, 'drag', DragEvent>,
    EventT<Document, 'dragend', DragEvent>,
    EventT<Document, 'dragenter', DragEvent>,
    EventT<Document, 'dragleave', DragEvent>,
    EventT<Document, 'dragover', DragEvent>,
    EventT<Document, 'dragstart', DragEvent>,
    EventT<Document, 'drop', DragEvent>,
    EventT<Document, 'durationchange', Event>,
    EventT<Document, 'emptied', Event>,
    EventT<Document, 'ended', Event>,
    EventT<Document, 'error', ErrorEvent>,
    EventT<Document, 'focus', FocusEvent>,
    EventT<Document, 'focusin', FocusEvent>,
    EventT<Document, 'focusout', FocusEvent>,
    EventT<Document, 'formdata', FormDataEvent>,
    EventT<Document, 'gotpointercapture', PointerEvent>,
    EventT<Document, 'input', InputEvent>,
    EventT<Document, 'invalid', Event>,
    EventT<Document, 'keydown', KeyboardEvent>,
    EventT<Document, 'keypress', KeyboardEvent>,
    EventT<Document, 'keyup', KeyboardEvent>,
    EventT<Document, 'load', Event>,
    EventT<Document, 'loadeddata', Event>,
    EventT<Document, 'loadedmetadata', Event>,
    EventT<Document, 'loadstart', Event>,
    EventT<Document, 'lostpointercapture', PointerEvent>,
    EventT<Document, 'mousedown', MouseEvent>,
    EventT<Document, 'mouseenter', MouseEvent>,
    EventT<Document, 'mouseleave', MouseEvent>,
    EventT<Document, 'mousemove', MouseEvent>,
    EventT<Document, 'mouseout', MouseEvent>,
    EventT<Document, 'mouseover', MouseEvent>,
    EventT<Document, 'mouseup', MouseEvent>,
    EventT<Document, 'paste', ClipboardEvent>,
    EventT<Document, 'pause', Event>,
    EventT<Document, 'play', Event>,
    EventT<Document, 'playing', Event>,
    EventT<Document, 'pointercancel', PointerEvent>,
    EventT<Document, 'pointerdown', PointerEvent>,
    EventT<Document, 'pointerenter', PointerEvent>,
    EventT<Document, 'pointerleave', PointerEvent>,
    EventT<Document, 'pointermove', PointerEvent>,
    EventT<Document, 'pointerout', PointerEvent>,
    EventT<Document, 'pointerover', PointerEvent>,
    EventT<Document, 'pointerrawupdate', Event>,
    EventT<Document, 'pointerup', PointerEvent>,
    EventT<Document, 'progress', ProgressEvent>,
    EventT<Document, 'ratechange', Event>,
    EventT<Document, 'reset', Event>,
    EventT<Document, 'resize', UIEvent>,
    EventT<Document, 'scroll', Event>,
    EventT<Document, 'scrollend', Event>,
    EventT<Document, 'securitypolicyviolation', SecurityPolicyViolationEvent>,
    EventT<Document, 'seeked', Event>,
    EventT<Document, 'seeking', Event>,
    EventT<Document, 'select', Event>,
    EventT<Document, 'selectionchange', Event>,
    EventT<Document, 'selectstart', Event>,
    EventT<Document, 'slotchange', Event>,
    EventT<Document, 'stalled', Event>,
    EventT<Document, 'submit', SubmitEvent>,
    EventT<Document, 'suspend', Event>,
    EventT<Document, 'timeupdate', Event>,
    EventT<Document, 'toggle', ToggleEvent>,
    EventT<Document, 'touchcancel', TouchEvent>,
    EventT<Document, 'touchend', TouchEvent>,
    EventT<Document, 'touchmove', TouchEvent>,
    EventT<Document, 'touchstart', TouchEvent>,
    EventT<Document, 'transitioncancel', TransitionEvent>,
    EventT<Document, 'transitionend', TransitionEvent>,
    EventT<Document, 'transitionrun', TransitionEvent>,
    EventT<Document, 'transitionstart', TransitionEvent>,
    EventT<Document, 'volumechange', Event>,
    EventT<Document, 'waiting', Event>,
    EventT<Document, 'webkitanimationend', Event>,
    EventT<Document, 'webkitanimationiteration', Event>,
    EventT<Document, 'webkitanimationstart', Event>,
    EventT<Document, 'webkittransitionend', Event>,
    EventT<Document, 'wheel', WheelEvent>,
    EventT<Document, 'DOMContentLoaded', Event>,
    EventT<Document, 'fullscreenchange', Event>,
    EventT<Document, 'fullscreenerror', Event>,
    EventT<Document, 'pointerlockchange', Event>,
    EventT<Document, 'pointerlockerror', Event>,
    EventT<Document, 'readystatechange', Event>,
    EventT<Document, 'visibilitychange', Event>,
    EventT<IDBOpenDBRequest, 'error', Event>,
    EventT<IDBOpenDBRequest, 'success', Event>,
    EventT<IDBOpenDBRequest, 'blocked', IDBVersionChangeEvent>,
    EventT<IDBOpenDBRequest, 'upgradeneeded', IDBVersionChangeEvent>,
    EventT<MIDIInput, 'statechange', MIDIConnectionEvent>,
    EventT<MIDIInput, 'midimessage', MIDIMessageEvent>,
    EventT<MessagePort, 'message', MessageEvent>,
    EventT<MessagePort, 'messageerror', MessageEvent>,
    EventT<OfflineAudioContext, 'statechange', Event>,
    EventT<OfflineAudioContext, 'complete', OfflineAudioCompletionEvent>,
    EventT<ServiceWorker, 'error', ErrorEvent>,
    EventT<ServiceWorker, 'statechange', Event>,
    EventT<TaskSignal, 'abort', Event>,
    EventT<TaskSignal, 'prioritychange', TaskPriorityChangeEvent>,
    EventT<XMLHttpRequest, 'abort', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'error', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'load', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'loadend', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'loadstart', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'progress', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'timeout', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequest, 'readystatechange', Event>,
    EventT<Animation, 'cancel', AnimationPlaybackEvent>,
    EventT<Animation, 'finish', AnimationPlaybackEvent>,
    EventT<Animation, 'remove', AnimationPlaybackEvent>,
    EventT<AudioScheduledSourceNode, 'ended', Event>,
    EventT<AudioDecoder, 'dequeue', Event>,
    EventT<AudioEncoder, 'dequeue', Event>,
    EventT<AudioWorkletNode, 'processorerror', ErrorEvent>,
    EventT<BroadcastChannel, 'message', MessageEvent>,
    EventT<BroadcastChannel, 'messageerror', MessageEvent>,
    EventT<MediaStreamTrack, 'ended', Event>,
    EventT<MediaStreamTrack, 'mute', Event>,
    EventT<MediaStreamTrack, 'unmute', Event>,
    EventT<CookieStore, 'change', CookieChangeEvent>,
    EventT<EventSource, 'error', Event>,
    EventT<EventSource, 'message', MessageEvent>,
    EventT<EventSource, 'open', Event>,
    EventT<FileReader, 'abort', ProgressEvent<FileReader>>,
    EventT<FileReader, 'error', ProgressEvent<FileReader>>,
    EventT<FileReader, 'load', ProgressEvent<FileReader>>,
    EventT<FileReader, 'loadend', ProgressEvent<FileReader>>,
    EventT<FileReader, 'loadstart', ProgressEvent<FileReader>>,
    EventT<FileReader, 'progress', ProgressEvent<FileReader>>,
    EventT<FontFaceSet, 'loading', FontFaceSetLoadEvent>,
    EventT<FontFaceSet, 'loadingdone', FontFaceSetLoadEvent>,
    EventT<FontFaceSet, 'loadingerror', FontFaceSetLoadEvent>,
    EventT<GPUDevice, 'uncapturederror', GPUUncapturedErrorEvent>,
    EventT<IDBDatabase, 'abort', Event>,
    EventT<IDBDatabase, 'close', Event>,
    EventT<IDBDatabase, 'error', Event>,
    EventT<IDBDatabase, 'versionchange', IDBVersionChangeEvent>,
    EventT<IDBTransaction, 'abort', Event>,
    EventT<IDBTransaction, 'complete', Event>,
    EventT<IDBTransaction, 'error', Event>,
    EventT<MIDIAccess, 'statechange', MIDIConnectionEvent>,
    EventT<MediaDevices, 'devicechange', Event>,
    EventT<MediaKeySession, 'keystatuseschange', Event>,
    EventT<MediaKeySession, 'message', MediaKeyMessageEvent>,
    EventT<MediaQueryList, 'change', MediaQueryListEvent>,
    EventT<MediaRecorder, 'dataavailable', BlobEvent>,
    EventT<MediaRecorder, 'error', ErrorEvent>,
    EventT<MediaRecorder, 'pause', Event>,
    EventT<MediaRecorder, 'resume', Event>,
    EventT<MediaRecorder, 'start', Event>,
    EventT<MediaRecorder, 'stop', Event>,
    EventT<MediaSource, 'sourceclose', Event>,
    EventT<MediaSource, 'sourceended', Event>,
    EventT<MediaSource, 'sourceopen', Event>,
    EventT<MediaStream, 'addtrack', MediaStreamTrackEvent>,
    EventT<MediaStream, 'removetrack', MediaStreamTrackEvent>,
    EventT<Navigation, 'currententrychange', NavigationCurrentEntryChangeEvent>,
    EventT<Navigation, 'navigate', NavigateEvent>,
    EventT<Navigation, 'navigateerror', ErrorEvent>,
    EventT<Navigation, 'navigatesuccess', Event>,
    EventT<NavigationHistoryEntry, 'dispose', Event>,
    EventT<Notification, 'click', Event>,
    EventT<Notification, 'close', Event>,
    EventT<Notification, 'error', Event>,
    EventT<Notification, 'show', Event>,
    EventT<OffscreenCanvas, 'contextlost', Event>,
    EventT<OffscreenCanvas, 'contextrestored', Event>,
    EventT<PaymentRequest, 'paymentmethodchange', PaymentMethodChangeEvent>,
    EventT<PaymentRequest, 'shippingaddresschange', PaymentRequestUpdateEvent>,
    EventT<PaymentRequest, 'shippingoptionchange', PaymentRequestUpdateEvent>,
    EventT<PaymentResponse, 'payerdetailchange', PaymentRequestUpdateEvent>,
    EventT<Performance, 'resourcetimingbufferfull', Event>,
    EventT<PermissionStatus, 'change', Event>,
    EventT<PictureInPictureWindow, 'resize', Event>,
    EventT<RTCDTMFSender, 'tonechange', RTCDTMFToneChangeEvent>,
    EventT<RTCDataChannel, 'bufferedamountlow', Event>,
    EventT<RTCDataChannel, 'close', Event>,
    EventT<RTCDataChannel, 'closing', Event>,
    EventT<RTCDataChannel, 'error', RTCErrorEvent>,
    EventT<RTCDataChannel, 'message', MessageEvent>,
    EventT<RTCDataChannel, 'open', Event>,
    EventT<RTCDtlsTransport, 'error', RTCErrorEvent>,
    EventT<RTCDtlsTransport, 'statechange', Event>,
    EventT<RTCIceTransport, 'gatheringstatechange', Event>,
    EventT<RTCIceTransport, 'selectedcandidatepairchange', Event>,
    EventT<RTCIceTransport, 'statechange', Event>,
    EventT<RTCPeerConnection, 'connectionstatechange', Event>,
    EventT<RTCPeerConnection, 'datachannel', RTCDataChannelEvent>,
    EventT<RTCPeerConnection, 'icecandidate', RTCPeerConnectionIceEvent>,
    EventT<RTCPeerConnection, 'icecandidateerror', RTCPeerConnectionIceErrorEvent>,
    EventT<RTCPeerConnection, 'iceconnectionstatechange', Event>,
    EventT<RTCPeerConnection, 'icegatheringstatechange', Event>,
    EventT<RTCPeerConnection, 'negotiationneeded', Event>,
    EventT<RTCPeerConnection, 'signalingstatechange', Event>,
    EventT<RTCPeerConnection, 'track', RTCTrackEvent>,
    EventT<RTCSctpTransport, 'statechange', Event>,
    EventT<RemotePlayback, 'connect', Event>,
    EventT<RemotePlayback, 'connecting', Event>,
    EventT<RemotePlayback, 'disconnect', Event>,
    EventT<ScreenOrientation, 'change', Event>,
    EventT<ScriptProcessorNode, 'audioprocess', AudioProcessingEvent>,
    EventT<ServiceWorkerContainer, 'controllerchange', Event>,
    EventT<ServiceWorkerContainer, 'message', MessageEvent>,
    EventT<ServiceWorkerContainer, 'messageerror', MessageEvent>,
    EventT<ServiceWorkerRegistration, 'updatefound', Event>,
    EventT<ShadowRoot, 'slotchange', Event>,
    EventT<SourceBuffer, 'abort', Event>,
    EventT<SourceBuffer, 'error', Event>,
    EventT<SourceBuffer, 'update', Event>,
    EventT<SourceBuffer, 'updateend', Event>,
    EventT<SourceBuffer, 'updatestart', Event>,
    EventT<SourceBufferList, 'addsourcebuffer', Event>,
    EventT<SourceBufferList, 'removesourcebuffer', Event>,
    EventT<SpeechSynthesis, 'voiceschanged', Event>,
    EventT<SpeechSynthesisUtterance, 'boundary', SpeechSynthesisEvent>,
    EventT<SpeechSynthesisUtterance, 'end', SpeechSynthesisEvent>,
    EventT<SpeechSynthesisUtterance, 'error', SpeechSynthesisErrorEvent>,
    EventT<SpeechSynthesisUtterance, 'mark', SpeechSynthesisEvent>,
    EventT<SpeechSynthesisUtterance, 'pause', SpeechSynthesisEvent>,
    EventT<SpeechSynthesisUtterance, 'resume', SpeechSynthesisEvent>,
    EventT<SpeechSynthesisUtterance, 'start', SpeechSynthesisEvent>,
    EventT<TextTrack, 'cuechange', Event>,
    EventT<TextTrackCue, 'enter', Event>,
    EventT<TextTrackCue, 'exit', Event>,
    EventT<TextTrackList, 'addtrack', TrackEvent>,
    EventT<TextTrackList, 'change', Event>,
    EventT<TextTrackList, 'removetrack', TrackEvent>,
    EventT<VideoDecoder, 'dequeue', Event>,
    EventT<VideoEncoder, 'dequeue', Event>,
    EventT<VisualViewport, 'resize', Event>,
    EventT<VisualViewport, 'scroll', Event>,
    EventT<WakeLockSentinel, 'release', Event>,
    EventT<WebSocket, 'close', CloseEvent>,
    EventT<WebSocket, 'error', Event>,
    EventT<WebSocket, 'message', MessageEvent>,
    EventT<WebSocket, 'open', Event>,
    EventT<AbortSignal, 'abort', Event>,
    EventT<BaseAudioContext, 'statechange', Event>,
    EventT<IDBRequest, 'error', Event>,
    EventT<IDBRequest, 'success', Event>,
    EventT<MIDIPort, 'statechange', MIDIConnectionEvent>,
    EventT<SharedWorker, 'error', ErrorEvent>,
    EventT<XMLHttpRequestEventTarget, 'abort', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'error', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'load', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'loadend', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'loadstart', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'progress', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<XMLHttpRequestEventTarget, 'timeout', ProgressEvent<XMLHttpRequestEventTarget>>,
    EventT<Element, 'fullscreenchange', Event>,
    EventT<Element, 'fullscreenerror', Event>,
  ]
>
