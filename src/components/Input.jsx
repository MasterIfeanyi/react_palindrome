const Input = ({word, setWord, handleSubmit, stop}) => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 intro text-center my-2">
                        <h5>Find out if a word is a palindrome</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="form-group col-12 mb-2">
                                <label htmlFor="Input"></label>
                                <input
                                    type="text"
                                    placeholder="Enter word"
                                    autoComplete="off"
                                    value={word}
                                    className="form-control search-bar"
                                    onChange={(e) => setWord(e.target.value)}
                                />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary form-button">
                                        Check Word
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>              
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <p className="h4" style={{ color: "red" }}>{stop}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Input
