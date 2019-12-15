import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UnitDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  renderCostItems = (key, value) => (
    <div>
      <h3>
        {`${key}: ${value || 'Unknown'}`}
      </h3>
    </div>
  )

  renderElements = (data) => {
    const keys = Object.keys(data);
    return (
      keys.map(k => (k !== 'cost' ? (
        <div>
          <h3>
            {`${k}: ${data[k]}`}
          </h3>
        </div>
      ) :
        <div>
          {this.renderCostItems('Wood Cost', data.cost ?.Wood)}
          {this.renderCostItems('Food Cost', data.cost ?.Food)}
          {this.renderCostItems('Gold Cost', data.cost ?.Gold)}
        </div>)));
  }


  render() {
    return (
      <div className="container">
        <h2 className="title"> Unit Detail Page</h2>
        {this.renderElements(this.props ?.unitDetail)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  unitDetail: state.units.unitDetail
});

UnitDetail.propTypes = {
  unitDetail: PropTypes.object,
};

export default connect(mapStateToProps, null)(UnitDetail);
