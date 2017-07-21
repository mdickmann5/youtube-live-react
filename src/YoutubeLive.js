/* global gapi */
import React, { Component } from 'react';

const DEFAULT_IFRAME_WIDTH = '560';
const DEFAULT_IFRAME_HEIGHT = '315';

class YoutubeLive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoIdList: []
    };
  }

  componentDidMount(){
    const { maxResults, googleApiKey, youtubeChannelId } = this.props;

    if (!googleApiKey){
      console.error('You must provide a googleApiKey prop');
      return;
    }

    if (!youtubeChannelId){
      console.error('You must provide a youtubeChannelId prop');
      return;
    }

    this.performAPIQuery(maxResults, googleApiKey, youtubeChannelId);
  }

  performAPIQuery(maxResults = 10, googleApiKey, youtubeChannelId){

    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(googleApiKey);
        gapi.client.load('youtube', 'v3', () => {
          gapi.client.youtube.search.list({
                  part: 'snippet',
                  channelId: youtubeChannelId,
                  maxResults: maxResults,
                  type: 'video',
                  eventType: 'live'
              }).then( (response) => {
                let json = JSON.parse(response.body);

                if(json.pageInfo.totalResults === 0){
                  this.setState({
                    videoIdList: []
                  });
                } else {

                  let videoIdList = [];

                  for (let item of json.items){
                    videoIdList.push(item.id.videoId);
                  }

                  this.setState({
                    videoIdList: videoIdList
                  });
                }
              }, (reason) => {
                console.log('Error: ' + reason.result.error.message);
              });

        });
      });
    };

    document.body.appendChild(script);

  }

  render(){

      const { iframeWidth, iframeHeight, containerStyle, itemContainerStyle } = this.props;
      console.log(this.props);

      return(
        <div style={containerStyle}>
          {
            this.state.videoIdList.map((videoId) => {
              return <div style={itemContainerStyle}>
                          <iframe width={ iframeWidth ? iframeWidth : DEFAULT_IFRAME_WIDTH }
                             height={ iframeHeight ? iframeHeight : DEFAULT_IFRAME_HEIGHT }
                             src={"https://www.youtube.com/embed/" + videoId }
                             frameBorder="0"
                             allowFullScreen>
                           </iframe>
                    </div>
            })
          }
        </div>
      );
  }
}

export default YoutubeLive;
