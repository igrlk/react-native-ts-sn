import { getResultList } from '../getHTML';

describe('getResultList', () => {
	it('should get empty result list', () => {
		expect(getResultList([])).toBe('');
    });
    
    it('should get result list', () => {
        const html = `
    <tr>
      <td>
        <div style="font-size: 14px; color: #9E9E9E">Pathogen</div>
        <div style="font-size: 16px; color: #000">test</div>
      </td>
      <td>
        <div style=" width: 90px; padding: 5px 10px; border-radius: 4px; text-align: center; color: #FFF; margin: 0 0 0 auto; background-color: #FF8412;">
          Detected
        </div>
      </td>
      <tr>
        <td colspan="2">
          <div style="width: 100%; border-bottom: 1px solid #E1E1E1;"></div>
        </td>
      </tr>
    </tr>
  `;

		expect(getResultList([{ pathogen: 'test', result: true }])).toBe(html);
	});
});
