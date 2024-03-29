import React from "react"
import MovieInterface from '../../../models/interfaces/Movie'
import { useNavigate } from 'react-router-dom'
import Title from '../../atoms/Title'
interface HighlightMovieInterface {
  movie: MovieInterface
}

function HighlightMovie({ movie }: HighlightMovieInterface) {
  const navigate = useNavigate()

  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }

  return (
    <div style={{
      backgroundImage: `url(${movie.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '94vh',
    }}>
      <div style={{
        background: 'linear-gradient(to top, #111 10%, transparent 90%',
        height: 'inherit',
      }}>
        <div style={{
          backgroundImage: 'linear-gradient(to right, #111 20%, transparent 80%',
          height: 'inherit',
        }}>

          <Title className="Tdestaque">{movie.title}</Title>
         <div className="Sdestaque">
          <div className="teste">
         <h2 className="titu">{movie.overview}</h2>
         </div>
          </div> 
          <br/>

          <button className="botao"
            onClick={() => sendToMovie(movie.id)}
          >Assistir</button>
        </div>
      </div>
    </div>
  )
}

export default HighlightMovie