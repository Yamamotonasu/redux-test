import { READ_EVENTS } from '../actions/events';

// 初期値を設定する
const initialState = { value: 0 }

// 関数としてreducerを定義する(引数はstateとactionの2つを持つ)
export default (state = {}, action) => {
  // actionのtypeによって処理を分岐させる
  switch(action.type) {
    // read_eventsが呼ばれた時に状態を変更する
    // actionの中にresponseの情報が乗っている
    case READ_EVENTS:
    console.log(action.response.data)
      return state
    default:
    // action typeが取得出来ない時は何もせずに返す
      return state
  }
}