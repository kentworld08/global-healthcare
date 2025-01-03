import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
class SupplySolutionLinks extends Component {
  render() {
    return (
      <div className="supplySolutionLink">
        <NavLink
          className="solutionlinks"
          activeclassname="activeLink"
          exact="true"
          to="/SupplierIntelligence"
        >
          <img
            src="	https://global.craft.co/wp-content/uploads/2024/02/st.svg"
            alt="intelligence"
          />
          Supplier Intelligence
        </NavLink>
        <NavLink
          className="solutionlinks"
          activeclassname="activeLink"
          exact="true"
          to="/supplyChainRiskManagement"
        >
          <img
            src="https://global.craft.co/wp-content/uploads/2023/12/Supply-Chain-Risk-Icon-gradient.svg"
            alt="chain-gradient"
          />
          Supply Chain Risk Management
        </NavLink>
        <NavLink
          activeclassname="activeLink"
          className="solutionlinks"
          exact="true"
          to="/SupplyRiskManagement"
        >
          <img
            src="	https://global.craft.co/wp-content/uploads/2024/02/dd.svg"
            alt="health-content"
          />
          SupplyRiskManagement
        </NavLink>
      </div>
    );
  }
}
export default SupplySolutionLinks;
