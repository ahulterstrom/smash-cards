import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// @ts-ignore
const CardEditForm = ({ card }) => (
  <div>
    <h1>{JSON.stringify(card)}</h1>
  </div>
);

export default CardEditForm;
