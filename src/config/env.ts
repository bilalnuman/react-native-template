// For now, we'll use a direct config object
// TODO: Set up proper environment variable handling once react-native-dotenv is working
export const config = {
  BASE_URL: 'https://testing.api.watchlytics.io/api',
};

// Alternative: If you want to use the .env file, uncomment this and install react-native-config
// import { BASE_URL } from '@env';
// export const config = {
//   BASE_URL,
// };