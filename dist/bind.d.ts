import type { Action, Store } from 'redux';
import { BoundStore } from './types';
export declare const bind: <S, A>(store: Readonly<Store<S, Action<A>>>) => BoundStore<S, A>;
