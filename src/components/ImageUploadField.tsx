import React from "react";
import { Field, FieldProps, FormikProps } from "formik";
import imageService from "../services/imageService";

interface Props {
  name: string;
}

// Our backend looks for the `file` name as well. It's the most common used name.
const FORM_DATA_NAME = "file";

function ImageUploadField(props: Props) {
  async function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    // TODO: remove `any`
    form: FormikProps<any>,
  ) {
    // Validate the file.
    if (event.target.validity.valid && event.target.files?.length === 1) {
      // Get the file.
      const [file] = event.target.files;
      // Set up the form data, it's gonna set up for us the needed headers automatically.
      const fd = new FormData();
      fd.append(FORM_DATA_NAME, file);

      // Send the request with the form data to our backend
      // which is gonna upload it to Amazon S3.
      const upload = await imageService.upload(fd);

      // Update the value of the field.
      form.setFieldValue(props.name, upload.url);
    }
  }
  return (
    <Field name={props.name}>
      {({ form }: FieldProps) => (
        <>
          <input
            type={"file"}
            accept={"image/*"}
            onChange={(event) => handleChange(event, form)}
            style={{ display: "none" }}
            name={props.name}
            id={props.name}
          />
          {/*Temporarily we're showing just the image url*/}
          {form.getFieldMeta(props.name).value}
        </>
      )}
    </Field>
  );
}

export default ImageUploadField;
