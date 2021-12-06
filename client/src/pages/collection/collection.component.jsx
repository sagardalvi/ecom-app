import React, {useEffect} from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect, useSelector} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {firestore} from '../../firebase/firebase.utils';
import {useParams} from 'react-router-dom';

const CollectionPage = () => {


  useEffect(()=>{
    console.log('I am subscribing')
    const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log('snapshot',snapshot));
    return () => {
      //work as a clean up function
      console.log('I am ubsubscribing');
      unsubscribeFromCollections();
    }
  },[]);

  const {collectionId} = useParams();
  const collection = useSelector(selectCollection(collectionId))

  const {title, items} = collection;
  return (
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {
        items.map(item => <CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>
)}

export default CollectionPage;