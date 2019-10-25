import React from 'react';
import * as navigator from 'library/utilities/navigator';

import downloadPDF from '../downloadPDF';

jest.mock('react-native-html-to-pdf', () => ({
	convert: jest.fn(() => Promise.resolve({}))
}))

import RNHTMLtoPDF from 'react-native-html-to-pdf';

describe('downloadPDF', () => {
	it('should check calling function downloadPDF', async(done) => {
        Object.defineProperty(navigator, 'navigateTo', { value: jest.fn() });

        await downloadPDF({}, '/testPath', 'SuccessfulDownloadScreen');
        expect(RNHTMLtoPDF.convert).toHaveBeenCalled();
        setTimeout(() => {
            expect(navigator.navigateTo).toHaveBeenCalledWith('/testPath', {'backToScreen': 'SuccessfulDownloadScreen'});
            done();
        },1)
	});
});
