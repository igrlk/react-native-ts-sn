import { gql } from 'apollo-boost';

export const ADD_SAMPLES_MUTATION = gql`
	mutation addSamples(
		$fullName: String!
		$address: String!
		$city: String!
		$state: String!
		$zipCode: String!
		$samplesCount: Int!
		$couponCode: String!
	) {
		addSamples(
			params: {
				fullName: $fullName
				address: $address
				city: $city
				state: $state
				zipCode: $zipCode
				samplesCount: $samplesCount
				couponCode: $couponCode
			}
		)
	}
`;

export const GET_SAMPLES = gql`
	query allSamples {
		allSamples {
			uuid
			number
			fullName
			address
			city
			state
			zipCode
			samplesCount
			couponCode
			crop
			created
			diseases
			status
			data
		}
	}
`;

export const GET_CROPS = gql`
	query crops {
		crops {
			uuid
			name
		}
	}
`;

export const GET_CROP_PATHOGENS = gql`
	query cropDiseases($crop: String!) {
		cropDiseases(crop: $crop) {
			uuid
			name
		}
	}
`;

export const EDIT_SAMPLE = gql`
	mutation editSample(
		$uuid: String!
		$fullName: String!
		$address: String!
		$city: String!
		$state: String!
		$zipCode: String!
		$crop: String!
		$diseases: [String]
	) {
		addSamples(
			params: {
				uuid: $uuid
				fullName: $fullName
				address: $address
				city: $city
				state: $state
				zipCode: $zipCode
				crop: $crop
				diseases: $diseases
			}
		)
	}
`;

export const GET_SAMPLE_STATUS = gql`
	query getStatus($uuid: String!) {
		getStatus(uuid: $uuid) {
			uuid
			status
			date
		}
	}
`;

export const SEND_EMAIL_QUERY = gql`
	query sendEmail($email: String!, $title: String!, $body: String!) {
		sendEmail(params: { email: $email, title: $title, body: $body })
	}
`;

export const GET_DIAGNOSTIC_RESULT = gql`
	query getResult($uuid: String!) {
		getResult(uuid: $uuid) {
		pathogen
		result
		key_concern
		}
  	}
`;
