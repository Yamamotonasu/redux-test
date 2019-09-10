import { INCREMENT, DECREMENT } from '../actions'

// 初期値を設定する
const initialState = { value: 0 }

// 関数としてreducerを定義する(引数はstateとactionの2つを持つ)
export default (state = initialState, action) => {
  // actionのtypeによって処理を分岐させる
  switch(action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
    // action typeが取得出来ない時は何もせずに返す
      return state
  }
}