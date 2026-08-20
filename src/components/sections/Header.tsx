import Icon from "../tools/Icon";

function Header() {
  return (
    <header>
      <div className="left">
        <Icon type="lefta" />
        <span>Lefta</span>
      </div>
      <div className="right">
        <span>ver. 0.0.1</span>
      </div>
    </header>
  );
}

export default Header;
