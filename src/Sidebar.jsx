import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="col-lg-1 collumn  hie">
     
        <ul className="sidebar-menu bg-color center" >
          <li>Efficency<br />53%</li>
          <li>stitchech<br />12227909</li>
          <li>A.Speed<br />601</li>
          <li>Running<br />3</li>
          <li>Stopped<br />5</li>
          <li>All<br />8</li>
        </ul>
      </div>

  );
}

export default Sidebar;
