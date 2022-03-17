import React, { Component, useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
import Sections from "./directory.data";


// class Directory extends Component {

//   constructor() {
//     super();

//     this.state = {
//       sectionData: Sections
//     }
//   }
//   render() {
//     const { sectionData } = this.state

//     return (
// <div className="directory-menu">
//   {
//     sectionData.map(({ id, ...otherSectionProps }) => (
//       <MenuItem key={id} {...otherSectionProps} />
//     ))
//   }
// </div>
//     )
//   }
// }
const Directory = () => {
  const [sectionData, setSectionData] = useState(Sections);


  return (
    <div className="directory-menu">
      {
        sectionData.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}
export default Directory