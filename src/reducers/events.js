// 子reducerはactionをimportしてくる
import { READ_EVENTS } from '../actions/events';
// jsonを整形する
import _ from 'lodash'

// 関数としてreducerを定義する(引数はstateとactionの2つを持つ)
export default (events = {}, action) => {
  // actionのtypeによって処理を分岐させる
  switch(action.type) {
    // read_eventsが呼ばれた時に状態を変更する
    // actionの中にresponseの情報が乗っている
    case READ_EVENTS:
      // lodashでjson dataを1{}, 2{}..のような形に整形する事が出来るよ~=~！
      return _.mapKeys(action.response.data, 'id')
    default:
    // action typeが取得出来ない時は何もせずに返す
      return events
  }
}