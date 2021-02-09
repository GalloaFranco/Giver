import React, { useState, useEffect } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    const [items, setItem] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await data.json();
            setItem(jsonData);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div>
            <div>
                <input
                    className="input"
                    type="text"
                    placeholder="Give me.."
                    onChange={(event) => setSearch(event.target.value)}/>
                <button>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
            <div className="occurrences">
                {items
                    .filter((item) => {
                        if (item === []) {
                            return item;
                        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                        }
                    })
                    .map((item) => {
                        if (search !== '') {
                            return (
                                <div key={item.id}>
                                    <p>{item.name}</p>
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
};

export default SearchBox;
