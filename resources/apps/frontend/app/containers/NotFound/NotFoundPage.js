import React, { Component } from 'react';

import Page from 'components/Layouts/Page';
import Container from 'components/Layouts/Container';

export default class NotFoundPage extends Component {
  render() {
    return (
      <Page title="404">
        <Container>
          <h1>Page Not Found</h1>
        </Container>
      </Page>
    );
  }
}
