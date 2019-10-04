import React from "react";

class TodoItem extends React.Component {
    render() {
        return(
            <div>
                <input type="checkbox" />
                <p>Label</p>
            </div>
        )
    }
}

export default TodoItem;