import getStatusColor from '../getStatusColor';

describe('getStatusColor', () => {
	it('should get ecolor for Sample requested', () => {
		expect(getStatusColor('Sample requested')).toStrictEqual({"backgroundColor": "#EA4640"});
    });

    it('should get ecolor for Sample Kit Shipped', () => {
		expect(getStatusColor('Sample Kit Shipped')).toStrictEqual({"backgroundColor": "#FF9A40"});
    });

    it('should get ecolor for sample Received', () => {
		expect(getStatusColor('sample Received')).toStrictEqual({"backgroundColor": "#0075FF"});
    });

    it('should get ecolor for Processing', () => {
		expect(getStatusColor('Processing')).toStrictEqual({"backgroundColor": "#9352DA"});
    });

    it('should get ecolor for Completed', () => {
		expect(getStatusColor('Completed')).toStrictEqual({"backgroundColor": "#29D98E"});
    });
});