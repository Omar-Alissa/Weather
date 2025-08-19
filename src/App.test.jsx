import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'


// Mocka fetchWeather så vi slipper riktiga API-anrop
vi.mock('./api', () => ({
  fetchWeather: vi.fn(async (city) => ({
    name: city,
    main: { temp: 20, temp_min: 15, temp_max: 25 },
    weather: [{ description: 'soligt' }],
  })),
}))

describe('Weather App', () => {
  it('Render-test: visar default-väder för Malmö vid start', async () => {
    render(<App />)
    // Vänta tills Malmö visas
  expect(await screen.findByText('Malmö')).toBeTruthy()
  expect(screen.getByText('20')).toBeTruthy()
  })

  it('Input-test: inputfältet finns och kan ändras', () => {
    render(<App />)
    const input = screen.getAllByPlaceholderText('Sök stad...')[0]
  expect(input).toBeTruthy()
    fireEvent.change(input, { target: { value: 'Stockholm' } })
    expect(input.value).toBe('Stockholm')
  })

  it('Sök-funktion: anropar väderhämtning vid sökning', async () => {
    render(<App />)
    const input = screen.getAllByPlaceholderText('Sök stad...')[0]
    fireEvent.change(input, { target: { value: 'Göteborg' } })
  fireEvent.click(screen.getAllByText('Sök')[0])
    // Vänta tills Göteborg visas
  expect(await screen.findByText('Göteborg')).toBeTruthy()
  })
})