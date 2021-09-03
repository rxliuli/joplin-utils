import { __esm, init_define_MZ_ZOOM_OPTIONS } from './chunk-OQDUDFMG.js'

// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? (val) => !!map[val.toLowerCase()]
    : (val) => !!map[val]
}
function includeBooleanAttr(value) {
  return !!value || value === ''
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {}
    for (let i = 0; i < value.length; i++) {
      const item = value[i]
      const normalized = isString(item)
        ? parseStringStyle(item)
        : normalizeStyle(item)
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key]
        }
      }
    }
    return res
  } else if (isString(value)) {
    return value
  } else if (isObject(value)) {
    return value
  }
}
function parseStringStyle(cssText) {
  const ret = {}
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE)
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return ret
}
function normalizeClass(value) {
  let res = ''
  if (isString(value)) {
    res = value
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i])
      if (normalized) {
        res += normalized + ' '
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + ' '
      }
    }
  }
  return res.trim()
}
function normalizeProps(props) {
  if (!props) return null
  let { class: klass, style } = props
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass)
  }
  if (style) {
    props.style = normalizeStyle(style)
  }
  return props
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false
  let equal = true
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i])
  }
  return equal
}
function looseEqual(a, b) {
  if (a === b) return true
  let aValidType = isDate(a)
  let bValidType = isDate(b)
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false
  }
  aValidType = isArray(a)
  bValidType = isArray(b)
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false
  }
  aValidType = isObject(a)
  bValidType = isObject(b)
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false
    }
    const aKeysCount = Object.keys(a).length
    const bKeysCount = Object.keys(b).length
    if (aKeysCount !== bKeysCount) {
      return false
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key)
      const bHasKey = b.hasOwnProperty(key)
      if (
        (aHasKey && !bHasKey) ||
        (!aHasKey && bHasKey) ||
        !looseEqual(a[key], b[key])
      ) {
        return false
      }
    }
  }
  return String(a) === String(b)
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val))
}
var PatchFlagNames,
  slotFlagsText,
  GLOBALS_WHITE_LISTED,
  isGloballyWhitelisted,
  specialBooleanAttrs,
  isSpecialBooleanAttr,
  isBooleanAttr,
  isNoUnitNumericStyleProp,
  isKnownHtmlAttr,
  isKnownSvgAttr,
  listDelimiterRE,
  propertyDelimiterRE,
  HTML_TAGS,
  SVG_TAGS,
  VOID_TAGS,
  isHTMLTag,
  isSVGTag,
  isVoidTag,
  toDisplayString,
  replacer,
  EMPTY_OBJ,
  EMPTY_ARR,
  NOOP,
  NO,
  onRE,
  isOn,
  isModelListener,
  extend,
  remove,
  hasOwnProperty,
  hasOwn,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isObject,
  isPromise,
  objectToString,
  toTypeString,
  toRawType,
  isPlainObject,
  isIntegerKey,
  isReservedProp,
  cacheStringFunction,
  camelizeRE,
  camelize,
  hyphenateRE,
  hyphenate,
  capitalize,
  toHandlerKey,
  hasChanged,
  invokeArrayFns,
  def,
  toNumber,
  _globalThis,
  getGlobalThis
var init_shared_esm_bundler = __esm({
  'node_modules/@vue/shared/dist/shared.esm-bundler.js'() {
    init_define_MZ_ZOOM_OPTIONS()
    PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `HYDRATE_EVENTS`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`,
    }
    slotFlagsText = {
      [1]: 'STABLE',
      [2]: 'DYNAMIC',
      [3]: 'FORWARDED',
    }
    GLOBALS_WHITE_LISTED =
      'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
    isGloballyWhitelisted = makeMap(GLOBALS_WHITE_LISTED)
    specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`
    isSpecialBooleanAttr = makeMap(specialBooleanAttrs)
    isBooleanAttr = makeMap(
      specialBooleanAttrs +
        `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`,
    )
    isNoUnitNumericStyleProp = makeMap(
      `animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`,
    )
    isKnownHtmlAttr = makeMap(
      `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`,
    )
    isKnownSvgAttr = makeMap(
      `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`,
    )
    listDelimiterRE = /;(?![^(]*\))/g
    propertyDelimiterRE = /:(.+)/
    HTML_TAGS =
      'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot'
    SVG_TAGS =
      'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view'
    VOID_TAGS =
      'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'
    isHTMLTag = makeMap(HTML_TAGS)
    isSVGTag = makeMap(SVG_TAGS)
    isVoidTag = makeMap(VOID_TAGS)
    toDisplayString = (val) => {
      return val == null
        ? ''
        : isArray(val) ||
          (isObject(val) &&
            (val.toString === objectToString || !isFunction(val.toString)))
        ? JSON.stringify(val, replacer, 2)
        : String(val)
    }
    replacer = (_key, val) => {
      if (val && val.__v_isRef) {
        return replacer(_key, val.value)
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2]) => {
              entries[`${key} =>`] = val2
              return entries
            },
            {},
          ),
        }
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()],
        }
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val)
      }
      return val
    }
    EMPTY_OBJ = true ? Object.freeze({}) : {}
    EMPTY_ARR = true ? Object.freeze([]) : []
    NOOP = () => {}
    NO = () => false
    onRE = /^on[^a-z]/
    isOn = (key) => onRE.test(key)
    isModelListener = (key) => key.startsWith('onUpdate:')
    extend = Object.assign
    remove = (arr, el) => {
      const i = arr.indexOf(el)
      if (i > -1) {
        arr.splice(i, 1)
      }
    }
    hasOwnProperty = Object.prototype.hasOwnProperty
    hasOwn = (val, key) => hasOwnProperty.call(val, key)
    isArray = Array.isArray
    isMap = (val) => toTypeString(val) === '[object Map]'
    isSet = (val) => toTypeString(val) === '[object Set]'
    isDate = (val) => val instanceof Date
    isFunction = (val) => typeof val === 'function'
    isString = (val) => typeof val === 'string'
    isSymbol = (val) => typeof val === 'symbol'
    isObject = (val) => val !== null && typeof val === 'object'
    isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch)
    }
    objectToString = Object.prototype.toString
    toTypeString = (value) => objectToString.call(value)
    toRawType = (value) => {
      return toTypeString(value).slice(8, -1)
    }
    isPlainObject = (val) => toTypeString(val) === '[object Object]'
    isIntegerKey = (key) =>
      isString(key) &&
      key !== 'NaN' &&
      key[0] !== '-' &&
      '' + parseInt(key, 10) === key
    isReservedProp = makeMap(
      ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    )
    cacheStringFunction = (fn) => {
      const cache = Object.create(null)
      return (str) => {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
      }
    }
    camelizeRE = /-(\w)/g
    camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
    })
    hyphenateRE = /\B([A-Z])/g
    hyphenate = cacheStringFunction((str) =>
      str.replace(hyphenateRE, '-$1').toLowerCase(),
    )
    capitalize = cacheStringFunction(
      (str) => str.charAt(0).toUpperCase() + str.slice(1),
    )
    toHandlerKey = cacheStringFunction((str) =>
      str ? `on${capitalize(str)}` : ``,
    )
    hasChanged = (value, oldValue) => !Object.is(value, oldValue)
    invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg)
      }
    }
    def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value,
      })
    }
    toNumber = (val) => {
      const n = parseFloat(val)
      return isNaN(n) ? val : n
    }
    getGlobalThis = () => {
      return (
        _globalThis ||
        (_globalThis =
          typeof globalThis !== 'undefined'
            ? globalThis
            : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
            ? global
            : {})
      )
    }
  },
})

export {
  makeMap,
  isGloballyWhitelisted,
  isSpecialBooleanAttr,
  includeBooleanAttr,
  normalizeStyle,
  normalizeClass,
  normalizeProps,
  isHTMLTag,
  isSVGTag,
  looseEqual,
  looseIndexOf,
  toDisplayString,
  EMPTY_OBJ,
  EMPTY_ARR,
  NOOP,
  NO,
  isOn,
  isModelListener,
  extend,
  remove,
  hasOwn,
  isArray,
  isMap,
  isSet,
  isFunction,
  isString,
  isSymbol,
  isObject,
  isPromise,
  toRawType,
  isPlainObject,
  isIntegerKey,
  isReservedProp,
  camelize,
  hyphenate,
  capitalize,
  toHandlerKey,
  hasChanged,
  invokeArrayFns,
  def,
  toNumber,
  getGlobalThis,
  init_shared_esm_bundler,
}
//# sourceMappingURL=chunk-6FPK2LN7.js.map
