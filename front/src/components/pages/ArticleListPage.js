import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
//import palette from '../../style/palette';
import Economy from './Tabs/Economy';
import Culture from './Tabs/Culture'
import Society from './Tabs/Society'
import Sports from './Tabs/Sports'
import Entertain from './Tabs/Entertain'
import Politics from './Tabs/Politics'
import It from './Tabs/IT'
import Search from '../../img/search.png';
import { Link } from 'react-router-dom';


const Tab = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  border: 1px;
  li {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    color: black;
    padding: 1rem;
    background-color: #dcdcdc;
  }
  li:active {
    background-color: gray;
    height: 100%;
  }
`
const Logo = styled.div`
	display: flex;
  padding: 0rem;
  padding-right:0px;
	align-items: center;
  justify-content: center;
`;

const ArticleListPage = ({article}) => {
  
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const { economy, culture, society, sports, entertain, politic, IT} = article;

  const tabList = {
    0: <Economy article={economy}/>,
    1: <Culture article={culture}/>,
    2: <Society article={society}/>,
    3: <Sports article={sports}/>,
    4: <Entertain article={entertain}/>,
    5: <Politics article={politic}/>,
    6: <It article={IT}/>
  }

  useEffect(() => {
    if(economy.length > 0) {
      setLoading(false);
    }
  }, [economy])

  if (loading) return <div>Loading...</div>

  const clickTab = (id) => {
    setActiveTab(id);
    console.log(activeTab);
  }




  return (
    <div>
      <Header />
      
      <Tab>
        <li onClick={() => clickTab(0)}>경제</li>
        <li onClick={() => clickTab(1)}>문화</li>
        <li onClick={() => clickTab(2)}>사회</li>
        <li onClick={() => clickTab(3)}>스포츠</li>
        <li onClick={() => clickTab(4)}>연예</li>
        <li onClick={() => clickTab(5)}>정치</li>
        <li onClick={() => clickTab(6)}>IT</li>
        <li>
          <Link to="/search">
          <Logo>
            <div className='Search'>
              <img className='SearchImg' src={Search} alt='Search' />
            </div>
          </Logo>
          </Link>
        </li>
      </Tab>
      <div>
        {tabList[activeTab]}
      </div>
    </div>
  );
};

export default ArticleListPage;