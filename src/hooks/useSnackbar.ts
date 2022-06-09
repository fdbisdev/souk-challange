import Snackbar from 'react-native-snackbar';
import { useCallback } from 'react';
import colors from '../utils/colors';

const useSnackbar = () => {
  const error = useCallback((text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.error,
      textColor: colors.white,
    });
  }, []);

  const success = useCallback((text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.success,
      textColor: colors.white,
    });
  }, []);

  return {
    error,
    success,
  };
};

export default useSnackbar;
