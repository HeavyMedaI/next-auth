import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('renders logo', () => {
        render(<Page />)
        const img = screen.getByRole('img', { name: 'Next.js logo' })
        expect(img).toBeInTheDocument()
    })

    it('renders deploy button', () => {
        render(<Page />)
        const button = screen.getByText('Deploy now')
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')
    })
})