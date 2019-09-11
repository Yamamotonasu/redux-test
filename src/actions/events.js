// action
// type: key => typeはユニーク
// アクションクリエイターを実装する必要がある
// 他のファイルで使えるようにexportしておく
// この後reducerでも使うので変数を再利用出来るようにしておく

// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

// 外部のapiサーバにアクセスする為のlibrary
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 外部のAPICLientからdataをfetchしてくる

// この中には非同期処理をする事は許されないがredux thunkでは可能！！
// 引数にdispatchしてあげる(thunkのおかげで可能になる)
export const readEvents = () => async dispatch => {
  // 非同期処理を待つ役割を果たす
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  // 非同期処理の結果をdispatchする事が出来る
  // dispatchしたものはreducerにわたす事が出来る
  dispatch({type: READ_EVENTS, response})
}
