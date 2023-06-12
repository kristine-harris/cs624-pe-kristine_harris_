import React, {useState} from 'react';
import {Text, View} from 'react-native';

const Core Requirements = props => {
  const [IsCourse, setCourse] = useState(true);
  
  return(
    <View>
      <Text>CS 260 Full Stack Web Development - Python</Text>
      <Text>CS 242 Full Stack Web Development - TypeScript/JavaScript</Text>
      <Text>CS 142 Web Programming - TypeScript/JavaScript</Text>
      <Text>CS 416 Database Management</Text>
      <Text>CS 451 Frontend Web Development</Text>
      <Text>CS 475 Artificial Intelligence</Text>
      <Text>CS 504 Software Engineering</Text>
      <Text>CS 506 Programming for Computing</Text>
    </View>
 );
};
  );
};

const Course = props => {
  const [IsCourse, setCourse] = useState(true);
  
  return(
    <View>
       <Text>CS 495 Capstone I - Project Initiation</Text>
       <Text>DS 524 Data Management and Governance</Text>
       <Text>DS 520 Data Mining</Text>
    </View>
  );
};

export default Core Requirements;
