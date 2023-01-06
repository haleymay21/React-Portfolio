import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <div>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
        </div>
      </section>
    </div>
  );
}

export default Header;
