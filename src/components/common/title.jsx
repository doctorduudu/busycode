import React from "react";

const Title = (props) => {
  const { title } = props;

  return (
    <div className="row title">
      <div className="col">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Title;
