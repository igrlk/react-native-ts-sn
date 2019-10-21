import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { createAppContainer, NavigationStackRouterConfig } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import 'library/utilities/styles';
import { setNavigatorContainer } from 'library/utilities/navigator';
import { getToken } from 'library/utilities/token';
import { bindDeepLinkingHandlers } from 'library/utilities/deepLinking';

import Login from 'screens/Auth/Login';
import SignUpCreate from 'screens/Auth/SignUp/SignUpCreate';
import SignUpConfirmed from 'screens/Auth/SignUp/SignUpConfirmed';
import SignUpAddPassword from 'screens/Auth/SignUp/SignUpAddPassword';
import ForgotPasswordCreate from 'screens/Auth/ForgotPassword/ForgotPasswordCreate';
import ForgotPasswordConfirmed from 'screens/Auth/ForgotPassword/ForgotPasswordConfirmed';
import Onboarding from 'screens/Onboarding';
import Landing from 'screens/Landing';
import FAQ from 'screens/FAQ';
import RequestServiceCheckout from 'screens/RequestService/RequestServiceCheckout';
import RequestServicePayment from 'screens/RequestService/RequestServicePayment';
import RequestServiceConfirmation from 'screens/RequestService/RequestServiceConfirmation';
import SampleList from 'screens/Sample/SampleList';
import OrderDetail from 'screens/Sample/OrderDetail';
import SampleDetail from 'screens/Sample/SampleDetail';
import DiagnosticResult from 'screens/Sample/DiagnosticResult';
import PDFScreen from 'screens/PDFScreen';

const client = new ApolloClient({
  uri: 'http://sentinel.oioio.ru:8889/graphql',
  request: async operation => {
    const authToken = await getToken();
    operation.setContext({
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : '',
      },
    });
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Login,
    SignUpCreate,
    SignUpConfirmed,
    SignUpAddPassword,
    ForgotPasswordCreate,
    ForgotPasswordConfirmed,
    Onboarding,
    Landing,
    FAQ,
    RequestServiceCheckout,
    RequestServicePayment,
    RequestServiceConfirmation,
    SampleList,
    OrderDetail,
    SampleDetail,
    DiagnosticResult,
    PDFScreen,
  },
  {
    initialRouteName: 'PDFScreen',
    ref: setNavigatorContainer,
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  } as NavigationStackRouterConfig,
);

const AppContainer = createAppContainer(AppStackNavigator);

export default () => {
  useEffect(bindDeepLinkingHandlers(Linking), []);

  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};
