import { render } from '@testing-library/react';
import LoansList from './LoansList';

describe('LoanItem Component', () => {
   it('render loan', () => {
      const { queryByTestId } = render(<LoansList />);
      const loans = queryByTestId('loans');
      expect(loans).toBeTruthy();
   });
});
