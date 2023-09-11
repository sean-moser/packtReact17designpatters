import { useState, FormEvent } from "react"

type Fields = {
	firstName: string
	lastName: string
}

const Uncontrolled = () => {
	const [values, setValues] = useState<Fields>({ firstName: "", lastName: "" })

	const handleChange = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(values)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="firstName" onChange={handleChange} />
			<input type="text" name="lastName" onChange={handleChange} />
			<button>Submit</button>
		</form>
	)
}
export default Uncontrolled
