import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from './BlogComponents/Blog';

describe('<Blog />', () => {
  let component;
  const likeMock = jest.fn();
  const deleteMock = jest.fn();

  const blog = {
    title: 'Testing',
    author: 'Benizio Mauritest',
    url: 'http:localhost:3000/blogs',
    user: 'maurirlz',
  };

  beforeEach(() => {
    component = render(
      <Blog deleteHandler={deleteMock} likeHandler={likeMock} blog={blog} />,
    );
  });

  test('When a blog is initially displayed, it only shows its title and author.', () => {
    expect(component.container).toHaveTextContent('Testing');
    expect(component.container).toHaveTextContent('Benizio Mauritest');
    expect(component.container).not.toHaveTextContent(
      'http:localhost:3000/blogs',
    );
    expect(component.container).not.toHaveTextContent('maurirlz');
  });

  test('When view blog button is clicked, component is correctly rendered', () => {
    const button = component.getByText('view blog');
    fireEvent.click(button);

    expect(component.container).toHaveTextContent('http:localhost:3000/blogs');
    expect(component.container).toHaveTextContent('Likes: ');
  });

  test('If like button is clicked twice, the event handler is called 2 times', () => {
    const button = component.getByText('view blog');
    fireEvent.click(button);

    const likeButton = component.getByText('Like');
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);

    expect(likeMock.mock.calls).toHaveLength(2);
  });
});
