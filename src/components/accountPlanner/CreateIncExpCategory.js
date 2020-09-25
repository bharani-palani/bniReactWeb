import React from "react";
import PropTypes from "prop-types";

const CreateIncExpCategory = props => {
    // const {id, name} = props;
    const catArray = Array(10).fill(10);
    return (
        <div>
             <ul className="list-group">
            {
                catArray.map((cat, i) => <li className="list-group-item">Cat - {i}</li>)
            }
            </ul>
            <div className="form-group mt-15">
                <input type="text" maxLength="23" className="form-control" placeholder="Category name" />
            </div>
            <div className="form-group">
                <button className="btn btn-bni btn-block">Submit</button>
            </div>
        </div>
    );
}

CreateIncExpCategory.propTypes = {
  property: PropTypes.string,
};
CreateIncExpCategory.defaultProps = {
  property: "String name",
};

export default CreateIncExpCategory;