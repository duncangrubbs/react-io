/**
 * @file Blog.js
 * @description React route for blog.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import WorkCard from '../components/WorkCard';

const Blog = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Portfolio" />
    <div className="blog__content">
       <Link to="/blog/oct012020">
        <WorkCard
          title="Modularize your API interface in Javascript"
          text="After building a lot frontends in React, I got sick of re-writing the same code for data fetching.
          I would have so many components making API calls, and in each one I would have a fetch
          statement in which I would have to set headers, options, do JSON parsing, and error handling.
          Avoiding duplicate code is a common programming best pratice, but it is too often ignored in the
          web development space. Javascript has come a long way even in the last few years, and there are now
          so many ways to modularize."
        />
      </Link>
    </div>
  </div>
);

export default Blog;
