import React from "react";
import PropTypes from "prop-types";

const CreateBank = props => {
    const {id, name} = props;
    const bankArray = Array(10).fill(10);
    return (
        <div>
            <div className="form-group mt-15">
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
            <p><em>Bank list</em></p>
             <ul className="list-group">
            {
                bankArray.map((cat, i) => <li className="list-group-item p-5">Bank - {i}</li>)
            }
            </ul>
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