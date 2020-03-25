import React from "react";
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./react-styled-nhs/NHSComponents";
import { withFormsy } from "formsy-react";
import NHSCheckbox from "./react-styled-nhs/NHSCheckbox";

class NHSFormsyCheckboxIndividual extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.target.checked);
    }

    render() {
        // An error message is passed only if the component is invalid
        const errorMessage = this.props.errorMessage;

        return (
            //TODO: key
            <NHSFormGroup>
                {/*<NHSFormLabel>{this.props.label}</NHSFormLabel>*/}
                {/*<NHSFormHint>{this.props.help}</NHSFormHint>*/}
                {/*/!*name key type props*!/*/}
                {/*<NHSFormControl onChange={this.changeValue} value={this.props.value || ''} name={this.props.name} key={this.props.key} type={this.props.type}/>*/}
                {/*/!*TODO: ERROR MESSAGE*!/*/}

                <NHSFormLabel>{this.props.label}</NHSFormLabel>
                <NHSFormHint>{this.props.help}</NHSFormHint>
                <NHSCheckbox onChange={this.changeValue} name={this.props.name} value={true} key={this.props.key} />
                <span>{errorMessage}</span>
            </NHSFormGroup>
        );
    }
}

export default withFormsy(NHSFormsyCheckboxIndividual);
