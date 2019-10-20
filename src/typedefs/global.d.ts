import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    hook?: any;
  }
}
