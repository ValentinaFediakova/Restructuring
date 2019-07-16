import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'

import MainCard from '../MainCard/MainCard'
import Slider from '../Slider/Slider'
import Article from '../Article/Article'
import BlockTitle from '../BlockTitle/BlockTitle'
import WorksBlock from '../WorksBlock/WorksBlock'

import './Reset.css'
import './fonts/Fonts.css'
import './App.css'
import 'react-alice-carousel/lib/alice-carousel.css'

import pic1 from './img/ArticleImg/pic1.jpg'
import pic2 from './img/ArticleImg/pic2.jpg'

class App extends Component {
  render() {
    const textArticle =
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'
    const textArticle2 =
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis'

    return (
      <div>
        <MainCard />
        <BlockTitle title="About us" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet" />

        <div className="About-us__wrap">
          <div className="About-us__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </div>
          <div className="About-us__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </div>
        </div>

        <Slider />

        <BlockTitle title="Latest Works" />
        <WorksBlock />

        <BlockTitle
          title="Recent blog posts"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"
        />
        <Article
          imgArticle={pic1}
          dateArticle="18"
          monthArticle="oct"
          titleArticle="Startup ideas needs to be funded"
          subtitleArticle="By Khalil Uddin in Development"
          textArticle={textArticle}
        />

        <Article
          imgArticle={pic2}
          dateArticle="18"
          monthArticle="oct"
          titleArticle="User Interface Designing Elements "
          subtitleArticle="By Khalil Uddin in Development "
          textArticle={textArticle2}
        />
      </div>
    )
  }
}

export default App
