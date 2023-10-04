import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
    alignItems: 'center',
  },
  thumbnail: {
    height: 100,
    width: 100,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    margin: 10,
    textAlign: 'left',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
