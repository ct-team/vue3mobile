import Interfaces from './interfaces';
import { Http } from 'nat-plus';
export const testApi = (): any => {
  return Http.ajax({
    method: 'get',
    url: Interfaces.test,
  });
};
