import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
  };

  state = {
    cards: this.props.cards || [],
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }
  render() {
    return (
      <>
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
          <div className={styles.cards}>
            {this.state.cards.map(({ key, ...cardProps }) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator
              text={settings.columnCreatorText}
              action={(title) => this.addCard(title)}
            />
          </div>
        </section>
      </>
    );
  }
}

export default Column;
