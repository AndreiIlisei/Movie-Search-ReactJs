import styled from 'styled-components'

export const SMovies = styled.div` 

.movie {
    background-color: #4D4D4D;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    margin: 1rem;
    position: relative;
}

.movie-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.movie img {
    width: 100%;
    height: 450px;
}

.movie-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: white;
}

.movie-info h3 {
    margin: 0;
    font-size: 13px;
}

.tag {
    font-size: 15px;
    background-color: gray;
    padding: 0.5rem;
    border-radius: 5px;
}

.tag.green{
    color: #065632;
}

.tag.red{
    color: #800B0B;
}

.tag.orange{
    color: #D6972F;
}

.movie-overview{
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    max-height: 100%;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.4s ease-in-out;
}

.movie:hover .movie-overview {
    transform: translateY(0%);
}

.searchBar {
    margin: 1.5rem 0.5rem 0rem 0rem;
    color: #2c3e50;
    display: flex;
    justify-content: center;
}

form {
    transition: all 0.5s;
    top: 50%;
  }
  
  .finder {
    border: 1px solid #fff;
    background-color: #7E7E7E;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5);
  }
  
  .finder__outer {
    display: flex;
    width: 600px;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    box-shadow: inset 10px 10px 15px -10px #c3c3c3,
      inset -10px -10px 15px -10px #ffffff;
  }
  
  .finder__inner {
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
  }
  
  .finder__form {
    flex: 1;
    height: calc(100% + 3rem);
  }
  
  .finder__input {
    height: 2rem;
    border: none;
    background-color: white;
    outline: none;
    font-size: 1.5rem;
    letter-spacing: 0.75px;
    border-radius: 5px;
  }
  
  .finder__icon {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    transition: all 0.2s;
    box-shadow: inset 0 0 0 20px #292929;
    border-radius: 50%;
    position: relative;
  
    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  
    &:after {
      width: 10px;
      height: 10px;
      background-color: #292929;
      border: 3px solid #f6f5f0;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
      left: 0px;
      right: 0;
      margin: auto;
      border-radius: 50%;
  
      @at-root .active & {
        border-width: 10px;
        background-color: #f6f5f0;
      }
    }
  
    &:before {
      width: 4px;
      height: 13px;
      background-color: #f6f5f0;
      top: 50%;
      left: 20px;
      transform: rotateZ(45deg) translate(-50%, 0);
      transform-origin: 0 0;
      border-radius: 4px;
  
      @at-root .active & {
        background-color: #292929;
        width: 6px;
        transform: rotateZ(45deg) translate(-50%, 25px);
      }
    }
  
    @at-root .processing & {
      transform-origin: 50%;
      animation: spinner 0.3s linear infinite;
      animation-delay: 0.5s;
    }
  
    @at-root .active & {
      transform: translateY(-5px);
    }
  }
  
  @keyframes spinner {
    0% {
      transform: rotateZ(45deg);
    }
    100% {
      transform: rotateZ(405deg);
    }
  }


// @media only screen and (min-width: 1200px) {
//     .movie-container{
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//     }
// }

// @media only screen and (max-width: 1329px) {
//     .movie-container{
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//     }

//     .movie{
//         margin: 1rem 1.5rem;
//     }
// }
// ` 