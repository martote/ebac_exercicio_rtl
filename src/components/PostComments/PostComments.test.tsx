import { render, screen } from '@testing-library/react';
import App from './index';

test('deve renderizar dois comentários', () => {
render(<App />);

expect(screen.getByTestId('comentario-1')).toBeInTheDocument();
expect(screen.getByTestId('comentario-2')).toBeInTheDocument();
});
