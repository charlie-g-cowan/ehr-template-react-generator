import React from "react";
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./react-styled-nhs/src/NHSComponents";
import { withFormsy } from "formsy-react";
import NHSCheckbox from "./react-styled-nhs/src/NHSCheckbox";

class NHSFormsyDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        this.props.setValue(event.target.checked);
    }

    render() {
        // An error message is passed only if the component is invalid
        const errorMessage = this.props.errorMessage;

        return (
            <NHSFormGroup>
                <NHSFormLabel>{this.props.label}</NHSFormLabel>
                <NHSFormHint>{this.props.help}</NHSFormHint>
                <select className="nhsuk-select" onChange={this.changeValue} name={this.props.name} key={this.props.key}>
                    {this.props.children}
                </select>
                <span>{errorMessage}</span>
            </NHSFormGroup>
        );
    }
}

export default withFormsy(NHSFormsyDropdown);
