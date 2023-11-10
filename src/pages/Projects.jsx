import { useState, useEffect } from 'react';
import Item from '../components/Item';
import DB from '../services/db';
import './styles/Projects.css';

export default function Projects(props) {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await new DB().getCreaciones();
      setCreaciones(data);
    };

    fetchData(); 

  }, []);

  useEffect(() => {
    console.log('content', creaciones);
  }, [creaciones]);

  return (
    <div>
      <h2 className='text' style={{ textAlign: 'center' }}>
        Aca estan mis proyectos papaaaa
      </h2>
      <p className='text' style={{ textAlign: 'center' }}>
        No son muchos pero es lo que hay
      </p>
      <section className='lista-items'>
        {creaciones?.map((creacion, index) => (
          <Item key={index} creacion={creacion} />
        ))}
      </section>
    </div>
  );
}
