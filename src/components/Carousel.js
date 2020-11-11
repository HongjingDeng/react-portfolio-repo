
import React from 'react';

import Card from '../components/Card';

import bee from '../assets/images/vocabeeSS.jpg';
import hongjing from '../assets/images/Eat-Da-Burger.png';
import contractor from '../assets/images/billing.png';
import profile from '../assets/images/hongjing.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Hongjing',
                    subTitle: 'This is my page',
                    imgSrc: profile,
                    link: 'https://hongjingdeng.github.io/Portfolio/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Vocabee',
                    subTitle: 'A translation app for French lovers',
                    imgSrc: bee,
                    link: 'https://floating-earth-22602.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Eat-Da-Burger',
                    subTitle: 'Design your Burger',
                    imgSrc: hongjing,
                    link: 'https://fast-ridge-47708.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Billing App',
                    subTitle: 'A billing app for small bussiness',
                    imgSrc: contractor,
                    link: 'https://evening-plains-51887.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;