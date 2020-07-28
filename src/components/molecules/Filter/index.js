import styled from '@emotion/styled'
import Radio from '../../atoms/Radio'
import styles from './filter.styles.js'

const Legend = styled('legend')(styles.legend)

const Filter = ({ heading, data, name, onChange, className }) => {
  return (
    <fieldset className={className}>
      <Legend>{heading}</Legend>
      {data.map(item => (
        <div key={item.value}>
          <Radio
            id={`${name}-${item.value}`}
            name={name}
            onChange={onChange}
            {...item}
          />
        </div>
      ))}
    </fieldset>
  )
}

export default Filter
