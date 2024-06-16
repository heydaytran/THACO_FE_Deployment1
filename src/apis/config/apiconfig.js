var APIConfig = {
    // development: 'https://localhost:7195',
    development: 'http://thacowebsite-dev.eba-uxapazrj.us-east-1.elasticbeanstalk.com',
    domain: 'local:7195/'
}

export default APIConfig[process.env.NODE_ENV]