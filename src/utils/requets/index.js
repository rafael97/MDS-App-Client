import axios from 'axios';

const get = async url => {
  try {
    return await axios.get('https://cors-anywhere.herokuapp.com/'+url);
  } catch (e) {
    throw e;
  }
};


export default { get };