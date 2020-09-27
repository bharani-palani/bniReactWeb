import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const TypeExpenditureTable = props => {
  const { id, name } = props;
  const [dropDownList, setDropDownList] = useState([
    { id: 0, value: "Dr" },
    { id: 1, value: "Cr" }
  ]);
  const [dropDownSelected, setDropDownSelected] = useState("Dr");
  const [catDropDownList, setCatDropDownList] = useState([
    { id: 0, value: "Mobile bill" },
    { id: 1, value: "Savings" }
  ]);
  const [catDropDownSelected, setCatDropDownSelected] = useState("Savings");

  const onDropDownSelect = id => {
    setDropDownSelected(dropDownList.filter(d => d.id === id)[0].value);
  };
  const onCatDropDownSelect = id => {
    setCatDropDownSelected(catDropDownList.filter(d => d.id === id)[0].value);
  };
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" className="in show" {...props}>
      Clone from last month
    </Tooltip>
  );

  return (
    <div>
      <h5 className="text-center">
          <div className="colorGreen inlineFlex">
            <span className="margin-auto">Type expenditures for current month</span>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              triggerType="hover"
            >
              <i className="fa fa-copy roundedIcon ml-5" />
            </OverlayTrigger>
            <i className={`icon fa fa-circle-o-notch fa-spin fa-2x fa-fw`} />
          </div>
      </h5>
      <div className="tableFixHead">
        <table className="table table-condensed" style={{ width: "700px" }}>
          <thead>
            <tr>
              <th>
                <i className="fa fa-cog" />
              </th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(10)
              .map(u => {
                return (
                  <tr>
                    <td>
                      <>
                        <i
                          onClick={() => false}
                          className="fa fa-minus-circle danger"
                        />
                      </>
                    </td>
                    <td>Test</td>
                    <td>120</td>
                    <td>Cr</td>
                    <td>Savings</td>
                  </tr>
                );
              })}
            <tr>
              <td>
                <>
                  <i
                    onClick={() => false}
                    className="fa fa-minus-circle danger"
                  />
                  <div className="pull-right">
                    <i
                      onClick={() => false}
                      className="fa fa-plus-circle success"
                    />
                  </div>
                </>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="number" className="form-control" />
              </td>
              <td>
                <SelectableContext.Provider value={false}>
                  <Dropdown>
                    <Dropdown.Toggle>
                      {dropDownSelected} <i className="fa fa-chevron-down" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropDownList.map((d, i) => (
                        <Dropdown.Item
                          key={i}
                          onClick={e => {
                            onDropDownSelect(d.id);
                          }}
                        >
                          {d.value}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </SelectableContext.Provider>
              </td>
              <td>
                <SelectableContext.Provider value={false}>
                  <Dropdown>
                    <Dropdown.Toggle>
                      {catDropDownSelected} <i className="fa fa-chevron-down" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {catDropDownList.map((d, i) => (
                        <Dropdown.Item
                          key={i}
                          onClick={e => {
                            onCatDropDownSelect(d.id);
                          }}
                        >
                          {d.value}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </SelectableContext.Provider>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <button className="btn btn-bni btn-block">Save</button>
        </div>
      </div>
    </div>
  );
};

TypeExpenditureTable.propTypes = {
  property: PropTypes.string
};
TypeExpenditureTable.defaultProps = {
  property: "String name"
};

export default TypeExpenditureTable;
