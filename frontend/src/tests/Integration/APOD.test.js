import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import AstronomyPictureOfDay from '../../pages/APOD/Apod';

jest.mock('axios');

describe('AstronomyPictureOfDay Component - Integration Tests', () => {
    test('renders AstronomyPictureOfDay component with data', async () => {
        const data = {
            title: 'Astronomy Picture of the Day',
            explanation: 'Some explanation',
            url: 'https://example.com/image.jpg'
        };

        axios.get.mockResolvedValue({ data });

        render(<AstronomyPictureOfDay />);
        
    });
});