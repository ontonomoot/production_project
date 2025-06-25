import { DeepPartial } from "@reduxjs/toolkit"
import { counterActions, countReducer } from "./counterSlice"
import { CounterSchema } from "../types/CounterSchema"

describe('reducer count test', () => {
  test('increment & decrement', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 8
    }
    expect(countReducer(state as CounterSchema, counterActions.increment()))
      .toEqual({ value: 9 })
    expect(countReducer(state as CounterSchema, counterActions.decrement()))
      .toEqual({ value: 7 })
  });
  test('should work with empty state', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 8
    }
    expect(countReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 })
  })

})