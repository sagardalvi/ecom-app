import {takeLatest, call, put, all} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.action';


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas(){
  yield all([
    call(fetchCollectionsStart)
  ])
}

