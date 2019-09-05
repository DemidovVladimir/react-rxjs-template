import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;

        return (
            <Provider store={reduxStore}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)
