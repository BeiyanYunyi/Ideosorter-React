const Container = ({ children }: { children: any }) => (
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
