import React, { Component } from 'react'
import { Tabs } from 'antd';
import server1 from '../../../assets/imgs/server1.png'
import server2 from '../../../assets/imgs/server2.png'
import server3 from '../../../assets/imgs/server3.png'
import './Service.less'

const { TabPane } = Tabs;

export default class Service extends Component {
    render() {
        return (
            <div>
                {/* 
                defaultActiveKey	初始化选中面板的 key，如果没有设置 activeKey	string	第一个面板
                key	对应 activeKey	string
                 */}
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="拍卖前" key="1">
                        <img src={server1} alt="" />
                    </TabPane>
                    <TabPane tab="拍卖中" key="2">
                        <img src={server2} alt="" />
                    </TabPane>
                    <TabPane tab="拍卖后" key="3">
                        <img src={server3} alt="" />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
