import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // * Control del ciclo de vida del componente
    /* Cada vez que haya un cambio en tasks, se ejecutará el useEffect */
    useEffect(() => {
        console.log('Task has been modified.');
        setLoading(false);
        return () => {
            console.log('Task List component desapiaring.');
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de tarea...')
    }

    return (
        <div>
            <h1>
                Your tasks: 
            </h1>
            {/* //TODO: Aplicar un for para renderizar lista de tareas. */ }

            <TaskComponent task={defaultTask}></TaskComponent>

        </div>
    );
};





export default TaskListComponent;
