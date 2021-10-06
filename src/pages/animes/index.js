import { useParams } from 'react-router';
import '../estilos.css'
import SearchInput from '../../components/SearchImput';
import { useEffect, useState } from 'react';

export default function PagesAnime() {
    const [info, setInfo] = useState({});
    const [text, setText] = useState('');
  
    useEffect(() => {
        if (text) {
            setInfo({});
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=12`)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response);
                })
        }
        
    },[text] );
    return(
        <div className='PagesAnime__h1'>
            <h1>Animes</h1>
            <SearchInput value={text} onChange={(search) => setText(search)} />
            {text && !info.data &&
                <samp>Carregando...</samp>
            }
            {info.data && (
                <ul className="PagesAnime__ul">
                    {info.data.map((anime) => (
                        <li key={anime.id}>
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                            {anime.attributes.canonicalTitle}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
