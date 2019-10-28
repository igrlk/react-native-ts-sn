import { Dimensions, Platform, PixelRatio } from 'react-native';
import { number } from 'prop-types';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const BASE_WIDTH = 414;

export default function normalize(size: number) {
  const newSize = size * getScale() 

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

function getScale(): number {
  if (SCREEN_WIDTH < SCREEN_HEIGHT) {
    return SCREEN_WIDTH / BASE_WIDTH;
  } else {
    return SCREEN_HEIGHT / BASE_WIDTH
  }
}
