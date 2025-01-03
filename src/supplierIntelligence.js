import { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class SupplierIntelligence extends Component {
  render() {
    return (
      <div>
        <div className="supplySolution">
          <div className="supplySolutionText">
            <h1>OPTIMAL FOR PRODUCTION AND DUE DILIGENCE</h1>
            <p>
              <strong>
                Perform comprehensive checks of both direct and indirect
                suppliers in hours, not weeks, with reliable supplier
                intelligence you can depend on.
              </strong>{" "}
              Say goodbye to unreliable data and endless manual searches.
            </p>
            <p>Global intuitive platform provides:</p>
            <ul>
              <li>Complete company profiles</li>
              <li>Side-by-Side Supplier Analysis</li>
              <li>Advanced search with over 25 customizable filters</li>
              <li>
                Portfolio evaluation for assessing multiple suppliers at once
              </li>
              <li>Collaborative Workspace</li>
              <li>Case Tracking and Management</li>
            </ul>
          </div>
          <div className="supplySolutionTextImg">
            <img
              src="https://global.craft.co/wp-content/uploads/2023/12/Supplier-Risk-Data-Laptop.png"
              alt="supplier-risk"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SupplierIntelligence;
