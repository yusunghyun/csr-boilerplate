import {
  PropsWithChildren,
  ReactElement,
  ValidationMap,
  WeakValidationMap,
} from 'react';

export interface VFC<P = {}> {
  (props: P, context?: any): ReactElement<P, any>;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  displayName?: string;
}

export interface FC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<P, any>;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  displayName?: string;
}
