import React, {useState} from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-datetime-picker";


const CreateCreditCardAccount = props => {
    const {id, name} = props;
    let [date, setDate] = useState(new Date());
    return (
        <div>
            <div className="form-group mt-15">
                <input type="text" className="form-control" placeholder="Bank name" />
            </div>
            <div className="form-group">
                <input type="number" className="form-control" placeholder="Credit card number" />
            </div>
            <div className="form-group">
                <div>Statement date</div>
                <div>
                    <DateTimePicker
                        onChange={value => {
                            setDate(value);
                        }}
                        value={date}
                        format={`y-MM-dd`}
                        required
                        clearIcon={null}
                    />
                </div>            
            </div>
            <div className="form-group">
                <button className="btn btn-bni btn-block">Submit</button>
            </div>
        </div>
    );
}

CreateCreditCardAccount.propTypes = {
  property: PropTypes.string,
};
CreateCreditCardAccount.defaultProps = {
  property: "String name",
};

export default CreateCreditCardAccount;