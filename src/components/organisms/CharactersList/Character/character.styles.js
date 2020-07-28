import { colors, fontSize } from '../../../../styles/constants'

const styles = {
  wrapper: {
    width: 'calc(25% - 9px)',
    background: colors.darkGrey,
    marginBottom: '12px',
  },
  header: {
    position: 'relative',
  },
  headerDescription: {
    position: 'absolute',
    bottom: '0',
    background: colors.black,
    opacity: '0.7',
    color: colors.white,
    width: '100%',
    padding: '8px 12px',
    boxSizing: 'border-box',
  },
  description: {
    fontSize: fontSize.xs,
    marginTop: '4px',
  },
  image: {
    width: '100%',
  },
}

export default styles
