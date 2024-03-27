import { QueryObserverBaseResult } from 'react-query';

interface IQueryResult<TData, TError> extends QueryObserverBaseResult<TData, TError> {
  data: TData;
}

export type TQueryResult<TData = undefined, TError = Error> = IQueryResult<TData, TError>;
