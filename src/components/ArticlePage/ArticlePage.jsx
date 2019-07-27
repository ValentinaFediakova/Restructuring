import React, { Component } from 'react'

import './ArticlePage.css'

import Menu from '../Menu/Menu'
import BlockTitle from '../BlockTitle/BlockTitle'
import Article from '../Article/Article'
import MyEditor from '../MyEditor/MyEditor'

import pic1 from '../App/img/ArticleImg/pic1.jpg'


class ArticlePage extends Component {
  constructor(props){
    super(props)
    const textArticle =
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'
    

    this.state = {
      Articles: [
        {
          imgArticle: pic1,
          dateArticle: "18",
          monthArticle: "oct",
          titleArticle: "Startup ideas needs to be funded",
          subtitleArticle: "By Khalil Uddin in Development",
          textArticle: textArticle,
        },
         {
          imgArticle: pic1,
          dateArticle: "19",
          monthArticle: "oct",
          titleArticle: "Startup ideas needs to be funded",
          subtitleArticle: "By Khalil Uddin in Development",
          textArticle: textArticle,
        }
      ]
    }
  }



  render() {

    const Articles = []
    // Articles.push(
    //   <Article
    //     imgArticle={pic1}
    //     dateArticle="18"
    //     monthArticle="oct"
    //     titleArticle="Startup ideas needs to be funded"
    //     subtitleArticle="By Khalil Uddin in Development"
    //     textArticle={textArticle}
    //   />
    // )

    for (let i = 0; i < this.state.Articles.length; i++){
      Articles.push(
        <Article
          imgArticle= {this.state.Articles[i].imgArticle}
          dateArticle={this.state.Articles[i].dateArticle}
          monthArticle={this.state.Articles[i].monthArticle}
          titleArticle={this.state.Articles[i].titleArticle}
          subtitleArticle={this.state.Articles[i].subtitleArticle}
          textArticle={this.state.Articles[i].textArticle}
        />
      )
    }

    let ArticlesMapTest = this.state.Articles.map((value, index) => {

      return (
        <Article
          imgArticle={value.imgArticle}
          dateArticle={value.dateArticle}
          monthArticle={value.monthArticle}
          titleArticle={value.titleArticle}
          subtitleArticle={value.subtitleArticle}
          textArticle={value.textArticle}
        />
      )
    })
    console.log(ArticlesMapTest)

    return (
      <div className="ArticlePage">
        <Menu color="red" />
        <BlockTitle
          title="Recent blog posts"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"
        />
        {ArticlesMapTest}
        {/*<Article
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
*/}
        <MyEditor />
      </div>
    )
  }
}

export default ArticlePage
