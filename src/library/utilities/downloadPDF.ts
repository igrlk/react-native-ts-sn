import RNHTMLtoPDF from 'react-native-html-to-pdf';

import { navigateTo } from 'library/utilities/navigator';

export default function dowloadPdf(options: any, screenName: string, backToScreen: string) {
    RNHTMLtoPDF.convert(options).then((file: any) => {
        navigateTo(screenName, { backToScreen });
    })
    .catch((err: Error) => {});
}