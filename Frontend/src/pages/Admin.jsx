import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/blogs', { title, description, image });
            alert('Blog post created successfully');
            setTitle('');
            setDescription('');
            setImage('');
        } catch (error) {
            console.error('Error creating blog post:', error);
            setError('Failed to create blog post');
        }
    };

    return (
        <div className="container mt-4">
            <h1>Create a New Blog Post</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default AdminPage;
