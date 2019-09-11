// 全てのreducerを結合する役割(全ての親reducer!)
import { combineReducers } from 'redux'
// カレントディレクトリのcountファイルをimportしておく
import events from './events'

// storeで使うのでreducerをexportしておく
// example combineReducers({ foo, bar, baz })
export default combineReducers({ events })