import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
// import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import {fetchCollectionsStartAsync, updateCollection} from '../../redux/shop/shop.action';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  /* unsubscribeFromSnapshot = null;
   state = {
     loading: true
   }

   componentDidMount() {
     const {updateCollections} = this.props;
     const collectionRef = firestore.collection('collections');

     // Promise pattern
     collectionRef.get().then(snapshot => {
         const collectionMap = convertCollectionSnapshotToMap(snapshot);
         updateCollections(collectionMap);
         this.setState({loading: false});
       })

     // Observable pattern
     // collectionRef.onSnapshot(async snapshot => {
     //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
     //   updateCollections(collectionMap);
     //   this.setState({loading: false});
     // })
   }
  */


  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match, loading, isCollectionsLoaded} = this.props;
    // const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Switch>
          {/*
          <Route exact path={`${match.path}`}
                 render={(props) => (<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
          <Route path={`${match.path}/:collectionId`}
                 render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>)}/>
          */}
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionMap) => dispatch(updateCollection(collectionMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);