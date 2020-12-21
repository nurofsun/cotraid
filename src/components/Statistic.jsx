import Container from './Container.jsx';

function Statistic({title, children}) {
    return (
        <Container>
            <section className="statistic">
                <header>
                    <h2>{title}</h2>
                    <time></time>
                </header>
                {children}
            </section>
        </Container>
    )
}

export default Statistic;
