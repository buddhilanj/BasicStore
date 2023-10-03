import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const side = Math.floor(width * 0.7);
const IMAGE_MARGIN = 10;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  carousel: {
    height: side + 2 * IMAGE_MARGIN,
    width,
  },
  imageView: {
    height: side,
    width: width - 2 * IMAGE_MARGIN,
    margin: IMAGE_MARGIN,
  },
  normalText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
