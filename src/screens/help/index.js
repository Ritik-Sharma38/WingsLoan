import React, {useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';
import { ListItem} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

const Help = () => {

    const { navigate } = useNavigation();
    const [refresh, setRefresh]=useState(true);
    const [AccountState, setAccState]=useState(false)
    const [PaymentState, setPayState]=useState(false)
    const [Accessibility, setAsbState]=useState(false)
    const [MoreQues, setMq]=useState(false)
    const [Other, setOther]=useState(false)
    const [SublistItems, setSubList]=useState([
        {title: 'Purchasing issue'},
        {title: 'Plans not activation'},
        {title: "Can't post loan request"},
        {title: 'Promotion error'}
    ])
    const [subListItem, setSubLlistItem]=useState([false,false,false,false])
    const goBack = () => {
        console.log('going back')
        navigate('HomeInitial')
    }

    const Search = () => {
        console.log("details confirmed")
    }

    const MainListSwitch = (val) => {
        switch(val){
            case 'Acc':{
                if(AccountState){
                    setAccState(false)
                }else{
                    setAccState(true)
                }
                break
            }
            case 'Pay':{
                if(PaymentState){
                    setPayState(false)
                }else{
                    setPayState(true)
                }
                break
            }
            case 'Asb':{
                if(Accessibility){
                    setAsbState(false)
                }else{
                    setAsbState(true)
                }
                break
            }
            case 'Mq':{
                if(MoreQues){
                    setMq(false)
                }else{
                    setMq(true)
                }
                break
            }
            case 'Other':{
                if(Other){
                    setOther(false)
                }else{
                    setOther(true)
                }
                break
            }
            default:
                break
        }
    }

    const SubListSwitch = (val, index) => {
        switch(val){
            case `${SublistItems[index].title}`:
                if(subListItem[index]){
                    subListItem[index]=false
                    setRefresh(true)
                }else{
                    subListItem[index]=true
                    setRefresh(false)
                }
            default:
                break
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Icon
                        size={25}
                        color='#000'
                        name='arrow-back-ios'
                        type='MaterialIcons'
                        onPress={()=> goBack()}
                    />
                    <Text style={styles.helpHeading}>
                        Help
                    </Text>
                </View>
                <ScrollView style={styles.body}>
                    <View style={{alignItems: 'center'}}>
                    <View style={styles.searchBar}>
                        <TextInput
                            placeholder="Search"
                            style={styles.SearchBarText}
                            onChangeText = { value => Search(value)}
                        />
                        <Icon
                            size={25}
                            color='#000'
                            name='search'
                            type='MaterialIcons'
                            onPress={()=> Search()}
                        />
                    </View>
                    <View style={styles.bodyImageContainer}>
                        <ImageBackground
                            source={require('../../assets/help.jpg')}
                            style={styles.bodyImage}
                            >
                            <View style={styles.imageOverlayContainer}>
                                <Text style={styles.name}>Hello Jon</Text>
                                <Text style={styles.helpLIne}>Still Need Help ? Call Us</Text>
                                <View style={styles.helpButtonsContainer}>
                                    <TouchableOpacity style={styles.emailButton}>
                                        <Icon
                                            size={15}
                                            color='#fff'
                                            name='search'
                                            type='MaterialIcons'
                                            onPress={()=> Search()}
                                        />
                                        <Text style={styles.emailText}>jonkare@gmail.com</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.phoneButton}>
                                        <Icon
                                            size={15}
                                            color='#000'
                                            name='phone'
                                            type='MaterialIcons'
                                            onPress={()=> Search()}
                                        />
                                        <Text>+60112345968</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.ListContainer}>
                        <ListItem onPress={()=> MainListSwitch('Acc')}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.mainListText}>Account</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        {AccountState && (
                            <View style={styles.subListContainer}>
                                {SublistItems.map((item, index)=>(
                                    <View key={index}>
                                        <ListItem onPress={()=> SubListSwitch(item.title,index)}>
                                            <ListItem.Content style={styles.sublistContent}>
                                                <Icon
                                                    size={15}
                                                    color='orange'
                                                    name='add'
                                                    type='MaterialIcons'
                                                    onPress={()=> Search()}
                                                />
                                                <ListItem.Title style={styles.subListText}>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                        {subListItem[index] && (
                                            <Text style={styles.subListContectText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}
                        <ListItem onPress={()=> MainListSwitch('Pay')}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.mainListText}>Payment</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        {PaymentState && (
                            <View style={styles.subListContainer}>
                                {SublistItems.map((item, index)=>(
                                    <View key={index}>
                                        <ListItem onPress={()=> SubListSwitch(item.title,index)}>
                                            <ListItem.Content style={styles.sublistContent}>
                                                <Icon
                                                    size={15}
                                                    color='orange'
                                                    name='add'
                                                    type='MaterialIcons'
                                                    onPress={()=> Search()}
                                                />
                                                <ListItem.Title style={styles.subListText}>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                        {subListItem[index] && (
                                            <Text style={styles.subListContectText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}
                        <ListItem onPress={()=> MainListSwitch('Asb')}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.mainListText}>Accessibility</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        {Accessibility && (
                            <View style={styles.subListContainer}>
                                {SublistItems.map((item, index)=>(
                                    <View key={index}>
                                        <ListItem onPress={()=> SubListSwitch(item.title,index)}>
                                            <ListItem.Content style={styles.sublistContent}>
                                                <Icon
                                                    size={15}
                                                    color='orange'
                                                    name='add'
                                                    type='MaterialIcons'
                                                    onPress={()=> Search()}
                                                />
                                                <ListItem.Title style={styles.subListText}>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                        {subListItem[index] && (
                                            <Text style={styles.subListContectText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}
                        <ListItem onPress={()=> MainListSwitch('Mq')}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.mainListText}>More questions</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        {MoreQues && (
                            <View style={styles.subListContainer}>
                                {SublistItems.map((item, index)=>(
                                    <View key={index}>
                                        <ListItem onPress={()=> SubListSwitch(item.title,index)}>
                                            <ListItem.Content style={styles.sublistContent}>
                                                <Icon
                                                    size={15}
                                                    color='orange'
                                                    name='add'
                                                    type='MaterialIcons'
                                                    onPress={()=> Search()}
                                                />
                                                <ListItem.Title style={styles.subListText}>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                        {subListItem[index] && (
                                            <Text style={styles.subListContectText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        )}
                 
                        <ListItem onPress={()=> MainListSwitch('Other')}>
                            <ListItem.Content>
                                <ListItem.Title style={styles.mainListText}>Others</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        {Other && (
                            <View style={styles.subListContainer}>
                                {SublistItems.map((item, index)=>(
                                    <View key={index}>
                                        <ListItem onPress={()=> SubListSwitch(item.title,index)}>
                                            <ListItem.Content style={styles.sublistContent}>
                                                <Icon
                                                    size={15}
                                                    color='orange'
                                                    name='add'
                                                    type='MaterialIcons'
                                                    onPress={()=> Search()}
                                                />
                                                <ListItem.Title style={styles.subListText}>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                        <View>
                                        {subListItem[index] && (
                                            <Text style={styles.subListContectText}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                            </Text>
                                        )}
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>  
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subContainer:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    header:{
        width: '100%',
        //height: '10%',
        padding: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    helpHeading: {
        width: '90%',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    body: {
        width: '100%',
        marginBottom: '3%'
    },
    searchBar: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)'
    },
    SearchBarText: {
        color:'rgba(0,0,0,0.5)'
    },  
    bodyImageContainer:{
        marginTop: '5%',
        width: '90%'
    },
    bodyImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.88,
    },    
    imageOverlayContainer: {
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 20
    },
    helpLIne: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    helpButtonsContainer: {
        width: '80%',
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    emailButton: {
        width: '48%',
        height: '150%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneButton: {
        backgroundColor: '#fff',
        width: '48%',
        height: '150%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailText: {
        color: '#fff'
    },
    ListContainer: {
        marginTop:'5%',
        width: '90%',
        height: '55%',
    },
    mainListText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    subListContainer:{
        alignSelf: 'center',
        width: '100%'
    },
    subListText:{
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)'
    },
    sublistContent:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    subListContectText: {
        color: 'rgba(0,0,0,0.5)',
        width: '80%',
        fontSize: 12
,        alignSelf: 'center',
    }
})
  