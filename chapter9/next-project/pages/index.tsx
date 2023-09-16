import fetch from 'isomorphic-fetch';

const App = ({gists}: any) => (
	<ul>
		{gists.map((gist: any) => (
			<li key={gist.id}>{gist.description}</li>
		))}
	</ul>
);

App.getInitialProps = async () => {
	const url = 'https://api.github.com/users/gaearon/gists';
	const response = await fetch(url);
	const gists = await response.json();
	return {
		gists,
	};
};

export default App;
