import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';

// La tarea será recibida por props y se usará en el HTML para mostrar ese objeto de tipo Task.
// A travéz de la props se pueden pasar variables de tipo primitivo, objetos, clases, funciones etc..
const TaskComponent = ( {task} ) => {

    console.log(task);
    // Cada vez que haya un cambio en task, se ejecutará useEffect().
    useEffect(() => {
        console.log('Task created.');
        return () => {
            console.log(`Task ${task.name} is going to unmount.`);
        };
    }, [task]);

    return (
        <div>
            <h2 className='task-name'>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ?  'COMPLETED' : 'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};


export default TaskComponent;

