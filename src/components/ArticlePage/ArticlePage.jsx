import React, { Component } from 'react'

import './ArticlePage.css'

import Menu from '../Menu/Menu'
import BlockTitle from '../BlockTitle/BlockTitle'
import Article from '../Article/Article'
import MyEditor from '../MyEditor/MyEditor'

import pic1 from '../App/img/ArticleImg/pic1.jpg'

class ArticlePage extends Component {
  constructor(props) {
    super(props)

    const textArticle = 
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'
    
    this.state = {
      Articles: [
        {
          imgArticle: pic1,
          dateArticle: '18',
          monthArticle: 'oct',
          titleArticle: 'Startup ideas needs to be funded',
          subtitleArticle: 'By Khalil Uddin in Development',
          textArticle: textArticle,
        },
        {
          imgArticle: pic1,
          dateArticle: '19',
          monthArticle: 'oct',
          titleArticle: 'Startup ideas needs to be funded',
          subtitleArticle: 'By Khalil Uddin in Development',
          textArticle: textArticle,
        },
      ],
    }
  }

  // handleBtnClickhangeTitle = () => {
  //   const newArticles = []
  //   for (let i = 0; i < this.state.Articles.length; i++) {
  //     const article = this.state.Articles[i]
  //     article.titleArticle = 'morj'
  //     newArticles.push(article)
  //   }
  //   this.setState({ Articles: newArticles })
  // }

  // handleBtnClickDatePlusOne = () => {
  //   const newData = []
  //   for (let i = 0; i < this.state.Articles.length; i++) {
  //     const Data = this.state.Articles[i]
  //     Data.dateArticle = parseInt(Data.dateArticle) + 1
  //     newData.push(this.state.Articles[i])
  //   }
  //   this.setState({ Articles: newData })
  // }

  // handleBtnClickPush = () => {
  //   const newArticle = []
  //   for (let i = 0; i < this.state.Articles.length; i++) {
  //     newArticle.push(this.state.Articles[i])
  //   }
  //   const textArticle =
  //   'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro'

  //   newArticle.push({
  //     imgArticle: pic1,
  //     dateArticle: '20',
  //     monthArticle: 'oct',
  //     titleArticle: 'Startup ideas needs to be funded',
  //     subtitleArticle: 'By Khalil Uddin in Development',
  //     textArticle: textArticle,
  //   })

  //   this.setState({ Articles: newArticle })
  // }

  // handleBtnClickInBegin = () => {
  //   const newArt = []
  //   for (let i = 0; i < this.state.Articles.length; i++) {
  //     newArt.push(this.state.Articles[i])
  //   }

  //   newArt.unshift({
  //     imgArticle: pic1,
  //     dateArticle: '10',
  //     monthArticle: 'oct',
  //     titleArticle: 'Startup ideas needs to be funded',
  //     subtitleArticle: 'By Khalil Uddin in Development',
  //     textArticle: 'textArticle',
  //   })

  //   this.setState({ Articles: newArt })
  //   console.log(newArt)
  // }

  handleBtnClickAddNewArticle = editorContent => {
    const newArt = []
    for (let i = 0; i < this.state.Articles.length; i++) {
      newArt.push(this.state.Articles[i])
    }

    newArt.push({
      imgArticle: pic1,
      dateArticle: '10',
      monthArticle: 'oct',
      titleArticle: 'Startup ideas needs to be funded',
      subtitleArticle: 'By Khalil Uddin in Development',
      editorContentArticle: editorContent,
    })

    this.setState({ Articles: newArt })
  }

  render() {
    const Articles = []

    for (let i = 0; i < this.state.Articles.length; i++) {
      Articles.push(
        <Article
          key={i}
          imgArticle={this.state.Articles[i].imgArticle}
          dateArticle={this.state.Articles[i].dateArticle}
          monthArticle={this.state.Articles[i].monthArticle}
          titleArticle={this.state.Articles[i].titleArticle}
          subtitleArticle={this.state.Articles[i].subtitleArticle}
          editorContentArticle={this.state.Articles[i].editorContentArticle}
          textArticle={this.state.Articles[i].textArticle}
        />,
      )
    }

    // let ArticlesMapTest = this.state.Articles.map((value, index) => {
    //   return (
    //     <Article
    //       imgArticle={value.imgArticle}
    //       dateArticle={value.dateArticle}
    //       monthArticle={value.monthArticle}
    //       titleArticle={value.titleArticle}
    //       subtitleArticle={value.subtitleArticle}
    //       textArticle={value.textArticle}
    //     />
    //   )
    // })

    return (
      <div className="ArticlePage">
        <Menu color="red" />
        <BlockTitle
          title="Recent blog posts"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"
        />
        {Articles}
        <div className='ArticlePage__buttons'>
          {/*<button onClick={this.handleBtnClickPush}>нажать</button>
          <button onClick={this.handleBtnClickhangeTitle}>другое название статьи</button>
          <button onClick={this.handleBtnClickInBegin}>добавь статью в начало</button>
          <button onClick={this.handleBtnClickDatePlusOne}>к числу прибавить 1</button>*/}
        </div>
        <MyEditor onAddNewArticle={this.handleBtnClickAddNewArticle} />
      </div>
    )
  }
}

export default ArticlePage
