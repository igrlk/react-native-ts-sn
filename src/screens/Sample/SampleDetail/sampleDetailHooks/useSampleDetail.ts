import { useState, Dispatch, SetStateAction, useReducer, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import { navigateTo, resetNavigation } from 'library/utilities/navigator';
import { SelectItem } from 'library/common/commonComponents/SelectWithSearch';
import { GET_CROP_PATHOGENS, EDIT_SAMPLE } from 'library/api/samples';
import { GraphqlMutation } from 'library/common/commonTypes/graphql';

export default function useSampleDetail(sample: any) {
	const [activeCrop, setActiveCrop] = useState<null | SelectItem>(null);
	const [cropSearchValue, setCropSearchValue] = useState<string>('');
	const [cropSearchValueError, setCropSearchValueError] = useState<null | string>(null);
	const [location, setLocation] = useState<string>(sample.city || '');
	const [locationError, setLocationError] = useState<null | string>(null);
	const [selectedPathogens, dispatch] = useReducer(pathogensReducer, [
		getPathogen(),
		getPathogen(),
		getPathogen(),
	]);

	const [pathogens, setPathogens] = useState([]);

	const [getCropPathogens, { data }] = useLazyQuery(GET_CROP_PATHOGENS);
	useEffect(() => {
		if (activeCrop) {
			dispatch({
				type: 'setPathogens',
				newPathogens: [getPathogen(), getPathogen(), getPathogen()],
			});
			getCropPathogens({ variables: { crop: activeCrop.uuid } });
		}
	}, [activeCrop]);

	useEffect(() => {
		if (data && data.cropDiseases) {
			console.log('data', data.cropDiseases);
			setPathogens(data.cropDiseases.map((disease: any) => ({ ...disease, text: disease.name })));
		}
	}, [data]);

	const [editSampleMutation] = useMutation(EDIT_SAMPLE);

	const makeSampleEditing = () =>
		makeSampleEditingHandler({
			activeCrop,
			location,
			selectedPathogens: selectedPathogens
				.filter(pathogen => pathogen.text.length > 0)
				.map(pathogen => pathogen.uuid || ''),
			setCropSearchValueError,
			setLocationError,
			sample,
			editSampleMutation,
		});

	return {
		cropSearchValue,
		setCropSearchValue,
		activeCrop,
		setActiveCrop,
		location,
		setLocation,
		makeSampleEditing,
		locationError,
		cropSearchValueError,
		pathogens,
		selectedPathogens,
		addPathogen: () => dispatch({ type: 'addPathogen' }),
		setPathogenText: (index: number, text: string) =>
			dispatch({ type: 'setPathogenText', index, text }),
		setPathogen: (index: number, newPathogen: SelectItem) =>
			dispatch({ type: 'setPathogen', index, newPathogen }),
		setPathogens: (newPathogens: SelectItem[]) => dispatch({ type: 'setPathogens', newPathogens }),
	};
}

export async function makeSampleEditingHandler({
	activeCrop,
	selectedPathogens,
	location,
	setCropSearchValueError,
	setLocationError,
	sample,
	editSampleMutation,
}: {
	activeCrop?: SelectItem | null;
	selectedPathogens: string[];
	location: string;
	setCropSearchValueError: Dispatch<SetStateAction<string | null>>;
	setLocationError: Dispatch<SetStateAction<string | null>>;
	sample: any;
	editSampleMutation: GraphqlMutation;
}) {
	const validationResult = validateSampleEditingFields({
		activeCrop,
		location,
		setCropSearchValueError,
		setLocationError,
	});

	if (!validationResult) return;

	await editSampleMutation({
		variables: {
			...sample,
			crop: (activeCrop || {}).uuid,
			zipCode: '',
			diseases: selectedPathogens,
		},
	});

	resetNavigation('Landing', { triggerRerender: true });
}

export function validateSampleEditingFields({
	activeCrop,
	location,
	setCropSearchValueError,
	setLocationError,
}: {
	activeCrop?: SelectItem | null;
	location: string;
	setCropSearchValueError: Dispatch<SetStateAction<string | null>>;
	setLocationError: Dispatch<SetStateAction<string | null>>;
}) {
	let isSuccess = true;
	if (!activeCrop || !(activeCrop.name || activeCrop.text)) {
		setCropSearchValueError('Crop does not exist');
		isSuccess = false;
	} else if ((activeCrop.name || activeCrop.text).trim().length === 0) {
		setCropSearchValueError('Crop cannot be blank');
		isSuccess = false;
	} else {
		setCropSearchValueError(null);
	}

	if (location.trim().length === 0) {
		setLocationError('Location cannot be blank');
		isSuccess = false;
	} else {
		setLocationError(null);
	}

	return isSuccess;
}

export function getPathogen(): SelectItem {
	return {
		value: '',
		text: '',
		description: '',
	};
}

export type PathogensAction =
	| { type: 'addPathogen' }
	| { type: 'setPathogenText'; index: number; text: string }
	| { type: 'setPathogen'; index: number; newPathogen: SelectItem }
	| { type: 'setPathogens'; newPathogens: SelectItem[] };

export type PathogensState = SelectItem[];

export function pathogensReducer(state: PathogensState, action: PathogensAction) {
	switch (action.type) {
		case 'addPathogen':
			return [...state, getPathogen()];
		case 'setPathogenText':
			return state.map((el: SelectItem, index: number) => ({
				...el,
				text: index === action.index ? action.text : el.text,
			}));
		case 'setPathogen':
			return state.map((el: SelectItem, index: number) =>
				action.index === index ? action.newPathogen : el,
			);
		case 'setPathogens':
			const length = action.newPathogens.length;
			switch (length) {
				case 0:
					return [getPathogen(), getPathogen(), getPathogen()];
				case 1:
					return action.newPathogens.concat(getPathogen(), getPathogen());
				case 2:
					return action.newPathogens.concat(getPathogen());
				default:
					return action.newPathogens;
			}
		default:
			return state;
	}
}
