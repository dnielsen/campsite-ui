import React from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment-timezone";
import { Field } from "formik";
import { StyledInput } from "../styled/styled";

interface Props {
  name: string;
}

function DateTimeField(props: Props) {
  return (
    <Field name={props.name}>
      {/*TODO types*/}
      {({ field, form }: any) => (
        <DateTime
          name={props.name}
          {...field}
          onChange={(date) =>
            form.setFieldValue(props.name, moment(date).toDate())
          }
          renderInput={(props) => {
            return <StyledInput {...props} />;
          }}
        />
      )}
    </Field>
  );
}

export default DateTimeField;
