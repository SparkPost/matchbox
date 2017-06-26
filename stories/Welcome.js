import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';
import { Panel, TextField, Button } from '../src';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to Matchbox</h1>
        <p>
          This is a component dev environment for the SparkPost React WebUI.
        </p>
        <p>
          See these sample <a style={styles.link} href='#' onClick={this.showApp.bind(this)}>stories</a> for a component called <code style={styles.code}>Panel</code>.
        </p>
      </div>
    );
  }
}

export default storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Panel')}/>
  ))

  .add('demo', () => (
    <StoryContainer>
      <Panel accent title='Yo'>
        <Panel.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat saepe voluptate earum vitae tenetur minima optio veritatis modi ullam enim. Fugiat atque, commodi natus deserunt vel obcaecati cum maxime dolores.
        </Panel.Section>
        <Panel.Section>
          <Button primary size='large' onClick={action('hey')}>
            Submit
          </Button>
        </Panel.Section>
      </Panel>
    </StoryContainer>
  ));
