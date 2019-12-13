import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { getUnitsAction } from '../../actions/units/get';
import { filterUnitAction } from '../../actions/units/filter';
import { setUnitDetail } from '../../actions/units/set-unit-detail';
import { Button, Table, Checkbox, Slider } from 'antd';
import { withRouter } from 'react-router-dom';
import './style.scss';

const ButtonGroup = Button.Group;

class Units extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      ages: [
        {id: 0, name: 'All'},
        {id: 1, name: 'Dark'},
        {id: 2, name: 'Feudal'},
        {id: 3, name: 'Castle'},
        {id: 4, name: 'Imperial'},],
      filter: { 
        age: "All", 
        woodValue: null, 
        foodValue: null, 
        goldValue: null,
        woodChecked: false,
        foodChecked: false,
        goldChecked: false,
      }
    };
  }

  componentDidMount() {
    this.props.getUnitsAction()
  }

  handleSetFilter = (key, value) => {
    this.setState(prevState => ({ filter: { ...prevState.filter, [key]: value } }), () => {
      this.props.filterUnitAction(this.state.filter);
    });
  }


  renderAge = age => (
    <Button 
      key={age.id}
      type={age.name === this.state.filter.age ? 'primary' : 'ghost'}
      onClick={() => this.handleSetFilter('age', age.name)}>
        {age.name}
    </Button>
  );

  renderAgesFilter = ages => (
    <>
      <h3 className="ages-title"> Ages </h3>
      <ButtonGroup>
        {ages.map(age => this.renderAge(age))}
      </ButtonGroup>
    </>
  )

  renderCostsFilter = (name, key, sliderValue, checkKey) => (
    <div className="cost-filter-element">
      <Checkbox onChange={() => this.handleSetFilter(checkKey, !this.state.filter[checkKey])}/>
      <div className="margin-horizontal15"> {name} </div>
      <div className="slider">
        <Slider
          onChange={(value) => this.handleSetFilter(key, value)}
          min={0}
          max={200}
          disabled={!this.state.filter[checkKey]} 
        />
      </div>
      <div>{sliderValue}</div>
    </div>
  )

  renderCosts = (costs) => {
    let value = '';
    if (costs?.Wood) {
      value = `Wood: ${costs.Wood}`;
    } if (costs?.Food) {
      value = value?.length > 0 ? (`${value}, Food: ${costs.Food}`) : `Food: ${costs.Food}`;
    } if (costs?.Gold) {
      value = value?.length > 0 ? (`${value}, Gold: ${costs.Gold}`) : `Gold: ${costs.Gold}`;
    }
    return value ? value : 'Unknown';
  }

  columns() {
    return [
      {
        title: "Id",
        key: 'id',
        render: ({ id }) => id,
      },
      {
        title: "Name",
        key: 'name',
        render: ({ name }) => name,
      },
      {
        title: "Age",
        key: 'age',
        render: ({ age }) => age,
      },
      {
        title: "Costs",
        key: 'costs',
        render: ({ cost }) => this.renderCosts(cost)
      },
    ];
  }

  renderTable = data => (
    <div className="table">
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              this.props.setUnitDetail(record);
              this.props.history.push('/unit_detail',{ detail: record });},
          };
        }}
        size="small"
        // rowSelection={rowSelection}
        pagination={{ pageSize: 20 }}
        rowKey={unit => unit.id}
        columns={this.columns()}
        dataSource={data}
      />
    </div>
  )
  
  render() {
    const { ages } = this.state;
    const {units} = this.props;
    console.log('state', this.state, units);
    return (
      <div className="container">
        {this.renderAgesFilter(ages)}
        {this.renderCostsFilter("Wood", "woodValue", this.state.filter.cost?.wood, "woodChecked")}
        {this.renderCostsFilter("Food", "foodValue", this.state.filter.cost?.food, "foodChecked")}
        {this.renderCostsFilter("Gold", "goldValue", this.state.filter.cost?.gold, "goldChecked")}
        {this.renderTable(units)}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUnitsAction,
  filterUnitAction,
  setUnitDetail,
}

const mapStateToProps = state => ({
  units: state.units.filteredData
});

Units.propTypes = {
  getUnitsAction: PropTypes.func,
  filterUnitAction: PropTypes.func,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Units))