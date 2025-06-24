import { toast } from "react-toastify";

const getStoredWishList = () => {
  //wish-list
  const storedWishListStr = localStorage.getItem('wish-list');
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  }
  else {
    return [];
  }
}

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    //already exists. show error notification
    toast.error('🦄 Already added Read List', {
      autoClose: 2000,
    });
  }
  else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wish-list', storedWishListStr)
    // conform notification
    toast.success('🦄 Read List add successful', {
      autoClose: 2000
    });
  }
}
export { addToStoredWishList, getStoredWishList };