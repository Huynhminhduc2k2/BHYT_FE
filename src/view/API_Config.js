import axios from 'axios';

export const API_URL_INSURANCE = 'https://localhost:7067/v1/api/Insurance';

export const API_URL_INSURANCE_REQUEST = 'https://localhost:7067/v1/api/InsuranceRequest';

export const API_URL_PAYMENT = 'https://localhost:7067/v2/api/Payment';

export const API_URL = 'https://localhost:7067/api/User';

axios.defaults.baseURL = 'https://localhost:7067/v1/api';
