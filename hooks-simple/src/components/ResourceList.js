import React,{useState, useEffect} from 'react';
import axios from 'axios'


const useResources = (resource)=>{
    const [resources, setResources] = useState([]);
 
    const fetchResource= async (resource)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };
    
    useEffect(()=>{fetchResource(resource)},[resource]);

    return resources;
}

const ResourceList = (props)=>{

    const resources = useResources(props.resource);
   
    return (
        <ul>
            {resources.map(resource=><li key={resource.id}>{resource.title}</li>)}
        </ul>
    );
}

export default ResourceList;