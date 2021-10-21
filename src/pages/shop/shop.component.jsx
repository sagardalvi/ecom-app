import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {updateCollection} from '../../redux/shop/shop.action';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true
  }

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({loading: false});
    })
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Switch>
          <Route exact path={`${match.path}`} render={(props)=> (<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
          <Route path={`${match.path}/:collectionId`} render={(props)=> (<CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>
        </Switch>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionMap) => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);