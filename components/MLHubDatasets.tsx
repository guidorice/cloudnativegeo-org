import { useEffect, useState } from 'react';

/**
 * A React component with an async call to an API. This is an antipattern for 
 * a Next.js site, normally would use getServerSideProps() or getStaticProps().
 * 
 */
export function MLHubDatasets() {

    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const fetchFromAPI = async () => {
            const res = await fetch('https://api.radiant.earth/mlhub/v1/datasets');
            const value = await res.json();
            const tmp = value.map(({ title }) => title);
            setDatasets(tmp);
        };
        fetchFromAPI();
    }, []);

    return (
        <div>
            <ol>
                {
                    datasets.map((title, i) => (
                        <li key={i}>
                            {title}
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
