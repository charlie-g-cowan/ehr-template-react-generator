import React from "react";
import { Input, RadioGroup } from 'formsy-react-components';
import { NHSFormControl, NHSFormGroup, NHSFormHint, NHSFormLabel } from "./nhsuk-frontend-react/NHSComponents";

function JsonFormInputToNHSReact(jsonFormInputObject) {
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
    return <NHSFormGroup>
        <fieldset className="nhsuk-fieldset" aria-describedby="example-hint">
            <legend className="nhsuk-fieldset__legend">
                {jsonFormInputObject.label}
            </legend>
            <NHSFormHint>
                {jsonFormInputObject.help}
            </NHSFormHint>
            <div className="nhsuk-radios" key={jsonFormInputObject.key}>
                {jsonFormInputObject.inputOptions.map((option) => {
                    return <div className="nhsuk-radios__item">
                        <input className="nhsuk-radios__input" name={jsonFormInputObject.name} type="radio"
                               value={option.value}/>
                        <label className="nhsuk-label nhsuk-radios__label">
                            {option.label}
                        </label>
                    </div>;
                })
                }
            </div>
        </fieldset>
    </NHSFormGroup>;
    return <RadioGroup name={jsonFormInputObject.name}
                       key={jsonFormInputObject.key}
                       label={jsonFormInputObject.label}
                       help={jsonFormInputObject.help}
                       options={jsonFormInputObject.inputOptions}
                       required
    />;
}

function jsonFormTextInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="text"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
}

function jsonFormIntegerInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="number"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
}

function jsonFormDecimalInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="number"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
}

function jsonFormDatetimeInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="datetime-local"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
}

function jsonFormDateInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="date"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
}

function jsonFormTimeInputToReactInput(jsonFormInputObject) {
    return <NHSFormGroup>
        <NHSFormLabel>{jsonFormInputObject.label}</NHSFormLabel>
        <NHSFormHint>{jsonFormInputObject.help}</NHSFormHint>
        <NHSFormControl name={jsonFormInputObject.name} type="time"
                        key={jsonFormInputObject.key}/>
    </NHSFormGroup>;
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

export default JsonFormInputToNHSReact;
