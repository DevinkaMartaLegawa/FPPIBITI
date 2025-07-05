function Layout(props) {
    return (
      <div className="content-wrapper">
        <h2>Aplikasi Keuangan</h2>
        {props.children}
      </div>
    );
  }
  
  export default Layout;
  