import {
	NavigationScreenProp,
	NavigationState,
	NavigationParams as ReactNavigationParams,
} from 'react-navigation';

export type NavigationParams = NavigationScreenProp<NavigationState, ReactNavigationParams>;
