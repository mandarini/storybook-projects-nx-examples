import { render } from '@testing-library/react';

import Rlw1 from './rlw1';

describe('Rlw1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlw1 />);
    expect(baseElement).toBeTruthy();
  });
});
