import {useNavigate} from 'react-router';
import {useLocalStorage} from './useLocalStorage';

export const useHookFormSignIn = () => {
  const [_, setName] = useLocalStorage('name', '');

  const navigation = useNavigate();

  const handleSubmit = () => {
    navigation('/deck');
  };

  return {setName, handleSubmit};
};
