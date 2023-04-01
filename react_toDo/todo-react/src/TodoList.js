import { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "./Context";
import Axios from 'axios';

export default function ToDoList() {
  // const [data, setData] = useContext(DataContext);



  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setData(response.data)
    });
  }, []);



  const deleteItem = (id) => {
    setData(data.filter((x) => x.id !== id));
  };
  const handleEnd = (result) => {
    if (!result.destination) return; //if no destination exits(cancel event), exit this function
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };


  const deleteElem = (id, js_id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    alert("Todo deleted!")
    window.location.reload()
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable
                  key={item.item}
                  draggableId={item.item.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      key={item.item}
                      className={
                        snapshot.isDragging ? "selected" : "not-selected"
                      }
                    >
                      {index + 1}. {item.item}
                      {/* <button onClick={() => deleteItem(item.id)} className="plusButton btn btn-success"> */}
                      <button onClick={() =>deleteElem(item._id, item.id)} className="plusButton btn btn-success">
                        ✓
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}