import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <ul>
    <li>
      <Link to="bmi">BMIと適正体重</Link>
    </li>
    <li>
      <Link to="nutrition">日本人の食事摂取基準</Link>
    </li>
    <li>
      <Link to="nutrition-graph">日本人の食事摂取基準 グラフ</Link>
    </li>
    <li>
      <Link to="nutrition-manager">栄養素管理(WIP)</Link>
    </li>
  </ul>
)
export default Home
