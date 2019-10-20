import { NavigationActions, StackActions } from 'react-navigation';

export let _container: any = null;

export function setNavigatorContainer(container: any) {
	_container = container.props.transitionProps.navigation;
}

export function goBack() {
	_container.dispatch(NavigationActions.back());
}

export function resetNavigation(routeName: string, params?: { [key: string]: any }) {
	_container.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName,
					params,
				}),
			],
		}),
	);
}

export function getResetNavigation(routeName: string, params?: { [key: string]: any }) {
	return () => resetNavigation(routeName, params);
}

export function navigateTo(routeName: string, params?: { [key: string]: any }) {
	_container.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}

export function getNavigateTo(routeName: string, params?: { [key: string]: any }) {
	return () => navigateTo(routeName, params);
}

export function getCurrentRoute() {
	if (!_container || !_container.state.nav) {
		return null;
	}

	return _container.state.nav.routes[_container.state.nav.index] || null;
}
