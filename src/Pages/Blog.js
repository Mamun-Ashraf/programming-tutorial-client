import React from 'react';

const Blog = () => {
    return (
        <div className='bg-info'>
            <div className='w-75 mx-auto mt-5'>

                <p className='fw-bold'>Q.1: what is cors?</p>

                <p>
                    <span className='fw-bold'>Ans.</span>
                    Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                </p>

                <p className='fw-bold'>Q.2: Why are you using firebase? What other options do you have to implement authentication?</p>

                <p>
                    <span className='fw-bold'>Ans.</span>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>

                <p className='fw-bold'>Q.3: How does the private route work?</p>

                <p>
                    <span className='fw-bold'>Ans.</span>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                </p>

                <p className='fw-bold'>Q.4: What is Node? How does Node work?</p>

                <p>
                    <span className='fw-bold'>Ans.</span>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                </p>

            </div>
        </div>
    );
};

export default Blog;