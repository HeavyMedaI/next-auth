import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('renders logo', () => {
        render(<Page />)
        const img = screen.getByRole('img', { name: 'Next.js logo' })
        expect(img).toBeInTheDocument()
    })

    it('renders panel button', () => {
        render(<Page />)
        const button = screen.getByText('Panele Git')
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href', '/dashboard')
    })
})