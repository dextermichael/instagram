import React from 'react';
import { Flatlist, StlyeSheet, Text, View, Image } from 'react-native';

class Feed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo_feed: [0, 1, 2, 3, 4],
            refresh: false
        }
    }
    loadNew = () => {
        this.setState({
            refresh: true
        });
        this.setState({
            photo_feed: [5, 6, 7, 8, 9],
            refresh: false
        })
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 70, paddingTop: 30, backgroundColor: 'white', borderColor: 'lightgrey',
                    borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text>Feed</Text>
                </View>

                <Flatlist
                    refreshing={this.state.refresh}
                    onRefresh={this.loadNew}
                    data={this.state.photo_feed}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ flex: 1, backgroundColor: '#eee' }}
                    renderItem={({ item, index }) => (
                        <View key={index} style={{width: '100%',overflow:'hidden',marginBotton:5,justifyContent:'space-between',borderBottomWidth:1 }}>
                            <View>
                                <Text> Time ago</Text>
                                <Text> @Rusty </Text>
                            </View>

                            <View>
                                <Image
                                    source={{ uri: 'https://source.unsplash.com/random/500x' + Math.floor((Math.random() * 800) + 500) }}
                                    style={{ resizeMode: 'cover', width: '100%', height: 275 }}
                                />
                            </View>
                            <View>
                                <Text>Caption text here</Text>
                                <Text> View Comments</Text>
                            </View>
                        </View>
                    )} />

                <View>
                    <View>
                        <Text> Time ago</Text>
                        <Text> @Rusty </Text>
                    </View>

                    <View>
                        <Image
                            source={{ uri: 'https://source.unsplash.com/random/500x' + Math.floor((Math.random() * 800) + 500) }}
                            style={{ resizeMode: 'cover', width: '100%', height: 275 }}
                        />
                    </View>
                    <View>
                        <Text>Caption text here</Text>
                        <Text> View Comments</Text>

                    </View>
                </View>
            </View>
        )
    }
}

export default Feed; 