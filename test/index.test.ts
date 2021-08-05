/**
 * @jest-environment jsdom
 */
import Index from '$/routes/index.svelte';
import { render, waitFor } from '@testing-library/svelte';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('Index page', () => {
	const server = setupServer(
		rest.get('/me.json', (req, res, ctx) => {
			return res(ctx.json({result: 'Foo'}))
		})
	)
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	test('Welcome the user', async () => {
		const { getByText } = render(Index);
		await waitFor(() => expect(getByText('Welcome to SvelteKit Foo')).toBeInTheDocument());
	})
})
