import { reduce } from 'lodash';

export const compose = (fn1: Function, ...funcs: Array<Function>) =>
  reduce(funcs, (prevFn, nextFn) => (props: unknown) => prevFn(nextFn(props)), fn1);
