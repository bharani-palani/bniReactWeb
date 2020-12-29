import React from "react";
import PropTypes from "prop-types";

const CreateIncExpCategory = props => {
  // const {id, name} = props;
  const catArray = Array(10).fill(10);
  return (
    <div className="settings">
      <div className="form-group mt-15">
        <input
          type="text"
          maxLength="23"
          className="form-control"
          placeholder="Category name"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-bni">Submit</button>
      </div>
      <h5 className="heading">List of categories</h5>
      <div className="grid-3 form-group backendConfigureSection">
        <div className="header">
          <i className="fa fa-cog" />
        </div>
        <div className="header">Category name</div>
        <div className="header">Vendor</div>
        {catArray.map((cat, i) => {
          return (
            <React.Fragment key={i}>
              <div>
                <i className="fa fa-minus-circle danger"></i>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  defaultValue={`CC - ${i}`}
                />
              </div>
              <div>dropdown</div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="form-group"><button className="btn btn-bni">Update</button></div>
    </div>
  );
};

CreateIncExpCategory.propTypes = {
  property: PropTypes.string
};
CreateIncExpCategory.defaultProps = {
  property: "String name"
};

export default CreateIncExpCategory;
