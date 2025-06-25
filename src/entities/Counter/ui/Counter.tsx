import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slices/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {

  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)
  console.log(value, 'value');

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="btn-increment" onClick={increment}>Increment</button>
      <button data-testid="btn-decrement" onClick={decrement}>Decrement</button>
    </div>
  )
}
