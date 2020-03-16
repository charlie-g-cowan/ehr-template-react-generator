import React from "react";
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./nhsuk-frontend-react/NHSComponents";
import { withFormsy } from "formsy-react";

class NHSFormsyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is passed only if the component is invalid
        const errorMessage = this.props.errorMessage;
        let errorClass, errorClass2;
        if (errorMessage) {
            errorClass = "nhsuk-form-group--error";
            errorClass2 = "nhsuk-input--error";
        }
        return (
            <NHSFormGroup className={errorClass}>
                <NHSFormLabel>{this.props.label}</NHSFormLabel>
                <NHSFormHint>{this.props.help}</NHSFormHint>
                <span className="nhsuk-error-message">{errorMessage}</span>
                {/*name key type props*/}
                <NHSFormControl onChange={this.changeValue} value={this.props.value || ''} name={this.props.name}
                                key={this.props.key} type={this.props.type} className={errorClass2}/>
                {/*TODO: ERROR MESSAGE*/}
            </NHSFormGroup>
        );
    }
}

export default withFormsy(NHSFormsyInput);
