import {
  $computed,
  $fromRefs,
  $raw,
  $ref,
  $shallowRef,
  BaseTransition,
  Comment$1,
  EffectScope,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  Transition,
  TransitionGroup,
  VueElement,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  cloneVNode,
  compatUtils,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createHydrationRenderer,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineCustomElement,
  defineEmits,
  defineExpose,
  defineProps,
  defineSSRCustomElement,
  devtools,
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hydrate,
  initCustomFormatter,
  init_runtime_dom_esm_bundler,
  inject,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isVNode,
  markRaw,
  mergeDefaults,
  mergeProps,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  runtime_dom_esm_bundler_exports,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssVars,
  useSSRContext,
  useSlots,
  useTransitionState,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId,
} from './chunk-SEDOLZXP.js'
import {
  camelize,
  capitalize,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  toDisplayString,
  toHandlerKey,
} from './chunk-6FPK2LN7.js'
import {
  __esm,
  __export,
  init_define_MZ_ZOOM_OPTIONS,
} from './chunk-OQDUDFMG.js'

// node_modules/vue-demi/lib/index.mjs
var lib_exports = {}
__export(lib_exports, {
  $computed: () => $computed,
  $fromRefs: () => $fromRefs,
  $raw: () => $raw,
  $ref: () => $ref,
  $shallowRef: () => $shallowRef,
  BaseTransition: () => BaseTransition,
  Comment: () => Comment$1,
  EffectScope: () => EffectScope,
  Fragment: () => Fragment,
  KeepAlive: () => KeepAlive,
  ReactiveEffect: () => ReactiveEffect,
  Static: () => Static,
  Suspense: () => Suspense,
  Teleport: () => Teleport,
  Text: () => Text,
  Transition: () => Transition,
  TransitionGroup: () => TransitionGroup,
  Vue: () => runtime_dom_esm_bundler_exports,
  Vue2: () => Vue2,
  VueElement: () => VueElement,
  callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
  callWithErrorHandling: () => callWithErrorHandling,
  camelize: () => camelize,
  capitalize: () => capitalize,
  cloneVNode: () => cloneVNode,
  compatUtils: () => compatUtils,
  computed: () => computed,
  createApp: () => createApp,
  createBlock: () => createBlock,
  createCommentVNode: () => createCommentVNode,
  createElementBlock: () => createElementBlock,
  createElementVNode: () => createBaseVNode,
  createHydrationRenderer: () => createHydrationRenderer,
  createRenderer: () => createRenderer,
  createSSRApp: () => createSSRApp,
  createSlots: () => createSlots,
  createStaticVNode: () => createStaticVNode,
  createTextVNode: () => createTextVNode,
  createVNode: () => createVNode,
  customRef: () => customRef,
  defineAsyncComponent: () => defineAsyncComponent,
  defineComponent: () => defineComponent,
  defineCustomElement: () => defineCustomElement,
  defineEmits: () => defineEmits,
  defineExpose: () => defineExpose,
  defineProps: () => defineProps,
  defineSSRCustomElement: () => defineSSRCustomElement,
  del: () => del,
  devtools: () => devtools,
  effect: () => effect,
  effectScope: () => effectScope,
  getCurrentInstance: () => getCurrentInstance,
  getCurrentScope: () => getCurrentScope,
  getTransitionRawChildren: () => getTransitionRawChildren,
  guardReactiveProps: () => guardReactiveProps,
  h: () => h,
  handleError: () => handleError,
  hydrate: () => hydrate,
  initCustomFormatter: () => initCustomFormatter,
  inject: () => inject,
  install: () => install,
  isMemoSame: () => isMemoSame,
  isProxy: () => isProxy,
  isReactive: () => isReactive,
  isReadonly: () => isReadonly,
  isRef: () => isRef,
  isRuntimeOnly: () => isRuntimeOnly,
  isVNode: () => isVNode,
  isVue2: () => isVue2,
  isVue3: () => isVue3,
  markRaw: () => markRaw,
  mergeDefaults: () => mergeDefaults,
  mergeProps: () => mergeProps,
  nextTick: () => nextTick,
  normalizeClass: () => normalizeClass,
  normalizeProps: () => normalizeProps,
  normalizeStyle: () => normalizeStyle,
  onActivated: () => onActivated,
  onBeforeMount: () => onBeforeMount,
  onBeforeUnmount: () => onBeforeUnmount,
  onBeforeUpdate: () => onBeforeUpdate,
  onDeactivated: () => onDeactivated,
  onErrorCaptured: () => onErrorCaptured,
  onMounted: () => onMounted,
  onRenderTracked: () => onRenderTracked,
  onRenderTriggered: () => onRenderTriggered,
  onScopeDispose: () => onScopeDispose,
  onServerPrefetch: () => onServerPrefetch,
  onUnmounted: () => onUnmounted,
  onUpdated: () => onUpdated,
  openBlock: () => openBlock,
  popScopeId: () => popScopeId,
  provide: () => provide,
  proxyRefs: () => proxyRefs,
  pushScopeId: () => pushScopeId,
  queuePostFlushCb: () => queuePostFlushCb,
  reactive: () => reactive,
  readonly: () => readonly,
  ref: () => ref,
  registerRuntimeCompiler: () => registerRuntimeCompiler,
  render: () => render,
  renderList: () => renderList,
  renderSlot: () => renderSlot,
  resolveComponent: () => resolveComponent,
  resolveDirective: () => resolveDirective,
  resolveDynamicComponent: () => resolveDynamicComponent,
  resolveFilter: () => resolveFilter,
  resolveTransitionHooks: () => resolveTransitionHooks,
  set: () => set,
  setBlockTracking: () => setBlockTracking,
  setDevtoolsHook: () => setDevtoolsHook,
  setTransitionHooks: () => setTransitionHooks,
  shallowReactive: () => shallowReactive,
  shallowReadonly: () => shallowReadonly,
  shallowRef: () => shallowRef,
  ssrContextKey: () => ssrContextKey,
  ssrUtils: () => ssrUtils,
  stop: () => stop,
  toDisplayString: () => toDisplayString,
  toHandlerKey: () => toHandlerKey,
  toHandlers: () => toHandlers,
  toRaw: () => toRaw,
  toRef: () => toRef,
  toRefs: () => toRefs,
  transformVNodeArgs: () => transformVNodeArgs,
  triggerRef: () => triggerRef,
  unref: () => unref,
  useAttrs: () => useAttrs,
  useCssModule: () => useCssModule,
  useCssVars: () => useCssVars,
  useSSRContext: () => useSSRContext,
  useSlots: () => useSlots,
  useTransitionState: () => useTransitionState,
  vModelCheckbox: () => vModelCheckbox,
  vModelDynamic: () => vModelDynamic,
  vModelRadio: () => vModelRadio,
  vModelSelect: () => vModelSelect,
  vModelText: () => vModelText,
  vShow: () => vShow,
  version: () => version,
  warn: () => warn,
  watch: () => watch,
  watchEffect: () => watchEffect,
  watchPostEffect: () => watchPostEffect,
  watchSyncEffect: () => watchSyncEffect,
  withAsyncContext: () => withAsyncContext,
  withCtx: () => withCtx,
  withDefaults: () => withDefaults,
  withDirectives: () => withDirectives,
  withKeys: () => withKeys,
  withMemo: () => withMemo,
  withModifiers: () => withModifiers,
  withScopeId: () => withScopeId,
})
function install() {}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}
var isVue2, isVue3, Vue2
var init_lib = __esm({
  'node_modules/vue-demi/lib/index.mjs'() {
    init_define_MZ_ZOOM_OPTIONS()
    init_runtime_dom_esm_bundler()
    init_runtime_dom_esm_bundler()
    isVue2 = false
    isVue3 = true
    Vue2 = void 0
  },
})

// dep:@vueuse_core
init_define_MZ_ZOOM_OPTIONS()

// node_modules/@vueuse/core/index.esm.js
init_define_MZ_ZOOM_OPTIONS()
init_lib()

// node_modules/@vueuse/shared/index.esm.js
init_define_MZ_ZOOM_OPTIONS()
init_lib()
function and(...args) {
  return computed(() => args.every((i) => unref(i)))
}
function biSyncRef(a, b) {
  const flush = 'sync'
  const stop1 = watch(
    a,
    (newValue) => {
      b.value = newValue
    },
    {
      flush,
      immediate: true,
    },
  )
  const stop2 = watch(
    b,
    (newValue) => {
      a.value = newValue
    },
    {
      flush,
      immediate: true,
    },
  )
  return () => {
    stop1()
    stop2()
  }
}
function controlledComputed(source, fn) {
  let v = void 0
  let track
  let trigger
  const dirty = ref(true)
  watch(
    source,
    () => {
      dirty.value = true
      trigger()
    },
    { flush: 'sync' },
  )
  return customRef((_track, _trigger) => {
    track = _track
    trigger = _trigger
    return {
      get() {
        if (dirty.value) {
          v = fn()
          dirty.value = false
        }
        track()
        return v
      },
      set() {},
    }
  })
}
function __onlyVue3(name = 'this function') {
  if (isVue3) return
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`)
}
function extendRef(ref2, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3()
  for (const [key, value] of Object.entries(extend)) {
    if (key === 'value') continue
    if (isRef(value) && unwrap) {
      Object.defineProperty(ref2, key, {
        get() {
          return value.value
        },
        set(v) {
          value.value = v
        },
        enumerable,
      })
    } else {
      Object.defineProperty(ref2, key, { value, enumerable })
    }
  }
  return ref2
}
function controlledRef(initial, options = {}) {
  let source = initial
  let track
  let trigger
  const ref2 = customRef((_track, _trigger) => {
    track = _track
    trigger = _trigger
    return {
      get() {
        return get2()
      },
      set(v) {
        set3(v)
      },
    }
  })
  function get2(tracking = true) {
    if (tracking) track()
    return source
  }
  function set3(value, triggering = true) {
    var _a, _b
    if (value === source) return
    const old = source
    if (
      ((_a = options.onBeforeChange) === null || _a === void 0
        ? void 0
        : _a.call(options, value, old)) === false
    )
      return
    source = value
    ;(_b = options.onChanged) === null || _b === void 0
      ? void 0
      : _b.call(options, value, old)
    if (triggering) trigger()
  }
  const untrackedGet = () => get2(false)
  const silentSet = (v) => set3(v, false)
  const peek = () => get2(false)
  const lay = (v) => set3(v, false)
  return extendRef(
    ref2,
    {
      get: get2,
      set: set3,
      untrackedGet,
      silentSet,
      peek,
      lay,
    },
    { enumerable: true },
  )
}
function createEventHook() {
  const fns = []
  const off = (fn) => {
    const index = fns.indexOf(fn)
    if (index !== -1) fns.splice(index, 1)
  }
  const on = (fn) => {
    fns.push(fn)
    return {
      off: () => off(fn),
    }
  }
  const trigger = (param) => {
    fns.forEach((fn) => fn(param))
  }
  return {
    on,
    off,
    trigger,
  }
}
function createGlobalState(stateFactory) {
  let initialized = false
  let state
  const scope = effectScope(true)
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory)
      initialized = true
    }
    return state
  }
}
function createSharedComposable(composable) {
  let subscribers = 0
  let state
  let scope
  const dispose = () => {
    subscribers -= 1
    if (scope && subscribers <= 0) {
      scope.stop()
      state = void 0
      scope = void 0
    }
  }
  return (...args) => {
    subscribers += 1
    if (!state) {
      scope = effectScope(true)
      state = scope.run(() => composable(...args))
    }
    onScopeDispose(dispose)
    return state
  }
}
function __rest(s, e) {
  var t = {}
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p]
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]]
    }
  return t
}
var isClient = typeof window !== 'undefined'
var isDef = (val) => typeof val !== 'undefined'
var assert = (condition, ...infos) => {
  if (!condition) console.warn(...infos)
}
var toString = Object.prototype.toString
var isBoolean = (val) => typeof val === 'boolean'
var isFunction = (val) => typeof val === 'function'
var isNumber = (val) => typeof val === 'number'
var isString = (val) => typeof val === 'string'
var isObject = (val) => toString.call(val) === '[object Object]'
var isWindow = (val) =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]'
var now = () => Date.now()
var timestamp = () => +Date.now()
var clamp = (n, min, max) => Math.min(max, Math.max(min, n))
var noop = () => {}
var rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args })
  }
  return wrapper
}
var bypassFilter = (invoke2) => {
  return invoke2()
}
function debounceFilter(ms) {
  let timer
  const filter = (invoke2) => {
    const duration = unref(ms)
    if (timer) clearTimeout(timer)
    if (duration <= 0) return invoke2()
    timer = setTimeout(invoke2, duration)
  }
  return filter
}
function throttleFilter(ms, trailing = true) {
  let lastExec = 0
  let timer
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = void 0
    }
  }
  const filter = (invoke2) => {
    const duration = unref(ms)
    const elapsed = Date.now() - lastExec
    clear()
    if (duration <= 0) {
      lastExec = Date.now()
      return invoke2()
    }
    if (elapsed > duration) {
      lastExec = Date.now()
      invoke2()
    } else if (trailing) {
      timer = setTimeout(() => {
        clear()
        invoke2()
      }, duration)
    }
  }
  return filter
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true)
  function pause() {
    isActive.value = false
  }
  function resume() {
    isActive.value = true
  }
  const eventFilter = (...args) => {
    if (isActive.value) extendFilter(...args)
  }
  return { isActive, pause, resume, eventFilter }
}
function promiseTimeout(ms, throwOnTimeout = false, reason = 'Timeout') {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout) setTimeout(() => reject(reason), ms)
    else setTimeout(resolve, ms)
  })
}
function identity(arg) {
  return arg
}
function createSingletonPromise(fn) {
  let _promise
  function wrapper() {
    if (!_promise) _promise = fn()
    return _promise
  }
  wrapper.reset = async () => {
    const _prev = _promise
    _promise = void 0
    if (_prev) await _prev
  }
  return wrapper
}
function invoke(fn) {
  return fn()
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj)
}
function increaseWithUnit(target, delta) {
  var _a
  if (typeof target === 'number') return target + delta
  const value =
    ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) === null || _a === void 0
      ? void 0
      : _a[0]) || ''
  const unit = target.slice(value.length)
  const result = parseFloat(value) + delta
  if (Number.isNaN(result)) return target
  return result + unit
}
function watchWithFilter(source, cb, options = {}) {
  const { eventFilter = bypassFilter } = options,
    watchOptions = __rest(options, ['eventFilter'])
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions)
}
function debouncedWatch(source, cb, options = {}) {
  const { debounce = 0 } = options,
    watchOptions = __rest(options, ['debounce'])
  return watchWithFilter(
    source,
    cb,
    Object.assign(Object.assign({}, watchOptions), {
      eventFilter: debounceFilter(debounce),
    }),
  )
}
function get(obj, key) {
  if (key == null) return unref(obj)
  return unref(obj)[key]
}
function ignorableWatch(source, cb, options = {}) {
  const { eventFilter = bypassFilter } = options,
    watchOptions = __rest(options, ['eventFilter'])
  const filteredCb = createFilterWrapper(eventFilter, cb)
  let ignoreUpdates
  let ignorePrevAsyncUpdates
  let stop2
  if (watchOptions.flush === 'sync') {
    const ignore = ref(false)
    ignorePrevAsyncUpdates = () => {}
    ignoreUpdates = (updater) => {
      ignore.value = true
      updater()
      ignore.value = false
    }
    stop2 = watch(
      source,
      (...args) => {
        if (!ignore.value) filteredCb(...args)
      },
      watchOptions,
    )
  } else {
    const disposables = []
    const ignoreCounter = ref(0)
    const syncCounter = ref(0)
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value
    }
    disposables.push(
      watch(
        source,
        () => {
          syncCounter.value++
        },
        Object.assign(Object.assign({}, watchOptions), { flush: 'sync' }),
      ),
    )
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value
      updater()
      ignoreCounter.value += syncCounter.value - syncCounterPrev
    }
    disposables.push(
      watch(
        source,
        (...args) => {
          const ignore =
            ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value
          ignoreCounter.value = 0
          syncCounter.value = 0
          if (ignore) return
          filteredCb(...args)
        },
        watchOptions,
      ),
    )
    stop2 = () => {
      disposables.forEach((fn) => fn())
    }
  }
  return { stop: stop2, ignoreUpdates, ignorePrevAsyncUpdates }
}
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== 'undefined') {
    const clone = Object.assign({}, obj)
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length,
          }),
        }
      },
    })
    return clone
  } else {
    return Object.assign([...arr], obj)
  }
}
function not(v) {
  return computed(() => !unref(v))
}
function or(...args) {
  return computed(() => args.some((i) => unref(i)))
}
function pausableWatch(source, cb, options = {}) {
  const { eventFilter: filter } = options,
    watchOptions = __rest(options, ['eventFilter'])
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter)
  const stop2 = watchWithFilter(
    source,
    cb,
    Object.assign(Object.assign({}, watchOptions), { eventFilter }),
  )
  return { stop: stop2, pause, resume, isActive }
}
function reactify(fn) {
  return function (...args) {
    return computed(() =>
      fn.apply(
        this,
        args.map((i) => unref(i)),
      ),
    )
  }
}
function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = []
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys
  } else {
    const { includeOwnProperties = true } = optionsOrKeys
    keys.push(...Object.keys(obj))
    if (includeOwnProperties) keys.push(...Object.getOwnPropertyNames(obj))
  }
  return Object.fromEntries(
    keys.map((key) => {
      const value = obj[key]
      return [
        key,
        typeof value === 'function' ? reactify(value.bind(obj)) : value,
      ]
    }),
  )
}
function reactivePick(obj, ...keys) {
  return reactive(Object.fromEntries(keys.map((k) => [k, toRef(obj, k)])))
}
function set2(...args) {
  if (args.length === 2) {
    const [ref2, value] = args
    ref2.value = value
  }
  if (args.length === 3) {
    if (isVue2) {
      ;(init_lib(), lib_exports).set(...args)
    } else {
      const [target, key, value] = args
      target[key] = value
    }
  }
}
function syncRef(
  source,
  targets,
  { flush = 'sync', deep = false, immediate = true } = {},
) {
  if (!Array.isArray(targets)) targets = [targets]
  return watch(
    source,
    (newValue) => {
      targets.forEach((target) => (target.value = newValue))
    },
    {
      flush,
      deep,
      immediate,
    },
  )
}
function throttledWatch(source, cb, options = {}) {
  const { throttle = 0 } = options,
    watchOptions = __rest(options, ['throttle'])
  return watchWithFilter(
    source,
    cb,
    Object.assign(Object.assign({}, watchOptions), {
      eventFilter: throttleFilter(throttle),
    }),
  )
}
function toReactive(objectRef) {
  if (!isRef(objectRef)) return reactive(objectRef)
  const proxy = new Proxy(
    {},
    {
      get(_, p, receiver) {
        return Reflect.get(objectRef.value, p, receiver)
      },
      set(_, p, value) {
        objectRef.value[p] = value
        return true
      },
      deleteProperty(_, p) {
        return Reflect.deleteProperty(objectRef.value, p)
      },
      has(_, p) {
        return Reflect.has(objectRef.value, p)
      },
      ownKeys() {
        return Object.keys(objectRef.value)
      },
      getOwnPropertyDescriptor() {
        return {
          enumerable: true,
          configurable: true,
        }
      },
    },
  )
  return reactive(proxy)
}
function toRefs2(objectRef) {
  if (!isRef(objectRef)) return toRefs(objectRef)
  const result = Array.isArray(objectRef.value)
    ? new Array(objectRef.value.length)
    : {}
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key]
      },
      set(v) {
        objectRef.value[key] = v
      },
    }))
  }
  return result
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance()) onMounted(fn)
  else if (sync) fn()
  else nextTick(fn)
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}
function tryOnUnmounted(fn) {
  if (getCurrentInstance()) onUnmounted(fn)
}
function until(r) {
  let isNot = false
  function toMatch(
    condition,
    { flush = 'sync', deep = false, timeout, throwOnTimeout } = {},
  ) {
    let stop2 = null
    const watcher = new Promise((resolve) => {
      stop2 = watch(
        r,
        (v) => {
          if (condition(v) === !isNot) {
            stop2 === null || stop2 === void 0 ? void 0 : stop2()
            resolve()
          }
        },
        {
          flush,
          deep,
          immediate: true,
        },
      )
    })
    const promises = [watcher]
    if (timeout) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).finally(() => {
          stop2 === null || stop2 === void 0 ? void 0 : stop2()
        }),
      )
    }
    return Promise.race(promises)
  }
  function toBe(value, options) {
    return toMatch((v) => v === unref(value), options)
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options)
  }
  function toBeNull(options) {
    return toBe(null, options)
  }
  function toBeUndefined(options) {
    return toBe(void 0, options)
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options)
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v)
      return array.includes(value) || array.includes(unref(value))
    }, options)
  }
  function changed(options) {
    return changedTimes(1, options)
  }
  function changedTimes(n = 1, options) {
    let count = -1
    return toMatch(() => {
      count += 1
      return count >= n
    }, options)
  }
  if (Array.isArray(unref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot
        return this
      },
    }
    return instance
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot
        return this
      },
    }
    return instance
  }
}
function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const inc = (delta = 1) => (count.value += delta)
  const dec = (delta = 1) => (count.value -= delta)
  const get2 = () => count.value
  const set3 = (val) => (count.value = val)
  const reset = (val = initialValue) => {
    initialValue = val
    return set3(val)
  }
  return { count, inc, dec, get: get2, set: set3, reset }
}
function useDebounceFn(fn, ms = 200) {
  return createFilterWrapper(debounceFilter(ms), fn)
}
function useDebounce(value, ms = 200) {
  if (ms <= 0) return value
  const debounced = ref(value.value)
  const updater = useDebounceFn(() => {
    debounced.value = value.value
  }, ms)
  watch(value, () => updater())
  return debounced
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const { immediate = true, immediateCallback = false } = options
  let timer = null
  const isActive = ref(false)
  function clean() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }
  function pause() {
    isActive.value = false
    clean()
  }
  function resume() {
    if (interval <= 0) return
    isActive.value = true
    if (immediateCallback) cb()
    clean()
    timer = setInterval(cb, interval)
  }
  if (immediate && isClient) resume()
  tryOnScopeDispose(pause)
  return {
    isActive,
    pause,
    resume,
  }
}
function useInterval(interval = 1e3, options = {}) {
  const { controls: exposeControls = false, immediate = true } = options
  const counter = ref(0)
  const controls = useIntervalFn(() => (counter.value += 1), interval, {
    immediate,
  })
  if (exposeControls) {
    return Object.assign({ counter }, controls)
  } else {
    return counter
  }
}
function useLastChanged(source, options = {}) {
  var _a
  const ms = ref(
    (_a = options.initialValue) !== null && _a !== void 0 ? _a : null,
  )
  watch(source, () => (ms.value = timestamp()), options)
  return ms
}
function useThrottleFn(fn, ms = 200, trailing = true) {
  return createFilterWrapper(throttleFilter(ms, trailing), fn)
}
function useThrottle(value, delay = 200) {
  if (delay <= 0) return value
  const throttled = ref(value.value)
  const updater = useThrottleFn(() => {
    throttled.value = value.value
  }, delay)
  watch(value, () => updater())
  return throttled
}
function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true } = options
  const isPending = ref(false)
  let timer = null
  function clear() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  function stop2() {
    isPending.value = false
    clear()
  }
  function start(...args) {
    clear()
    isPending.value = true
    timer = setTimeout(() => {
      isPending.value = false
      timer = null
      cb(...args)
    }, unref(interval))
  }
  if (immediate) {
    isPending.value = true
    if (isClient) start()
  }
  tryOnScopeDispose(stop2)
  return {
    isPending,
    start,
    stop: stop2,
  }
}
function useTimeout(interval = 1e3, options = {}) {
  const { controls: exposeControls = false } = options
  const controls = useTimeoutFn(noop, interval, options)
  const ready = computed(() => !controls.isPending.value)
  if (exposeControls) {
    return Object.assign({ ready }, controls)
  } else {
    return ready
  }
}
function useToggle(initialValue = false) {
  if (isRef(initialValue)) {
    return (value) => {
      initialValue.value =
        typeof value === 'boolean' ? value : !initialValue.value
    }
  } else {
    const boolean = ref(initialValue)
    const toggle = (value) => {
      boolean.value = typeof value === 'boolean' ? value : !boolean.value
    }
    return [boolean, toggle]
  }
}
function whenever(source, cb, options) {
  return watch(
    source,
    (v, ov, onInvalidate) => {
      if (v) cb(v, ov, onInvalidate)
    },
    options,
  )
}

// node_modules/@vueuse/core/index.esm.js
function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
  let options
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef,
    }
  } else {
    options = optionsOrRef || {}
  }
  const { lazy = false, evaluating = void 0 } = options
  const started = ref(!lazy)
  const current = ref(initialState)
  let counter = 0
  watchEffect(async (onInvalidate) => {
    if (!started.value) return
    counter++
    const counterAtBeginning = counter
    let hasFinished = false
    try {
      if (evaluating) {
        Promise.resolve().then(() => {
          evaluating.value = true
        })
      }
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating) evaluating.value = false
          if (!hasFinished) cancelCallback()
        })
      })
      if (counterAtBeginning === counter) current.value = result
    } finally {
      if (evaluating) evaluating.value = false
      hasFinished = true
    }
  })
  if (lazy) {
    return computed(() => {
      started.value = true
      return current.value
    })
  } else {
    return current
  }
}
function autoResetRef(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = defaultValue
    let timer
    const resetAfter = () =>
      setTimeout(() => {
        value = defaultValue
        trigger()
      }, unref(afterMs))
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        value = newValue
        trigger()
        clearTimeout(timer)
        timer = resetAfter()
      },
    }
  })
}
function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key)
  if (defaultSource) source = inject(key, defaultSource)
  if (treatDefaultAsFactory)
    source = inject(key, defaultSource, treatDefaultAsFactory)
  if (typeof options === 'function') {
    return computed((ctx) => options(source, ctx))
  } else {
    return computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set,
    })
  }
}
function unrefElement(elRef) {
  var _a, _b
  const plain = unref(elRef)
  return (_b = (_a = plain) === null || _a === void 0 ? void 0 : _a.$el) !==
    null && _b !== void 0
    ? _b
    : plain
}
var defaultWindow = isClient ? window : void 0
var defaultDocument = isClient ? window.document : void 0
var defaultNavigator = isClient ? window.navigator : void 0
function useEventListener(...args) {
  let target
  let event
  let listener
  let options
  if (isString(args[0])) {
    ;[event, listener, options] = args
    target = defaultWindow
  } else {
    ;[target, event, listener, options] = args
  }
  if (!target) return noop
  let cleanup = noop
  const stopWatch = watch(
    () => unref(target),
    (el) => {
      cleanup()
      if (!el) return
      el.addEventListener(event, listener, options)
      cleanup = () => {
        el.removeEventListener(event, listener, options)
        cleanup = noop
      }
    },
    { immediate: true, flush: 'post' },
  )
  const stop2 = () => {
    stopWatch()
    cleanup()
  }
  tryOnScopeDispose(stop2)
  return stop2
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, event = 'pointerdown' } = options
  if (!window2) return
  const listener = (event2) => {
    const el = unrefElement(target)
    if (!el) return
    if (el === event2.target || event2.composedPath().includes(el)) return
    handler(event2)
  }
  return useEventListener(window2, event, listener, { passive: true })
}
var createKeyPredicate = (keyFilter) =>
  typeof keyFilter === 'function'
    ? keyFilter
    : typeof keyFilter === 'string'
    ? (event) => event.key === keyFilter
    : keyFilter
    ? () => true
    : () => false
function onKeyStroke(key, handler, options = {}) {
  const {
    target = defaultWindow,
    eventName = 'keydown',
    passive = false,
  } = options
  const predicate = createKeyPredicate(key)
  const listener = (e) => {
    if (predicate(e)) handler(e)
  }
  return useEventListener(target, eventName, listener, passive)
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(
    key,
    handler,
    Object.assign(Object.assign({}, options), { eventName: 'keydown' }),
  )
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(
    key,
    handler,
    Object.assign(Object.assign({}, options), { eventName: 'keypress' }),
  )
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(
    key,
    handler,
    Object.assign(Object.assign({}, options), { eventName: 'keyup' }),
  )
}
var isFocusedElementEditable = () => {
  const { activeElement, body } = document
  if (!activeElement) return false
  if (activeElement === body) return false
  switch (activeElement.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return true
  }
  return activeElement.hasAttribute('contenteditable')
}
var isTypedCharValid = ({ keyCode, metaKey, ctrlKey, altKey }) => {
  if (metaKey || ctrlKey || altKey) return false
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))
    return true
  if (keyCode >= 65 && keyCode <= 90) return true
  return false
}
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event)
  }
  if (document2)
    useEventListener(document2, 'keydown', keydown, { passive: true })
}
function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance()
  let _trigger = () => {}
  const element = customRef((track, trigger) => {
    _trigger = trigger
    return {
      get() {
        var _a, _b
        track()
        return (_b =
          (_a =
            instance === null || instance === void 0
              ? void 0
              : instance.proxy) === null || _a === void 0
            ? void 0
            : _a.$refs[key]) !== null && _b !== void 0
          ? _b
          : initialValue
      },
      set() {},
    }
  })
  onMounted(_trigger)
  onUpdated(_trigger)
  return element
}
function useActiveElement(options = {}) {
  const { window: window2 = defaultWindow } = options
  const counter = ref(0)
  if (window2) {
    useEventListener(window2, 'blur', () => (counter.value += 1), true)
    useEventListener(window2, 'focus', () => (counter.value += 1), true)
  }
  return computed(() => {
    counter.value
    return window2 === null || window2 === void 0
      ? void 0
      : window2.document.activeElement
  })
}
function useAsyncState(promise, initialState, options = {}) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    resetOnExecute = true,
  } = options
  const state = shallowRef(initialState)
  const isReady = ref(false)
  const error = ref(void 0)
  async function execute(delay2 = 0) {
    if (resetOnExecute) state.value = initialState
    error.value = void 0
    isReady.value = false
    if (delay2 > 0) await promiseTimeout(delay2)
    const _promise = typeof promise === 'function' ? promise() : promise
    try {
      const data = await _promise
      state.value = data
      isReady.value = true
    } catch (e) {
      error.value = e
      onError(e)
    }
  }
  if (immediate) execute(delay)
  return {
    state,
    isReady,
    error,
    execute,
  }
}
function useBattery({ navigator = defaultNavigator } = {}) {
  const events2 = [
    'chargingchange',
    'chargingtimechange',
    'dischargingtimechange',
    'levelchange',
  ]
  const isSupported = navigator && 'getBattery' in navigator
  const charging = ref(false)
  const chargingTime = ref(0)
  const dischargingTime = ref(0)
  const level = ref(1)
  let battery
  function updateBatteryInfo() {
    charging.value = this.charging
    chargingTime.value = this.chargingTime || 0
    dischargingTime.value = this.dischargingTime || 0
    level.value = this.level
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery
      updateBatteryInfo.call(battery)
      for (const event of events2)
        useEventListener(battery, event, updateBatteryInfo, { passive: true })
    })
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level,
  }
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options
  if (!window2) return ref(false)
  const mediaQuery = window2.matchMedia(query)
  const matches = ref(mediaQuery.matches)
  const handler = (event) => {
    matches.value = event.matches
  }
  if ('addEventListener' in mediaQuery)
    mediaQuery.addEventListener('change', handler)
  else mediaQuery.addListener(handler)
  tryOnScopeDispose(() => {
    if ('removeEventListener' in mediaQuery)
      mediaQuery.removeEventListener('change', handler)
    else mediaQuery.removeListener(handler)
  })
  return matches
}
var breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
var breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}
var breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
}
var breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}
var breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560,
}
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k]
    if (delta != null) v = increaseWithUnit(v, delta)
    if (typeof v === 'number') v = `${v}px`
    return v
  }
  const { window: window2 = defaultWindow } = options
  function match(query) {
    if (!window2) return false
    return window2.matchMedia(query).matches
  }
  return {
    greater(k) {
      return useMediaQuery(`(min-width: ${getValue(k)})`, options)
    },
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options)
    },
    between(a, b) {
      return useMediaQuery(
        `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`,
        options,
      )
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`)
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`)
    },
    isInBetween(a, b) {
      return match(
        `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`,
      )
    },
  }
}
function useBrowserLocation({ window: window2 = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } =
      (window2 === null || window2 === void 0 ? void 0 : window2.history) || {}
    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    } =
      (window2 === null || window2 === void 0 ? void 0 : window2.location) || {}
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    }
  }
  const state = ref(buildState('load'))
  if (window2) {
    useEventListener(
      window2,
      'popstate',
      () => (state.value = buildState('popstate')),
      { passive: true },
    )
    useEventListener(
      window2,
      'hashchange',
      () => (state.value = buildState('hashchange')),
      { passive: true },
    )
  }
  return state
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = true,
    source,
    copiedDuring = 1500,
  } = options
  const events2 = ['copy', 'cut']
  const isSupported = Boolean(navigator && 'clipboard' in navigator)
  const text = ref('')
  const copied = ref(false)
  const timeout = useTimeoutFn(() => (copied.value = false), copiedDuring)
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value
    })
  }
  if (isSupported && read) {
    for (const event of events2) useEventListener(event, updateText)
  }
  async function copy(value = unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value)
      text.value = value
      copied.value = true
      timeout.start()
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy,
  }
}
function useCssVar(prop, target, { window: window2 = defaultWindow } = {}) {
  const variable = ref('')
  const elRef = computed(() => {
    var _a
    return (
      unrefElement(target) ||
      ((_a =
        window2 === null || window2 === void 0 ? void 0 : window2.document) ===
        null || _a === void 0
        ? void 0
        : _a.documentElement)
    )
  })
  watch(
    elRef,
    (el) => {
      if (el && window2)
        variable.value = window2.getComputedStyle(el).getPropertyValue(prop)
    },
    { immediate: true },
  )
  watch(variable, (val) => {
    var _a
    if ((_a = elRef.value) === null || _a === void 0 ? void 0 : _a.style)
      elRef.value.style.setProperty(prop, val)
  })
  return variable
}
var StorageSerializers = {
  boolean: {
    read: (v) => v === 'true',
    write: (v) => String(v),
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v),
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v),
  },
  any: {
    read: (v) => v,
    write: (v) => String(v),
  },
  string: {
    read: (v) => v,
    write: (v) => String(v),
  },
}
function useStorage(
  key,
  defaultValue,
  storage = defaultWindow === null || defaultWindow === void 0
    ? void 0
    : defaultWindow.localStorage,
  options = {},
) {
  var _a
  const {
    flush = 'pre',
    deep = true,
    listenToStorageChanges = true,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e)
    },
  } = options
  const type =
    defaultValue == null
      ? 'any'
      : typeof defaultValue === 'boolean'
      ? 'boolean'
      : typeof defaultValue === 'string'
      ? 'string'
      : typeof defaultValue === 'object'
      ? 'object'
      : Array.isArray(defaultValue)
      ? 'object'
      : !Number.isNaN(defaultValue)
      ? 'number'
      : 'any'
  const data = ref(defaultValue)
  const serializer =
    (_a = options.serializer) !== null && _a !== void 0
      ? _a
      : StorageSerializers[type]
  function read(event) {
    if (!storage || (event && event.key !== key)) return
    try {
      const rawValue = event ? event.newValue : storage.getItem(key)
      if (rawValue == null) {
        data.value = defaultValue
        if (defaultValue !== null)
          storage.setItem(key, serializer.write(defaultValue))
      } else {
        data.value = serializer.read(rawValue)
      }
    } catch (e) {
      onError(e)
    }
  }
  read()
  if (window2 && listenToStorageChanges)
    useEventListener(window2, 'storage', read)
  watchWithFilter(
    data,
    () => {
      if (!storage) return
      try {
        if (data.value == null) storage.removeItem(key)
        else storage.setItem(key, serializer.write(data.value))
      } catch (e) {
        onError(e)
      }
    },
    {
      flush,
      deep,
      eventFilter,
    },
  )
  return data
}
function usePreferredDark(options) {
  return useMediaQuery('(prefers-color-scheme: dark)', options)
}
function useDark(options = {}) {
  const {
    selector = 'html',
    attribute = 'class',
    valueDark = 'dark',
    valueLight = '',
    window: window2 = defaultWindow,
    storage = defaultWindow === null || defaultWindow === void 0
      ? void 0
      : defaultWindow.localStorage,
    storageKey = 'vueuse-color-scheme',
    listenToStorageChanges = true,
  } = options
  const preferredDark = usePreferredDark({ window: window2 })
  const store =
    storageKey == null
      ? ref('auto')
      : useStorage(storageKey, 'auto', storage, {
          window: window2,
          listenToStorageChanges,
        })
  const isDark = computed({
    get() {
      return store.value === 'auto'
        ? preferredDark.value
        : store.value === 'dark'
    },
    set(v) {
      if (v === preferredDark.value) store.value = 'auto'
      else store.value = v ? 'dark' : 'light'
    },
  })
  const onChanged =
    options.onChanged ||
    ((v) => {
      const el =
        window2 === null || window2 === void 0
          ? void 0
          : window2.document.querySelector(selector)
      if (attribute === 'class') {
        el === null || el === void 0
          ? void 0
          : el.classList.toggle(valueDark, v)
        if (valueLight)
          el === null || el === void 0
            ? void 0
            : el.classList.toggle(valueLight, !v)
      } else {
        el === null || el === void 0
          ? void 0
          : el.setAttribute(attribute, v ? valueDark : valueLight)
      }
    })
  watch(isDark, onChanged, { flush: 'post' })
  tryOnMounted(() => onChanged(isDark.value))
  return isDark
}
function useDeviceMotion(options = {}) {
  const { window: window2 = defaultWindow, eventFilter = bypassFilter } =
    options
  const acceleration = ref({ x: null, y: null, z: null })
  const rotationRate = ref({ alpha: null, beta: null, gamma: null })
  const interval = ref(0)
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null,
  })
  if (window2) {
    const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration
      accelerationIncludingGravity.value = event.accelerationIncludingGravity
      rotationRate.value = event.rotationRate
      interval.value = event.interval
    })
    useEventListener(window2, 'devicemotion', onDeviceMotion)
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval,
  }
}
function useDeviceOrientation(options = {}) {
  const { window: window2 = defaultWindow } = options
  const isSupported = Boolean(window2 && 'DeviceOrientationEvent' in window2)
  const isAbsolute = ref(false)
  const alpha = ref(null)
  const beta = ref(null)
  const gamma = ref(null)
  if (window2 && isSupported) {
    useEventListener(window2, 'deviceorientation', (event) => {
      isAbsolute.value = event.absolute
      alpha.value = event.alpha
      beta.value = event.beta
      gamma.value = event.gamma
    })
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma,
  }
}
var DEVICE_PIXEL_RATIO_SCALES = [
  1, 1.325, 1.4, 1.5, 1.8, 2, 2.4, 2.5, 2.75, 3, 3.5, 4,
]
function useDevicePixelRatio({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      pixelRatio: ref(1),
    }
  }
  const pixelRatio = ref(window2.devicePixelRatio)
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window2.devicePixelRatio
  }
  useEventListener(window2, 'resize', handleDevicePixelRatio, { passive: true })
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`)
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`)
    watch([mqlMin, mqlMax], handleDevicePixelRatio)
  })
  return { pixelRatio }
}
function usePermission(permissionDesc, options = {}) {
  const { controls = false, navigator = defaultNavigator } = options
  const isSupported = Boolean(navigator && 'permissions' in navigator)
  let permissionStatus
  const desc =
    typeof permissionDesc === 'string'
      ? { name: permissionDesc }
      : permissionDesc
  const state = ref()
  const onChange = () => {
    if (permissionStatus) state.value = permissionStatus.state
  }
  const query = createSingletonPromise(async () => {
    if (!isSupported) return
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc)
        useEventListener(permissionStatus, 'change', onChange)
        onChange()
      } catch (_a) {
        state.value = 'prompt'
      }
    }
    return permissionStatus
  })
  query()
  if (controls) {
    return {
      state,
      isSupported,
      query,
    }
  } else {
    return state
  }
}
function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    onUpdated: onUpdated2,
  } = options
  const devices = ref([])
  const videoInputs = computed(() =>
    devices.value.filter((i) => i.kind === 'videoinput'),
  )
  const audioInputs = computed(() =>
    devices.value.filter((i) => i.kind === 'audioinput'),
  )
  const audioOutputs = computed(() =>
    devices.value.filter((i) => i.kind === 'audiooutput'),
  )
  let isSupported = false
  const permissionGranted = ref(false)
  async function update() {
    if (!isSupported) return
    devices.value = await navigator.mediaDevices.enumerateDevices()
    onUpdated2 === null || onUpdated2 === void 0
      ? void 0
      : onUpdated2(devices.value)
  }
  async function ensurePermissions() {
    if (!isSupported) return false
    if (permissionGranted.value) return true
    const { state, query } = usePermission('camera', { controls: true })
    await query()
    if (state.value !== 'granted') {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
      stream.getTracks().forEach((t) => t.stop())
      update()
      permissionGranted.value = true
    } else {
      permissionGranted.value = true
    }
    return permissionGranted.value
  }
  if (navigator) {
    isSupported = Boolean(
      navigator.mediaDevices && navigator.mediaDevices.enumerateDevices,
    )
    if (isSupported) {
      if (requestPermissions) ensurePermissions()
      useEventListener(navigator.mediaDevices, 'devicechange', update)
      update()
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported,
  }
}
function useDocumentVisibility({ document: document2 = defaultDocument } = {}) {
  if (!document2) return ref('visible')
  const visibility = ref(document2.visibilityState)
  useEventListener(document2, 'visibilitychange', () => {
    visibility.value = document2.visibilityState
  })
  return visibility
}
function __rest2(s, e) {
  var t = {}
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p]
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]]
    }
  return t
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow } = options,
    observerOptions = __rest2(options, ['window'])
  let observer
  const isSupported = window2 && 'ResizeObserver' in window2
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = void 0
    }
  }
  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup()
      if (isSupported && window2 && el) {
        observer = new window2.ResizeObserver(callback)
        observer.observe(el, observerOptions)
      }
    },
    { immediate: true, flush: 'post' },
  )
  const stop2 = () => {
    cleanup()
    stopWatch()
  }
  tryOnScopeDispose(stop2)
  return {
    isSupported,
    stop: stop2,
  }
}
function useElementBounding(target, options = {}) {
  const height = ref(0)
  const bottom = ref(0)
  const left = ref(0)
  const right = ref(0)
  const top = ref(0)
  const width = ref(0)
  const x = ref(0)
  const y = ref(0)
  useResizeObserver(
    target,
    ([entry]) => {
      height.value = entry.contentRect.height
      bottom.value = entry.contentRect.bottom
      left.value = entry.contentRect.left
      right.value = entry.contentRect.right
      top.value = entry.contentRect.top
      width.value = entry.contentRect.width
      x.value = entry.contentRect.x
      y.value = entry.contentRect.y
    },
    options,
  )
  return {
    x,
    y,
    top,
    right,
    bottom,
    left,
    width,
    height,
  }
}
function useElementSize(
  target,
  initialSize = { width: 0, height: 0 },
  options = {},
) {
  const width = ref(initialSize.width)
  const height = ref(initialSize.height)
  useResizeObserver(
    target,
    ([entry]) => {
      width.value = entry.contentRect.width
      height.value = entry.contentRect.height
    },
    options,
  )
  return {
    width,
    height,
  }
}
function useElementVisibility(
  element,
  { window: window2 = defaultWindow, scrollTarget } = {},
) {
  const elementIsVisible = ref(false)
  const testBounding = () => {
    if (!window2) return
    const document2 = window2.document
    if (!element.value) {
      elementIsVisible.value = false
    } else {
      const rect = element.value.getBoundingClientRect()
      elementIsVisible.value =
        rect.top <=
          (window2.innerHeight || document2.documentElement.clientHeight) &&
        rect.left <=
          (window2.innerWidth || document2.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.right >= 0
    }
  }
  tryOnMounted(testBounding)
  if (window2)
    tryOnMounted(() =>
      useEventListener(
        (scrollTarget === null || scrollTarget === void 0
          ? void 0
          : scrollTarget.value) || window2,
        'scroll',
        testBounding,
        { capture: false, passive: true },
      ),
    )
  return elementIsVisible
}
var events = new Map()
function useEventBus(key) {
  const scope = getCurrentScope()
  function on(listener) {
    const listeners = events.get(key) || []
    listeners.push(listener)
    events.set(key, listeners)
    const _off = () => off(listener)
    scope === null || scope === void 0 ? void 0 : scope.cleanups.push(_off)
    return _off
  }
  function off(listener) {
    const listeners = events.get(key)
    if (!listeners) return
    const index = listeners.indexOf(listener)
    if (index > -1) listeners.splice(index, 1)
    if (!listeners.length) events.delete(key)
  }
  function reset() {
    events.delete(key)
  }
  function emit(event) {
    var _a
    ;(_a = events.get(key)) === null || _a === void 0
      ? void 0
      : _a.forEach((v) => v(event))
  }
  return { on, off, emit, reset }
}
function useEventSource(url, events2 = []) {
  const event = ref(null)
  const data = ref(null)
  const status = ref('CONNECTING')
  const eventSource = ref(null)
  const error = ref(null)
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close()
      eventSource.value = null
      status.value = 'CLOSED'
    }
  }
  const es = new EventSource(url)
  eventSource.value = es
  es.onopen = () => {
    status.value = 'OPEN'
    error.value = null
  }
  es.onerror = (e) => {
    status.value = 'CLOSED'
    error.value = e
  }
  es.onmessage = (e) => {
    event.value = null
    data.value = e.data
  }
  for (const event_name of events2) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name
      data.value = e.data || null
    })
  }
  tryOnScopeDispose(() => {
    close()
  })
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close,
  }
}
function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = '',
    rel = 'icon',
    document: document2 = defaultDocument,
  } = options
  const favicon = isRef(newIcon) ? newIcon : ref(newIcon)
  const applyIcon = (icon) => {
    document2 === null || document2 === void 0
      ? void 0
      : document2.head
          .querySelectorAll(`link[rel*="${rel}"]`)
          .forEach((el) => (el.href = `${baseUrl}${icon}`))
  }
  watch(
    favicon,
    (i, o) => {
      if (isString(i) && i !== o) applyIcon(i)
    },
    { immediate: true },
  )
  return favicon
}
var payloadMapping = {
  json: 'application/json',
  text: 'text/plain',
  formData: 'multipart/form-data',
}
function isFetchOptions(obj) {
  return containsProp(obj, 'immediate', 'refetch', 'beforeFetch', 'afterFetch')
}
function headersToObject(headers) {
  if (headers instanceof Headers)
    return Object.fromEntries([...headers.entries()])
  return headers
}
function createFetch(config = {}) {
  const _options = config.options || {}
  const _fetchOptions = config.fetchOptions || {}
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() =>
      config.baseUrl
        ? joinPaths(unref(config.baseUrl), unref(url))
        : unref(url),
    )
    let options = _options
    let fetchOptions = _fetchOptions
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = Object.assign(Object.assign({}, options), args[0])
      } else {
        fetchOptions = Object.assign(
          Object.assign(Object.assign({}, fetchOptions), args[0]),
          {
            headers: Object.assign(
              Object.assign({}, headersToObject(fetchOptions.headers) || {}),
              headersToObject(args[0].headers) || {},
            ),
          },
        )
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = Object.assign(Object.assign({}, options), args[1])
    return useFetch(computedUrl, fetchOptions, options)
  }
  return useFactoryFetch
}
function useFetch(url, ...args) {
  const supportsAbort = typeof AbortController === 'function'
  let fetchOptions = {}
  let options = { immediate: true, refetch: false }
  const config = {
    method: 'get',
    type: 'text',
    payload: void 0,
  }
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = Object.assign(Object.assign({}, options), args[0])
    else fetchOptions = args[0]
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = Object.assign(Object.assign({}, options), args[1])
  }
  const {
    fetch = defaultWindow === null || defaultWindow === void 0
      ? void 0
      : defaultWindow.fetch,
  } = options
  const responseEvent = createEventHook()
  const errorEvent = createEventHook()
  const finallyEvent = createEventHook()
  const isFinished = ref(false)
  const isFetching = ref(false)
  const aborted = ref(false)
  const statusCode = ref(null)
  const response = shallowRef(null)
  const error = ref(null)
  const data = shallowRef(null)
  const canAbort = computed(() => supportsAbort && isFetching.value)
  let controller
  const abort = () => {
    if (supportsAbort && controller) controller.abort()
  }
  const loading = (isLoading) => {
    isFetching.value = isLoading
    isFinished.value = !isLoading
  }
  const execute = async (throwOnFailed = false) => {
    var _a
    loading(true)
    error.value = null
    statusCode.value = null
    aborted.value = false
    controller = void 0
    if (supportsAbort) {
      controller = new AbortController()
      controller.signal.onabort = () => (aborted.value = true)
      fetchOptions = Object.assign(Object.assign({}, fetchOptions), {
        signal: controller.signal,
      })
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {},
    }
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers)
      if (config.payloadType)
        headers['Content-Type'] =
          (_a = payloadMapping[config.payloadType]) !== null && _a !== void 0
            ? _a
            : config.payloadType
      defaultFetchOptions.body =
        config.payloadType === 'json'
          ? JSON.stringify(config.payload)
          : config.payload
    }
    let isCanceled = false
    const context = {
      url: unref(url),
      options: fetchOptions,
      cancel: () => {
        isCanceled = true
      },
    }
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context))
    if (isCanceled || !fetch) {
      loading(false)
      return Promise.resolve()
    }
    return new Promise((resolve, reject) => {
      var _a2
      fetch(
        context.url,
        Object.assign(
          Object.assign(
            Object.assign({}, defaultFetchOptions),
            context.options,
          ),
          {
            headers: Object.assign(
              Object.assign({}, headersToObject(defaultFetchOptions.headers)),
              headersToObject(
                (_a2 = context.options) === null || _a2 === void 0
                  ? void 0
                  : _a2.headers,
              ),
            ),
          },
        ),
      )
        .then(async (fetchResponse) => {
          response.value = fetchResponse
          statusCode.value = fetchResponse.status
          let responseData = await fetchResponse[config.type]()
          if (options.afterFetch)
            ({ data: responseData } = await options.afterFetch({
              data: responseData,
              response: fetchResponse,
            }))
          data.value = responseData
          if (!fetchResponse.ok) throw new Error(fetchResponse.statusText)
          responseEvent.trigger(fetchResponse)
          resolve(fetchResponse)
        })
        .catch((fetchError) => {
          error.value = fetchError.message || fetchError.name
          errorEvent.trigger(fetchError)
          if (throwOnFailed) reject(fetchError)
          else resolve(void 0)
        })
        .finally(() => {
          loading(false)
          finallyEvent.trigger(null)
        })
    })
  }
  watch(
    () => [unref(url), unref(options.refetch)],
    () => unref(options.refetch) && execute(),
    { deep: true },
  )
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod('get'),
    put: setMethod('put'),
    post: setMethod('post'),
    delete: setMethod('delete'),
    json: setType('json'),
    text: setType('text'),
    blob: setType('blob'),
    arrayBuffer: setType('arrayBuffer'),
    formData: setType('formData'),
  }
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method
        config.payload = payload
        config.payloadType = payloadType
        if (
          !payloadType &&
          payload &&
          Object.getPrototypeOf(payload) === Object.prototype
        )
          config.payloadType = 'json'
        return shell
      }
      return void 0
    }
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type
        return shell
      }
      return void 0
    }
  }
  if (options.immediate) setTimeout(execute, 0)
  return shell
}
function joinPaths(start, end) {
  if (!start.endsWith('/') && !end.startsWith('/')) return `${start}/${end}`
  return `${start}${end}`
}
var functionsMap = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ],
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
  ],
]
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument } = options
  const targetRef = ref(
    target ||
      (document2 === null || document2 === void 0
        ? void 0
        : document2.querySelector('html')),
  )
  const isFullscreen = ref(false)
  let isSupported = false
  let map = functionsMap[0]
  if (!document2) {
    isSupported = false
  } else {
    for (const m of functionsMap) {
      if (m[1] in document2) {
        map = m
        isSupported = true
        break
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map
  async function exit() {
    if (!isSupported) return
    if (
      document2 === null || document2 === void 0 ? void 0 : document2[ELEMENT]
    )
      await document2[EXIT]()
    isFullscreen.value = false
  }
  async function enter() {
    if (!isSupported) return
    await exit()
    if (targetRef.value) {
      await targetRef.value[REQUEST]()
      isFullscreen.value = true
    }
  }
  async function toggle() {
    if (isFullscreen.value) await exit()
    else await enter()
  }
  if (document2) {
    useEventListener(
      document2,
      EVENT,
      () => {
        isFullscreen.value = !!(document2 === null || document2 === void 0
          ? void 0
          : document2[ELEMENT])
      },
      false,
    )
  }
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle,
  }
}
function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator,
  } = options
  const isSupported = navigator && 'geolocation' in navigator
  const locatedAt = ref(null)
  const error = ref(null)
  const coords = ref({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  })
  function updatePosition(position) {
    locatedAt.value = position.timestamp
    coords.value = position.coords
    error.value = null
  }
  let watcher
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(
      updatePosition,
      (err) => (error.value = err),
      {
        enableHighAccuracy,
        maximumAge,
        timeout,
      },
    )
  }
  tryOnScopeDispose(() => {
    if (watcher && navigator) navigator.geolocation.clearWatch(watcher)
  })
  return {
    isSupported,
    coords,
    locatedAt,
    error,
  }
}
var defaultEvents = [
  'mousemove',
  'mousedown',
  'resize',
  'keydown',
  'touchstart',
  'wheel',
]
var oneMinute = 6e4
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events: events2 = defaultEvents,
    window: window2 = defaultWindow,
    eventFilter = throttleFilter(50),
  } = options
  const idle = ref(initialState)
  const lastActive = ref(timestamp())
  let timer
  const onEvent = createFilterWrapper(eventFilter, () => {
    idle.value = false
    lastActive.value = timestamp()
    clearTimeout(timer)
    timer = setTimeout(() => (idle.value = true), timeout)
  })
  if (window2) {
    const document2 = window2.document
    for (const event of events2)
      useEventListener(window2, event, onEvent, { passive: true })
    if (listenForVisibilityChange) {
      useEventListener(document2, 'visibilitychange', () => {
        if (!document2.hidden) onEvent()
      })
    }
  }
  timer = setTimeout(() => (idle.value = true), timeout)
  return { idle, lastActive }
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = '0px',
    threshold = 0.1,
    window: window2 = defaultWindow,
  } = options
  const isSupported = window2 && 'IntersectionObserver' in window2
  let cleanup = noop
  const stopWatch = isSupported
    ? watch(
        () => ({
          el: unrefElement(target),
          root: unrefElement(root),
        }),
        ({ el, root: root2 }) => {
          cleanup()
          if (!el) return
          const observer = new window2.IntersectionObserver(callback, {
            root: root2,
            rootMargin,
            threshold,
          })
          observer.observe(el)
          cleanup = () => {
            observer.disconnect()
            cleanup = noop
          }
        },
        { immediate: true, flush: 'post' },
      )
    : noop
  const stop2 = () => {
    cleanup()
    stopWatch()
  }
  tryOnScopeDispose(stop2)
  return {
    isSupported,
    stop: stop2,
  }
}
function useLocalStorage(key, defaultValue, options = {}) {
  const { window: window2 = defaultWindow } = options
  return useStorage(
    key,
    defaultValue,
    window2 === null || window2 === void 0 ? void 0 : window2.localStorage,
    options,
  )
}
var DefaultMagicKeysAliasMap = {
  ctrl: 'control',
  command: 'meta',
  cmd: 'meta',
  option: 'alt',
  up: 'arrowup',
  down: 'arrowdown',
  left: 'arrowleft',
  right: 'arrowright',
}
function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop,
  } = options
  const current = reactive(new Set())
  const obj = {
    toJSON() {
      return {}
    },
    current,
  }
  const refs = useReactive ? reactive(obj) : obj
  function updateRefs(e, value) {
    const key = e.key.toLowerCase()
    const code = e.code.toLowerCase()
    const values = [code, key]
    if (value) current.add(e.code)
    else current.delete(e.code)
    for (const key2 of values) {
      if (key2 in refs) {
        if (useReactive) refs[key2] = value
        else refs[key2].value = value
      }
    }
  }
  if (target) {
    useEventListener(
      target,
      'keydown',
      (e) => {
        updateRefs(e, true)
        return onEventFired(e)
      },
      { passive },
    )
    useEventListener(
      target,
      'keyup',
      (e) => {
        updateRefs(e, false)
        return onEventFired(e)
      },
      { passive },
    )
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== 'string') return Reflect.get(target2, prop, rec)
      prop = prop.toLowerCase()
      if (prop in aliasMap) prop = aliasMap[prop]
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim())
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])))
        } else {
          refs[prop] = ref(false)
        }
      }
      const r = Reflect.get(target2, prop, rec)
      return useReactive ? unref(r) : r
    },
  })
  return proxy
}
var fnClone = (v) => JSON.parse(JSON.stringify(v))
var fnBypass = (v) => v
var fnSetSource = (source, value) => (source.value = value)
function defaultDump(clone) {
  return clone ? (isFunction(clone) ? clone : fnClone) : fnBypass
}
function defaultParse(clone) {
  return clone ? (isFunction(clone) ? clone : fnClone) : fnBypass
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource,
  } = options
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp(),
    })
  }
  const last = ref(_createHistoryRecord())
  const undoStack = ref([])
  const redoStack = ref([])
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot))
    last.value = record
  }
  const commit = () => {
    undoStack.value.unshift(last.value)
    last.value = _createHistoryRecord()
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity)
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length)
  }
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length)
    redoStack.value.splice(0, redoStack.value.length)
  }
  const undo = () => {
    const state = undoStack.value.shift()
    if (state) {
      redoStack.value.unshift(last.value)
      _setSource(state)
    }
  }
  const redo = () => {
    const state = redoStack.value.shift()
    if (state) {
      undoStack.value.unshift(last.value)
      _setSource(state)
    }
  }
  const reset = () => {
    _setSource(last.value)
  }
  const history = computed(() => [last.value, ...undoStack.value])
  const canUndo = computed(() => undoStack.value.length > 0)
  const canRedo = computed(() => redoStack.value.length > 0)
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo,
  }
}
function usingElRef(source, cb) {
  if (unref(source)) cb(unref(source))
}
function timeRangeToArray(timeRanges) {
  let ranges = []
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]]
  return ranges
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(
    (
      {
        label,
        kind,
        language,
        mode,
        activeCues,
        cues,
        inBandMetadataTrackDispatchType,
      },
      id,
    ) => ({
      id,
      label,
      kind,
      language,
      mode,
      activeCues,
      cues,
      inBandMetadataTrackDispatchType,
    }),
  )
}
var defaultOptions = {
  src: '',
  tracks: [],
}
function useMediaControls(target, options = {}) {
  options = Object.assign(Object.assign({}, defaultOptions), options)
  const { document: document2 = defaultDocument } = options
  const currentTime = ref(0)
  const duration = ref(0)
  const seeking = ref(false)
  const buffering = ref(false)
  const volume = ref(1)
  const waiting = ref(false)
  const ended = ref(false)
  const playing = ref(false)
  const rate = ref(1)
  const stalled = ref(false)
  const buffered = ref([])
  const tracks = ref([])
  const selectedTrack = ref(-1)
  const isPictureInPicture = ref(false)
  const muted = ref(false)
  const supportsPictureInPicture =
    document2 && 'pictureInPictureEnabled' in document2
  const sourceErrorEvent = createEventHook()
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = isNumber(track) ? track : track.id
        el.textTracks[id].mode = 'disabled'
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = 'disabled'
      }
      selectedTrack.value = -1
    })
  }
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = isNumber(track) ? track : track.id
      if (disableTracks) disableTrack()
      el.textTracks[id].mode = 'showing'
      selectedTrack.value = id
    })
  }
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject)
          } else {
            document2.exitPictureInPicture().then(resolve).catch(reject)
          }
        }
      })
    })
  }
  watchEffect(() => {
    if (!document2) return
    const el = unref(target)
    if (!el) return
    const src = unref(options.src)
    let sources = []
    if (!src) return
    if (isString(src)) sources = [{ src }]
    else if (Array.isArray(src)) sources = src
    else if (isObject(src)) sources = [src]
    el.querySelectorAll('source').forEach((e) => {
      e.removeEventListener('error', sourceErrorEvent.trigger)
      e.remove()
    })
    sources.forEach(({ src: src2, type }) => {
      const source = document2.createElement('source')
      source.setAttribute('src', src2)
      source.setAttribute('type', type || '')
      source.addEventListener('error', sourceErrorEvent.trigger)
      el.appendChild(source)
    })
    el.load()
  })
  tryOnScopeDispose(() => {
    const el = unref(target)
    if (!el) return
    el.querySelectorAll('source').forEach((e) =>
      e.removeEventListener('error', sourceErrorEvent.trigger),
    )
  })
  watch(volume, (vol) => {
    const el = unref(target)
    if (!el) return
    el.volume = vol
  })
  watch(muted, (mute) => {
    const el = unref(target)
    if (!el) return
    el.muted = mute
  })
  watchEffect(() => {
    if (!document2) return
    const textTracks = unref(options.tracks)
    const el = unref(target)
    if (!textTracks || !textTracks.length || !el) return
    el.querySelectorAll('track').forEach((e) => e.remove())
    textTracks.forEach(
      ({ default: isDefault, kind, label, src, srcLang }, i) => {
        const track = document2.createElement('track')
        track.default = isDefault || false
        track.kind = kind
        track.label = label
        track.src = src
        track.srclang = srcLang
        if (track.default) selectedTrack.value = i
        el.appendChild(track)
      },
    )
  })
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = ignorableWatch(
    currentTime,
    (time) => {
      const el = unref(target)
      if (!el) return
      el.currentTime = time
    },
  )
  const { ignoreUpdates: ignorePlayingUpdates } = ignorableWatch(
    playing,
    (isPlaying) => {
      const el = unref(target)
      if (!el) return
      isPlaying ? el.play() : el.pause()
    },
  )
  useEventListener(target, 'timeupdate', () =>
    ignoreCurrentTimeUpdates(
      () => (currentTime.value = unref(target).currentTime),
    ),
  )
  useEventListener(
    target,
    'durationchange',
    () => (duration.value = unref(target).duration),
  )
  useEventListener(
    target,
    'progress',
    () => (buffered.value = timeRangeToArray(unref(target).buffered)),
  )
  useEventListener(target, 'seeking', () => (seeking.value = true))
  useEventListener(target, 'seeked', () => (seeking.value = false))
  useEventListener(target, 'waiting', () => (waiting.value = true))
  useEventListener(target, 'playing', () => (waiting.value = false))
  useEventListener(
    target,
    'ratechange',
    () => (rate.value = unref(target).playbackRate),
  )
  useEventListener(target, 'stalled', () => (stalled.value = true))
  useEventListener(target, 'ended', () => (ended.value = true))
  useEventListener(target, 'pause', () =>
    ignorePlayingUpdates(() => (playing.value = false)),
  )
  useEventListener(target, 'play', () =>
    ignorePlayingUpdates(() => (playing.value = true)),
  )
  useEventListener(
    target,
    'enterpictureinpicture',
    () => (isPictureInPicture.value = true),
  )
  useEventListener(
    target,
    'leavepictureinpicture',
    () => (isPictureInPicture.value = false),
  )
  useEventListener(target, 'volumechange', () => {
    const el = unref(target)
    if (!el) return
    volume.value = el.volume
    muted.value = el.muted
  })
  const listeners = []
  const stop2 = watch([target], () => {
    const el = unref(target)
    if (!el) return
    stop2()
    listeners[0] = useEventListener(
      el.textTracks,
      'addtrack',
      () => (tracks.value = tracksToArray(el.textTracks)),
    )
    listeners[1] = useEventListener(
      el.textTracks,
      'removetrack',
      () => (tracks.value = tracksToArray(el.textTracks)),
    )
    listeners[2] = useEventListener(
      el.textTracks,
      'change',
      () => (tracks.value = tracksToArray(el.textTracks)),
    )
  })
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()))
  return {
    currentTime,
    duration,
    buffering,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on,
  }
}
function useMouse(options = {}) {
  const {
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window: window2 = defaultWindow,
  } = options
  const x = ref(initialValue.x)
  const y = ref(initialValue.y)
  const sourceType = ref(null)
  const mouseHandler = (event) => {
    x.value = event.pageX
    y.value = event.pageY
    sourceType.value = 'mouse'
  }
  const reset = () => {
    x.value = initialValue.x
    y.value = initialValue.y
  }
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      x.value = event.touches[0].clientX
      y.value = event.touches[0].clientY
      sourceType.value = 'touch'
    }
  }
  if (window2) {
    useEventListener(window2, 'mousemove', mouseHandler, { passive: true })
    useEventListener(window2, 'dragover', mouseHandler, { passive: true })
    if (touch) {
      useEventListener(window2, 'touchstart', touchHandler, { passive: true })
      useEventListener(window2, 'touchmove', touchHandler, { passive: true })
      if (resetOnTouchEnds)
        useEventListener(window2, 'touchend', reset, { passive: true })
    }
  }
  return {
    x,
    y,
    sourceType,
  }
}
function useMouseInElement(target, options = {}) {
  const { handleOutside = true, window: window2 = defaultWindow } = options
  const { x, y, sourceType } = useMouse(options)
  const targetRef = ref(
    target !== null && target !== void 0
      ? target
      : window2 === null || window2 === void 0
      ? void 0
      : window2.document.body,
  )
  const elementX = ref(0)
  const elementY = ref(0)
  const elementPositionX = ref(0)
  const elementPositionY = ref(0)
  const elementHeight = ref(0)
  const elementWidth = ref(0)
  const isOutside = ref(false)
  let stop2 = () => {}
  if (window2) {
    stop2 = watch(
      [targetRef, x, y],
      () => {
        const el = unrefElement(targetRef)
        if (!el) return
        const { left, top, width, height } = el.getBoundingClientRect()
        elementPositionX.value = left + window2.pageXOffset
        elementPositionY.value = top + window2.pageYOffset
        elementHeight.value = height
        elementWidth.value = width
        const elX = x.value - elementPositionX.value
        const elY = y.value - elementPositionY.value
        isOutside.value =
          elX < 0 ||
          elY < 0 ||
          elX > elementWidth.value ||
          elY > elementHeight.value
        if (handleOutside || !isOutside.value) {
          elementX.value = elX
          elementY.value = elY
        }
      },
      { immediate: true },
    )
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop: stop2,
  }
}
function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window: window2 = defaultWindow,
  } = options
  const pressed = ref(initialValue)
  const sourceType = ref(null)
  if (!window2) {
    return {
      pressed,
      sourceType,
    }
  }
  const onPressed = (srcType) => () => {
    pressed.value = true
    sourceType.value = srcType
  }
  const onReleased = () => {
    pressed.value = false
    sourceType.value = null
  }
  const target = computed(() => unrefElement(options.target) || window2)
  useEventListener(target, 'mousedown', onPressed('mouse'), { passive: true })
  useEventListener(window2, 'mouseleave', onReleased, { passive: true })
  useEventListener(window2, 'mouseup', onReleased, { passive: true })
  if (drag) {
    useEventListener(target, 'dragstart', onPressed('mouse'), { passive: true })
    useEventListener(window2, 'drop', onReleased, { passive: true })
    useEventListener(window2, 'dragend', onReleased, { passive: true })
  }
  if (touch) {
    useEventListener(target, 'touchstart', onPressed('touch'), {
      passive: true,
    })
    useEventListener(window2, 'touchend', onReleased, { passive: true })
    useEventListener(window2, 'touchcancel', onReleased, { passive: true })
  }
  return {
    pressed,
    sourceType,
  }
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow } = options,
    mutationOptions = __rest2(options, ['window'])
  let observer
  const isSupported = window2 && 'IntersectionObserver' in window2
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = void 0
    }
  }
  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup()
      if (isSupported && window2 && el) {
        observer = new window2.MutationObserver(callback)
        observer.observe(el, mutationOptions)
      }
    },
    { immediate: true },
  )
  const stop2 = () => {
    cleanup()
    stopWatch()
  }
  tryOnScopeDispose(stop2)
  return {
    isSupported,
    stop: stop2,
  }
}
function useNetwork(options = {}) {
  const { window: window2 = defaultWindow } = options
  const navigator =
    window2 === null || window2 === void 0 ? void 0 : window2.navigator
  const isSupported = Boolean(navigator && 'connection' in navigator)
  const isOnline = ref(true)
  const saveData = ref(false)
  const offlineAt = ref(void 0)
  const downlink = ref(void 0)
  const downlinkMax = ref(void 0)
  const rtt = ref(void 0)
  const effectiveType = ref(void 0)
  const type = ref('unknown')
  const connection = isSupported && navigator.connection
  function updateNetworkInformation() {
    if (!navigator) return
    isOnline.value = navigator.onLine
    offlineAt.value = isOnline.value ? void 0 : Date.now()
    if (connection) {
      downlink.value = connection.downlink
      downlinkMax.value = connection.downlinkMax
      effectiveType.value = connection.effectiveType
      rtt.value = connection.rtt
      saveData.value = connection.saveData
      type.value = connection.type
    }
  }
  if (window2) {
    useEventListener(window2, 'offline', () => {
      isOnline.value = false
      offlineAt.value = Date.now()
    })
    useEventListener(window2, 'online', () => {
      isOnline.value = true
    })
  }
  if (connection)
    useEventListener(connection, 'change', updateNetworkInformation, false)
  updateNetworkInformation()
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type,
  }
}
function useRafFn(fn, options = {}) {
  const { immediate = true, window: window2 = defaultWindow } = options
  const isActive = ref(false)
  function loop() {
    if (!isActive.value) return
    fn()
    if (window2) window2.requestAnimationFrame(loop)
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true
      loop()
    }
  }
  function pause() {
    isActive.value = false
  }
  if (immediate) resume()
  tryOnScopeDispose(pause)
  return {
    isActive,
    pause,
    resume,
  }
}
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = 'requestAnimationFrame',
  } = options
  const now2 = ref(new Date())
  const update = () => (now2.value = new Date())
  const controls =
    interval === 'requestAnimationFrame'
      ? useRafFn(update, { immediate: true })
      : useIntervalFn(update, interval, { immediate: true })
  if (exposeControls) {
    return Object.assign({ now: now2 }, controls)
  } else {
    return now2
  }
}
function useOnline(options = {}) {
  const { isOnline } = useNetwork(options)
  return isOnline
}
function usePageLeave(options = {}) {
  const { window: window2 = defaultWindow } = options
  const isLeft = ref(false)
  const handler = (event) => {
    if (!window2) return
    event = event || window2.event
    const from = event.relatedTarget || event.toElement
    isLeft.value = !from
  }
  if (window2) {
    useEventListener(window2, 'mouseout', handler, { passive: true })
    useEventListener(window2.document, 'mouseleave', handler, { passive: true })
    useEventListener(window2.document, 'mouseenter', handler, { passive: true })
  }
  return isLeft
}
function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window: window2 = defaultWindow,
  } = options
  const orientation = reactive(useDeviceOrientation({ window: window2 }))
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height,
  } = useMouseInElement(target, { handleOutside: false, window: window2 })
  const source = computed(() => {
    if (
      orientation.isSupported &&
      ((orientation.alpha != null && orientation.alpha !== 0) ||
        (orientation.gamma != null && orientation.gamma !== 0))
    )
      return 'deviceOrientation'
    return 'mouse'
  })
  const roll = computed(() => {
    if (source.value === 'deviceOrientation') {
      const value = -orientation.beta / 90
      return deviceOrientationRollAdjust(value)
    } else {
      const value = -(y.value - height.value / 2) / height.value
      return mouseRollAdjust(value)
    }
  })
  const tilt = computed(() => {
    if (source.value === 'deviceOrientation') {
      const value = orientation.gamma / 90
      return deviceOrientationTiltAdjust(value)
    } else {
      const value = (x.value - width.value / 2) / width.value
      return mouseTiltAdjust(value)
    }
  })
  return { roll, tilt, source }
}
var SwipeDirection
;(function (SwipeDirection2) {
  SwipeDirection2['UP'] = 'UP'
  SwipeDirection2['RIGHT'] = 'RIGHT'
  SwipeDirection2['DOWN'] = 'DOWN'
  SwipeDirection2['LEFT'] = 'LEFT'
  SwipeDirection2['NONE'] = 'NONE'
})(SwipeDirection || (SwipeDirection = {}))
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window: window2 = defaultWindow,
  } = options
  const coordsStart = reactive({ x: 0, y: 0 })
  const coordsEnd = reactive({ x: 0, y: 0 })
  const diffX = computed(() => coordsStart.x - coordsEnd.x)
  const diffY = computed(() => coordsStart.y - coordsEnd.y)
  const { max, abs } = Math
  const isThresholdExceeded = computed(
    () => max(abs(diffX.value), abs(diffY.value)) >= threshold,
  )
  const isSwiping = ref(false)
  const direction = computed(() => {
    if (!isThresholdExceeded.value) return SwipeDirection.NONE
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN
    }
  })
  const getTouchEventCoords = (e) => [
    e.touches[0].clientX,
    e.touches[0].clientY,
  ]
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x
    coordsStart.y = y
  }
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x
    coordsEnd.y = y
  }
  let listenerOptions
  const isPassiveEventSupported = checkPassiveEventSupport(
    window2 === null || window2 === void 0 ? void 0 : window2.document,
  )
  if (!passive)
    listenerOptions = isPassiveEventSupported
      ? { passive: false, capture: true }
      : { capture: true }
  else
    listenerOptions = isPassiveEventSupported
      ? { passive: true }
      : { capture: false }
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd === null || onSwipeEnd === void 0
        ? void 0
        : onSwipeEnd(e, direction.value)
    isSwiping.value = false
  }
  const stops = [
    useEventListener(
      target,
      'touchstart',
      (e) => {
        if (listenerOptions.capture && !listenerOptions.passive)
          e.preventDefault()
        const [x, y] = getTouchEventCoords(e)
        updateCoordsStart(x, y)
        updateCoordsEnd(x, y)
        onSwipeStart === null || onSwipeStart === void 0
          ? void 0
          : onSwipeStart(e)
      },
      listenerOptions,
    ),
    useEventListener(
      target,
      'touchmove',
      (e) => {
        const [x, y] = getTouchEventCoords(e)
        updateCoordsEnd(x, y)
        if (!isSwiping.value && isThresholdExceeded.value)
          isSwiping.value = true
        if (isSwiping.value)
          onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e)
      },
      listenerOptions,
    ),
    useEventListener(target, 'touchend', onTouchEnd, listenerOptions),
    useEventListener(target, 'touchcancel', onTouchEnd, listenerOptions),
  ]
  const stop2 = () => stops.forEach((s) => s())
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop: stop2,
  }
}
function checkPassiveEventSupport(document2) {
  if (!document2) return false
  let supportsPassive = false
  const optionsBlock = {
    get passive() {
      supportsPassive = true
      return false
    },
  }
  document2.addEventListener('x', noop, optionsBlock)
  document2.removeEventListener('x', noop)
  return supportsPassive
}
function usePointerSwipe(target, options = {}) {
  const targetRef = ref(target)
  const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart } = options
  const posStart = reactive({ x: 0, y: 0 })
  const updatePosStart = (x, y) => {
    posStart.x = x
    posStart.y = y
  }
  const posEnd = reactive({ x: 0, y: 0 })
  const updatePosEnd = (x, y) => {
    posEnd.x = x
    posEnd.y = y
  }
  const distanceX = computed(() => posStart.x - posEnd.x)
  const distanceY = computed(() => posStart.y - posEnd.y)
  const { max, abs } = Math
  const isThresholdExceeded = computed(
    () => max(abs(distanceX.value), abs(distanceY.value)) >= threshold,
  )
  const isSwiping = ref(false)
  const isPointerDown = ref(false)
  const direction = computed(() => {
    if (!isThresholdExceeded.value) return SwipeDirection.NONE
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN
    }
  })
  const stops = [
    useEventListener(target, 'pointerdown', (e) => {
      var _a, _b
      isPointerDown.value = true
      ;(_b =
        (_a = targetRef.value) === null || _a === void 0
          ? void 0
          : _a.style) === null || _b === void 0
        ? void 0
        : _b.setProperty('touch-action', 'none')
      const eventTarget = e.target
      eventTarget === null || eventTarget === void 0
        ? void 0
        : eventTarget.setPointerCapture(e.pointerId)
      const { clientX: x, clientY: y } = e
      updatePosStart(x, y)
      updatePosEnd(x, y)
      onSwipeStart === null || onSwipeStart === void 0
        ? void 0
        : onSwipeStart(e)
    }),
    useEventListener(target, 'pointermove', (e) => {
      if (!isPointerDown.value) return
      const { clientX: x, clientY: y } = e
      updatePosEnd(x, y)
      if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true
      if (isSwiping.value)
        onSwipe === null || onSwipe === void 0 ? void 0 : onSwipe(e)
    }),
    useEventListener(target, 'pointerup', (e) => {
      var _a, _b
      if (isSwiping.value)
        onSwipeEnd === null || onSwipeEnd === void 0
          ? void 0
          : onSwipeEnd(e, direction.value)
      isPointerDown.value = false
      isSwiping.value = false
      ;(_b =
        (_a = targetRef.value) === null || _a === void 0
          ? void 0
          : _a.style) === null || _b === void 0
        ? void 0
        : _b.setProperty('touch-action', 'initial')
    }),
  ]
  const stop2 = () => stops.forEach((s) => s())
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop: stop2,
  }
}
function usePreferredColorScheme(options) {
  const isLight = useMediaQuery('(prefers-color-scheme: light)', options)
  const isDark = useMediaQuery('(prefers-color-scheme: dark)', options)
  return computed(() => {
    if (isDark.value) return 'dark'
    if (isLight.value) return 'light'
    return 'no-preference'
  })
}
function usePreferredLanguages(options = {}) {
  const { window: window2 = defaultWindow } = options
  if (!window2) return ref(['en'])
  const navigator = window2.navigator
  const value = ref(navigator.languages)
  useEventListener(window2, 'languagechange', () => {
    value.value = navigator.languages
  })
  return value
}
function useRefHistory(source, options = {}) {
  const { deep = false, flush = 'pre' } = options
  const {
    eventFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking,
  } = pausableFilter()
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop: stop2,
  } = ignorableWatch(source, commit, { deep, flush, eventFilter })
  function setSource(source2, value) {
    ignorePrevAsyncUpdates()
    ignoreUpdates(() => {
      source2.value = value
    })
  }
  const manualHistory = useManualRefHistory(
    source,
    Object.assign(Object.assign({}, options), {
      clone: options.clone || deep,
      setSource,
    }),
  )
  const { clear, commit: manualCommit } = manualHistory
  function commit() {
    ignorePrevAsyncUpdates()
    manualCommit()
  }
  function resume(commitNow) {
    resumeTracking()
    if (commitNow) commit()
  }
  function batch(fn) {
    let canceled = false
    const cancel = () => (canceled = true)
    ignoreUpdates(() => {
      fn(cancel)
    })
    if (!canceled) commit()
  }
  function dispose() {
    stop2()
    clear()
  }
  return Object.assign(Object.assign({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose,
  })
}
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = 'text/javascript',
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
  } = options
  const scriptTag = ref(null)
  let _promise = null
  const loadScript = (waitForScriptLoad) =>
    new Promise((resolve, reject) => {
      const resolveWithElement = (el2) => {
        scriptTag.value = el2
        resolve(el2)
        return el2
      }
      if (!document2) {
        resolve(false)
        return
      }
      let shouldAppend = false
      let el = document2.querySelector(`script[src="${src}"]`)
      if (!el) {
        el = document2.createElement('script')
        el.type = type
        el.async = async
        el.src = unref(src)
        if (defer) el.defer = defer
        if (crossOrigin) el.crossOrigin = crossOrigin
        if (noModule) el.noModule = noModule
        if (referrerPolicy) el.referrerPolicy = referrerPolicy
        shouldAppend = true
      } else if (el.hasAttribute('data-loaded')) {
        resolveWithElement(el)
      }
      el.addEventListener('error', (event) => reject(event))
      el.addEventListener('abort', (event) => reject(event))
      el.addEventListener('load', () => {
        el.setAttribute('data-loaded', 'true')
        onLoaded(el)
        resolveWithElement(el)
      })
      if (shouldAppend) el = document2.head.appendChild(el)
      if (!waitForScriptLoad) resolveWithElement(el)
    })
  const load = (waitForScriptLoad = true) => {
    if (!_promise) _promise = loadScript(waitForScriptLoad)
    return _promise
  }
  const unload = () => {
    if (!document2) return
    _promise = null
    if (scriptTag.value) {
      document2.head.removeChild(scriptTag.value)
      scriptTag.value = null
    }
  }
  if (immediate && !manual) tryOnMounted(load)
  if (!manual) tryOnUnmounted(unload)
  return { scriptTag, load, unload }
}
function useSessionStorage(key, defaultValue, options = {}) {
  const { window: window2 = defaultWindow } = options
  return useStorage(
    key,
    defaultValue,
    window2 === null || window2 === void 0 ? void 0 : window2.sessionStorage,
    options,
  )
}
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options
  const _navigator = navigator
  const isSupported = _navigator && 'canShare' in _navigator
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = Object.assign(
        Object.assign({}, unref(shareOptions)),
        unref(overrideOptions),
      )
      let granted = true
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files })
      if (granted) return _navigator.share(data)
    }
  }
  return {
    isSupported,
    share,
  }
}
function useSpeechRecognition(options = {}) {
  const {
    lang = 'en-US',
    interimResults = true,
    continuous = true,
    window: window2 = defaultWindow,
  } = options
  const isListening = ref(false)
  const isFinal = ref(false)
  const result = ref('')
  const error = shallowRef(void 0)
  const toggle = (value = !isListening.value) => {
    isListening.value = value
  }
  const start = () => {
    isListening.value = true
  }
  const stop2 = () => {
    isListening.value = false
  }
  const SpeechRecognition =
    window2 && (window2.SpeechRecognition || window2.webkitSpeechRecognition)
  const isSupported = Boolean(SpeechRecognition)
  let recognition
  if (isSupported) {
    recognition = new SpeechRecognition()
    recognition.continuous = continuous
    recognition.interimResults = interimResults
    recognition.lang = lang
    recognition.onstart = () => {
      isFinal.value = false
    }
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result2) => {
          isFinal.value = result2.isFinal
          return result2[0]
        })
        .map((result2) => result2.transcript)
        .join('')
      result.value = transcript
      error.value = void 0
    }
    recognition.onerror = (event) => {
      error.value = event
    }
    recognition.onend = () => {
      isListening.value = false
    }
    watch(isListening, () => {
      if (isListening.value) recognition.start()
      else recognition.stop()
    })
  }
  tryOnScopeDispose(() => {
    isListening.value = false
  })
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop: stop2,
  }
}
function useTemplateRefsList() {
  const refs = ref([])
  refs.value.set = (el) => {
    if (el) refs.value.push(el)
  }
  onBeforeUpdate(() => {
    refs.value.length = 0
  })
  return refs
}
var UNITS = [
  { max: 6e4, value: 1e3, name: 'second' },
  { max: 276e4, value: 6e4, name: 'minute' },
  { max: 72e6, value: 36e5, name: 'hour' },
  { max: 5184e5, value: 864e5, name: 'day' },
  { max: 24192e5, value: 6048e5, name: 'week' },
  { max: 28512e6, value: 2592e6, name: 'month' },
  { max: Infinity, value: 31536e6, name: 'year' },
]
var DEFAULT_MESSAGES = {
  justNow: 'just now',
  past: (n) => (n.match(/\d/) ? `${n} ago` : n),
  future: (n) => (n.match(/\d/) ? `in ${n}` : n),
  month: (n, past) =>
    n === 1
      ? past
        ? 'last month'
        : 'next month'
      : `${n} month${n > 1 ? 's' : ''}`,
  year: (n, past) =>
    n === 1
      ? past
        ? 'last year'
        : 'next year'
      : `${n} year${n > 1 ? 's' : ''}`,
  day: (n, past) =>
    n === 1 ? (past ? 'yesterday' : 'tomorrow') : `${n} day${n > 1 ? 's' : ''}`,
  week: (n, past) =>
    n === 1
      ? past
        ? 'last week'
        : 'next week'
      : `${n} week${n > 1 ? 's' : ''}`,
  hour: (n) => `${n} hour${n > 1 ? 's' : ''}`,
  minute: (n) => `${n} minute${n > 1 ? 's' : ''}`,
  second: (n) => `${n} second${n > 1 ? 's' : ''}`,
}
var DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10)
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER,
  } = options
  const { abs, round } = Math
  const _a = useNow({ interval: updateInterval, controls: true }),
    { now: now2 } = _a,
    controls = __rest2(_a, ['now'])
  function getTimeago(from, now3) {
    var _a2
    const diff = +now3 - +from
    const absDiff = abs(diff)
    if (absDiff < 6e4) return messages.justNow
    if (typeof max === 'number' && absDiff > max)
      return fullDateFormatter(new Date(from))
    if (typeof max === 'string') {
      const unitMax =
        (_a2 = UNITS.find((i) => i.name === max)) === null || _a2 === void 0
          ? void 0
          : _a2.max
      if (unitMax && absDiff > unitMax) return fullDateFormatter(new Date(from))
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max) return format(diff, unit)
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name]
    if (typeof formatter === 'function') return formatter(val, isPast)
    return formatter.replace('{0}', val.toString())
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value)
    const past = diff > 0
    const str = applyFormat(unit.name, val, past)
    return applyFormat(past ? 'past' : 'future', str, past)
  }
  const timeAgo = computed(() =>
    getTimeago(new Date(unref(time)), unref(now2.value)),
  )
  if (exposeControls) {
    return Object.assign({ timeAgo }, controls)
  } else {
    return timeAgo
  }
}
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    interval = 'requestAnimationFrame',
  } = options
  const ts = ref(timestamp() + offset)
  const update = () => (ts.value = timestamp() + offset)
  const controls =
    interval === 'requestAnimationFrame'
      ? useRafFn(update, { immediate: true })
      : useIntervalFn(update, interval, { immediate: true })
  if (exposeControls) {
    return Object.assign({ timestamp: ts }, controls)
  } else {
    return ts
  }
}
function useTitle(newTitle = null, options = {}) {
  var _a, _b
  const { document: document2 = defaultDocument, observe = false } = options
  const title = ref(
    (_a =
      newTitle !== null && newTitle !== void 0
        ? newTitle
        : document2 === null || document2 === void 0
        ? void 0
        : document2.title) !== null && _a !== void 0
      ? _a
      : null,
  )
  watch(
    title,
    (t, o) => {
      if (isString(t) && t !== o && document2) document2.title = t
    },
    { immediate: true },
  )
  if (observe && document2) {
    useMutationObserver(
      (_b = document2.head) === null || _b === void 0
        ? void 0
        : _b.querySelector('title'),
      () => {
        if (document2 && document2.title !== title.value)
          title.value = document2.title
      },
      { childList: true },
    )
  }
  return title
}
var TransitionPresets = {
  linear: identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
}
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1
  const b = (a1, a2) => 3 * a2 - 6 * a1
  const c = (a1) => 3 * a1
  const calcBezier = (t, a1, a2) =>
    ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t
  const getSlope = (t, a1, a2) =>
    3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1)
  const getTforX = (x) => {
    let aGuessT = x
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2)
      if (currentSlope === 0) return aGuessT
      const currentX = calcBezier(aGuessT, p0, p2) - x
      aGuessT -= currentX / currentSlope
    }
    return aGuessT
  }
  return (x) => (p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3))
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity,
  } = options
  const currentTransition = computed(() => {
    const t = unref(transition)
    return isFunction(t) ? t : createEasingFunction(t)
  })
  const sourceValue = computed(() => {
    const s = unref(source)
    return isNumber(s) ? s : s.map(unref)
  })
  const sourceVector = computed(() =>
    isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value,
  )
  const outputVector = ref(sourceVector.value.slice(0))
  let currentDuration
  let diffVector
  let endAt
  let startAt
  let startVector
  const { resume, pause } = useRafFn(
    () => {
      const now2 = Date.now()
      const progress = clamp(1 - (endAt - now2) / currentDuration, 0, 1)
      outputVector.value = startVector.map((val, i) => {
        var _a
        return (
          val +
          ((_a = diffVector[i]) !== null && _a !== void 0 ? _a : 0) *
            currentTransition.value(progress)
        )
      })
      if (progress >= 1) {
        pause()
        onFinished()
      }
    },
    { immediate: false },
  )
  const start = () => {
    pause()
    currentDuration = unref(duration)
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b
      return (
        ((_a = sourceVector.value[i]) !== null && _a !== void 0 ? _a : 0) -
        ((_b = outputVector.value[i]) !== null && _b !== void 0 ? _b : 0)
      )
    })
    startVector = outputVector.value.slice(0)
    startAt = Date.now()
    endAt = startAt + currentDuration
    resume()
    onStarted()
  }
  const timeout = useTimeoutFn(start, delay, { immediate: false })
  watch(
    sourceVector,
    () => {
      if (unref(disabled)) {
        outputVector.value = sourceVector.value.slice(0)
      } else {
        if (unref(delay) <= 0) start()
        else timeout.start()
      }
    },
    { deep: true },
  )
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector
    return isNumber(sourceValue.value)
      ? targetVector.value[0]
      : targetVector.value
  })
}
function useUrlSearchParams(mode = 'history', options = {}) {
  const { window: window2 = defaultWindow } = options
  if (!window2) return reactive(Object.assign({}))
  const hashWithoutParams = computed(() => {
    const hash = window2.location.hash || ''
    const index = hash.indexOf('?')
    return index > 0 ? hash.substring(0, index) : hash
  })
  const read = () => {
    if (mode === 'hash') {
      const hash = window2.location.hash || ''
      const index = hash.indexOf('?')
      return new URLSearchParams(index >= 0 ? hash.substring(index + 1) : '')
    } else {
      return new URLSearchParams(window2.location.search || '')
    }
  }
  let params = read()
  const paramsMap = reactive(Object.assign({}))
  function writeToParamsMap(key, value) {
    return (paramsMap[key] = value)
  }
  function updateParamsMap() {
    Object.keys(paramsMap).forEach((key) => delete paramsMap[key])
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key)
      writeToParamsMap(
        key,
        paramsForKey.length > 1 ? paramsForKey : params.get(key) || '',
      )
    }
  }
  updateParamsMap()
  const { pause, resume } = pausableWatch(
    paramsMap,
    () => {
      params = new URLSearchParams('')
      Object.keys(paramsMap).forEach((key) => {
        const mapEntry = paramsMap[key]
        if (Array.isArray(mapEntry))
          mapEntry.forEach((value) => params.append(key, value))
        else params.set(key, mapEntry)
      })
      write(params)
    },
    { deep: true },
  )
  function write(params2, shouldUpdateParamsMap) {
    pause()
    if (shouldUpdateParamsMap) updateParamsMap()
    const empty = !params2.keys().next()
    const query = empty
      ? hashWithoutParams.value
      : mode === 'hash'
      ? `${hashWithoutParams.value}?${params2}`
      : `?${params2}${hashWithoutParams.value}`
    if (window2)
      window2.history.replaceState({}, '', window2.location.pathname + query)
    resume()
  }
  useEventListener(window2, 'popstate', () => {
    params = read()
    write(params, true)
  })
  return paramsMap
}
function useUserMedia(options = {}) {
  var _a, _b, _c
  const enabled = ref(
    (_a = options.enabled) !== null && _a !== void 0 ? _a : false,
  )
  const autoSwitch = ref(
    (_b = options.autoSwitch) !== null && _b !== void 0 ? _b : true,
  )
  const videoDeviceId = ref(options.videoDeviceId)
  const audioDeviceId = ref(options.audioDeviceId)
  const { navigator = defaultNavigator } = options
  const isSupported = Boolean(
    (_c =
      navigator === null || navigator === void 0
        ? void 0
        : navigator.mediaDevices) === null || _c === void 0
      ? void 0
      : _c.getUserMedia,
  )
  const stream = shallowRef()
  function getDeviceOptions(device) {
    if (device.value === 'none' || device.value === false) return false
    if (device.value == null) return true
    return {
      deviceId: device.value,
    }
  }
  async function _start() {
    if (!isSupported || stream.value) return
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId),
    })
    return stream.value
  }
  async function _stop() {
    var _a2
    ;(_a2 = stream.value) === null || _a2 === void 0
      ? void 0
      : _a2.getTracks().forEach((t) => t.stop())
    stream.value = void 0
  }
  function stop2() {
    _stop()
    enabled.value = false
  }
  async function start() {
    await _start()
    if (stream.value) enabled.value = true
    return stream.value
  }
  async function restart() {
    _stop()
    return await start()
  }
  watch(
    enabled,
    (v) => {
      if (v) _start()
      else _stop()
    },
    { immediate: true },
  )
  watch(
    [videoDeviceId, audioDeviceId],
    () => {
      if (autoSwitch.value && stream.value) restart()
    },
    { immediate: true },
  )
  return {
    isSupported,
    stream,
    start,
    stop: stop2,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch,
  }
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c
  const { passive = false, eventName } = options
  const vm = getCurrentInstance()
  const _emit =
    emit ||
    (vm === null || vm === void 0 ? void 0 : vm.emit) ||
    ((_a = vm === null || vm === void 0 ? void 0 : vm.$emit) === null ||
    _a === void 0
      ? void 0
      : _a.bind(vm))
  let event = eventName
  if (!key) {
    if (isVue2) {
      const modelOptions =
        (_c =
          (_b = vm === null || vm === void 0 ? void 0 : vm.proxy) === null ||
          _b === void 0
            ? void 0
            : _b.$options) === null || _c === void 0
          ? void 0
          : _c.model
      key =
        (modelOptions === null || modelOptions === void 0
          ? void 0
          : modelOptions.value) || 'value'
      if (!eventName)
        event =
          (modelOptions === null || modelOptions === void 0
            ? void 0
            : modelOptions.event) || 'input'
    } else {
      key = 'modelValue'
    }
  }
  event = eventName || event || `update:${key}`
  if (passive) {
    const proxy = ref(props[key])
    watch(
      () => props[key],
      (v) => (proxy.value = v),
    )
    watch(proxy, (v) => {
      if (v !== props[key]) _emit(event, v)
    })
    return proxy
  } else {
    return computed({
      get() {
        return props[key]
      },
      set(value) {
        _emit(event, value)
      },
    })
  }
}
function useVModels(props, emit, options = {}) {
  const ret = {}
  for (const key in props) ret[key] = useVModel(props, key, emit, options)
  return ret
}
function resolveNestedOptions(options) {
  if (options === true) return {}
  return options
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
  } = options
  const data = ref(null)
  const status = ref('CONNECTING')
  const wsRef = ref()
  let heartbeatPause
  let heartbeatResume
  let explicitlyClosed = false
  let retried = 0
  let bufferedData = []
  const close = (code, reason) => {
    if (!wsRef.value) return
    explicitlyClosed = true
    heartbeatPause === null || heartbeatPause === void 0
      ? void 0
      : heartbeatPause()
    wsRef.value.close(code, reason)
  }
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === 'OPEN') {
      for (const buffer of bufferedData) wsRef.value.send(buffer)
      bufferedData = []
    }
  }
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== 'OPEN') {
      if (useBuffer) bufferedData.push(data2)
      return false
    }
    _sendBuffer()
    wsRef.value.send(data2)
    return true
  }
  const _init = () => {
    const ws = new WebSocket(url)
    wsRef.value = ws
    status.value = 'CONNECTING'
    explicitlyClosed = false
    ws.onopen = () => {
      status.value = 'OPEN'
      onConnected === null || onConnected === void 0 ? void 0 : onConnected(ws)
      heartbeatResume === null || heartbeatResume === void 0
        ? void 0
        : heartbeatResume()
      _sendBuffer()
    }
    ws.onclose = (ev) => {
      status.value = 'CLOSED'
      wsRef.value = void 0
      onDisconnected === null || onDisconnected === void 0
        ? void 0
        : onDisconnected(ws, ev)
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed,
        } = resolveNestedOptions(options.autoReconnect)
        retried += 1
        if (retries < 0 || retried < retries) setTimeout(_init, delay)
        else onFailed === null || onFailed === void 0 ? void 0 : onFailed()
      }
    }
    ws.onerror = (e) => {
      onError === null || onError === void 0 ? void 0 : onError(ws, e)
    }
    ws.onmessage = (e) => {
      data.value = e.data
      onMessage === null || onMessage === void 0 ? void 0 : onMessage(ws, e)
    }
  }
  if (options.heartbeat) {
    const { message = 'ping', interval = 1e3 } = resolveNestedOptions(
      options.heartbeat,
    )
    const { pause, resume } = useIntervalFn(
      () => send(message, false),
      interval,
      { immediate: false },
    )
    heartbeatPause = pause
    heartbeatResume = resume
  }
  if (immediate) _init()
  const open = () => {
    close()
    retried = 0
    _init()
  }
  tryOnScopeDispose(close)
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef,
  }
}
function useWebWorker(url, workerOptions, options = {}) {
  const { window: window2 = defaultWindow } = options
  const data = ref(null)
  const worker = shallowRef()
  const post = function post2(val) {
    if (!worker.value) return
    worker.value.postMessage(val)
  }
  const terminate = function terminate2() {
    if (!worker.value) return
    worker.value.terminate()
  }
  if (window2) {
    worker.value = new window2.Worker(url, workerOptions)
    worker.value.onmessage = (e) => {
      data.value = e.data
    }
    tryOnScopeDispose(() => {
      if (worker.value) worker.value.terminate()
    })
  }
  return {
    data,
    post,
    terminate,
    worker,
  }
}
var jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0]
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs))
    .then((result) => {
      postMessage(['SUCCESS', result])
    })
    .catch((error) => {
      postMessage(['ERROR', error])
    })
}
var depsParser = (deps) => {
  if (deps.length === 0) return ''
  const depsString = deps.map((dep) => `${dep}`).toString()
  return `importScripts('${depsString}')`
}
var createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`
  const blob = new Blob([blobCode], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  return url
}
var useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window: window2 = defaultWindow,
  } = options
  const worker = ref()
  const workerStatus = ref('PENDING')
  const promise = ref({})
  const timeoutId = ref()
  const workerTerminate = (status = 'PENDING') => {
    if (worker.value && worker.value._url && window2) {
      worker.value.terminate()
      URL.revokeObjectURL(worker.value._url)
      promise.value = {}
      worker.value = void 0
      window2.clearTimeout(timeoutId.value)
      workerStatus.value = status
    }
  }
  workerTerminate()
  tryOnScopeDispose(workerTerminate)
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies)
    const newWorker = new Worker(blobUrl)
    newWorker._url = blobUrl
    newWorker.onmessage = (e) => {
      const { resolve = () => {}, reject = () => {} } = promise.value
      const [status, result] = e.data
      switch (status) {
        case 'SUCCESS':
          resolve(result)
          workerTerminate(status)
          break
        default:
          reject(result)
          workerTerminate('ERROR')
          break
      }
    }
    newWorker.onerror = (e) => {
      const { reject = () => {} } = promise.value
      reject(e)
      workerTerminate('ERROR')
    }
    if (timeout) {
      timeoutId.value = setTimeout(
        () => workerTerminate('TIMEOUT_EXPIRED'),
        timeout,
      )
    }
    return newWorker
  }
  const callWorker = (...fnArgs) =>
    new Promise((resolve, reject) => {
      promise.value = {
        resolve,
        reject,
      }
      worker.value && worker.value.postMessage([[...fnArgs]])
      workerStatus.value = 'RUNNING'
    })
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === 'RUNNING') {
      console.error(
        '[useWebWorkerFn] You can only run one instance of the worker at a time.',
      )
      return Promise.reject()
    }
    worker.value = generateWorker()
    return callWorker(...fnArgs)
  }
  return {
    workerFn,
    workerStatus,
    workerTerminate,
  }
}
function useWindowFocus({ window: window2 = defaultWindow } = {}) {
  if (!window2) return ref(false)
  const focused = ref(window2.document.hasFocus())
  useEventListener(window2, 'blur', () => {
    focused.value = false
  })
  useEventListener(window2, 'focus', () => {
    focused.value = true
  })
  return focused
}
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0),
    }
  }
  const x = ref(window2.pageXOffset)
  const y = ref(window2.pageYOffset)
  useEventListener(
    'scroll',
    () => {
      x.value = window2.pageXOffset
      y.value = window2.pageYOffset
    },
    {
      capture: false,
      passive: true,
    },
  )
  return { x, y }
}
function useWindowSize({
  window: window2 = defaultWindow,
  initialWidth = Infinity,
  initialHeight = Infinity,
} = {}) {
  if (!window2) {
    return {
      width: ref(initialWidth),
      height: ref(initialHeight),
    }
  }
  const width = ref(window2.innerWidth)
  const height = ref(window2.innerHeight)
  useEventListener(
    'resize',
    () => {
      width.value = window2.innerWidth
      height.value = window2.innerHeight
    },
    { passive: true },
  )
  return { width, height }
}
export {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  SwipeDirection,
  TransitionPresets,
  and,
  assert,
  asyncComputed,
  autoResetRef,
  biSyncRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  clamp,
  computedInject,
  containsProp,
  controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createSharedComposable,
  createSingletonPromise,
  debounceFilter,
  debouncedWatch,
  extendRef,
  get,
  identity,
  ignorableWatch,
  increaseWithUnit,
  invoke,
  isBoolean,
  isClient,
  isDef,
  isFunction,
  isNumber,
  isObject,
  isString,
  isWindow,
  makeDestructurable,
  noop,
  not,
  now,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onStartTyping,
  or,
  pausableFilter,
  pausableWatch,
  promiseTimeout,
  rand,
  reactify,
  reactifyObject,
  reactivePick,
  set2 as set,
  syncRef,
  templateRef,
  throttleFilter,
  throttledWatch,
  timestamp,
  toReactive,
  toRefs2 as toRefs,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAsyncState,
  useBattery,
  useBreakpoints,
  useBrowserLocation,
  useClipboard,
  useCounter,
  useCssVar,
  useDark,
  useDebounce,
  useDebounceFn,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDocumentVisibility,
  useElementBounding,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useFavicon,
  useFetch,
  useFullscreen,
  useGeolocation,
  useIdle,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNetwork,
  useNow,
  useOnline,
  usePageLeave,
  useParallax,
  usePermission,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredDark,
  usePreferredLanguages,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScriptTag,
  useSessionStorage,
  useShare,
  useSpeechRecognition,
  useStorage,
  useSwipe,
  useTemplateRefsList,
  useThrottle,
  useThrottleFn,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimestamp,
  useTitle,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchWithFilter,
  whenever,
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=@vueuse_core.js.map
