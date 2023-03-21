import React, { Component } from 'react'
import Item from './Item'

export default class Table extends Component {
  render() {
    return (
      <div>
          <h2>表格渲染</h2>
          <table border='1' width={'300px'}>
              <thead>
                  <tr>
                      <th>周一</th>
                      <th>周二</th>
                      <th>周三</th>

                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td>语文</td>
                    <td>数学</td>
                    <td>英语</td>
                </tr>
                <tr>
                    <td>语文</td>
                    <td>数学</td>
                    <td>英语</td>
                </tr>
                <tr>
                    <Item/>
                </tr>
              </tbody>
          </table>
      </div>
    )
  }
}
