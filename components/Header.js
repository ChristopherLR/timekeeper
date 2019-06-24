

const Header = () => (
  <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
    <div style={headerStyle}>
      Timekeeper
    </div>
  </div>

);


const headerStyle = {
  dispkay: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10%',
  width: '70%',
  textAlign: 'center',
  fontSize: 30,
  borderWidth: '0px 0px 2px 0px',
  borderStyle: 'solid',
  borderColor: 'gray'
};

export default Header;