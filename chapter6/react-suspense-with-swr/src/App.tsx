// Dependencies
import { SWRConfig } from "swr"
// Components
import PokeContainer from "./components/Pokemon/PokeContainer"
import fetcher from "./components/Pokemon/fetcher"
// Styles
import { StyledPokedex, StyledTitle } from "./components/Pokemon/Pokemon.styled"
const App = () => {
	return (
		<>
			<StyledTitle>Pokedex</StyledTitle>
			<SWRConfig
				value={{
					fetcher,
					suspense: true,
				}}
			>
				<StyledPokedex>
					<PokeContainer />
				</StyledPokedex>
			</SWRConfig>
		</>
	)
}
export default App
