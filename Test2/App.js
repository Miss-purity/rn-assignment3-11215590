import React from 'react';
import {StyleSheet, Text,View,Image,TextInput,FlatList,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const profileIcon =require('./assets/person.jpg');
const filterIcon =require('./assets/filterIcon.jpg');
const taskImage1 = require('./assets/image1.jpg');
const taskImage2 = require('./assets/image2.jpg');
//const taskImage2 = require('./assets/Task1.png');

// stylesheet of the screen created as a component
export default function App(){

  const taskCard =[
    {
      id:1,
      subTitle:'12 tasks',
      title: 'Exercise',
      image:taskImage2
    },
    {
      id:2,
      subTitle:'12 tasks',
      title: 'Study',
      image:taskImage1
    },
    {
      id:3,
      title: 'Code',
      subTitle:'12 tasks',
      image: taskImage2
    },
    {
      id:4,
      title: 'Cook',
      subTitle:'12 tasks',
      image:taskImage1
    },
    {
      id:5,
      title: 'Workout',
      subTitle:'12 tasks',
      image:taskImage2
    },
    {
      id:6,
      title: 'Read',
      subTitle:'12 tasks',
      image:taskImage1
    },
    {
      id:7,
      title: 'Host Meeting',
       subTitle:'12 tasks',
      image:taskImage2
    },
    {
      id:8,
      title: 'Take a walk',
       subTitle:'12 tasks',
      image:taskImage1
    }
  ]

  const onGoingTaskList=[
    {
      id:1,
      title:'Mobile App Development'
    },
    {
      id:2,
      title:'Web Development'
    },
    {
      id:3,
      title:'Trading'
    },
    
    {
      id:4,
      title:'Cooking'
    },
    
    {
      id:5,
      title:'Training'
    },
    
    {
      id:6,
      title:'Preach'
    },
    
    {
      id:7,
      title:'Watch football'
    },
    
    {
      id:8,
      title:'Take a nap'
    }

];
return (
  <View style={styles.container}>

    {/*Header of Screen */}
     <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.bigHeaderText}>
            Hello , Devs
          </Text>
          <Text style={styles.smallHeaderText}>
            14 tasks today
          </Text>
        </View>
        <View style ={styles.profileContainer}>
          <View style={styles.profileIconBackground}>
            <Image source={profileIcon} style={styles.profileIcon}/>
          </View>
        </View>
     </View>

     {/*Input and filter section*/}
     <View style={styles.inputFilterContainer}>
        {/*Input */}
        <View >
          <TextInput
            placeholder='Search'
            placeholderTextColor={'black'}
            style={styles.inputContainer}
          />
          <MaterialIcons name="search" size={24} color="black"  style={styles.search}/>
        </View>
        {/*Filter */}
        <View style={styles.filterBackground}>
          <Image source={filterIcon} style={styles.filter}/>
        </View>
     </View>

     {/*Categories section*/}

    <Text style={styles.categorySection} >
      Categories
    </Text>

    {/*Task cards*/}
     <View style={styles.taskCardContainer}>
      <FlatList
      data={taskCard}
      renderItem={({item})=>(
        <View style={styles.eachTaskCard}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskNumber}>{item.subTitle}</Text>
          <Image source={item.image} style={styles.taskImage}/>
        </View>
      )}
      horizontal
      keyExtractor={(item)=>item.id}
      style={styles.taskCardHolder}
      showsHorizontalScrollIndicator={false}
     />
     </View>

     {/*On goingTask session */}

     <Text style={styles.ongoingTaskSection}>Ongoing Task</Text>

     <View style={styles.holder}>
      <FlatList
       data={onGoingTaskList}
       renderItem={
        ({item})=>(
          <View style={styles.ongoingTaskContainer}>
            <Text style={styles.ongoingTaskName}>
              {item.title}
            </Text>
          </View>
        )
       }
       showsVerticalScrollIndicator={false}
       keyExtractor={(item)=>item.id}
       style={styles.ongoingTask}
      />
     </View>

  </View>
);
}



// Added the missing styles
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor:'#F7F0E8',
  padding: 20
  },
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 40
  },
  headerText: {
  flex: 1,
  },
  bigHeaderText: {
  fontSize: 32,
  fontWeight: 'bold'
  },
  smallHeaderText: {
  fontSize: 12,
  },
  profileContainer: {
  height:52,
  width:50,
  backgroundColor:'white',
  borderRadius:'50%',
  alignItems:'center',
  justifyContent:'center'
  },
  
  profileIcon: {
  width: 46,
  height: 45
  },
  inputFilterContainer: {
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
  width:'100%',
  justifyContent:'space-between',
  height:49
  },
  inputContainer: {
  flex: 1,
  backgroundColor: 'white',
  borderRadius: 14,
  padding: 10,
  paddingLeft: 40,
  width: 280,
  height:49
  },
  search: {
  position: 'absolute',
  left: 10,
  top: 15
  },
  filterBackground: {
  width: 50,
  height: 48,
  borderRadius: 14,
  backgroundColor:'#F0522F',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10
  },
  filter: {
  width: 34,
  height: 34
  },
  categorySection: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20
  },
  taskCardContainer: {
  marginTop: 10,
  height: 192
  },

  eachTaskCard: {
  width: 186,
  height: 192,
  backgroundColor: 'white',
  borderRadius: 15,
  paddingTop: 14,
  paddingLeft:16,
  marginRight: 10
  },
  taskTitle: {
  fontSize: 16,
  fontWeight: 'bold'
  },
  taskNumber: {
  fontSize: 12,
  },
  taskImage: {
  width: 131,
  height: 125,
  marginLeft:25

  },
  ongoingTaskSection: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20,
  },
  holder: {
  marginTop: 10,
  },
  ongoingTask: {
  flexGrow: 0
  },
  ongoingTaskContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 16,
    marginBottom: 10,
    height:128,
    justifyContent:'center',
    borderColor: '#e8d1ba',
    borderWidth: 2
  },
  ongoingTaskName: {
  fontSize: 16,
  fontWeight:'bold'
  }
  });

