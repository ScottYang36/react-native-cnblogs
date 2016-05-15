import React, {
	Dimensions,
	Navigator
} from 'react-native';

const { width } = Dimensions.get('window');

const baseConfig = Navigator.SceneConfigs.FloatFromRight;

const popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
	edgeHitWidth: width / 3
});

const fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
	edgeHitWidth: width
});

export const customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
	gestures: {
		pop: fullPopGestureConfig
	}
});

export const customFloatFromRight = Object.assign({}, baseConfig, {
	gestures: {
		pop: popGestureConfig
	}
});

