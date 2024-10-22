import React from 'react';

const CardComponent = () => {
  return React.createElement(
    'div',
    { style: styles.card },
    React.createElement(
      'div',
      { style: styles.header },
      React.createElement('span', { style: styles.tag }, 'CAM-11')
    ),
    React.createElement('h2', { style: styles.title }, 'Conduct Security Vulnerability Assessment'),
    React.createElement(
      'div',
      { style: styles.footer },
      React.createElement(
        'div',
        { style: styles.featureRequest },
        React.createElement('span', { style: styles.icon }, '!'),
        React.createElement('span', { style: styles.label }, 'Feature Request')
      ),
      React.createElement('div', { style: styles.avatar }, React.createElement('img', { src: 'path-to-avatar.jpg', alt: 'User', style: styles.avatarImg }))
    )
  );
};

const styles = {
  card: {
    border: '1px solid #eee',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '600px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: '8px 12px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#333',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
  featureRequest: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#333',
  },
  icon: {
    backgroundColor: '#ccc',
    padding: '6px',
    borderRadius: '50%',
    marginRight: '10px',
    fontWeight: 'bold',
  },
  label: {
    color: '#333',
  },
  avatar: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  avatarImg: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
};

export default CardComponent;
