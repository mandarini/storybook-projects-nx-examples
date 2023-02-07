import { render } from '@testing-library/react';

import Six from './six';

describe('Six', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Six />);
    expect(baseElement).toBeTruthy();
  });
});
