import React from "react";
import { Input, RadioGroup } from 'formsy-react-components';

function JsonFormInputToReact(jsonFormInputObject) {
    switch(jsonFormInputObject.type) {
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
            if (jsonFormInputObject.numberType === 'integer') {
                return jsonFormIntegerInputToReactInput(jsonFormInputObject);
            } else if (jsonFormInputObject.numberType === 'decimal') {
                return jsonFormDecimalInputToReactInput(jsonFormInputObject);
            }
            return;
            break;
        default:
            console.log(jsonFormInputObject.type);
            return null;
    }
}

function jsonFormOptionsToReactRadioList(jsonFormInputObject) {
    return <RadioGroup name={jsonFormInputObject.name}
                       key={jsonFormInputObject.key}
                       label={jsonFormInputObject.label}
                       help={jsonFormInputObject.help}
                       options={jsonFormInputObject.inputOptions}
                       required
    />;
}

function jsonFormTextInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="text"/>;
}

function jsonFormIntegerInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="number"/>;
}

function jsonFormDecimalInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="number"/>;
}

function jsonFormDatetimeInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="datetime-local"/>;
}

function jsonFormDateInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="date"/>;
}

function jsonFormTimeInputToReactInput(jsonFormInputObject) {
    return <Input name={jsonFormInputObject.name} key={jsonFormInputObject.key} label={jsonFormInputObject.label} help={jsonFormInputObject.help} type="time"/>;
}

function jsonFormTextInputWithSuggestionsAndNoFreeTextToReactInput(jsonFormInputObject) {
    return <div>
        <input/>
        <datalist id="datalist">
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
        </datalist>
    </div>;
}

export default JsonFormInputToReact;
