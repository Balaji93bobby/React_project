function Todo({task}){

    function deleteHandler(){
        console.log('delete', task)
    }
    
    console.log(task)
    return(
        <div className="todo-item">
        <h2>{task}</h2>
        <button onClick={() => deleteHandler()}>Delete</button>
        </div>
    )
}

export default Todo;