/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
const PageHeader = (props) => {
  const { header, icon } = props;
  return (
    <div className="my-2">
      <div className="flex relative bg-orange-50 p-3 border-b-4 border-black">
        <h2
          className="lg:text-[#6ccd33] lg:text-4xl text-2xl
         font-semibold font-sans"
        >
          {header}
        </h2>
        <span className="absolute top-3 right-2 text-[#ff793f]">{icon}</span>
      </div>
    </div>
  );
};

export default PageHeader;
