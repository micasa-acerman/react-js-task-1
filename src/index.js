import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: [
        { id: 1, name: 'Товар 1', price: 1000 },
        { id: 2, name: 'Товар 2', price: 2000 },
        { id: 3, name: 'Товар 3', price: 3000 },
        { id: 4, name: 'Товар 4', price: 4000 },
        { id: 5, name: 'Товар 5', price: 5000 }
      ]
    });
  }

  create = (id, name, price) => {
    this.setState({
      products: [...this.state.products, { id, name, price }]
    });
  };

  update = (id, name, price) => {
    this.setState(
      this.state.products.map(p => ({
        id,
        name: id === p.id ? name : p.name,
        price: id === p.id ? price : p.price
      }))
    );
  };

  delete = tid => {
    this.setState({
      products: this.state.products.filter(({ id }) => id !== tid)
    });
  };

  render() {
    return (
      <table className="products">
        <thead>
          <tr>
            <td className="products__th">#</td>
            <td className="products__th">Название</td>
            <td className="products__th">Цена</td>
            <td className="products__th">Действие</td>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(({ id, name, price }) => (
            <tr key={String(id)}>
              <td className="products__tr">{id}</td>
              <td className="products__tr">{name}</td>
              <td className="products__tr">{price}</td>
              <td className="products__tr">
                <button
                  className="products__btn"
                  onClick={() => this.delete(id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<Products />, document.getElementById('root'));
