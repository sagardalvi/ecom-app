import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import './shop.styles.scss';
import {fetchCollectionsStart, updateCollection} from '../../redux/shop/shop.action';
import {connect} from 'react-redux';
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({fetchCollectionsStart, match, loading, isCollectionsLoaded}) => {

  useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart]);

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

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionMap) => dispatch(updateCollection(collectionMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);