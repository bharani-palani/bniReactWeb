import React from "react";
import PropTypes from "prop-types";

const CreateBank = props => {
  const { id, name } = props;
  const bankArray = Array(10).fill(10);
  return (
    <div className="settings">
      <div className="form-group mt-15">
        <input type="text" className="form-control" placeholder="Bank name" />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Account number"
        />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="IFSC code" />
      </div>
      <div className="form-group">
        <button className="btn btn-bni btn-block">Submit</button>
      </div>
      <h5 className="heading">List of banks</h5>
      <div className="grid-2 form-group backendConfigureSection">
        <div className="header">
          <i className="fa fa-cog" />
        </div>
        <div className="header">Bank name</div>
        {bankArray.map((cat, i) => {
          return (
            <>
              <div>
                <i class="fa fa-minus-circle danger"></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=""
                  class="form-control"
                  defaultValue={`Bank - ${i}`}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

CreateBank.propTypes = {
  property: PropTypes.string
};
CreateBank.defaultProps = {
  property: "String name"
};

export default CreateBank;
