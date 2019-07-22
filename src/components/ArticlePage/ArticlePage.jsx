import React, { Component } from 'react'

import './ArticlePage.css'

import Menu from '../Menu/Menu'
import BlockTitle from '../BlockTitle/BlockTitle'
import Article from '../Article/Article'

import pic1 from '../App/img/ArticleImg/pic1.jpg'
// import pic2 from '../App/img/ArticleImg/pic2.jpg'

class ArticlePage extends Component {
  render() {
    const textArticle =
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'
    // const textArticle2 =
    //   'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis'

    return (
      <div className="ArticlePage">
        <Menu color="red" />
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
          imgArticle={pic1}
          dateArticle="18"
          monthArticle="oct"
          titleArticle="Startup ideas needs to be funded"
          subtitleArticle="By Khalil Uddin in Development"
          textArticle={textArticle}
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
          imgArticle={pic1}
          dateArticle="18"
          monthArticle="oct"
          titleArticle="Startup ideas needs to be funded"
          subtitleArticle="By Khalil Uddin in Development"
          textArticle={textArticle}
        />
      </div>
    )
  }
}

export default ArticlePage
