export default {
  //nama fungsinya mencarihobiberdasarkanid
  // id merupakan paramater yg akan dilempar oleh user
  mencarihobiberdasarkanid: state => id => {
    // pake metode find bawaan javascript
    //bakal balikin hobi sesuai id yg diinginkan
    return state.hobi.find(obj => {
      return obj.id == id;
    });
  },
  semuadata_toko: state => state.toko
};
