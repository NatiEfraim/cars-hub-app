import React from "react";

function DefaultLayout(props) {
  return (
    <div className="">
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>Cars-Hub</h1>
          <button>user</button>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
