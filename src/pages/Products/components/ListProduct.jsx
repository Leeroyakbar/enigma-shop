import { Component } from "react";
import { IconBookmarks, IconShoppingCart } from "@tabler/icons-react";
import ItemProduct from "./ItemProduct";

export default class ListProduct extends Component {
  state = {
    itemCount: 0,
    savedCount: 0
  }

  handlerChangeSaveCount = (number) => {
    this.setState({
      savedCount: this.state.savedCount + number
    })
  }

  handlerChangeItemCount = (number) => {
    this.setState({
      itemCount: this.state.itemCount + number
    })
  }

  render() {
    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2">
          <div className="d-flex justify-content-between">
            <h2 className="my-2">List Product Enigma Shop</h2>
            <div className="d-flex justify-content-end column-gap-2">
              <p className="text-end my-2">
                <IconBookmarks />
                <span className="badge text-bg-secondary rounded-pill">{this.state.savedCount}</span>
              </p>
              <p className="text-end my-2">
                <IconShoppingCart />
                <span className="badge text-bg-primary rounded-pill">{this.state.itemCount}</span>
              </p>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-1 g-4">
            <div className="col">
              <ItemProduct
                image="https://wingscorp.com/wp-content/uploads/2021/11/IMG-20211201-WA0003.jpg"
                title="Ale Ale"
                price={2000}
                changeSaveCount = {this.handlerChangeSaveCount}
                changeItemCount = {this.handlerChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://i5.walmartimages.com/asr/f0391b25-d871-4b5f-9d12-827dff72bb24_1.9363f702dbf82f644b7dddd556350e4a.jpeg"
                title="Lays"
                price={16000}
                changeSaveCount = {this.handlerChangeSaveCount}
                changeItemCount = {this.handlerChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://media.istockphoto.com/id/1175975994/photo/top-view-mini-martabak-manis-cheese-and-chocolate-flavor.jpg?s=612x612&w=0&k=20&c=XeJcAQTvbjHO1MJ2AEn-GCy945qQxIbOR9Iv5Sw9aRc="
                title="Martabak Mini"
                price={6000}
                changeSaveCount = {this.handlerChangeSaveCount}
                changeItemCount = {this.handlerChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://cdn-brilio-net.akamaized.net/news/2020/04/07/181925/1204207-1000xauto-10-resep-jajanan-jadul-anak-sd-mudah-enak-sehat-bikin-nostalgia-200407v.jpg"
                title="Telur Gulung"
                price={1000}
                changeSaveCount = {this.handlerChangeSaveCount}
                changeItemCount = {this.handlerChangeItemCount}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

