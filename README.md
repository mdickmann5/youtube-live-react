# Youtube Live React

A simple, self-contained, React component that looks for live Youtube videos of a specific channel, and renders the corresponding iframe objects if there are any available.


## Demo & Examples

Live demo: [agustinaliagac.github.io/youtube-live-react](http://agustinaliagac.github.io/youtube-live-react/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use youtube-live-react is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/youtube-live-react.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install youtube-live-react --save
```


## Usage

Simply create the component, specifying your Google API Key, and the Youtube channel Id from where you want to look up live stream videos. The component will load the google client JS script, inject it into the DOM, specifically inside the body tag, and then perform the API query and render process. If you don't know the channel's id check [this](https://stackoverflow.com/a/16326307/3148273). Check the available properties you can override in the following section.

```
var React = require('react');
var ReactDOM = require('react-dom');
var YoutubeLive = require('youtube-live-react');

var App = React.createClass({
	render () {
		return (
			<div>
				<YoutubeLive
					iframeWidth={400}
					iframeHeight={300}
					maxResults={50}
          youtubeChannelId='{YOUTUBE_CHANNEL_ID}'
          googleApiKey='{YOUR_GOOGLE_API_KEY}'/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

```

### Properties

| Property | Description | Required | Default value |
| --- | --- | --- | --- |
| iframeWidth | The iframe's object width | No | '560'
| iframeHeight | The iframe's object height | No | '315'
| maxResults | Max results from API (max. is 50) | No | 10
| youtubeChannelId | Your channel's ID | Yes |
| googleApiKey | Your Google API Key | Yes |
| containerStyle | The main div style | No |
| itemContainerStyle | The style for each div containing an iframe | No |


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2017 Agustín Aliaga.
