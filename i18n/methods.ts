import { TranslateOptions } from "i18n-js"
import { TxKeyPath } from "./i18n"
import i18n from "@/lib/i18n"
/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: TxKeyPath, options?: TranslateOptions) {
    return key ? i18n.t(key, options) : null
}
