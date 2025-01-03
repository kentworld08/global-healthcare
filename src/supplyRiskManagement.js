import { Component } from "react";
import "./header.css";

class SupplyRiskManagement extends Component {
  render() {
    return (
      <div>
        <div className="supplySolution">
          <div className="supplySolutionText">
            <h1>
              OPTIMAL FOR PROCUREMENT AND HEALTHCARE SUPPLY CHAIN MANAGEMENT
            </h1>
            <p>
              <strong>
                Gain a comprehensive understanding of potential risks and
                disruptions within your healthcare supply chain through
                real-time alerts and in-depth insights into your suppliers.
              </strong>{" "}
              Highly customizable Supplier Risk Management platform enables you
              to prioritize risks based on their impact on your operations,
              allowing you to focus on critical issues and take proactive
              measures. With Global Healthcare, you gain:
            </p>

            <ul>
              <li>
                Risk Hub: A centralized platform for monitoring high-risk
                healthcare suppliers
              </li>
              <li>
                Real-time alerts and healthcare industry-specific benchmarks
              </li>
              <li>
                Advanced alerts tailored to your healthcare business needs
              </li>
            </ul>
            <p>Plus, all the capabilities in Supplier Intelligence</p>
            <ul>
              <li> Detailed company profiles for healthcare suppliers</li>
              <li>Side-by-side evaluations of supplier performance</li>
              <li> Advanced search with over 25 customizable filters</li>
              <li>
                Portfolio assessment tools for evaluating healthcare supplier
                networks
              </li>
              <li>Collaborative workspace for cross-functional teams</li>
              <li>Case management and tracking features for supplier issues</li>
            </ul>
          </div>
          <div className="supplySolutionTextImg">
            <img
              src="https://global.craft.co/wp-content/uploads/2023/12/Supply-Chain-Risk-Data-Laptop-1.png"
              alt="supplu-data"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SupplyRiskManagement;
