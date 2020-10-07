import React from "react";
import { Field, FieldProps } from "formik";
import { StyledCheckboxWrapper } from "../styled/styledForm";

interface Props {
  value: string;
  label: string;
  name: string;
}

function Checkbox(props: Props) {
  // TODO types
  function handleChange({ field, form }: FieldProps<string[]>) {
    // If it's already in the value array, remove it, otherwise add it.
    const newFieldValue = field.value.includes(props.value)
      ? field.value.filter((value) => value !== props.value)
      : field.value.concat(props.value);
    form.setFieldValue(props.name, newFieldValue);
  }

  return (
    <Field name={props.name}>
      {(fieldProps: FieldProps) => (
        <StyledCheckboxWrapper>
          <label>
            <input
              type="checkbox"
              {...props}
              checked={fieldProps.field.value.includes(props.value)}
              onChange={() => handleChange(fieldProps)}
            />{" "}
            {props.label}
          </label>
        </StyledCheckboxWrapper>
      )}
    </Field>
  );
}

export default Checkbox;
