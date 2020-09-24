import React from "react";
import PropTypes from "prop-types";

const CreateBank = props => {
    const {id, name} = props;
    return (
        <div>
            <h5 className="text-center">Create bank account</h5>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Bank name" />
            </div>
            <div className="form-group">
                <input type="number" className="form-control" placeholder="Account number" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="IFSC code" />
            </div>
            <div className="form-group">
                <button className="btn btn-bni btn-block">Submit</button>
            </div>
        </div>
    );
}

CreateBank.propTypes = {
  property: PropTypes.string,
};
CreateBank.defaultProps = {
  property: "String name",
};

export default CreateBank;