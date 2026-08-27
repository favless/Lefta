import TabButton from "../buttons/TabButton";

import "../../css/sections/SideMenu.css";

function SideMenu() {
  return (
    <div className="sidemenu">
      <div className="sidemenu-container">
        <TabButton name="Calendar" icon="calendar" />
        <TabButton name="Categories" icon="cog" />
        <TabButton name="Settings" icon="cog" />
      </div>
    </div>
  );
}

export default SideMenu;
