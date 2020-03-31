# EHR Template React Generator

This module takes a simplified JSON that represents the key data needed to represent a webTemplate as inputs, as returned by [ehr-template-processor](https://github.com/charlie-g-cowan/ehr-template-processor), and converts it into a React Formsy form, with either standard Formsy stylings or NHS Frontend style stylings.

## Installation
Simply clone (or add as submodule), and run `npm install`.

## API
- [JsonFormInputToReact(jsonFormInputObject)](#JsonFormInputToReact)
- [JsonFormInputToNHSReact(jsonFormInputObject)](#JsonFormInputToNHSReact)

### <a id="JsonFormInputToReact">JsonFormInputToReact(jsonFormInputObject)</a>
##### Arguments:
`jsonFormInputObject`: a JSON tree that is the webTemplate property of a response from a get request for a template from a CDR.
##### Returns:
A React component containing Formsy inputs that can be placed into a Formsy form.
##### Example:
Say that you are iterating over a flat simplified JSON object as returned by `treeTrawlGettingFlatInputs` from **ehr-template-processor**. Run this function for each member of that list, and it will generate React code for each input.
```js
    {resultOfTreeTrawlGettingFlatInputs.map((jsonInputObject) => {
        return JsonFormInputToReact(jsonInputObject)
    })}
```

### <a id="JsonFormInputToNHSReact">JsonFormInputToNHSReact(jsonFormInputObject)</a>
##### Arguments:
`jsonFormInputObject`: an input object as returned as subtrees from the results of `treeTrawlGettingFlatInputs`/`treeTrawlGettingStructuredInputs` from **ehr-template-processor**, or as the direct result of `inputToJsonFormInput` from that module.
##### Returns:
A React component containing NHS styled Formsy inputs that can be placed into a Formsy form.
##### Example:
Say that you are iterating over a flat simplified JSON object as returned by `treeTrawlGettingFlatInputs` from **ehr-template-processor**. Run this function for each member of that list, and it will generate React code for each input.
```js
    {resultOfTreeTrawlGettingFlatInputs.map((jsonInputObject) => {
        return JsonFormInputToNHSReact(jsonInputObject)
    })}
```
or
```js
    return JsonFormInputToNHSReact(inputToJsonFormInput(someSubTreeOfWebTemplate));
```

## Author

- [Charlie Cowan](https://github.com/charlie-g-cowan)

## License

Licensed under the MIT License. See LICENSE for more details.
