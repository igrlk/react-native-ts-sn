import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import AsyncStorage from 'library/utilities/asyncStorage';
import LandingLogo from 'resources/images/svg/LandingLogo';
import MenuHamburger from 'resources/images/svg/MenuHamburger';
import RequestServiceIcon from 'resources/images/svg/RequestServiceIcon';
import FAQIcon from 'resources/images/svg/FAQIcon';
import { getNavigateTo } from 'library/utilities/navigator';
import { logout } from 'library/utilities/token';
import Loader from 'library/common/commonComponents/Loader';
import { GET_SAMPLES } from 'library/api/samples';
import SubHeader from 'library/common/commonComponents/SubHeader';
import ListOfSamples from 'library/common/commonComponents/ListOfSamples';
import Button from 'library/common/commonComponents/Buttons/Button';
import { NavigationParams } from 'library/common/commonTypes/navigation';

import styles from './landingStyles';

interface LandingProps {
	navigation: NavigationParams;
}

export default function Landing({ navigation }: LandingProps) {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [email, setEmail] = useState('');
	useEffect(() => {
		AsyncStorage.getItem('email').then(r => setEmail(r || ''));
	});

	const [samples, setSamples] = useState([]);
	const { loading, data, refetch } = useQuery(GET_SAMPLES);

	useEffect(() => {
		refetch();
	}, [navigation.state.params]);
	useEffect(() => {
		if (data && data.allSamples) {
			setSamples(data.allSamples);
			console.log(data.allSamples);
			AsyncStorage.setItem('samples', data.allSamples.length);
		}
	}, [data]);

	return (
		<>
			<View style={styles.container}>
				<ScrollView style={styles.containerScroll}>
					<View style={styles.innerContainer}>
						<View style={styles.inner}>
							<LandingLogo />
							<Text style={styles.logoText}>Data -> Diagnosis -> Decision</Text>
							<TouchableOpacity style={styles.hamburger} onPress={() => setIsMenuOpened(true)}>
								<MenuHamburger />
							</TouchableOpacity>

							{!loading && (
								<View style={[samples.length === 0 && styles.buttons]}>
									{samples.length < 5 ? (
										<TouchableOpacity
											style={styles.button}
											onPress={getNavigateTo('RequestServiceCheckout')}
										>
											<View style={styles.buttonLogo}>
												<RequestServiceIcon />
											</View>
											<View>
												<Text style={styles.buttonTitle}>Request Service</Text>
												<Text style={styles.buttonText}>Receive sampling kit for diagnostics</Text>
											</View>
										</TouchableOpacity>
									) : (
										<View style={styles.button}>
											<Text style={styles.alreadyOrdered}>You have already ordered 5 samples</Text>
										</View>
									)}

									<TouchableOpacity style={styles.button} onPress={getNavigateTo('FAQ')}>
										<View style={styles.buttonLogo}>
											<FAQIcon />
										</View>
										<View>
											<Text style={styles.buttonTitle}>FAQ</Text>
											<Text style={styles.buttonText}>Learn about our service</Text>
										</View>
									</TouchableOpacity>
								</View>
							)}
						</View>
					</View>
					{loading ? (
						<Loader />
					) : (
						samples.length > 0 && (
							<View style={styles.list}>
								<SubHeader>Sample List</SubHeader>
								<ListOfSamples samples={samples.slice(0, 6)} />
								<Button
									style={styles.buttonViewAll}
									onClick={getNavigateTo('SampleList', { samples })}
								>
									View All
								</Button>
							</View>
						)
					)}
				</ScrollView>
			</View>

			<View style={[styles.menu, isMenuOpened && styles.menuOpened]}>
				<TouchableOpacity onPress={() => setIsMenuOpened(false)} style={styles.menuEmptyArea} />
				<View style={styles.menuContainer}>
					<View style={styles.menuHeader}>
						<Text style={[styles.menuText, styles.menuHeaderTitle]}>My Full name</Text>
						<Text style={styles.menuText} numberOfLines={1} ellipsizeMode='tail'>{email}</Text>
					</View>
					<TouchableOpacity onPress={getNavigateTo('ContactUs')}>
						<Text style={[styles.menuText, styles.menuItem]}>Contact Us</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={logout}>
						<Text style={[styles.menuText, styles.menuItem]}>Logout</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}
