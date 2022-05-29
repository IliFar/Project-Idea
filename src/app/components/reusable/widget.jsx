import Restaurant from '@mui/icons-material/Restaurant';
import PermIdentity from "@mui/icons-material/PermIdentity";
import BarChart from '@mui/icons-material/BarChart';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import "./widget.css"
import Favorite from '@mui/icons-material/Favorite';
import Check from '@mui/icons-material/Check';



const Widget = ({type}) => {
    let data;

    switch (type) {
        case "statistics":
            data={
                title:"STATISTICS",
                link:"See Your Statistics",
                icon: (<BarChart className='icon'/>)
            }
            break;
        case "recipes":
            data={
                title:"RECIPES",
                link:"Go To Recipes",
                icon: (<Restaurant className='icon'/>)
            }
            break;
        case "personal-info":
            data={
                title:"PERSONAL INFORMATION",
                link:"Go To Personal Information",
                icon: (<PermIdentity className='icon'/>)
            }
            break;
        case "saved-recipes":
            data={
                title:"SAVED RECIPES",
                link:"Go To Saved Recipes",
                icon: (<Favorite className='icon'/>)
            }
            break;
        default:
            data={
                title:"ACHIEVEMENTS",
                link:"Go To Achievements",
                icon: (<Check className='icon'/>)
            }
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="vitamins">20 Vitamins</span>
            <span className="link">See your statistics</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUp />
                20%
            </div>
            <BarChart className='icon'/>
        </div>
    </div>
  )
}

export default Widget