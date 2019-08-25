import React from 'react';
import UserProfile from "./UserProfile";
import Tracker from "./Tracker"
import Table from "./TableComponent"
import DynamicTable from './DynamicTable';
// import IssuesGrid from "./IssuesGrid"
export default () => (
<div>
  <div style=
  {{
    width: '940px',
    display: 'inline-block'
  }}>
  
  <section style =
  {{
    width: '400px', float:'left',
    padding: '10px'
  }}>
   <div style = {{width: '40%',
    color: '#fff',
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: '#0052CC',
    padding: '3px',
    textAlign: 'center',
    boxShadow: '0px 1px 4px 0px #0052CC'
    }}>User Profile</div>
     <div style =
  {{width: '400px', float:'left',
  borderRadius: '0px 10px 10px 10px',
  background: 'rgb(239, 243, 249)',
  padding: '22.5px',
  boxShadow: '0px 1px 4px 0px'
  }}>  
     <ul className="fa-ul">
      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>BPM | Applications | 23 Defects | 57 Applications | Issues</li>
      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>BPM | Applications | 23 Defects | 57 Applications | Issues</li>
      <li><span className="fa-li"><i className="fas fa-spinner fa-pulse"></i></span>BPM | Applications | 23 Defects | 57 Applications | Issues</li>
      <li><span className="fa-li"><i className="far fa-square"></i></span>BPM | Applications | 23 Defects | 57 Applications | Issues</li>
    </ul>
       </div>
  </section>
  <section style={{width: '400px', float:'right',
    borderRadius: '10px',
    background: 'rgb(239, 243, 249)',
    padding: '10px',
    boxShadow: '0px 1px 4px 0px'
  }}>
  <UserProfile />
  </section>
  </div>
  <div style = {{width: '100%',
    borderRadius: '10px',
    background: 'rgb(239, 243, 249)',
    marginLeft: '10px',
    boxShadow: '0px 1px 4px 0px',
    height: '50%'
  }}>
    <Tracker />
    <Table />
    <div style = {{width: '50%', display: 'inline-block',
        border: '1px groove #e5e9ef',
        position: 'absolute',
        margin: '15px'}}>
      <DynamicTable />
      </div>
    </div>
</div>
);
