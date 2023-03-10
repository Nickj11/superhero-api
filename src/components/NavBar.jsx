import React  from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
export default function Navbar({ navBackground , query , setQuery , onSearch}) {

    
   
  return (
    <Container navBackground={navBackground}>
      <div className="search__bar">
        
        <FaSearch />
        <form onSubmit={e=>e.preventDefault()} >

        <input type="text" onChange={e=>setQuery(e.target.value)} placeholder="Artists, songs, or podcasts" />
          <button onClick={onSearch} type="submit" style={{display:"none"}} >Search</button>
        </form>
      </div>
     
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 22vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar {
    background: transparent;
    border: 1px solid aliceblue;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  img{
    border-radius:25px;
  }
  span{
    color:white; 
  }

  }
`;