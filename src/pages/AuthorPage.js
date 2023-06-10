import Header from "../components/Header";

const AuthorPage = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the author : Toon</h1>
                    <img src="./img/author.jpg" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">Meet Toon, an avid coder and knowledge sharer. With a passion for all things coding, Toon's blog posts are a treasure trove of insights and experiences. From tackling complex algorithms to exploring new technologies, Toon's articles offer valuable guidance and inspiration to fellow coding enthusiasts. Join Toon's journey and expand your coding horizons!</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AuthorPage;