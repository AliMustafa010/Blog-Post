import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs'); // Corrected API endpoint
                setBlogs(response.data.data);
                setFilteredBlogs(response.data.data);
            } catch (error) {
                setError('Error fetching data');
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        const filtered = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
    }, [searchTerm, blogs]);

    return (
        <div className="container my-5">
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search blogs by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Card
                                title={blog.title}
                                image={blog.image}
                                description={blog.description}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-12">No blogs available</div>
                )}
            </div>
        </div>
    );
};

export default Home;
