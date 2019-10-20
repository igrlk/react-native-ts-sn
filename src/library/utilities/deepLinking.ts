import { LinkingStatic } from 'react-native';

import { navigateTo } from 'library/utilities/navigator';

export type DeepLinkingUrl = string | { url: string } | null;

export function handleDeepLinking(deepLinkingUrl: DeepLinkingUrl) {
  const url = getUrl(deepLinkingUrl);
  console.log(url);
  if (!url) return;

  if (url.indexOf('signup/') === 0) {
    navigateTo('SignUpAddPassword', getParamsForSignUp(url));
  }
}

export function getUrl(deepLinkingUrl: DeepLinkingUrl) {
  const preprocessedUrl = deepLinkingUrl
    ? typeof deepLinkingUrl === 'string'
      ? deepLinkingUrl
      : deepLinkingUrl.url
    : null;

  if (!preprocessedUrl) return;

  return preprocessedUrl.slice(14);
}

export function getParamsForSignUp(url: string) {
  const [signUpEmail, signUpKey] = url.slice(7).split('/');

  return { signUpKey, signUpEmail };
}

export function bindDeepLinkingHandlers(Linking: LinkingStatic) {
  return () => {
    Linking.getInitialURL().then(handleDeepLinking);
    Linking.addEventListener('url', handleDeepLinking);
  };
}
