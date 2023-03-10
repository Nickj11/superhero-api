import React from 'react'
import styled from 'styled-components';


function Login() {
    const handleClick = () => {
        const clientId= "cb5f1244fd11421091fbd04ac02fce08"; 
        const redirectUrl ="http://localhost:3000/spotify"
        const apiUrl = "https://accounts.spotify.com/authorize"; 
        const scope = [
            "streaming",
            "user-library-read",
            "user-library-modify",
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
          ];
        window.location.href=  `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
    }

    return (
        <Container>
            <img src="https://w0.peakpx.com/wallpaper/601/350/HD-wallpaper-spotify-black-white.jpg" alt="spotify-logo" />
            <button onClick={handleClick}>Log In Spotify</button>
            <span> Spotify Premium !!</span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    gap: 5rem;

    img {
    height: 20vh;
    }
    button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #1db954;
    color: black;
    border: none;
    font-size: 1rem;
    cursor: pointer;
      
    }
  
    span{
        color:white;
        font:bold;
    }
  a{
    color: #1db954;
    text-underline: none !important;
  }
`;

export default Login