
import { SyntheticEvent, useState } from 'react';
import { geocode } from '../../utils/geocoding';
import { FormButton } from '../common/FormButton';
import './AddForm.css';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: 0,
    url: '',
    address: '',
  });

  const saveAnnouncement = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try{
      const {lat, lon} = await geocode(form.address);
      const addRes = await fetch('http://localhost:3001/announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          lat,
          lon,
        }),
      });
      const data = await addRes.json();

      setId(data.id);
    } finally{
      setLoading(false);
    }

    
  }

  const updateForm = (key: string, value: string | number) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  if(loading){
    return <h2>Announcement is being added...</h2>
  }

  if(id){
    return <h2>Your announcement has been added</h2>
  }

  return (
    <form className="AddForm" onSubmit={saveAnnouncement}>
      <h1>Add announcement</h1>
      <p>
        <label className="AddForm__Label">
          Name: <br />
          <input 
            className="AddForm__Input" 
            type="text" name="name" 
            required maxLength={99}
            value={form.name}
            onChange={e => updateForm('name', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label className="AddForm__Label">
          Description: <br />
          <textarea 
            className="AddForm__TextArea" 
            name="description" 
            maxLength={999} 
            value={form.description}
            onChange={e => updateForm('description', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label className="AddForm__Label">
          Price: <br />
          <input 
            className="AddForm__Input" 
            type="number" 
            name="price" 
            required maxLength={99}
            value={form.price}
            onChange={e => updateForm('price', Number(e.target.value))}
          /> <br />
          <small className="AddForm_FieldDescription">Leave 0, if you don't want to set the price</small>
        </label>
      </p>
      <p>
        <label className="AddForm__Label">
          URL: <br />
          <input
            className="AddForm__Input" 
            type="url" 
            name="url" 
            maxLength={99}
            value={form.url}
            onChange={e => updateForm('url', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label className="AddForm__Label">
          Address: <br />
          <input 
            className="AddForm__Input" 
            type="text" 
            name="address" 
            maxLength={99}
            value={form.address}
            onChange={e => updateForm('address', e.target.value)}
          />
        </label>
      </p>
      <FormButton text="Save"/>
    </form>
  )
}