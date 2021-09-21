import mockApiCall from '../utils';

export const addMovieToApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};

export const deleteMovieToApi = async (id) => {
  const response = await mockApiCall(3000, id);
  return response;
};

export const updateMovieToApi = async (data) => {
  const response = await mockApiCall(3000, data);
  return response;
};

export const loadMoviesApi = async () => {
  const response = await mockApiCall(1000);
  return response;
};
