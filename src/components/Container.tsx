import { ReactElement } from 'react';

const Container = ({
  children,
}: {
  children: ReactElement<any, any>[] | ReactElement<any, any> | string;
}) => (
  <div
    style={{
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
      display: 'block',
      paddingLeft: 24,
      paddingRight: 24,
    }}
  >
    {children}
  </div>
);

export default Container;
