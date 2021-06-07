import * as Yup from 'yup'
export const initialValues = {
    search: ''
}
export const getValidationSchema = () =>
    Yup.object().shape({
        search: Yup.string().min(3, "Search must be at least three letters")
    })