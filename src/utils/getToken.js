import AsyncStorage from '@react-native-community/async-storage';

export default function* getToken() {
  return yield AsyncStorage.getItem('token');
}
