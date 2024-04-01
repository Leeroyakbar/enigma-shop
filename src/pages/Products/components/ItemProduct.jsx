import { Component } from 'react';
import { IconHeart } from "@tabler/icons-react";
import { IconShoppingCart } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';

import PropTypes from 'prop-types';
export default class ItemProduct extends Component {
    state = {
        count: 0,
        check: false,
    }

    constructor(props){
        super(props);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }
   

    handleDecrement(){
        if(this.state.count === 0 ) return;
        this.setState({
            count : this.state.count - 1
        }, () => {
            this.props.changeItemCount(-1);
        })

        
    }

    handleIncrement(){
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.props.changeItemCount(1);
        })
        
    }

    checking = () =>{
        this.setState({
            check : !this.state.check
        }, () => {
            this.props.changeSaveCount(this.state.check ? 1 : -1);
        })

    }

  render() {

    const { image, title, price } = this.props

    return (
      <>
        <div className="card shadow-sm h-100">
          <img
            src={ image }
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />
          <div className="card-body">
            <h5 className="card-title fw-light">{ title }</h5>
            <p className="fw-bold">Rp. { price }</p>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center justify-content-start column-gap-4">
            {this.state.count > 0 && (
                <button onClick={this.handleDecrement} className="btn btn-primary">-</button>
            )}

              <span>{this.state.count > 0 ? this.state.count : <button onClick={this.handleIncrement} className='d-flex align-items-center column-gap-2 btn btn-primary'> <IconShoppingCart stroke={2} />Belanja sekarang</button>}</span>

            {this.state.count > 0 && (
                <button onClick={this.handleIncrement} className="btn btn-primary">+</button>
            )}
            </div>

            <button onClick={this.checking} className='btn btn-link'>
                {
                    this.state.check ? 
                    <i><IconHeartFilled/></i>
                    :
                    <i><IconHeart/></i>
                }
            </button>
            
            

          </div>
        </div>
      </>
    );
  }
}

ItemProduct.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changeSaveCount: PropTypes.func,
    changeItemCount: PropTypes.func
}

