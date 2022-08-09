import React, {Component} from "react";
import All from './Tabs/search.json';
import Header from '../common/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../style/palette';
import speaker from '../../img/sound.png';

const ArticleLink = styled(Link)`
  font-size: 14px;
  color: #353535;
  list-style: none;
  border-radius: 2%;
  margin: 0.5%;
  background-color: ${palette.gray[2]};
  box-shadow: 4px 4px 4px 4px ${palette.gray[5]};
  padding: 16px;
  /* max-width: 550px; */
  width: 30%;
  min-width: 400px;
  @media (max-width: 1385px) {
    /* max-width: 550px; */
    width: 45%;
    min-width: 400px;
  }
  @media (max-width: 800px) {
    /* max-width: 550px; */
    width: 80%;
    min-width: 400px;
  }
  height: 80px;
  display: flex;
	justify-content: space-between;
`

const Thumbnail = styled.img`
  width: 93px;
  /* width: auto; */
  height: 100%;
  object-fit: contain;
`

const Title = styled.h2`
  margin-block: 2px;
  margin-left: 10px;
`
const ArticleListArea = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
`
const Logo = styled.div`
	display: flex;
  padding: 0.5rem;
  padding-right:0px;
	align-items: center;
  justify-content: center;
`;

class Search extends Component {
    constructor(){
        super();
    
        this.state={
          search:null
        };
      }
    
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }

    render(){
        //const styleInfo = {
          //  paddingRight:'10px'
        //}
        const elementStyle ={
            border:'solid',
            borderRadius:'10px',
            position:'relative',
            left:'2vh',
            height:'5vh',
            width:'50vh',
            marginTop:'2vh',
            marginBottom:'0vh'
          }
          
          const items = All.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.title.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map((data) => {
            return(
                <ArticleLink to={`/search/${data._id}`} style={{ textDecoration: 'none' }}>
                  <Thumbnail src={data.img} alt='img' />
                  <Title>{data.title}</Title>
                  <div className="speaker">
                    <img className='speakerImg' src={speaker} alt='speaker' />
                  </div>
                </ArticleLink>
              
            )
        })
        return(
            <div key="{items}">
                <Header />
                <Logo>
                  <div className='search'>
                    <input type="text" placeholder="원하는 제목을 검색하세요." style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
                  </div>
                </Logo>
                <ArticleListArea>
                  {items}
                </ArticleListArea>
                
            </div>
        )
    }

}
                

export default Search;