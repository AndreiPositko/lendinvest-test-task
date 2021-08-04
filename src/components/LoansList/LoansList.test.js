import { render, fireEvent } from '@testing-library/react';
import LoansList from './LoansList';

describe('LoanItem Component', () => {
   it('render loan', () => {
      const { queryByTestId } = render(<LoansList />);
      const loans = queryByTestId('loans');
      expect(loans).toBeTruthy();
   });

   it('should open modal', () => {
      const { getByTestId, container } = render(<LoansList />);
      fireEvent.click(container.querySelectorAll('button')[0]);

      expect(getByTestId('InvestModal')).toBeTruthy();
   });
});
