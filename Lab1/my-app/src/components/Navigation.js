import react, { Component } from 'react';
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul className='navm'>
              <li className='logo'><img src='assets/images/logo.png'/></li>
                <li><a className='active' href="#home">Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
        </nav>
      </div>
    )
  }
}