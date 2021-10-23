const Input = ({word, setWord, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Input"></label>
            <input type="text"
                placeholder="Enter word"
                autoFocus
                value={word}
                onChange={(e) => setWord(e.target.value) }
            />
            <button type="submit">
                Check Word
            </button>
        </form>
    )
}

export default Input
