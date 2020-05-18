import { colors, fontSize } from '../../../styles/constants'

const styles = {
  wrapper: {
    width: '500px',
    margin: '0 auto',
    textAlign: 'center',
    border: `2px solid ${colors.darkGrey}`,
    borderRadius: '15px',
    background: colors.lightGrey,
    padding: '16px',
  },
  button: {
    fontSize: fontSize.sm,
    padding: '5px 10px',
    borderRadius: '12px',
    background: colors.mediumGrey,
    color: colors.white,
    border: `1px solid ${colors.darkGrey}`,
  },
  paragraph: {
    fontSize: fontSize.md,
    margin: '0 0 16px 0',
  },
}

export default styles
