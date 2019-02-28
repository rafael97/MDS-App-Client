import axios from 'axios';

const get = async url => {
  try {
    return await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (e) {
    throw e;
  }
};


export default { get };