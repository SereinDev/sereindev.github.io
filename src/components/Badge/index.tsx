import { PropsWithChildren } from 'react';

export default function ({
  children,
  color,
}: PropsWithChildren & {
  color:
    | 'warning'
    | 'info'
    | 'danger'
    | 'success'
    | 'primary'
    | 'secondary'
    | undefined;
}): JSX.Element {
  return <span className={`badge badge--${color || 'primary'}`}>{children}</span>;
}
