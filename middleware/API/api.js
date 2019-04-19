import axios from '~/plugins/axios';

export const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

export const callAPI = (endpoint, options) => {
  const { method } = endpoint;
  const { data, params, responseType, headers, authToken, noCache, withCredentials } = options;
  const config = {
    method: method || METHOD.GET,
    timeout: 20000,
    url: endpoint.path,
    data: data || {},
    params: params || {},
    headers: headers || {},
    withCredentials: withCredentials || false,
    responseType
  };

  if (endpoint.authorization) {
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }

  if(noCache){
    config.params._ = Date.now();
  }

  return axios(config).then((res) => {
    if (res.status === 200 && res.headers['content-type'].startsWith('text/html;')) {
      return res.data;
    } else if (res.status === 200 && !res.headers['content-type'] === 'application/json') {
      return {...res.data};
    } else {
      return res.data;
    }
  }).catch((e) => {
    return Promise.reject(e);
  });
};
