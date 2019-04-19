import axios from 'axios';

const get = async url => {
  try {
    return await axios.get(url,{
      headers: {
        "Content-Type": "application/vnd.api+json",
        "Accept": "application/vnd.api+json;"
      },
      data:{}
    });
  } catch (e) {
    throw e;
  }
};


export default { get };