function Statistic({ title, children }) {
    return (
        <section className="statistic">
            <header>
                <h3 className="title">{ title }</h3>
            </header>
            { children }
        </section>
    )
}

export default Statistic;
