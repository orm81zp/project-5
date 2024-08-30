import axios from 'axios';

const client = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api',
  headers: { Accept: 'application/json' },
});

class Api {
  /**
   * Get Exercises By Filters
   *
   * @param {{ bodypart?: string, muscles?: string, equipment?: string, keyword?: string, page?: number, limit?: number }} params
   */
  static async getExercises(params = {}) {
    const { page = 1, limit = 10 } = params;

    const response = await client.get('/exercises', {
      params: { page, limit, ...params },
    });
    return response.data;
  }

  /**
   * Add Exercises's Rating
   *
   * @param {number} exerciseId
   * @param {{ rate: number, email: string, review: string }} data
   */
  static async addRateByExerciseId(exerciseId, data) {
    const response = await client.patch(
      `/exercises/${exerciseId}/rating`,
      data
    );
    return response.data;
  }

  /**
   * Get Exercise By Id
   *
   * @param {number} exerciseId
   */
  static async getExerciseById(exerciseId) {
    const response = await client.get(`/exercises/${exerciseId}`);
    return response.data;
  }

  /**
   * Get Filters Of Exercises
   *
   * @param {{ filter?: string, page?: number, limit?: number }} params
   */
  static async getFilters(params = {}) {
    const { page = 1 } = params;
    console.log('filters params:', params);
    const response = await client.get('/filters', {
      params: { page, ...params },
    });
    return response.data;
  }

  /**
   * Get Quote of the day
   */
  static async getQuote() {
    const response = await client.get('/quote');
    return response.data;
  }

  /**
   * Order subscription to new exercises
   *
   * @param {{ email: string }} data
   */
  static async addSubscription(data) {
    const response = await client.post('/subscription', data);
    return response.data;
  }
}

export default Api;
