import React from 'react';
import Container from '../../layout/Container';
import BlogCard from './BlogCard';

const BlogGrid = ({ blogs }) => {
    return (
        <section className="py-20 bg-gray-50/50">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default BlogGrid;
