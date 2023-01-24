import App from "../app";

function Entry ({tasks, handleToggle}) {
    return (
        <div onClick={handleToggle} className={tasks.complete ? "text-decoration-line-through" : ""} id={tasks.key} >
           
            {/* <input className="form-check-input" type="checkbox" value="" id={tasks.key} onChange={handleToggle}></input> */}
            {tasks.task}
            
        </div>
    );
}

export default Entry