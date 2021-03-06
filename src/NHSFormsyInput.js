import React from "react";
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./react-styled-nhs/src/NHSComponents";
import { withFormsy } from "formsy-react";

class NHSFormsyInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is passed only if the component is invalid
        const errorMessage = this.props.errorMessage;
        let errorClass = 'nhsuk-form-group';
        let errorClass2 = 'nhsuk-input';
        if (errorMessage) {
            errorClass = "nhsuk-form-group nhsuk-form-group--error";
            errorClass2 = "nhsuk-input nhsuk-input--error";
        }
        return (
            <NHSFormGroup className={errorClass}>
                <NHSFormLabel>{this.props.label}</NHSFormLabel>
                <NHSFormHint>{this.props.help}</NHSFormHint>
                <span className="nhsuk-error-message">{errorMessage}</span>
                <NHSFormControl onChange={this.changeValue} value={this.props.value || ''} name={this.props.name}
                                key={this.props.key} type={this.props.type} className={errorClass2} validations={this.props.validations} validationErrors={this.props.validationErrors}/>
            </NHSFormGroup>
        );
    }
}

export default withFormsy(NHSFormsyInput);
