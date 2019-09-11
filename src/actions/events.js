// action
// type: key => typeはユニーク
// アクションクリエイターを実装する必要がある
// 他のファイルで使えるようにexportしておく
// この後reducerでも使うので変数を再利用出来るようにしておく

// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
export const READ_EVENTS = 'READ_EVENTS'

// first action creater
// export const increment = () => ({
//   type: INCREMENT
// })

// // second action creater
// export const decrement = () => ({
//   type: DECREMENT
// })

export const readEvents = () => ({
  type: READ_EVENTS
})
