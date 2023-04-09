import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export function apiGetMultiLang () {
    return request({
      url: './language/index.json',
      method: 'get'
    })
  }