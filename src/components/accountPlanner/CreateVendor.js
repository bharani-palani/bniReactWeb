import React from "react";
import PropTypes from "prop-types";

const CreateVendor = props => {
  const { id, name } = props;
  const bankArray = Array(10).fill(10);
  return (
    <div className="settings">
      <div className="form-group mt-15">
        <input type="text" className="form-control" placeholder="Vendor name" />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Vendor limit"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-bni btn-block">Submit</button>
      </div>
      <h5 className="heading">List of vendors</h5>
      <div className="grid-3 form-group backendConfigureSection">
        <div className="header">
          <i className="fa fa-cog" />
        </div>
        <div className="header">Vendor name</div>
        <div className="header">Vendor limit</div>
        {bankArray.map((cat, i) => {
          return (
            <>
              <div>
                <i class="fa fa-minus-circle danger"></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Vendor name"
                  class="form-control"
                  defaultValue={`Vendor - ${i}`}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Vendor limit"
                  class="form-control"
                  defaultValue={`1000${i}`}
                />
              </div>
            </>
          );
        })}
      </div>
      <div className="form-group"><button className="btn btn-bni btn-block">Update</button></div>
    </div>
  );
};

CreateVendor.propTypes = {
  property: PropTypes.string
};
CreateVendor.defaultProps = {
  property: "String name"
};

export default CreateVendor;
