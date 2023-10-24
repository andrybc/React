import React, {useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
   } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import {icons, SIZES} from '../../../constants'

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setactiveJobType] = useState('Full-Time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Andry </Text>
        <Text style={styles.welcomeMessage}> Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          >

          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        data = {jobTypes}
        renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={()=>{ 
                setactiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>
                {item}
              </Text>
            </TouchableOpacity>
        
        )}
          keyExtractor= {item => item}
          contentContainerStyle = {{ columnGap: SIZES.large}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome