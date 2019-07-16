import React, { Component } from 'react'
import './WorksBlock.css'
import WorkCard from '../WorkCard/WorkCard'
import cardImg1 from '../App/img/WorksBlock/img1.jpg'
import cardImg2 from '../App/img/WorksBlock/img2.jpg'
import cardImg3 from '../App/img/WorksBlock/img3.jpg'

class WorksBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          img: cardImg1,
          title: 'Dresser 1 Dresser',
          subtitle: 'Hair Hair',
        },
        {
          img: cardImg2,
          title: 'Dresser 2 Dresser',
          subtitle: 'Hair Hair',
        },
        {
          img: cardImg3,
          title: 'Dresser 3 Dresser',
          subtitle: 'Hair Hair',
        },
        {
          img: cardImg1,
          title: 'Dresser 1 Dresser',
          subtitle: 'Hair Hair',
        },
        {
          img: cardImg2,
          title: 'Dresser 2 Dresser',
          subtitle: 'Hair Hair',
        },
        {
          img: cardImg3,
          title: 'Dresser 3 Dresser',
          subtitle: 'Hair Hair',
        },
      ],
    }
  }

  render() {
    const items = this.state.items.map((value, index) => {
      return <WorkCard title={value.title} subtitle={value.subtitle} img={value.img} />
    })

    return <div className="WorksBlock">{items}</div>
  }
}

export default WorksBlock
