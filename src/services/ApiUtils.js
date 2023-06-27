import {BASE_URL} from '../utils/utils';

// Generic function for making API requests
export async function fetchAPI({payload, route, method}) {
  try {
    let headers = {
      'Content-type': 'application/json',
    };

    const response = await fetch(`${BASE_URL}/${route}`, {
      method,
      headers,
      body: payload,
    });

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log('>>>ApiUtils::Error<<<', error);
    throw error;
  }
}
