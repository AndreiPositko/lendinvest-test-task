import { render, fireEvent } from '@testing-library/react';
import InvestContent from './InvestContent';
import data from '../../mocks/currentLoans.json';

const mockData = data.loans[0];

const renderSetup = () => render(<InvestContent activeLoan={mockData} />);

describe('InvestContent Component', () => {
   it('should render loan title ', () => {
      const { getByText } = renderSetup();
      expect(getByText(mockData.title)).toBeTruthy();
   });

   it('should format date', () => {
      const { getByText } = renderSetup();
      expect(getByText(mockData.available)).toBeTruthy();
   });

   it('should format input value', () => {
      const { container, getByDisplayValue } = renderSetup();
      const input = container.querySelector('input');
      fireEvent.change(input, { target: { value: '100000' } });
      expect(getByDisplayValue('100,000')).toBeTruthy();
   });
});
