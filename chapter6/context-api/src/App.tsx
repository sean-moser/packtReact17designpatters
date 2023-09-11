// Providers
import IssueProvider from "./contexts/Issue"
// Components
import Issues from "./compnents/Issues"
const App = () => {
	return (
		<IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
			<Issues />
		</IssueProvider>
	)
}
export default App
