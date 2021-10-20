import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {updateCollection} from '../../redux/shop/shop.action';
import {connect} from 'react-redux';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap)
    })
  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionsOverview}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Switch>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionMap) => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);