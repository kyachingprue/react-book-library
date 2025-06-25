import { toast } from 'react-toastify';

const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = id => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exists. error notification
    toast.error('🦄 Already added Read List', {
      autoClose: 2000,
    });
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    // conform notification
    toast.success('🦄 Read List add successful', {
      autoClose: 2000,
    });
  }
};
export { addToStoredReadList, getStoredReadList };
