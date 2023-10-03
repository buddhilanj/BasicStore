import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const marginBetweenItems = 10;

export const ITEM_WIDTH_MIN = 100 + marginBetweenItems;

const getStyles = (itemsInRow: number) => {
  const side = Math.floor(width / itemsInRow - marginBetweenItems);
  return StyleSheet.create({
    container: {
      borderRadius: 10,
      marginHorizontal: marginBetweenItems / 2,
      marginVertical: marginBetweenItems / 2,
      flexDirection: 'column',
      width: side,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: side,
      width: side,
    },
  });
};

export default getStyles;
