import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import image from './img/logo.png';
import Sidebar from './Sidebar';
import MachineCard from './Applic';
import EmployeeProgress from './Progessbar';
import './index.css'; // Import the CSS file
import Header from './Header';
function Appli() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const data = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setResults(filteredResults);
  };

  return (
    <>
          
      <div className="container-fluid" >
        <div className="row justify-content-between">
        
          <Sidebar />
          <div className='order col-lg-3 collumn1 collumn2 mt-5'>
          <EmployeeProgress />
          </div>


          <div className="col-lg-8 collumn1 mt-5 d-flex flex-column align-items-center">
            {/* Search Bar */}
          {/* <div className="search-bar-container">
              <img src={image} alt="Logo" className="logo" />
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <span className="search-icon">
                <FaSearch />
              </span>
            </div>

            {/* Search Results 
            
            <ul className="list-group search-results">
              {results.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
            */}
            
            <MachineCard />
          </div>

          <div className='order2 col-lg-3 collumn1 collumn2 mt-5'>
          <EmployeeProgress />
          </div>
        </div>
      </div>
    </>
  );
}

export default Appli;
