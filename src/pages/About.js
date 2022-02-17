import React, { useEffect, useState } from 'react'

function About() {
    const [githubName, setgithubName] = useState('')
    const [githubBio, setgithubBio] = useState('')
    const [githubLocation, setgithubLocation] = useState('')


    useEffect(() => {
        fetch('https://api.github.com/users/dnsghd49')
            .then(res => res.json())
            .then(data => {
                setgithubName(data.name)
                setgithubBio(data.bio)
                setgithubLocation(data.location)
            })
    }, [])

    return (
        <div className="App">
            <h1>About ME</h1>
            <p>{githubName}</p>
            <p>{githubBio}</p>
            <p>{githubLocation}</p>
        </div>
    );
}

export default About