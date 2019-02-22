import axios from 'axios';

const get = async url => {
  try {
    return await axios.get(url);
  } catch (e) {
    throw e;
  }
};


export default { get };