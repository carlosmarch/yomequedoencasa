import React, { Component } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavItem from '../components/FavItem';
import LoadingSpinner from '../components/LoadingSpinner';
import {ReactComponent as UserIcon} from '../icons/User.svg';
import {ReactComponent as GridIcon} from '../icons/Grid.svg';
import {ReactComponent as ListIcon} from '../icons/List.svg';
import {ReactComponent as VerifiedIcon} from '../icons/Verified.svg';

const dataController = require('../controllers/dataController.js');
const recommendationController = require('../controllers/recommendationController.js');

//AIRTABLE HELPERS
const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);



class ExternalProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading   : true,
      renderItems : [],
      pubItems    : 0,
      likeItems   : 0,
      urlName     : decodeURIComponent(window.location.pathname.split("/").pop()),
      userData    : [],
      active      : 'grid' // grid || list
    };

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const table = base('contributors');
    const options = { filterByFormula: `{name} = '${this.state.urlName}'` }

    dataController.getAirtableRecords(table, options)
      .then( async (users) => {
        //USERS SHOULD BE ONLY ONE THAT MATCH WITH EMAIL
        const userData = users[0]?.fields;
        if (!userData?.items) {
          this.setState({ isLoading: false, renderItems: [] });//WHEN SESSION && NO ITEMS
        }
        if (!userData?.likes) userData.likes = []
        await recommendationController.hydrateUserPubItems(userData)

        this.setState({
          isLoading   : false,
          renderItems : userData?.items?.reverse(),
          pubItems    : userData?.items?.length ? userData?.items?.length : '0',
          likeItems   : userData?.likes?.length ? userData?.likes?.length : '0',
          userData    : userData
        });
      })
      .catch(err => {
        console.log( Error(err));
      });

  }
  handleLayuout = (e) => {
      const clicked = Object.assign({}, e).currentTarget.id
      if(this.state.active === clicked) {
          this.setState({active: ''});
      } else {
          this.setState({active: clicked})
     }
  }

  render() {

    return (
    <div className="app_wrapper profile_view">

      <Header />
      <div className="global">
          <div className="ArticlesGrid mt-l">
            <div className="container container-s">

              <div className="profile-user mt-xl">

                { this.state?.userData?.avatar ? (
                  <div className="profile-user-image-holder" style={{backgroundImage: `url(${this.state.userData.avatar})`}}></div>
                ) : (
                  <div className="profile-user-image-holder">
                    <UserIcon />
                  </div>
                )}

                <div className="profile-user-info">
                  <div className="profile-user-name"><h3 className="alt-font">{this.state.urlName}</h3></div>
                  <div className="profile-user-description"><p className="no-m flex-center">{this.state.pubItems > 50 ? <VerifiedIcon className="icon-20 icon-interaction mr-xxs" alt="Verified User"/> : ''} {this.state?.userData?.description}</p></div>
                  <div className="profile-user-data">
                    <span>{ this.state.likeItems } Likes</span>
                    <span>{ this.state.pubItems } Published</span>
                    <span className="text-disabled">0 Following</span>
                    <span className="text-disabled">0 Followers</span>
                  </div>
                </div>
              </div>

              <div className="mt-m mb-m">
              { this.state.isLoading
                  ? <LoadingSpinner />
                  : this.state.renderItems && this.state.renderItems.length > 0
                      ? (
                        <div className="tab-view">
                          <div className="tab-view-tabs mt-s mb-m listview">
                            <div className={`tab-view-tabs-item ${this.state.active === "list"? 'is-active': ''} `} id="list" onClick={this.handleLayuout}><ListIcon/></div>
                            <div className={`tab-view-tabs-item ${this.state.active === "grid"? 'is-active': ''} `} id="grid" onClick={this.handleLayuout}><GridIcon/></div>
                          </div>
                          <div className={`mb-m grid ${this.state.active}-layout`}>
                            { this.state.renderItems.map( (records, key) => <FavItem {...records} key={key} itemId={records.id} /> ) }
                          </div>
                        </div>
                      )
                      : <div className="empty-pubrecords">
                          <h6 className="grey mb-xxs">Nothing here...</h6>
                          <div>{this.state.urlName} has his profile still empty. Tell him to upload his favs!</div>
                        </div>
              }
              </div>

            </div>
        </div>
      </div>

      <Footer/>

    </div>
    );
  }
}

export default ExternalProfile;
