import { useField } from 'formik'

const Radio = ({ label, ...props }) => {
  const [field] = useField(props)

  // custom handle change
  let handleChange = null
  if (props.handleChange) {
    handleChange = {
      onChange: event => {
        props.onChange(event)
        field.onChange(event)
      },
    }
  }

  return (
    <>
      <input
        type="radio"
        id={props.id || props.name}
        {...field}
        {...props}
        {...handleChange}
      />
      <label htmlFor={props.id || props.name}>{label}</label>
    </>
  )
}

export default Radio
