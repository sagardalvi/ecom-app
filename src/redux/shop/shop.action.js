import ShopActionTypes from './shop.types';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.utils';

export const updateCollection = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart());

    // Promise pattern
    collectionRef.get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))

  }
}
