import React, {useState} from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import SelectableContext from "react-bootstrap/SelectableContext";

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

  return (
    <div className="b-0">
      <h5 className="text-center">Type expenditures for current month</h5>
      <div className="tableFixHead">
        <table className="table table-condensed">
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
