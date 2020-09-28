import React from "react";
import { Field } from "formik";
import { StyledInput } from "../styled/styled";

interface Props {
  name: string;
  type: string;
}

function CustomField(props: Props) {
  return <Field component={StyledInput} {...props} />;
}

export default CustomField;
