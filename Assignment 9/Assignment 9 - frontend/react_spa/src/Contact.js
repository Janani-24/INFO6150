import React from "react";
import NavBar from './components/Navbar';
const location = [
  {
    id: 1,
    name: "Franklin Park Zoo",
    address: "1 Franklin Park Rd, Boston, MA 02121",
    contact: "Phone: (617) 541-5466"
  },
  {
    id: 2,
    name: "Southwick's Zoo",
    address: "2 Southwick St, Mendon, MA 01756",
    contact: "Phone: (508) 883-9182"
  },
  {
    id: 3,
    name: "Roger Williams Park Zoo",
    address: "1000 Elmwood Ave, Providence, RI 02907",
    contact: "Phone: (401) 785-3510"
  },
  {
    id: 4,
    name: "Central Park Zoo",
    address: "East 64th Street, New York, NY 10021",
    contact: "Phone: (212) 439-6500"
  }
];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
          width: "50%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto",
          backgroundColor:"#FFFFFF"
        }}
      >
        <p>
          <strong>{props.spot.name}</strong>
        </p>
        <p>{props.spot.address}</p>
        <p>{props.spot.contact}</p>
      </div>
    </li>
    
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {location.map(spot => {
        return <CardListItem spot={spot} key={spot.id} />;
      })}
    </ul>
  );
};

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <CardList />
    </div>
  );
}
