var React = require('react');
var ReactDOM = require('react-dom');
var YoutubeLive = require('youtube-live-react');

var App = React.createClass({
	render () {
		return (
			<div>
				<h2>Example using the Nasa's Youtube Channel</h2>
				<YoutubeLive
					iframeWidth={400}
					iframeHeight={300}
					maxResults={50}
          youtubeChannelId='UCLA_DiR1FfKNvjuUpBHmylQ'
          googleApiKey='AIzaSyCW48jzlVJbT4UEmt70Eyix9njr8Ni1rh0'/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
