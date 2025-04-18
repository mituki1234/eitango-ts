import '@/app/styles/top.css';


export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Eitango-go</h1>
        <div className="menu-list">
          <span>blog</span>
          <span>about</span>
        </div>
      </div>
      <div className="content">
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-title">Eitango-go</h1>
            <p className="hero-description">
              Eitango-go is a web application that helps you learn Japanese
              vocabulary and kanji using spaced repetition.
            </p>
            <div className='hero-button'>
              <a href="./" className='border-button'>kuwassik</a>
              <a href="./" className='fill-button'>hazimmer</a>
            </div>
          </div>
          <div className="hero-image">
          </div>
        </div>
      </div>
    </div>
  )
}