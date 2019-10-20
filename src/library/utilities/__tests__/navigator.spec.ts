import { NavigationActions, StackActions } from 'react-navigation';

import {
	_container,
	setNavigatorContainer,
	goBack,
	resetNavigation,
	getResetNavigation,
	navigateTo,
	getNavigateTo,
	getCurrentRoute,
} from '../navigator';

describe('navigator', () => {
	beforeEach(() => setNavigatorContainer({ props: { transitionProps: { navigation: null } } }));
	const setContainer = () =>
		setNavigatorContainer({
			props: {
				transitionProps: {
					navigation: {
						dispatch: jest.fn(),
					},
				},
			},
		});

	describe('setNavigatorContainer', () => {
		it('should change _container', () => {
			expect(_container).toBe(null);
			const navigation = { value: 'some-value' };
			const newContainer = { props: { transitionProps: { navigation } } };
			setNavigatorContainer(newContainer);
			expect(_container).toBe(navigation);
		});
	});

	describe('goBack', () => {
		it('should call dispatch on container with NavigationActions.back()', () => {
			setContainer();
			goBack();

			expect(_container.dispatch).toHaveBeenCalledWith(NavigationActions.back());
		});
	});

	describe('resetNavigation', () => {
		it('should call dispatch on container with StackActions.reset', () => {
			setContainer();
			const routeName = 'some-route-name';
			const params = { value: 'some-value' };
			resetNavigation(routeName, params);

			expect(_container.dispatch).toHaveBeenCalledWith(
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
		});
	});

	describe('getResetNavigation', () => {
		it('should return fn which use resetNavigation', () => {
			setContainer();
			const routeName = 'some-route-name';
			const params = { value: 'some-value' };
			getResetNavigation(routeName, params)();

			expect(_container.dispatch).toHaveBeenCalledWith(
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
		});
	});

	describe('navigateTo', () => {
		it('should call dispatch on container with NavigationActions.navigate', () => {
			setContainer();
			const routeName = 'some-route-name';
			const params = { value: 'some-value' };
			navigateTo(routeName, params);

			expect(_container.dispatch).toHaveBeenCalledWith(
				NavigationActions.navigate({
					routeName,
					params,
				}),
			);
		});
	});

	describe('getNavigateTo', () => {
		it('should return fn which call navigateTo', () => {
			setContainer();
			const routeName = 'some-route-name';
			const params = { value: 'some-value' };
			getNavigateTo(routeName, params)();

			expect(_container.dispatch).toHaveBeenCalledWith(
				NavigationActions.navigate({
					routeName,
					params,
				}),
			);
		});
	});

	describe('getCurrentRoute', () => {
		it('should return null if there"s no container or no nav in container.state', () => {
			expect(getCurrentRoute()).toBe(null);

			setNavigatorContainer({ props: { transitionProps: { navigation: { state: {} } } } });
			expect(getCurrentRoute()).toBe(null);
		});

		it('should return correct route name', () => {
			setNavigatorContainer({
				props: {
					transitionProps: { navigation: { state: { nav: { routes: ['home'], index: 0 } } } },
				},
			});
			expect(getCurrentRoute()).toBe('home');
		});

		it('should return null', () => {
			setNavigatorContainer({
				props: {
					transitionProps: { navigation: { state: { nav: { routes: ['home'], index: 1 } } } },
				},
			});
			expect(getCurrentRoute()).toBe(null);
		});
	});
});
