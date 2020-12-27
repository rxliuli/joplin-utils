import zhCN from '../i18n/zhCN'
import en from '../i18n/en'
import i18next, { TOptions } from 'i18next'

//region 类型定义

// returns the same string literal T, if props match, else never
type CheckDictString<T extends string, O> = T extends `${infer A}.${infer B}`
  ? A extends keyof O
    ? `${A}.${Extract<CheckDictString<B, O[A]>, string>}`
    : never
  : T extends keyof O
  ? T
  : never

// returns the property value from object O given property path T
type GetDictValue<T extends string, O> = T extends `${infer A}.${infer B}`
  ? A extends keyof O
    ? GetDictValue<B, O[A]>
    : never
  : T extends keyof O
  ? O[T]
  : never

// retrieves all variable placeholder names as tuple
type Keys<S extends string> = S extends ''
  ? []
  : S extends `${infer _}{{${infer B}}}${infer C}`
  ? [B, ...Keys<C>]
  : never

// substitutes placeholder variables with input values
type Interpolate<
  S extends string,
  I extends Record<Keys<S>[number], string>
> = S extends ''
  ? ''
  : S extends `${infer A}{{${infer B}}}${infer C}`
  ? `${A}${I[Extract<B, keyof I>]}${Interpolate<C, I>}`
  : never

//endregion

type Dict = typeof zhCN | typeof en

export enum LanguageEnum {
  ZhCN = 'zhCN',
  En = 'en',
}

export class I18nLoader {
  constructor() {}

  /**
   * 加载国际化
   */

  async load(language: LanguageEnum) {
    await i18next.init({
      lng: language,
      resources: {
        en: {
          translation: en,
        },
        zhCN: {
          translation: zhCN,
        },
      },
    })
  }

  /**
   * 根据 key 获取翻译的文本
   * @param key
   */
  getText<K extends string>(
    key: keyof Dict | (K & CheckDictString<K, Dict>),
  ): GetDictValue<K, Dict>
  getText<
    D extends Dict & Record<string, string>,
    K extends keyof D,
    I extends Record<Keys<D[K]>[number], string>
  >(k: K, args: I): Interpolate<D[K], I>
  getText<K extends string>(
    key: keyof Dict | (K & CheckDictString<K, Dict>),
    args?: TOptions,
  ): GetDictValue<K, Dict> {
    return i18next.t(key, args)
  }
}
