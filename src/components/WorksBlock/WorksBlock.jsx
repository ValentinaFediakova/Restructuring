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
      activeType: 'All',
      items: [
        {
          img: cardImg1,
          title: 'Dresser 1 Dresser',
          subtitle: 'Hair Hair',
          type: 'HairDresser',
        },
        {
          img: cardImg2,
          title: 'Dresser 2 Dresser',
          subtitle: 'Hair Hair',
          type: 'Dove',
        },
        {
          img: cardImg3,
          title: 'Dresser 3 Dresser',
          subtitle: 'Hair Hair',
          type: 'School',
        },
        {
          img: cardImg1,
          title: 'Dresser 1 Dresser',
          subtitle: 'Hair Hair',
          type: 'HairDresser',
        },
        {
          img: cardImg2,
          title: 'Dresser 2 Dresser',
          subtitle: 'Hair Hair',
          type: 'Dove',
        },
        {
          img: cardImg3,
          title: 'Dresser 3 Dresser',
          subtitle: 'Hair Hair',
          type: 'School',
        },
      ],
      types: ['All', 'HairDresser', 'Dove', 'School'],
    }
  }

  // записываем в активный тип нажатый тип, при этом перезапускается рендер, т.к. внесли изменения в стэйт (2)
  handleTypeSelect = type => {
    this.setState({ activeType: type })
  }

  // и тога меняется рендер (3)
  render() {
    // const items = this.state.items.map((value, index) => {
    //   return <WorkCard title={value.title} subtitle={value.subtitle} img={value.img} />
    // })
    const items = []
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].type === this.state.activeType || this.state.activeType === 'All') {
        items.push(
          <WorkCard
            title={this.state.items[i].title}
            subtitle={this.state.items[i].subtitle}
            img={this.state.items[i].img}
          />,
        )
      }
    }

    // выводим на экоан список типов (1)
    const types = this.state.types.map((value, index) => {
      let className = 'WorksBlock__type'
      if (value === this.state.activeType) {
        className = className + ' WorksBlock__type_active'
      }
      return (
        <div
          className={className}
          onClick={() => {
            this.handleTypeSelect(value)
          }}
        >
          {value}
        </div>
      )
    })

    return (
      <div className="WorksBlock">
        <div className="WorksBlock__types">{types}</div>

        {/* <div className="WorksBlock__type" onClick={() => {this.handleTypeSelect('All')}}>All</div>
        <div className="WorksBlock__type" onClick={() => {this.handleTypeSelect('HairDresser')}}>Hair Dresser</div>
        <div className="WorksBlock__type" onClick={() => {this.handleTypeSelect('Dove')}}>Dove</div> */}

        <div className="WorksBlock__items">{items}</div>
      </div>
    )
  }
}

export default WorksBlock
