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
    //already exists. Do not add it
    console.log(id, 'already exist in the wish list')
  }
  else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wish-list', storedWishListStr)
  }
}
export { addToStoredWishList, getStoredWishList };