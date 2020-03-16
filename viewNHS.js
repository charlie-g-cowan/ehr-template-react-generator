import React from "react";
import NHSFormsyInput from "./NHSFormsyInput";
import NHSFormsyCheckboxIndividual from "./NHSFormsyCheckboxIndividual";
import NHSFormsyRadioGroup from "./NHSFormsyRadioGroup";

function JsonFormInputToReact(jsonFormInputObject) {
    switch (jsonFormInputObject.type) {
        case "options":
            return jsonFormOptionsToReactRadioList(jsonFormInputObject);
            break;
        case "text":
            if (jsonFormInputObject.suggestions) {
                if (jsonFormInputObject.allowFreeText) {
                    return jsonFormTextInputWithSuggestionsAndNoFreeTextToReactInput(jsonFormInputObject);
                } else {
                    return jsonFormOptionsToReactRadioList(jsonFormInputObject);
                }
            }
            return jsonFormTextInputToReactInput(jsonFormInputObject);
            break;
        case "date":
            return jsonFormDateInputToReactInput(jsonFormInputObject);
            break;
        case "time":
            return jsonFormTimeInputToReactInput(jsonFormInputObject);
            break;
        case "datetime":
            return jsonFormDatetimeInputToReactInput(jsonFormInputObject);
            break;
        case "number":
            if (jsonFormInputObject.validations.numberType === 'integer') {
                return jsonFormIntegerInputToReactInput(jsonFormInputObject);
            } else if (jsonFormInputObject.validations.numberType === 'decimal') {
                return jsonFormDecimalInputToReactInput(jsonFormInputObject);
            }
            return;
            break;
        case "boolean":
            return jsonFormBooleanInputToReactInput(jsonFormInputObject);
            break;
        default:
            console.log(jsonFormInputObject.type);
            return null;
    }
}


function jsonFormBooleanInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyCheckboxIndividual name={jsonFormInputObject.name}
                       key={jsonFormInputObject.key}
                       label={jsonFormInputObject.label}
                       help={jsonFormInputObject.help} value={false}
    />;
}

function jsonFormOptionsToReactRadioList(jsonFormInputObject) {
    return <NHSFormsyRadioGroup name={jsonFormInputObject.name}
                       key={jsonFormInputObject.key}
                       label={jsonFormInputObject.label}
                       help={jsonFormInputObject.help}
                       options={jsonFormInputObject.inputOptions}
        // required
    />;
}

function jsonFormTextInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="text"/>;
}

function jsonFormIntegerInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="number" validations="isInt" />;
}

function jsonFormDecimalInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="number" validations="isFloat" />;
}

function jsonFormDatetimeInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="datetime-local" />;
}

function jsonFormDateInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="date"/>;
}

function jsonFormTimeInputToReactInput(jsonFormInputObject) {
    return <NHSFormsyInput name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label}
                  help={jsonFormInputObject.help} type="time"/>;
}

function jsonFormTextInputWithSuggestionsAndNoFreeTextToReactInput(jsonFormInputObject) {
    return <div>
        <input/>
        <datalist id="datalist">
            <option value="1"/>
            <option value="2"/>
            <option value="3"/>
            <option value="4"/>
            <option value="5"/>
        </datalist>
    </div>;
}

export default JsonFormInputToReact;
