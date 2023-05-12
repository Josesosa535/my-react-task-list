/* eslint-disable react/prop-types */
function Header(props) {
  const { titulo } = props;
  return (
    <div>
      <h1 className="tituloApp">{titulo}</h1>
    </div>
  );
}

export default Header;
