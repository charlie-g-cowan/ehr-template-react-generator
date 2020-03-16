import React from "react";
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./nhsuk-frontend-react/NHSComponents";
import { withFormsy } from "formsy-react";
import NHSCheckbox from "./nhsuk-frontend-react/NHSCheckbox";
import { NHSFieldset, NHSFieldsetLegend } from "./nhsuk-frontend-react/NHSRadioGroup";

class NHSFormsyRadioGroup extends React.Component {
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

        return (<NHSFormGroup>
                <NHSFieldset className="nhsuk-fieldset">
                    <NHSFieldsetLegend>{this.props.label}</NHSFieldsetLegend>
                    <NHSFormHint>{this.props.help}</NHSFormHint>
                    <div className="nhsuk-radios">
                        {this.props.options.map((option) => {
                            return <div className="nhsuk-radios__item">
                                <input onChange={this.changeValue} className="nhsuk-radios__input" name={this.props.name} type="radio"
                                       value={option.value}/>
                                <label className="nhsuk-label nhsuk-radios__label">
                                    {option.label}
                                </label>
                            </div>;
                        })}
                    </div>
                </NHSFieldset>
                <span>{errorMessage}</span>
            </NHSFormGroup>
        );
    }
}

export default withFormsy(NHSFormsyRadioGroup);