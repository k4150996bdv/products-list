import React from "react";
import { Formik } from 'formik';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getValidationSchema, initialValues } from '../config';
import { useTranslation } from 'react-i18next';
import "../i18n";  

const SearchInputForm = ({submitHandler}) => {

    const { t} = useTranslation();

    return (
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema.bind(null)}
          onSubmit={submitHandler}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                error={touched['search'] && errors['search']}
                id="search"
                label={t("text.search")}
                fullWidth
                margin="normal"
                name='search'
                onChange={handleChange}
                value={values.name}
                helperText={touched['search'] && errors['search']}
              />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Button type="submit" variant="contained" color="primary">
                  {t("text.search")}
                </Button>
              </Grid>
            </form>
          )}
        </Formik>

    )
}

export default SearchInputForm