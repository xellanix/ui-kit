function App() {
    return (
        <main className="flex flex-col">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <h4 className="text-2xl font-bold">Heading 4</h4>
            <h5 className="text-xl font-bold">Heading 5</h5>
            <h6 className="text-lg font-bold">Heading 6</h6>
            <p className="text-lg">Paragraph</p>
            <span>Span</span>
            <a href="https://google.com" className="text-blue-500 underline">Google</a>
            <label htmlFor="id">Label</label>
            <button>Button</button>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </main>
    );
}

export default App;
