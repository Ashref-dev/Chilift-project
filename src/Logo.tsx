import logo from "./assets/logo_vector_black.svg";
function Logo(props: any) {
  return (
    <img src={logo} alt="Chilift Logo" className={`${props.className} `} />
  );
}

export default Logo;
