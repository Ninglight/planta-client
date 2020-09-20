import React from 'react'
import {hot} from "react-hot-loader"
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../../../routes'
import { Layout } from 'antd';
const { Content, Footer } = Layout;

import styles from './App.module.css';
import Header from '../Header';


const App = () => {


    return (
        <Layout className={styles.layout}>
            <Header />
            <Content className={styles.content}>
                <Router>
                    <main>
                        {routes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                    </main>
                </Router>
            </Content>
            <Footer className={styles.footer}>Plant Encyclopedia ©2020 Created by Valentin Bourreau with ❤️</Footer>
        </Layout>
    )


}

export default (hot(module)(App));