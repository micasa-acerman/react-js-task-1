import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: 'React', url: '#' },
  { title: 'Typescript', url: '#' },
  { title: 'Redux', url: '#' },
  { title: 'SCSS', url: '#' },
  { title: 'Vue.Js', url: '#' }
];

const mainFeaturedPost = {
  title: 'Advanced Roadmap for React.js developers',
  description:
    'This roadmap will give you an idea about the landscape and guide you if you are confused about where to begin or what to learn next.',
  image: 'https://miro.medium.com/max/700/1*EXkscy4giJ6ec8TzftjcWw.png',
  imgText: 'main image description',
  linkText: 'Continue reading…'
};

const featuredPosts = [
  {
    title:
      '“If software engineering is in demand, why is it so hard to get a software engineering job?”',
    date: 'Dec 6',
    description: 'My response to an incredibly common question',
    image: 'https://miro.medium.com/max/1400/1*mYTQe3aP6IxOVqFiy2C6qw.jpeg',
    imageText: 'Image Text'
  },
  {
    title: 'Better Reusable React Components with the Overrides Pattern',
    date: 'Aug 14',
    description:
      'If you’ve been watching the React ecosystem the past few years, you’ve surely encountered one of the numerous open source reusable',
    image: 'https://miro.medium.com/max/1400/1*diwLtN_fG7497snU3bwZaw.png',
    imageText: 'Image Text'
  }
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [{ title: 'Dec 2021', url: '#' }, { title: 'Aug 2021', url: '#' }],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="JS Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="JS Blog" description="Blog about js" />
    </React.Fragment>
  );
}
