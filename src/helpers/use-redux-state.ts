import { useSelector } from 'react-redux';
import { RootStateModel } from '../store/index.reducer'

export const useReduxState = () => {
    return useSelector((state: RootStateModel) => state);
};
