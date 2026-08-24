import TabButton from "../buttons/TabButton";

import "../../css/sections/SideMenu.css";

function SideMenu() {
  return (
    <div className="sidemenu">
      <div className="sidemenu-container">
        <TabButton name="Calendar" icon="calendar" />
        <TabButton name="Categories" icon="settings" />
        <TabButton name="Settings" icon="settings" />
      </div>
    </div>
  );
}

export default SideMenu;
