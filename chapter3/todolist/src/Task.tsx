import { FC, useEffect, memo } from "react"
interface Props {
	id: number
	task: string
	handleDelete: (taskId: number) => void
}
const Task = ({ id, task, handleDelete }: Props) => {
	useEffect(() => {
		console.log("Rendering <Task />", task)
	})
	return (
		<li>
			{task} <button onClick={() => handleDelete(id)}>X</button>
		</li>
	)
}
export default memo(Task)
